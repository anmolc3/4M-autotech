const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'assets', 'images', 'products');
const servicesDir = path.join(__dirname, 'assets', 'images', 'services');

fs.mkdirSync(productsDir, { recursive: true });
fs.mkdirSync(servicesDir, { recursive: true });

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const products = [
  { 
    id: 'fuel-additive', 
    name: 'FUEL ADDITIVE', 
    sub: 'COMPLETE FUEL SYSTEM CLEANER', 
    color: '#D71920', 
    colorDark: '#70090D', 
    tag: '300 ML', 
    type: 'can',
    iconText: 'FUEL • INJECTORS • VALVES',
    formula: 'POWER & MILEAGE BOOSTER'
  },
  { 
    id: 'tyre-polish', 
    name: 'TYRE POLISH', 
    sub: 'PREMIUM RUBBER SHINE & UV SHIELD', 
    color: '#E6A817', 
    colorDark: '#7A5707', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'DEEP BLACK • DUST REPEL',
    formula: 'NON-GREASY SILICONE MATRIX'
  },
  { 
    id: 'black-garnish', 
    name: 'BLACK GARNISH', 
    sub: 'TRIM & PLASTIC COLOR RESTORER', 
    color: '#E6A817', 
    colorDark: '#8A5D00', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'BUMPERS • TRIMS • CLADDING',
    formula: 'CERAMIC TRIM INFUSION'
  },
  { 
    id: 'brake-cleaner', 
    name: 'BRAKE CLEANER', 
    sub: 'HEAVY DUTY ROTOR & CALIPER DEGREASER', 
    color: '#D71920', 
    colorDark: '#1B4F8C', 
    tag: '300 ML', 
    type: 'aerosol',
    iconText: 'ROTORS • CALIPERS • CLUTCH',
    formula: 'RAPID DRY ZERO RESIDUE'
  },
  { 
    id: 'head-light-cleaner', 
    name: 'HEADLIGHT CLEANER', 
    sub: 'OXIDATION & HAZE RESTORATION', 
    color: '#1B4F8C', 
    colorDark: '#0A254A', 
    tag: '250 ML', 
    type: 'bottle',
    iconText: 'POLYCARBONATE CLARITY',
    formula: 'OPTICAL CLEAR RESTORER'
  },
  { 
    id: 'paint-spot-remover', 
    name: 'PAINT SPOT REMOVER', 
    sub: 'OVERSPRAY & FALLOUT DISSOLVER', 
    color: '#D71920', 
    colorDark: '#70090D', 
    tag: '250 ML', 
    type: 'bottle',
    iconText: 'TAR • WATER SPOTS • OVERSPRAY',
    formula: 'CLEARCOAT SAFE CHEMICAL'
  },
  { 
    id: 'foam-wash-cleaner', 
    name: 'FOAM WASH CLEANER', 
    sub: 'HIGH FOAM pH NEUTRAL SHAMPOO', 
    color: '#0288D1', 
    colorDark: '#01579B', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'SNOW FOAM LUBRICATION',
    formula: 'CERAMIC & WAX SAFE pH 7.0'
  },
  { 
    id: 'seat-dry-cleaner', 
    name: 'SEAT DRY CLEANER', 
    sub: 'DRY FOAM UPHOLSTERY & LEATHER CLEANER', 
    color: '#00ACC1', 
    colorDark: '#006064', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'FABRIC • LEATHER • ALCANTARA',
    formula: 'BIO-ENZYMATIC ODOR ELIMINATOR'
  },
  { 
    id: 'dashboard-polish', 
    name: 'DASHBOARD POLISH', 
    sub: 'INTERIOR TRIM SATIN SHINE & UV BLOCK', 
    color: '#2E7D32', 
    colorDark: '#1B5E20', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'ANTI-STATIC • MATTE SATIN',
    formula: 'UV-50 BLOCKER RESIN'
  },
  { 
    id: 'anti-rust-coating', 
    name: 'ANTI RUST COATING', 
    sub: 'UNDERBODY & CHASSIS CORROSION SHIELD', 
    color: '#D84315', 
    colorDark: '#4E1A0B', 
    tag: '300 ML', 
    type: 'aerosol',
    iconText: 'CHASSIS • UNDERBODY • PANELS',
    formula: 'RUBBERIZED BITUMEN BARRIER'
  },
  { 
    id: 'rubbing-polish', 
    name: 'RUBBING POLISH', 
    sub: 'FAST-CUT SWIRL & SCRATCH COMPOUND', 
    color: '#78909C', 
    colorDark: '#37474F', 
    tag: '300 ML', 
    type: 'bottle',
    iconText: 'P1500-P2500 REMOVAL',
    formula: 'DIMINISHING ABRASIVE TECH'
  },
  { 
    id: 'body-polish', 
    name: 'BODY POLISH', 
    sub: 'DEEP GLOSS SHOWROOM FINISH', 
    color: '#90A4AE', 
    colorDark: '#263238', 
    tag: '300 ML', 
    type: 'bottle',
    iconText: 'HIGH-REFLECTIVE CARNAUBA',
    formula: 'MIRROR WET-LOOK MATRIX'
  },
  { 
    id: 'teflon-coating', 
    name: 'TEFLON COATING', 
    sub: 'PTFE SYNTHETIC PAINT SEALANT', 
    color: '#00838F', 
    colorDark: '#004D40', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'PTFE CROSS-LINK POLYMER',
    formula: '6-MONTH HYDROPHOBIC SEAL'
  },
  { 
    id: 'battery-jelly', 
    name: 'BATTERY JELLY', 
    sub: 'TERMINAL CORROSION PROTECTANT', 
    color: '#F57F17', 
    colorDark: '#E65100', 
    tag: '50 G', 
    type: 'tub',
    iconText: 'TERMINALS • CONNECTORS',
    formula: 'DIELECTRIC CORROSION BLOCK'
  },
  { 
    id: 'oil-additive', 
    name: 'OIL ADDITIVE', 
    sub: 'SYNTHETIC ENGINE OIL TREATMENT & MoS2', 
    color: '#C2185B', 
    colorDark: '#880E4F', 
    tag: '300 ML', 
    type: 'can',
    iconText: 'ANTI-FRICTION • COLD START',
    formula: 'CERAMIC FRICTION REDUCER'
  },
  { 
    id: 'injector-cleaner', 
    name: 'INJECTOR CLEANER', 
    sub: 'DIRECT INJECTION GDI & CRDi CLEANER', 
    color: '#1565C0', 
    colorDark: '#0D47A1', 
    tag: '300 ML', 
    type: 'can',
    iconText: 'GDI • D4 • CRDi • MPFI',
    formula: 'PEA HIGH-HEAT DECARBONIZER'
  },
  { 
    id: 'chrome-cleaner', 
    name: 'CHROME CLEANER', 
    sub: 'BRIGHT METAL & EXHAUST POLISH', 
    color: '#B0BEC5', 
    colorDark: '#546E7A', 
    tag: '300 ML', 
    type: 'bottle',
    iconText: 'CHROME • STAINLESS • ALLOY',
    formula: 'MICRO-OXIDATION DISSOLVER'
  },
  { 
    id: 'paint-stop-remover', 
    name: 'PAINT STOP REMOVER', 
    sub: 'INDUSTRIAL CONTAMINANT CLEANER', 
    color: '#D71920', 
    colorDark: '#880E4F', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'RAIL DUST • CHEMICAL SPOTS',
    formula: 'HEAVY DECONTAMINATION AGENT'
  },
  { 
    id: 'ac-duct-cleaner', 
    name: 'AC DUCT CLEANING', 
    sub: 'FOAMING DISINFECTANT & ODOR PURIFIER', 
    color: '#00ACC1', 
    colorDark: '#006064', 
    tag: '300 ML', 
    type: 'aerosol',
    iconText: 'AIR VENTS • EVAPORATOR • AC',
    formula: 'ANTI-BACTERIAL PRO-FRESH'
  },
  { 
    id: 'rust-removal', 
    name: 'RUST REMOVAL', 
    sub: 'RAPID OXIDATION & CORROSION DISSOLVER', 
    color: '#E65100', 
    colorDark: '#BF360C', 
    tag: '300 ML', 
    type: 'spray',
    iconText: 'METALS • BOLTS • CHASSIS',
    formula: 'PENETRATING RUST CONVERTER'
  },
  { 
    id: 'chain-cleaner', 
    name: 'CHAIN CLEANER', 
    sub: 'HEAVY DUTY DRIVE CHAIN DEGREASER', 
    color: '#43A047', 
    colorDark: '#1B5E20', 
    tag: '300 ML', 
    type: 'aerosol',
    iconText: 'O/X/Z RINGS • SPROCKETS',
    formula: 'POWER DEGREASING SPRAY'
  },
  { 
    id: 'chain-lubricant', 
    name: 'CHAIN LUBRICANT', 
    sub: 'SYNTHETIC ANTI-FLING CHAIN LUBE', 
    color: '#FBC02D', 
    colorDark: '#F57F17', 
    tag: '300 ML', 
    type: 'aerosol',
    iconText: 'HIGH SPEED • WATER RESISTANT',
    formula: 'PTFE CERAMIC COATING LUBE'
  },
  {
    id: 'bike-body-polish',
    name: 'BIKE BODY POLISH',
    sub: 'PERFECT SHINE & PROTECTION',
    color: '#7B1FA2',
    colorDark: '#4A148C',
    tag: '300 ML',
    type: 'aerosol',
    iconText: 'METALLIC & MATTE • NO SWIRLS',
    formula: 'GERMAN SHINE FORMULA'
  },
  {
    id: 'bike-engine-flushing',
    name: 'BIKE ENGINE FLUSHING',
    sub: 'DEEP ENGINE CLEAN IN 10 MINS',
    color: '#2E7D32',
    colorDark: '#1B5E20',
    tag: '60 ML',
    type: 'can',
    iconText: '4-STROKE • REMOVE SLUDGE',
    formula: 'GERMAN CARBON DISSOLVER'
  },
  {
    id: 'bike-chain-lube',
    name: 'BIKE CHAIN LUBE SPRAY',
    sub: 'SUPERIOR LUBRICATION & O-RING SAFE',
    color: '#D32F2F',
    colorDark: '#B71C1C',
    tag: '60 ML',
    type: 'aerosol',
    iconText: 'O/X/Z-RING • NO FLING',
    formula: 'SYNTHETIC HIGH TACK'
  },
  {
    id: 'monogram-cleaner',
    name: 'MONOGRAM CLEANER SPRAY',
    sub: 'ULTIMATE CLEANING & BRIGHT LOOK',
    color: '#0288D1',
    colorDark: '#01579B',
    tag: '500 ML',
    type: 'aerosol',
    iconText: 'EMBLEMS • LOGOS • TYRE COVERS',
    formula: 'DEEP LIFT SOLUTION'
  },
  {
    id: 'brake-disc-cleaner',
    name: 'BRAKE DISC & PARTS CLEANER',
    sub: 'HIGH PERFORMANCE DEGREASER SPRAY',
    color: '#C62828',
    colorDark: '#8E0000',
    tag: '600 ML',
    type: 'aerosol',
    iconText: 'DISCS • CALIPERS • PADS',
    formula: 'FAST DRY RESIDUE-FREE'
  },
  {
    id: 'bike-rust-mast',
    name: 'BIKE RUST MAST',
    sub: 'RUST LUBRICANT SPRAY & 360° VALVE',
    color: '#E65100',
    colorDark: '#BF360C',
    tag: '60 ML',
    type: 'aerosol',
    iconText: 'LOOSEN RUST • STOPS SQUEAKS',
    formula: '360° ALL ANGLE PENETRANT'
  },
  {
    id: 'bike-teflon-coating',
    name: 'BIKE TEFLON COATING',
    sub: 'PREMIUM PROTECTIVE SPRAY',
    color: '#1565C0',
    colorDark: '#0D47A1',
    tag: '60 ML',
    type: 'aerosol',
    iconText: 'SHINE • REPEL DUST & WATER',
    formula: 'PTFE MOLECULAR SHIELD'
  },
  {
    id: 'bike-chain-cleaner',
    name: 'BIKE CHAIN CLEANER',
    sub: 'SPRAY CHAIN CLEANER & DEGREASER',
    color: '#00838F',
    colorDark: '#006064',
    tag: '60 ML',
    type: 'aerosol',
    iconText: 'DEEP CLEAN • FAST DRY',
    formula: 'O-RING SAFE DEGREASER'
  }
];

