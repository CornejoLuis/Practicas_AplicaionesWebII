"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const doctor_routes_1 = __importDefault(require("./routes/doctor.routes"));
const paciente_routes_1 = __importDefault(require("./routes/paciente.routes"));
const cita_routes_1 = __importDefault(require("./routes/cita.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api', doctor_routes_1.default);
app.use('/api', paciente_routes_1.default);
app.use('/api', cita_routes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
