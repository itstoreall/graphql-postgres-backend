import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serverHandler } from './service/serverHandler';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => serverHandler(PORT, app));
