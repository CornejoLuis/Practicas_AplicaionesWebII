import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AppointmentsService } from '../appointments/appointments.service';
import { Appointment } from '../appointments/appointment.entity';

@WebSocketGateway({ cors: true })
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users = new Map<string, { sockets: Set<string> }>();

  constructor(private readonly appointmentsService: AppointmentsService) {}

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;

    if (!this.users.has(userId)) {
      this.users.set(userId, { sockets: new Set() });
    }

    const user = this.users.get(userId);
    if (user.sockets.size >= 3) {
      client.disconnect();
      return;
    }

    user.sockets.add(client.id);
  }

  handleDisconnect(client: Socket) {
    const userId = client.handshake.query.userId as string;
    const user = this.users.get(userId);

    if (user) {
      user.sockets.delete(client.id);
      if (user.sockets.size === 0) {
        this.users.delete(userId);
      }
    }
  }

  @SubscribeMessage('agregar-transaccion')
  async handleAddTransaction(client: Socket, payload: Partial<Appointment>) {
    const appointment = await this.appointmentsService.create(payload);
    this.server.emit('transaccion-agregada', appointment);
  }

  @SubscribeMessage('consultar-activos')
  async handleGetActiveTransactions(client: Socket) {
    const appointments = await this.appointmentsService.findAll();
    client.emit('activos-consultados', appointments);
  }
}
