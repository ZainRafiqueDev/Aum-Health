import { Router } from 'express';
import { fuseHealthClient } from '../services/fuseHealthClient.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const result = await fuseHealthClient.startCheckout(req.body);
    res.json(result);
  } catch (err) {
    res.status(502).json({ error: 'Failed to start checkout', detail: err.message });
  }
});

export default router;
