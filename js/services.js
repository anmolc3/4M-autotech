/**
 * 4M AUTOTECH — Services Data
 * Khawaja Garib Nawaz Car Detailing service information
 */

const SERVICES = [
    {
        id: "paint-correction",
        name: "Paint Correction",
        icon: "✦",
        shortDesc: "Professional machine polishing to remove swirl marks, scratches, oxidation and restore your paint's true depth and gloss.",
        description: "Our professional paint correction service uses multi-stage machine polishing to systematically remove paint defects including swirl marks, light scratches, water spots, oxidation and holograms. The result is paint that reflects like a mirror and glows with true depth.",
        features: [
            "Multi-stage machine polishing",
            "Swirl mark & scratch removal",
            "Oxidation & haze removal",
            "Paint depth & gloss restoration",
            "Pre & post paint inspection",
            "Finished with paint sealant"
        ],
        image: "assets/images/services/paint-correction.svg",
        imagePlaceholder: "#1B1B2F",
        accentColor: "#D71920",
        category: "paint"
    },
    {
        id: "ceramic-coating",
        name: "Ceramic Coating",
        icon: "◈",
        shortDesc: "Professional-grade ceramic coating that bonds to your paint for years of protection, gloss and hydrophobic performance.",
        description: "Ceramic coating creates a permanent semi-permanent glass-like shield over your vehicle's paint. It delivers extreme hydrophobic properties, UV protection, chemical resistance and unmatched depth of gloss that lasts for years.",
        features: [
            "9H hardness ceramic formula",
            "Hydrophobic self-cleaning surface",
            "UV & oxidation protection",
            "Chemical & contaminant resistance",
            "Years of lasting protection",
            "Mirror-like gloss finish"
        ],
        image: "assets/images/services/ceramic-coating.svg",
        imagePlaceholder: "#0D1B2A",
        accentColor: "#1B4F8C",
        category: "protection"
    },
    {
        id: "ppf",
        name: "Paint Protection Film (PPF)",
        icon: "⬡",
        shortDesc: "Self-healing transparent film that protects your paint from rock chips, scratches, and road debris.",
        description: "Paint Protection Film (PPF) is a virtually invisible urethane film that physically protects your vehicle's paint from stone chips, scratches, bug splatter and road hazards. Modern PPF features self-healing technology that makes minor scratches disappear with heat.",
        features: [
            "Self-healing urethane film",
            "Protection from stone chips & scratches",
            "Invisible protection",
            "Preserves original paint",
            "Enhances resale value",
            "Available for full vehicle or high-impact zones"
        ],
        image: "assets/images/services/ppf.svg",
        imagePlaceholder: "#0F2027",
        accentColor: "#607D8B",
        category: "protection"
    },
    {
        id: "interior-cleaning",
        name: "Interior Cleaning",
        icon: "⬙",
        shortDesc: "Deep interior cleaning and sanitization — seats, carpets, dashboard, panels, roof lining and all surfaces.",
        description: "Our comprehensive interior cleaning service covers every surface inside your vehicle. From deep seat and carpet extraction to dashboard detailing, glass polishing and full sanitization — your interior will feel and smell showroom fresh.",
        features: [
            "Deep vacuum & extraction",
            "Seat & carpet deep cleaning",
            "Dashboard & panel detailing",
            "Door panel & trim cleaning",
            "Roof lining care",
            "Glass & mirror cleaning",
            "Odor elimination & sanitization"
        ],
        image: "assets/images/services/interior-cleaning.svg",
        imagePlaceholder: "#1A1A2E",
        accentColor: "#2E7D32",
        category: "interior"
    },
    {
        id: "exterior-detailing",
        name: "Exterior Detailing",
        icon: "◉",
        shortDesc: "Complete exterior wash, clay bar decontamination, polish, wax and tyre dressing for a showroom finish.",
        description: "Our exterior detailing package goes far beyond a simple wash. We foam wash, clay bar decontaminate, polish, apply wax or sealant, dress tyres and clean all exterior glass for a complete showroom-quality exterior finish.",
        features: [
            "High-foam pressure wash",
            "Clay bar decontamination",
            "Paint polish & correction",
            "Wax or sealant application",
            "Tyre & wheel dressing",
            "Glass polishing & cleaning",
            "Chrome & trim care"
        ],
        image: "assets/images/services/exterior-detailing.svg",
        imagePlaceholder: "#12191F",
        accentColor: "#E6A817",
        category: "exterior"
    },
    {
        id: "engine-bay-cleaning",
        name: "Engine Bay Cleaning",
        icon: "⚙",
        shortDesc: "Safe and effective engine bay cleaning and dressing for a clean, fresh underhood appearance.",
        description: "Our engine bay cleaning service safely removes grease, grime, dust and road contamination from your engine compartment. We degrease, rinse, dry and dress all plastic and rubber components for a clean, professional underhood finish.",
        features: [
            "Safe engine degreasing",
            "Pressure rinse",
            "Drying & compressed air blowout",
            "Plastic & rubber dressing",
            "Engine cover detailing",
            "Safe on all modern engine bays"
        ],
        image: "assets/images/services/engine-bay.svg",
        imagePlaceholder: "#1A1A1A",
        accentColor: "#BF360C",
        category: "engine"
    },
    {
        id: "car-spa",
        name: "Car Spa",
        icon: "★",
        shortDesc: "The ultimate full detailing package — complete exterior, interior, paint protection, engine bay, and final quality finish.",
        description: "The Car Spa is our ultimate, all-inclusive detailing package that gives your car a complete showroom finish inside and out. Every surface, every panel, every interior element is professionally detailed to the highest standard.",
        features: [
            "Complete exterior foam wash",
            "Decontamination & clay bar",
            "Paint polishing",
            "Wax / sealant application",
            "Tyre & wheel dressing",
            "Deep interior vacuum",
            "Seat & carpet deep cleaning",
            "Dashboard & panel cleaning",
            "Sanitization & odor treatment",
            "Engine bay cleaning",
            "Glass & mirror cleaning",
            "Perfume & fragrance treatment",
            "Final quality inspection"
        ],
        image: "assets/images/services/car-spa.svg",
        imagePlaceholder: "#0A0A0A",
        accentColor: "#D71920",
        category: "package",
        featured: true
    }
];

