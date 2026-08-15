import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import intakeRouter from './routes/intake.js';
import checkoutRouter from './routes/checkout.js';
import patientPortalRouter from './routes/patientPortal.js';
import { fuseHealthClient } from './services/fuseHealthClient.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, fuseHealthConfigured: fuseHealthClient.isConfigured() });
});

app.use('/api/intake', intakeRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/patient-portal', patientPortalRouter);

app.listen(PORT, () => {
  console.log(`AUM Health server listening on http://localhost:${PORT}`);
  console.log(
    fuseHealthClient.isConfigured()
      ? 'FuseHealth API configured — live calls will be made.'
      : 'FuseHealth API not configured — routes will return mocked responses.'
  );
});
