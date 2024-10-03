"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRoute_1 = __importDefault(require("./routes/products/productsRoute"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 8001;
const URI = process.env.MONGODB_URI;
mongoose_1.default.connect(URI).then(() => {
    console.log('\t✅Database Connected!');
});
app.use('/products', productsRoute_1.default);
app.listen(PORT, () => {
    const message = [`\n\t✅\u001b[1m Server is Running at\u001b[0m`, `\x1b[34mhttp://localhost:${PORT}\x1b[0m\n`];
    console.log(...message);
});
