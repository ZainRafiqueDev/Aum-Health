import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle.js';
import LegalPage from './components/LegalPage.jsx';
import {
  termsContent,
  privacyPolicyContent,
  privacyPracticesContent,
  refundPolicyContent,
  medicalConsentContent,
  californiaResidentsContent,
  billOfRightsContent,
} from './content/legal-content.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms-and-conditions" element={<LegalPage content={termsContent} />} />
        <Route path="/privacy-policy" element={<LegalPage content={privacyPolicyContent} />} />
        <Route path="/privacy-practices" element={<LegalPage content={privacyPracticesContent} />} />
        <Route path="/refund-policy" element={<LegalPage content={refundPolicyContent} />} />
        <Route path="/medical-consent" element={<LegalPage content={medicalConsentContent} />} />
        <Route path="/california-residents" element={<LegalPage content={californiaResidentsContent} />} />
        <Route path="/bill-of-rights" element={<LegalPage content={billOfRightsContent} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
