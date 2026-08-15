import { Router } from 'express';
import { fuseHealthClient } from '../services/fuseHealthClient.js';

const router = Router();

router.get('/:patientId', async (req, res) => {
  try {
    const result = await fuseHealthClient.getPatientPortalData(req.params.patientId);
    res.json(result);
  } catch (err) {
    res.status(502).json({ error: 'Failed to load patient portal data', detail: err.message });
  }
});

export default router;