function generateProductSvg(p) {
  const { name, sub, color, colorDark, tag, type, iconText, formula } = p;
  
  let containerMarkup = '';

  if (type === 'spray') {
    containerMarkup = `
      <!-- Ergonomic Trigger Spray Head -->
      <g id="sprayHead">
        <path d="M 265 140 Q 300 130 335 140 L 350 175 L 325 210 L 275 210 L 250 175 Z" fill="#1b1b1b" stroke="#383838" stroke-width="2"/>
        <path d="M 255 155 L 220 148 L 220 178 L 255 170 Z" fill="#0d0d0d" stroke="#2a2a2a" stroke-width="2"/>
        <rect x="208" y="152" width="14" height="22" rx="3" fill="${color}" stroke="#fff" stroke-width="1"/>
        <circle cx="215" cy="163" r="2.5" fill="#111" />
        <path d="M 270 190 Q 240 230 258 265 L 272 260 Q 256 230 282 195 Z" fill="#262626" stroke="#404040" stroke-width="1.5"/>
        <rect x="270" y="205" width="60" height="25" rx="4" fill="#202020" stroke="#333" stroke-width="1.5"/>
        <line x1="270" y1="214" x2="330" y2="214" stroke="#444" stroke-width="1.5"/>
        <line x1="270" y1="222" x2="330" y2="222" stroke="#444" stroke-width="1.5"/>
      </g>

      <!-- Bottle Body -->
      <path d="M 255 225 Q 300 215 345 225 L 365 260 L 365 490 Q 300 520 235 490 L 235 260 Z" fill="url(#bodyGrad)" stroke="#383838" stroke-width="2"/>
      <path d="M 255 225 Q 300 215 345 225 L 365 260 L 365 490 Q 300 520 235 490 L 235 260 Z" fill="url(#glassSheen)"/>
      
      <!-- Label Wrap -->
      <rect x="242" y="270" width="116" height="215" rx="8" fill="url(#labelDarkGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <rect x="242" y="270" width="116" height="8" fill="${color}"/>
      <rect x="242" y="477" width="116" height="8" fill="${color}"/>
    `;
  } else if (type === 'aerosol') {
    containerMarkup = `
      <g id="aerosolCap">
        <path d="M 260 120 Q 300 85 340 120 L 340 195 L 260 195 Z" fill="${color}" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
        <rect x="286" y="98" width="28" height="15" rx="3" fill="#111" />
        <circle cx="300" cy="105" r="3" fill="#eee" />
        <rect x="252" y="190" width="96" height="16" rx="3" fill="#2a2a2a" stroke="#444" stroke-width="1.5"/>
      </g>
      <rect x="250" y="200" width="100" height="295" rx="6" fill="url(#metallicCan)" stroke="#3a3a3a" stroke-width="2"/>
      <rect x="250" y="200" width="100" height="295" rx="6" fill="url(#glassSheen)"/>
      <rect x="250" y="245" width="100" height="235" fill="url(#labelDarkGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <rect x="250" y="245" width="100" height="8" fill="${color}"/>
      <rect x="250" y="472" width="100" height="8" fill="${color}"/>
    `;
  } else if (type === 'can') {
    containerMarkup = `
      <path d="M 285 130 L 315 130 L 320 170 L 280 170 Z" fill="#d0d0d0" stroke="#666" stroke-width="2"/>
      <rect x="282" y="118" width="36" height="16" rx="3" fill="${color}" stroke="#fff" stroke-width="1"/>
      <path d="M 260 170 L 340 170 L 355 210 L 245 210 Z" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
      <rect x="245" y="205" width="110" height="290" rx="8" fill="url(#bodyGrad)" stroke="#3a3a3a" stroke-width="2"/>
      <rect x="245" y="205" width="110" height="290" rx="8" fill="url(#glassSheen)"/>
      <rect x="245" y="245" width="110" height="235" fill="url(#labelDarkGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <rect x="245" y="245" width="110" height="8" fill="${color}"/>
      <rect x="245" y="472" width="110" height="8" fill="${color}"/>
    `;
  } else if (type === 'tub') {
    containerMarkup = `
      <ellipse cx="300" cy="220" rx="135" ry="35" fill="${color}" stroke="#ffffff" stroke-width="2.5"/>
      <ellipse cx="300" cy="214" rx="122" ry="28" fill="url(#metallicCan)"/>
      <text x="300" y="222" font-family="'Rajdhani', sans-serif" font-size="16" font-weight="900" fill="${color}" text-anchor="middle" letter-spacing="3">4M PRO TECH</text>
      <path d="M 175 225 Q 300 260 425 225 L 405 470 Q 300 510 195 470 Z" fill="url(#bodyGrad)" stroke="#383838" stroke-width="2.5"/>
      <path d="M 175 225 Q 300 260 425 225 L 405 470 Q 300 510 195 470 Z" fill="url(#glassSheen)"/>
      <path d="M 185 270 Q 300 300 415 270 L 400 445 Q 300 480 200 445 Z" fill="url(#labelDarkGrad)" stroke="${color}" stroke-width="2"/>
    `;
  } else {
    containerMarkup = `
      <g id="bottleCap">
        <rect x="280" y="115" width="40" height="42" rx="4" fill="${color}" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
        <line x1="280" y1="126" x2="320" y2="126" stroke="rgba(0,0,0,0.5)" stroke-width="2"/>
        <line x1="280" y1="136" x2="320" y2="136" stroke="rgba(0,0,0,0.5)" stroke-width="2"/>
        <line x1="280" y1="146" x2="320" y2="146" stroke="rgba(0,0,0,0.5)" stroke-width="2"/>
        <path d="M 270 155 L 330 155 L 350 215 L 250 215 Z" fill="#181818" stroke="#333" stroke-width="2"/>
      </g>
      <path d="M 250 215 Q 300 205 350 215 L 365 255 L 365 490 Q 300 520 235 490 L 235 255 Z" fill="url(#bodyGrad)" stroke="#383838" stroke-width="2"/>
      <path d="M 250 215 Q 300 205 350 215 L 365 255 L 365 490 Q 300 520 235 490 L 235 255 Z" fill="url(#glassSheen)"/>
      <rect x="242" y="260" width="116" height="225" rx="8" fill="url(#labelDarkGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <rect x="242" y="260" width="116" height="8" fill="${color}"/>
      <rect x="242" y="477" width="116" height="8" fill="${color}"/>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="backdropGlow" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.32" />
      <stop offset="45%" stop-color="#141414" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#050505" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#080808" />
      <stop offset="18%" stop-color="#242424" />
      <stop offset="45%" stop-color="#3c3c3c" />
      <stop offset="55%" stop-color="#181818" />
      <stop offset="82%" stop-color="#2a2a2a" />
      <stop offset="100%" stop-color="#0a0a0a" />
    </linearGradient>
    <linearGradient id="metallicCan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1a1a1a" />
      <stop offset="25%" stop-color="#666666" />
      <stop offset="50%" stop-color="#888888" />
      <stop offset="75%" stop-color="#333333" />
      <stop offset="100%" stop-color="#111111" />
    </linearGradient>
    <linearGradient id="labelDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c1c1c" />
      <stop offset="60%" stop-color="#101010" />
      <stop offset="100%" stop-color="#070707" />
    </linearGradient>
    <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0" />
      <stop offset="30%" stop-color="#fff" stop-opacity="0.28" />
      <stop offset="45%" stop-color="#fff" stop-opacity="0.04" />
      <stop offset="85%" stop-color="#fff" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
    <filter id="softShadow" x="-25%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="22" flood-color="#000" flood-opacity="0.85" />
    </filter>
    <radialGradient id="floorReflection" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.3" />
      <stop offset="40%" stop-color="#000000" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="600" height="600" fill="url(#backdropGlow)" />

  <g opacity="0.04" stroke="#ffffff" stroke-width="1.5" fill="none">
    <circle cx="300" cy="300" r="180" />
    <circle cx="300" cy="300" r="260" />
    <line x1="0" y1="300" x2="600" y2="300" stroke-dasharray="8 8"/>
    <line x1="300" y1="0" x2="300" y2="600" stroke-dasharray="8 8"/>
  </g>

  <ellipse cx="300" cy="525" rx="160" ry="32" fill="url(#floorReflection)" />
  <ellipse cx="300" cy="518" rx="100" ry="12" fill="${color}" opacity="0.45" />

  <g filter="url(#softShadow)">
    ${containerMarkup}

    <g text-anchor="middle">
      <polygon points="300,282 314,291 314,307 300,315 286,307 286,291" fill="${color}" stroke="#ffffff" stroke-width="1"/>
      <text x="300" y="303" font-family="&apos;Rajdhani&apos;, &apos;Impact&apos;, sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="1">4M</text>
      
      <text x="300" y="330" font-family="&apos;Rajdhani&apos;, &apos;Arial Black&apos;, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff" letter-spacing="2.8">AUTOTECH</text>
      <text x="300" y="340" font-family="&apos;Inter&apos;, sans-serif" font-size="6.5" font-weight="700" fill="${color}" letter-spacing="1.5">PROFESSIONAL CAR CARE</text>

      <line x1="258" y1="348" x2="342" y2="348" stroke="${color}" stroke-width="1.8" />

      <text x="300" y="370" font-family="&apos;Rajdhani&apos;, &apos;Arial Black&apos;, sans-serif" font-size="13" font-weight="900" fill="#ffffff" letter-spacing="1">${escapeXml(name.split(' ')[0])}</text>
      ${name.split(' ').length > 1 ? `<text x="300" y="386" font-family="&apos;Rajdhani&apos;, &apos;Arial Black&apos;, sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="1">${escapeXml(name.split(' ').slice(1).join(' '))}</text>` : ''}
      
      <text x="300" y="408" font-family="&apos;Inter&apos;, sans-serif" font-size="6.5" font-weight="600" fill="#cfcfcf" letter-spacing="0.5">${escapeXml(sub)}</text>
      <text x="300" y="420" font-family="&apos;Inter&apos;, sans-serif" font-size="6" font-weight="600" fill="${color}" letter-spacing="0.6">${escapeXml(formula)}</text>

      <rect x="256" y="432" width="88" height="18" rx="4" fill="#1c1c1c" stroke="${color}" stroke-width="1.2" />
      <text x="300" y="445" font-family="&apos;Rajdhani&apos;, sans-serif" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${escapeXml(tag)} • PRO GRADE</text>

      <text x="300" y="466" font-family="&apos;Inter&apos;, sans-serif" font-size="5.8" font-weight="600" fill="#888888" letter-spacing="0.8">${escapeXml(iconText)}</text>
    </g>
  </g>

  <g fill="#ffffff" opacity="0.75">
    <circle cx="230" cy="190" r="2" />
    <polygon points="230,186 232,190 236,190 233,192 234,196 230,193 226,196 227,192 224,190 228,190" fill="${color}" />
    <circle cx="420" cy="240" r="2.5" />
    <polygon points="420,235 422,240 427,240 423,243 425,248 420,244 415,248 417,243 413,240 418,240" fill="#ffffff" />
  </g>
</svg>`;
}

const services = [
  {
    id: 'paint-correction',
    name: 'PAINT CORRECTION',
    subtitle: 'MULTI-STAGE MACHINE POLISHING',
    tagline: 'Swirl Mark, Scratch & Oxidation Removal • Mirror Deep Gloss',
    accent: '#D71920',
    iconVisual: `
      <circle cx="400" cy="180" r="65" fill="#161616" stroke="#D71920" stroke-width="3" />
      <circle cx="400" cy="180" r="48" fill="#202020" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="6 4" />
      <circle cx="400" cy="180" r="24" fill="#D71920" />
      <path d="M 330 180 L 270 160 L 270 200 Z" fill="#2b2b2b" stroke="#444" stroke-width="2"/>
      <path d="M 470 180 L 530 160 L 530 200 Z" fill="#2b2b2b" stroke="#444" stroke-width="2"/>
      <line x1="400" y1="90" x2="400" y2="130" stroke="#D71920" stroke-width="3"/>
      <line x1="400" y1="230" x2="400" y2="270" stroke="#D71920" stroke-width="3"/>
      <line x1="310" y1="180" x2="350" y2="180" stroke="#D71920" stroke-width="3"/>
      <line x1="450" y1="180" x2="490" y2="180" stroke="#D71920" stroke-width="3"/>
    `
  },
  {
    id: 'ceramic-coating',
    name: 'CERAMIC COATING',
    subtitle: '9H HARDNESS NANO-GLASS MATRIX',
    tagline: 'Extreme Hydrophobic Water Beading • Permanent UV & Chemical Shield',
    accent: '#1B4F8C',
    iconVisual: `
      <path d="M 400 100 L 465 130 L 465 210 Q 400 270 400 270 Q 335 210 335 130 Z" fill="#0d1b2a" stroke="#1B4F8C" stroke-width="3.5"/>
      <path d="M 400 115 L 450 140 L 450 205 Q 400 252 400 252 Q 350 205 350 140 Z" fill="#1b4f8c" opacity="0.35"/>
      <text x="400" y="192" font-family="&apos;Rajdhani&apos;, sans-serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">9H</text>
      <circle cx="350" cy="200" r="10" fill="#00e5ff" opacity="0.7"/>
      <circle cx="450" cy="200" r="10" fill="#00e5ff" opacity="0.7"/>
      <circle cx="400" cy="75" r="8" fill="#00e5ff" opacity="0.8"/>
    `
  },
  {
    id: 'ppf',
    name: 'PAINT PROTECTION FILM (PPF)',
    subtitle: 'SELF-HEALING URETHANE ARMOR',
    tagline: 'Stone Chip & Road Debris Protection • Invisible High Gloss Finish',
    accent: '#607D8B',
    iconVisual: `
      <polygon points="400,105 470,145 470,225 400,265 330,225 330,145" fill="#1c2833" stroke="#607D8B" stroke-width="3.5" />
      <polygon points="400,120 455,152 455,218 400,250 345,218 345,152" fill="#607d8b" opacity="0.25" />
      <path d="M 330 185 Q 400 140 470 185" stroke="#00e676" stroke-width="3.5" fill="none" stroke-dasharray="6 4" />
      <text x="400" y="195" font-family="&apos;Rajdhani&apos;, sans-serif" font-size="28" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="3">PPF</text>
    `
  },
  {
    id: 'interior-cleaning',
    name: 'INTERIOR CLEANING',
    subtitle: 'DEEP EXTRACTION & SANITIZATION',
    tagline: 'Seat & Carpet Wet Extraction • Dashboard Detailing & Odor Neutralizer',
    accent: '#2E7D32',
    iconVisual: `
      <circle cx="400" cy="180" r="65" fill="#132314" stroke="#2E7D32" stroke-width="3" />
      <path d="M 375 140 L 425 140 L 420 200 L 380 200 Z" fill="#2e7d32" opacity="0.5"/>
      <path d="M 365 200 L 435 200 L 445 225 L 355 225 Z" fill="#ffffff" />
      <path d="M 370 120 Q 380 100 390 120 Q 400 100 410 120 Q 420 100 430 120" stroke="#00e676" stroke-width="2.5" fill="none"/>
    `
  },
  {
    id: 'exterior-detailing',
    name: 'EXTERIOR DETAILING',
    subtitle: 'HIGH-FOAM WASH & POLYMER POLISH',
    tagline: 'Decontamination Clay Bar • Glass Coating • Tyre Dressing Showroom Look',
    accent: '#E6A817',
    iconVisual: `
      <circle cx="400" cy="180" r="65" fill="#201a0a" stroke="#E6A817" stroke-width="3" />
      <path d="M 350 200 Q 400 140 450 200 L 435 225 L 365 225 Z" fill="#e6a817" opacity="0.4"/>
      <path d="M 345 210 Q 370 180 400 180 Q 430 180 455 210" stroke="#ffffff" stroke-width="3" fill="none"/>
      <circle cx="365" cy="215" r="8" fill="#e6a817"/>
      <circle cx="435" cy="215" r="8" fill="#e6a817"/>
    `
  },
  {
    id: 'engine-bay-cleaning',
    name: 'ENGINE BAY CLEANING',
    subtitle: 'SAFE DEGREASING & DRESSING',
    tagline: 'Underhood Component Restoration • Plastic & Rubber Protective Coating',
    accent: '#BF360C',
    iconVisual: `
      <circle cx="400" cy="180" r="65" fill="#260e07" stroke="#BF360C" stroke-width="3" />
      <polygon points="400,135 425,150 425,180 400,195 375,180 375,150" fill="#bf360c" opacity="0.6"/>
      <circle cx="400" cy="165" r="16" fill="#111" stroke="#ffffff" stroke-width="2"/>
      <path d="M 360 215 L 440 215 L 430 230 L 370 230 Z" fill="#bf360c"/>
    `
  },
  {
    id: 'car-spa',
    name: 'THE CAR SPA PACKAGE',
    subtitle: 'THE ULTIMATE 360° ALL-INCLUSIVE FULL DETAILING',
    tagline: 'Exterior Polish • Interior Sanitization • Engine Bay • 9H Protection Seal',
    accent: '#D71920',
    iconVisual: `
      <circle cx="400" cy="180" r="70" fill="#200a0a" stroke="#D71920" stroke-width="3.5" />
      <polygon points="400,120 415,155 452,155 422,177 433,212 400,190 367,212 378,177 348,155 385,155" fill="#E6A817" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="400" cy="180" r="86" fill="none" stroke="#E6A817" stroke-width="1.5" stroke-dasharray="6 4" />
    `
  }
];

function generateServiceSvg(s) {
  const { id, name, subtitle, tagline, accent, iconVisual } = s;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="servGrad_${id}" cx="50%" cy="38%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.32" />
      <stop offset="55%" stop-color="#121212" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#060606" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="accentLine_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0" />
      <stop offset="50%" stop-color="${accent}" stop-opacity="1" />
      <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#servGrad_${id})" />

  <g opacity="0.08" stroke="#ffffff" stroke-width="1.5" fill="none">
    <path d="M 80 340 L 220 340 Q 280 230 420 230 Q 560 230 640 280 L 720 340" />
    <circle cx="230" cy="340" r="45" />
    <circle cx="630" cy="340" r="45" />
    <line x1="0" y1="385" x2="800" y2="385" />
    <line x1="0" y1="65" x2="800" y2="65" />
    <line x1="200" y1="0" x2="200" y2="450" stroke-dasharray="4 6"/>
    <line x1="600" y1="0" x2="600" y2="450" stroke-dasharray="4 6"/>
  </g>

  <line x1="80" y1="380" x2="720" y2="380" stroke="url(#accentLine_${id})" stroke-width="3" />

  <g id="centerGraphic">
    ${iconVisual}
  </g>

  <g text-anchor="middle">
    <text x="400" y="52" font-family="&apos;Rajdhani&apos;, &apos;Arial Black&apos;, sans-serif" font-size="14" font-weight="900" fill="${accent}" letter-spacing="4">4M AUTOTECH • DETAILING STUDIO</text>
    
    <text x="400" y="295" font-family="&apos;Rajdhani&apos;, &apos;Impact&apos;, sans-serif" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="2">${escapeXml(name)}</text>
    
    <text x="400" y="322" font-family="&apos;Rajdhani&apos;, sans-serif" font-size="14" font-weight="800" fill="${accent}" letter-spacing="2.5">${escapeXml(subtitle)}</text>
    
    <text x="400" y="348" font-family="&apos;Inter&apos;, sans-serif" font-size="12" font-weight="500" fill="#bbbbbb" letter-spacing="0.5">${escapeXml(tagline)}</text>
    
    <rect x="310" y="398" width="180" height="24" rx="12" fill="#181818" stroke="${accent}" stroke-width="1.2" />
    <text x="400" y="414" font-family="&apos;Rajdhani&apos;, sans-serif" font-size="11" font-weight="800" fill="#ffffff" letter-spacing="2">100% QUALITY GUARANTEED</text>
  </g>
</svg>`;
}

// Write all 18 Products to disk
products.forEach(p => {
  const content = generateProductSvg(p);
  fs.writeFileSync(path.join(productsDir, `${p.id}.svg`), content, 'utf8');
  fs.writeFileSync(path.join(productsDir, `${p.id}.png`), content, 'utf8');
});

// Write all 7 Services to disk
services.forEach(s => {
  const content = generateServiceSvg(s);
  fs.writeFileSync(path.join(servicesDir, `${s.id}.svg`), content, 'utf8');
  fs.writeFileSync(path.join(servicesDir, `${s.id}.jpg`), content, 'utf8');
});

// Alias for engine-bay
const ebContent = generateServiceSvg(services.find(s => s.id === 'engine-bay-cleaning'));
fs.writeFileSync(path.join(servicesDir, 'engine-bay.svg'), ebContent, 'utf8');
fs.writeFileSync(path.join(servicesDir, 'engine-bay.jpg'), ebContent, 'utf8');

console.log('All 18 Product SVGs and 7 Service SVGs generated with strict XML escaping!');
