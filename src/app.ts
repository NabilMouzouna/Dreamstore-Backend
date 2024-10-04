import express, { Express } from 'express';
import productRoute from './routes/products/productsRoute';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
const app: Express = express();
config();
app.use(express.json());
app.use(cors({
  origin : "*" //TODO : must be replaced with the original frontend server url only
}))
const PORT = process.env.PORT || 8001;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI!).then(() => {
  console.log('\t✅Database Connected!');
});
app.use('/products', productRoute);

app.listen(PORT, () => {
  const message = [`\n\t✅\u001b[1m Server is Running at\u001b[0m`, `\x1b[34mhttp://localhost:${PORT}\x1b[0m\n`];
  console.log(...message);
});
