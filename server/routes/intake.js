import { Router } from 'express';
import { fuseHealthClient } from '../services/fuseHealthClient.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const result = await fuseHealthClient.submitIntake(req.body);
    res.json(result);
  } catch (err) {
    res.status(502).json({ error: 'Failed to submit intake', detail: err.message });
  }
});

export default router;
