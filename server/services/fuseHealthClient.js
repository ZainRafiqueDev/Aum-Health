// Single wiring point for the FuseHealth telehealth API.
//
// The client (site owner) does not have FuseHealth API credentials yet.
// Once they do: set FUSEHEALTH_BASE_URL and FUSEHEALTH_API_KEY in server/.env,
// then replace the mock bodies below with real fetch() calls to FuseHealth's
// endpoints. Nothing outside this file needs to change — routes/*.js only
// ever call the functions exported here.

const BASE_URL = process.env.FUSEHEALTH_BASE_URL;
const API_KEY = process.env.FUSEHEALTH_API_KEY;

function isConfigured() {
  return Boolean(BASE_URL && API_KEY);
}

async function submitIntake(payload) {
  if (!isConfigured()) {
    console.log('[fuseHealthClient] MOCK submitIntake payload:', payload);
    return { status: 'mock', received: true, payload };
  }

  const res = await fetch(`${BASE_URL}/intake`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function startCheckout(payload) {
  if (!isConfigured()) {
    console.log('[fuseHealthClient] MOCK startCheckout payload:', payload);
    return { status: 'mock', checkoutUrl: null, payload };
  }

  const res = await fetch(`${BASE_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function getPatientPortalData(patientId) {
  if (!isConfigured()) {
    console.log('[fuseHealthClient] MOCK getPatientPortalData for patientId:', patientId);
    return { status: 'mock', patientId, records: [] };
  }

  const res = await fetch(`${BASE_URL}/patients/${patientId}/portal`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return res.json();
}

export const fuseHealthClient = { isConfigured, submitIntake, startCheckout, getPatientPortalData };