const SERVICE_CATEGORIES = [
    { id: "all", label: "ALL SERVICES" },
    { id: "paint", label: "PAINT" },
    { id: "protection", label: "PROTECTION" },
    { id: "interior", label: "INTERIOR" },
    { id: "exterior", label: "EXTERIOR" },
    { id: "engine", label: "ENGINE" },
    { id: "package", label: "PACKAGES" }
];

// Car Spa package details
const CAR_SPA_PACKAGE = {
    name: "Car Spa",
    headline: "FULL DETAILING PACKAGE",
    tagline: "COMPLETE CARE • DEEP CLEAN • PREMIUM FINISH",
    description: "The ultimate detailing package that gives your car a showroom finish inside & out.",
    sections: [
        {
            title: "COMPLETE EXTERIOR CLEANING",
            icon: "droplets",
            items: ["Foam Wash", "Decontamination", "Polishing", "Wax / Sealant", "Tyre Dressing"]
        },
        {
            title: "COMPLETE INTERIOR CLEANING",
            icon: "star",
            items: ["Deep Vacuum", "Seat & Carpet Cleaning", "Dashboard & Panels Cleaning", "Sanitization"]
        },
        {
            title: "PAINT PROTECTION",
            icon: "shield",
            items: ["Polish", "Sealant / Wax", "Long-Lasting Protection & Shine"]
        },
        {
            title: "ENGINE BAY CLEANING",
            icon: "zap",
            items: ["Safe & Effective Cleaning", "Fresh Engine Bay Appearance"]
        },
        {
            title: "FINAL TOUCH & FRAGRANCE",
            icon: "star",
            items: ["Glass Cleaning", "Perfume Treatment", "Final Quality Check"]
        }
    ],
    benefits: [
        "Showroom Finish",
        "Enhances Gloss & Shine",
        "Protects Your Investment",
        "Improves Interior Hygiene",
        "Better Driving Experience"
    ],
    process: [
        { step: "01", title: "EXTERIOR POLISHING", desc: "Complete exterior foam wash, decontamination and professional machine polishing." },
        { step: "02", title: "INTERIOR CLEANING", desc: "Deep interior vacuum, seat & carpet extraction and full sanitization." },
        { step: "03", title: "ENGINE BAY CLEANING", desc: "Safe degreasing and dressing for a clean engine bay." },
        { step: "04", title: "FINAL SHINE", desc: "Wax / sealant, tyre dressing, glass polish and final quality inspection." }
    ]
};
