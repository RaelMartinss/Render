"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
        where: {
            username,
            password // ⚠️ Em produção, use hash de senha!
        }
    });
    if (user) {
        res.status(200).json({ message: "Login successful" });
    }
    else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
