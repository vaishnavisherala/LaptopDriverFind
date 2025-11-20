import express from 'express';
import cors from 'cors';
import driversRouter from './routes/drivers';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.json({ ok: true, service: 'Laptop Drivers API' }));
app.use('/api/drivers', driversRouter);
export default app;
