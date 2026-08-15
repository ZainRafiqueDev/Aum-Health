
export const brand = {
  name: 'AUM Health',
  tagline: 'One Brand. Complete Care.',
};

export const nav = {
 
  popupLinks: [
    { label: 'Weight Loss', href: '#weight-loss' },
    { label: 'Supplements', href: '#supplements' },
    { label: 'Sexual Health', href: '#sexual-health' },
    { label: "Men's Health", href: '#mens-health' },
    { label: 'Peptides & Longevity', href: '#peptides' },
    { label: "Women's Health", href: '#womens-health' },
    { label: 'Hair Regrowth', href: '#hair' },
    { label: 'Skincare', href: '#skincare' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  popupFooterLinks: [
    { label: 'Contact Support', href: '#' },
    { label: 'About Us', href: '#' },
  ],
};

export const hero = {
  eyebrowStat: { prefix: 'Join', highlight: '10,000+', suffix: 'AUM Health patients' },
  headingParts: ['Healthcare, ', { highlight: 'redefined' }, ' for real life.'],
  subhead:
    'We provide medical care online  simple, direct, and led by licensed providers. No waiting rooms. No unnecessary steps. Just care that works.',
  categories: [
    {
      key: 'weight-loss',
      href: '#weight-loss',
      label: 'Weight Loss',
      style: 'product',
      tint: '#e3f2e8',
      image: '/assets/products/weightloss1.avif',
    },
    {
      key: 'sexual-health',
      href: '#sexual-health',
      label: 'Sexual Health',
      style: 'product',
      tint: '#e6edf5',
      image: '/assets/products/sex1.jpg',
    },
    {
      key: 'mens-health',
      href: '#mens-health',
      label: "Men's Health",
      style: 'photo',
      tint: '#efe6d8',
    
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=400&auto=format&fit=crop',
    },
    
    {
      key: 'womens-health',
      href: '#womens-health',
      label: "Women's Health",
      style: 'photo',
      tint: '#f6e9ee',
     
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    },
  ],
  badges: [
    { label: 'Licensed Medical Providers', icon: 'stethoscope' },
    { label: '100% Online', icon: 'cursor' },
    { label: 'Clear Pricing', icon: 'dollar' },
    { label: 'Shipped to Your Door', icon: 'truck' },
  ],
};

export const glpSection = {
  id: 'weight-loss',
  eyebrow: 'Doctor-Guided GLP-1 Care',
  headingParts: ['Weight loss ', { highlight: 'made easy' }, ' with personalized care'],
  productImage: '/assets/weightlosssection/weight-loss-vial.jpeg',
  checklistCaption: 'Everything you need  included:',
  checklist: [
    'Prescription to fast, effective GLP-1',
    '1:1 physician guidance',
    'Free dietician visits & care coaching included*',
    '24/7 support',
    'Fast & discreet shipping',
  ],
  collageImages: [
    { src: '/assets/weightlosssection/weight-loss-1.jpeg', alt: 'AUM Health weight loss patient staying active at home' },
    { src: '/assets/weightlosssection/weight-loss-2.jpeg', alt: 'AUM Health weight loss patient living life on the go' },
  ],
  secondaryHeading: 'A smarter approach to weight loss, built around you',
  secondaryBody:
    'Find the right GLP-1 medication with the confidence that comes from knowing it is doctor-approved and budget-friendly.',
  cta: { label: 'Get Started', href: '#get-started' },
  features: [
    {
      title: 'Everything, all in one place',
      body: 'Track your progress, check in with your provider, and manage your care in your all-in-one patient portal.',
      image: '/assets/glp/portal-app-photo.svg',
    },
    {
      title: 'Unlimited 24/7 support',
      body: 'Medical support continues throughout your care, whenever you need it.',
      image: 'https://images.unsplash.com/photo-1766066014237-00645c74e9c6?q=80&w=200&auto=format&fit=crop',
    },
  ],
  disclaimer:
    'Prescriptions are issued only after an online consultation with an independent licensed provider. Compound medications are dispensed by state-licensed pharmacies but are not FDA approved.',
};

export const supplementSection = {
  id: 'supplements',
  tint: 'supplements',
  eyebrow: 'Purpose-Driven Supplementation',
  headingParts: ['Supplements with the ', { highlight: 'power to boost' }, ' real results'],
  productImage: '/assets/supplementsection/supplements-family.jpeg',
  checklistCaption: 'What better support looks like',
  checklist: [
    'Clean, transparent ingredients',
    'Built to support daily health',
    'Evidence-based dosing',
    'Doctor-formulated blends',
    'High-quality sourcing',
  ],
  collageImages: [
    { src: '/assets/supplementsection/supplements-1.jpeg', alt: 'AUM Health supplement patient lifestyle photo' },
    { src: '/assets/supplementsection/supplements-2.jpeg', alt: 'AUM Health supplement patient lifestyle photo' },
  ],
  secondaryHeading: 'Support that helps you feel better over time',
  secondaryBody:
    'Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day.',
  cta: { label: 'Get Started', href: '#get-started' },
  contentPending: true, // PLACEHOLDER: client to send supplement PDF with final positioning copy
};


export const supplementBanner = {
  image: '/assets/supplementsection/supplements-family.jpeg',
  tagline: 'Doctor-formulated blends, built to support how your body works every single day.',
};

export const sexualHealthSection = {
  id: 'sexual-health',
  tint: 'sexual-health',
  eyebrow: 'Care for Confidence & Intimacy',
  headingParts: ['Sexual health support, built around ', { highlight: 'you and your partner' }],
  productImage: '/assets/products/sex1.jpg',
  imagePlaceholder: true, 
  checklistCaption: 'Benefits that make a difference',
  checklist: [
    'Doctor-prescribed treatment options',
    'Improved confidence & performance',
    'Judgment-free, confidential care',
    '1:1 physician guidance',
    'Fast & discreet shipping',
  ],
  collageImages: [
    { src: 'https://images.unsplash.com/photo-1636280788355-550a9496655d?q=80&w=400&auto=format&fit=crop', alt: 'AUM Health sexual health lifestyle photo' },
    { src: 'https://images.unsplash.com/photo-1525206809752-65312b959c88?q=80&w=400&auto=format&fit=crop', alt: 'AUM Health sexual health lifestyle photo' },
  ],
  secondaryHeading: 'Confidential care for a more fulfilling connection',
  secondaryBody:
    'Licensed providers offer judgment-free consultations and treatment options tailored to your needs, delivered discreetly to your door.',
  cta: { label: 'Get Started', href: '#get-started' },
};

export const mensHealthSection = {
  id: 'mens-health',
  tint: 'mens-health',
  eyebrow: 'Care for Energy, Hormones & Performance',
  headingParts: ["Men's healthcare, built for men who ", { highlight: 'expect more' }],
  
  checklistCaption: 'Benefits that make a difference',
  checklist: ['Physical performance', 'Hormone balance', 'Energy levels', 'Mental focus', 'Fast & discreet shipping'],
  collageImages: [
    { src: '/assets/menhealth/mens-health-1.jpeg', alt: "AUM Health men's health lifestyle photo" },
    { src: '/assets/menhealth/mens-health-2.jpeg', alt: "AUM Health men's health lifestyle photo" },
  ],
  secondaryHeading: 'Care designed to help you feel stronger, sharper, and more in control',
  secondaryBody:
    'Doctor-guided care for hormones, energy, and performance, with treatment plans tailored to your goals and adjusted as your body responds.',
  cta: { label: 'Get Started', href: '#get-started' },
};

export const peptidesSection = {
  id: 'peptides',
  tint: 'peptides',
  eyebrow: 'Advanced Peptide & Longevity Support',
  headingParts: ['Peptide therapy for ', { highlight: 'recovery, performance & longevity' }],
  checklistCaption: 'Benefits that make a difference',
  checklist: [
    'Doctor-guided peptide protocols',
    'Support for recovery & performance',
    'Cellular health & healthy aging',
    'Personalized dosing plans',
    'Fast & discreet shipping',
  ],
  collageImages: [
    { src: '/assets/peptides/peptides-1.jpeg', alt: 'AUM Health peptide therapy patient staying active' },
    { src: '/assets/peptides/peptides-2.jpeg', alt: 'AUM Health peptide therapy community group workout' },
  ],
  secondaryHeading: 'Science-backed support for how you recover and age',
  secondaryBody:
    'Doctor-guided peptide protocols designed to support recovery, performance, and long-term cellular health, personalized to your goals.',
  cta: { label: 'Get Started', href: '#get-started' },
};

export const womensHealthSection = {
  id: 'womens-health',
  tint: 'womens-health',
  eyebrow: "Care Designed for Women's Health",
  headingParts: ['Whole-body ', { highlight: 'care for her' }, ' balance, vitality, and confidence'],
  productImage: '/assets/products/WomensHealth.webp',
  imagePlaceholder: true, 
  checklistCaption: 'Benefits that support every stage',
  checklist: [
    'Hormone balance',
    'Healthy weight management',
    'Hair strength & growth support',
    'Skin health & radiance',
    'Fast & discreet shipping',
  ],
  collageImages: [
    { src: 'https://images.unsplash.com/photo-1518708909080-704599b19972?q=80&w=400&auto=format&fit=crop', alt: "AUM Health women's health lifestyle photo" },
    { src: 'https://images.unsplash.com/photo-1542463667-d6ed44b2ef68?q=80&w=400&auto=format&fit=crop', alt: "AUM Health women's health lifestyle photo" },
  ],
  secondaryHeading: 'Support that evolves with your body',
  secondaryBody:
    'Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support your health through every stage of life.',
  comingSoon: true, 
};

export const hairSection = {
  id: 'hair',
  tint: 'hair',
  eyebrow: 'Targeted Hair Restoration',
  headingParts: [{ highlight: 'Proven care' }, ' for thinning hair and regrowth'],
  productImage: '/assets/products/hairserum.webp',
  checklistCaption: 'Personalized Support for Lasting Hair Results',
  checklist: [
    'Clinically backed regrowth ingredients',
    'Targeted scalp and follicle support',
    'Long-term hair density approach',
    'Fast shipping',
  ],
  collageImages: [
    { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop', alt: 'AUM Health hair restoration lifestyle photo' },
    { src: 'https://images.unsplash.com/photo-1619218533116-f050e7d91d91?q=80&w=400&auto=format&fit=crop', alt: 'AUM Health hair restoration lifestyle photo' },
  ],
  secondaryHeading: 'Advanced hair regrowth care to help you look and feel your best',
  secondaryBody:
    'Revitalize your roots and restore fuller-looking hair with our powerful hair regrowth serum, formulated to nourish the scalp and support visibly thicker, healthier strands.',
  comingSoon: true,
};

export const skincareSection = {
  id: 'skincare',
  tint: 'skincare',
  eyebrow: 'Care for Healthier, Clearer Skin',
  headingParts: ['Personalized care for ', { highlight: 'healthier, clearer skin' }],
  productImage: '/assets/products/skincare.jpg',
  imagePlaceholder: true, 
  checklistCaption: 'Benefits that make a difference',
  checklist: [
    'Acne & breakout treatment',
    'Anti-aging & fine line support',
    'Hyperpigmentation & tone correction',
    'Dermatologist-guided formulas',
    'Fast & discreet shipping',
  ],
  collageImages: [
    { src: 'https://images.unsplash.com/photo-1694147185194-f91cd8a50680?q=80&w=400&auto=format&fit=crop', alt: 'AUM Health skincare lifestyle photo' },
    { src: 'https://images.unsplash.com/photo-1630398777614-8797b73c4e00?q=80&w=400&auto=format&fit=crop', alt: 'AUM Health skincare lifestyle photo' },
  ],
  secondaryHeading: 'Clearer, healthier skin backed by dermatology-grade care',
  secondaryBody:
    'Doctor-guided treatment plans for acne, aging, and tone, using clinically supported ingredients and dosing tailored to your skin.',
  cta: { label: 'Get Started', href: '#get-started' },
  comingSoon: true,
};

export const coachingSection = {
  id: 'care-coaching',
  eyebrow: 'Better Is Possible — And We Built For It.',
  heading: 'Modern healthcare, built around you',
  headingHighlight: 'built around you',
  badge: 'With you from start to success',
  photo: '/assets/doctors/doctor-2.svg', 
  cardHeading: 'Care coaching and nutrition support',
  body: "Our care coaching team, led by certified medical assistants and registered dietitians, helps answer questions about your medication, program, and day-to-day lifestyle changes — so you have the guidance you need to stay on track and see results.",
  closingLine: "We're creating a better healthcare experience, and the details matter",
  closingLink: "We're here for those details",
};

export const doctorsSection = {
  id: 'our-doctors',
  eyebrow: 'Our Doctors',
  heading: 'Licensed providers, ready to guide your care',
  body: 'Every AUM Health treatment plan is reviewed and prescribed by an independent, state-licensed provider through our clinical partner network — the same doctor-led model used across telehealth.',
  isPlaceholderContent: true,
  doctors: [
    { name: 'Provider bio pending', credential: 'Licensed Physician', photo: '/assets/doctors/doctor-1.svg' },
    { name: 'Provider bio pending', credential: 'Licensed Nurse Practitioner', photo: '/assets/doctors/doctor-2.svg' },
    { name: 'Provider bio pending', credential: 'Licensed Physician', photo: '/assets/doctors/doctor-3.svg' },
  ],
};

export const testimonials = {
  id: 'testimonials',
  eyebrow: 'Those Who Chose AUM Health',
  heading: "There's a reason people are raving about us.",
 
  isPlaceholderContent: true,
  items: [
    {
      quote: 'GLP-1 really helped me in my journey. The whole process felt simple from day one.',
      name: 'Jack',
      role: 'Weight Loss Patient',
      photo: 'https://images.unsplash.com/photo-1531750026848-8ada78f641c2?q=80&w=400&auto=format&fit=crop',
    },
    {
      quote: 'The hair restoration program is the first thing that has actually worked for me.',
      name: 'William',
      role: 'Hair Care Patient',
      photo: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=400&auto=format&fit=crop',
    },
    {
      quote: 'Sexual health medication really helped me get my confidence back.',
      name: 'Sophia',
      role: 'Sexual Health Patient',
      photo: 'https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?q=80&w=400&auto=format&fit=crop',
    },
    {
      quote: 'Quick, easy, and the care team actually answers your questions.',
      name: 'Daniel',
      role: 'AUM Health Patient',
      photo: 'https://images.unsplash.com/photo-1680444602159-cd8b9abe4698?q=80&w=400&auto=format&fit=crop',
    },
    {
      quote: "I finally found a program I could stick with  and it's working.",
      name: 'Olivia',
      role: 'AUM Health Patient',
      photo: 'https://images.unsplash.com/photo-1615751596346-9df8006e5381?q=80&w=400&auto=format&fit=crop',
    },
  ],
};

export const guaranteeStrip = {
  items: [
    { label: 'AUM Health Guarantee', icon: 'badge' },
    { label: 'Free, expedited delivery', icon: 'truck' },
    { label: 'Doctor-led plans & coaching', icon: 'stethoscope' },
    { label: 'No hidden fees', icon: 'dollar' },
  ],
};

export const footer = {
  contact: {
    email: 'support@aumhealth.io',
    phone: '(000) 000-0000', 
    address: 'Address on file', 
  },
  legalDisclaimer: [
    '*The assessment made available on the AUM Health website does not create a doctor-patient relationship between the individual completing the assessment and AUM Health. FuseHealth, a network of US-licensed doctors that adhere to rigorous medical protocols designed for patient safety, has established exclusionary criteria to determine if an individual does not qualify for GLP-1s. The answers an individual provides to the AUM Health assessment consequently determine if the individual is screened out of eligibility for GLP-1 medication, and a FuseHealth clinician will meet with an individual after checkout to determine if they qualify for a prescription. FuseHealth clinicians retain the decision to prescribe compounded GLP-1s to patients.',
  ],
  resultsDisclaimer: [
    '*Results vary based on starting weight and program adherence. Inches lost from hips, waist, chest, thighs and arms in the first month. Patients exercised daily and ate a reduced-calorie diet. Their fat loss is not typical. Results may vary. Medication prescriptions are at the discretion of medical providers and may not be suitable for everyone. AUM Health patients typically result in 1-2 lbs per week weight loss after 4 weeks, involving a healthy diet and exercise changes. Consult a healthcare professional before using medication or starting any weight loss program. *Based on the average weight loss as reported by patients without diabetes who reached and maintained a dose of 2.4 mg/week of GLP-1 treatment, along with a reduced-calorie diet and increased physical activity.',
    'Medication is included in the cost of the AUM Health Program. Wegovy is FDA-approved for weight loss. Ozempic is FDA-approved for type 2 diabetes treatment but may be prescribed for weight loss. The trademarks, service marks, trade names (Wegovy®, Ozempic®), and products displayed on this website are protected and belong to their respective owners. Medical treatment is provided by our affiliated professional medical corporations and associations. No data, photos, claims, or other information on this site is derived from clinical trials or studies; all such content is representative of AUM Health patient experience only.',
    'Certain materials on this website, including text, images, and other media, may be generated or enhanced using artificial intelligence technologies. No representation or warranty is made regarding the accuracy, completeness, or reliability of such content. Individuals appearing in advertisements may be actors or models.',
    'Testimonials on this website reflect illustrative AUM Health patient experiences. For patient privacy, images representing those testimonials use stock photography models.',
    'By accepting our Terms of Use, you additionally understand and agree that AUM Health is not acting as a pharmacy, nor does AUM Health control or interfere with any such services. You understand and agree that you may be entering into a relationship with a pharmacy, pharmacist, and/or pharmacy group as a separate third-party entity. Partner pharmacy details will be listed here once finalized.',
  ],
  showCertificationBadge: false, 
  pharmacyBlurb:
    'We are partnered with multiple USA certified pharmacies to bring the best product and overall experience to our membership. Our team meets regularly with pharmacies to discuss any product shortages, shipping delays, and get updated reports on their medication testing.',
  pharmacyPartners: [], 
  policyLinks: [
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Privacy Practices', href: '/privacy-practices' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Medical Consent', href: '/medical-consent' },
    { label: 'For California Residents', href: '/california-residents' },
    { label: 'Bill of Rights', href: '/bill-of-rights' },
  ],
  copyright: `© ${new Date().getFullYear()} AUM Health. All rights reserved`,
};
