/**
 * 4M AUTOTECH — Product Data
 * All product information sourced from official product creatives.
 */

const PRODUCTS = [
    {
        id: "fuel-additive",
        name: "Fuel Additive",
        subtitle: "Complete Fuel System Cleaner",
        tagline: "IMPROVE FUEL QUALITY & ENGINE PERFORMANCE",
        category: ["fuel-care", "engine-care"],
        categoryLabel: "Fuel Care",
        accentColor: "#D71920",
        accentLight: "rgba(215,25,32,0.15)",
        size: "300 ml",
        mrp: "₹499.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/fuel-additive.png",
        imagePlaceholder: "#D71920",
        description: "4M Autotech Fuel Additive is a high performance fuel system cleaner specially formulated to clean and protect the entire fuel system. It removes deposits, improves fuel economy, reduces emissions and enhances engine performance.",
        benefits: [
            "Cleans injectors, valves & combustion chamber",
            "Improves fuel economy",
            "Reduces harmful emissions",
            "Enhances engine pickup",
            "Smooth engine performance",
            "Safe for all gasoline & diesel engines",
            "Environment friendly — helps reduce harmful emissions"
        ],
        howToUse: [
            "Add entire bottle (300 ml) to fuel tank before filling.",
            "Drive normally to allow the fuel system to clean.",
            "For best results, use every 5,000 – 10,000 km."
        ],
        recommendedUse: "Every 5,000 – 10,000 km. Suitable for Hatchback, Sedan, SUV & MUV — all petrol vehicles.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "Store in a cool & dry place.",
            "For professional use only."
        ],
        batchNo: "KGN-240502",
        mfgDate: "May 2024",
        expDate: "Apr 2027",
        manufacturer: "KGN Automotive Care Solutions, H. No. 820, Block B, Phase 2, Gautampuri, Badarpur, New Delhi – 110044"
    },
    {
        id: "tyre-polish",
        name: "Tyre Polish",
        subtitle: "Premium Tyre Care",
        tagline: "SHINE • PROTECT • RESTORE",
        category: ["exterior-care", "polish"],
        categoryLabel: "Exterior Care",
        accentColor: "#E6A817",
        accentLight: "rgba(230,168,23,0.15)",
        size: "300 ml",
        mrp: "₹349.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/tyre-polish.png",
        imagePlaceholder: "#E6A817",
        description: "4M Autotech Tyre Polish is a premium quality tyre care product designed to give your tyres a deep black shine and long lasting protection.",
        benefits: [
            "Gives deep black shine",
            "Protects from UV rays",
            "Prevents cracking & fading",
            "Repels dust, dirt & mud",
            "Long lasting protection",
            "Non-greasy & non-sticky",
            "Enhances overall look",
            "Suitable for all tyres"
        ],
        howToUse: [
            "Shake well before use.",
            "Spray evenly on clean & dry tyre surface.",
            "Spread evenly with sponge or cloth.",
            "Let it dry for 2–3 minutes.",
            "Enjoy long lasting shine & protection."
        ],
        recommendedUse: "Car Tyres, Bike Tyres, SUV Tyres, Truck Tyres, All types of rubber surfaces.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "Use in well ventilated area.",
            "Do not apply on brakes, disc or treads.",
            "For external use only."
        ],
        batchNo: "KGN-240612",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "black-garnish",
        name: "Black Garnish",
        subtitle: "Exterior Black Parts Restorer",
        tagline: "INSTANT SHINE • PROTECT • RESTORE",
        category: ["exterior-care", "protection"],
        categoryLabel: "Exterior Care",
        accentColor: "#E6A817",
        accentLight: "rgba(230,168,23,0.15)",
        size: "300 ml",
        mrp: "₹349.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/black-garnish.png",
        imagePlaceholder: "#E6A817",
        description: "Brings New Life to All Exterior Black Parts. 4M Autotech Black Garnish instantly restores the original black appearance of all exterior plastic and rubber trims.",
        benefits: [
            "Restores original black appearance",
            "Protects from UV rays & fading",
            "Shields from dust, dirt & pollution",
            "Enhances exterior look instantly",
            "Non greasy & non sticky",
            "Water resistant protection",
            "Long lasting performance",
            "Safe for all black trims"
        ],
        howToUse: [
            "Shake well before use.",
            "Spray on a clean soft cloth or applicator.",
            "Apply evenly on the black surface.",
            "Let it dry for 1–2 minutes.",
            "Wipe off excess for a perfect shine."
        ],
        recommendedUse: "Bumpers, Side Mirrors, Door Trims, Window Trims, Wheel Arches, Roof Rails, Mud Flaps, Spoilers.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "For external use only."
        ],
        batchNo: "KGN-240614",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "brake-cleaner",
        name: "Brake Cleaner",
        subtitle: "Heavy Duty Cleaner",
        tagline: "CLEANER BRAKES • SAFE FORMULA • QUICK DRY",
        category: ["engine-care", "cleaners"],
        categoryLabel: "Engine Care",
        accentColor: "#D71920",
        accentLight: "rgba(215,25,32,0.15)",
        size: "300 ml",
        mrp: "₹499.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/brake-cleaner.png",
        imagePlaceholder: "#1B4F8C",
        description: "4M Autotech Brake Cleaner is a heavy duty cleaner formulated to quickly clean brake and clutch components by removing oil, grease and brake fluid residue.",
        benefits: [
            "Cleans brake parts effectively",
            "Removes oil, grease & brake fluid",
            "Dries fast & leaves no residue",
            "Improves braking performance",
            "Safe on metal parts",
            "Non-corrosive formula"
        ],
        howToUse: [
            "Shake well before use.",
            "Spray directly on brake parts from 15–20 cm distance.",
            "Let it dry for a few seconds.",
            "Wipe with a clean cloth if needed."
        ],
        recommendedUse: "Brake parts, Clutch parts, Metal parts, Other automotive components.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "Use in a well ventilated area.",
            "Do not spray on hot surfaces.",
            "For professional use only."
        ],
        batchNo: "KGN-240603",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "head-light-cleaner",
        name: "Head Light Cleaner",
        subtitle: "Headlight Restoration Formula",
        tagline: "CLEAN • RESTORE • PROTECT",
        category: ["exterior-care", "cleaners"],
        categoryLabel: "Exterior Care",
        accentColor: "#1B4F8C",
        accentLight: "rgba(27,79,140,0.15)",
        size: "250 ml",
        mrp: "₹349.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/head-light-cleaner.png",
        imagePlaceholder: "#1B4F8C",
        description: "Crystal Clear Vision, Safer Driving. 4M Autotech Head Light Cleaner removes yellowing and oxidation to restore clarity and brightness to all headlights.",
        benefits: [
            "Removes yellowing & oxidation",
            "Restores clarity & brightness",
            "Improves night visibility",
            "Protects against UV rays",
            "Long lasting protection",
            "Safe on all headlight types",
            "Easy to use",
            "Enhances vehicle appearance",
            "Increases safety",
            "Professional grade formula"
        ],
        howToUse: [
            "Wash and dry the headlight thoroughly.",
            "Apply a small amount on sponge or applicator pad.",
            "Rub gently in circular motion until dirt and haze are removed.",
            "Wipe off with a clean microfiber cloth.",
            "Enjoy crystal clear headlights and better visibility."
        ],
        recommendedUse: "All types of car & bike headlights. Suitable for Plastic, Polycarbonate & Acrylic headlights.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "For external use only."
        ],
        batchNo: "KGN-240629",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "paint-spot-remover",
        name: "Paint Spot Remover",
        subtitle: "Powerful Spot Cleaning Formula",
        tagline: "REMOVE SPOTS • RESTORE SHINE • PROTECT PAINT",
        category: ["exterior-care", "cleaners"],
        categoryLabel: "Exterior Care",
        accentColor: "#D71920",
        accentLight: "rgba(215,25,32,0.15)",
        size: "250 ml",
        mrp: "₹349.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/paint-spot-remover.png",
        imagePlaceholder: "#D71920",
        description: "4M Autotech Paint Spot Remover is a specially developed formula to remove paint spots, over spray, water spots, rail dust and other stubborn contaminants from your vehicle's painted surface safely and effectively without damaging or scratching the original paint.",
        benefits: [
            "Removes paint spots & over spray",
            "Safe on all paint types",
            "No harsh chemicals",
            "Does not scratch or dull",
            "Restores shine & smoothness",
            "Easy to apply & wipe off",
            "Quick & effective results",
            "Maintains original paint",
            "Suitable for all colors",
            "Professional grade formula"
        ],
        howToUse: [
            "Wash and dry the vehicle properly.",
            "Apply a small amount on microfiber cloth or applicator pad.",
            "Gently rub affected area in circular motion with light pressure.",
            "Wipe off with a clean microfiber cloth before product dries.",
            "Inspect the area. Repeat if required for heavy spots."
        ],
        recommendedUse: "Paint spots, Over spray, Water spots, Industrial fallout, Painted surfaces.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "Test on a small area before full application.",
            "For external use only."
        ],
        batchNo: "KGN-240628",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "foam-wash-cleaner",
        name: "Foam Wash Cleaner",
        subtitle: "High Foam Car Shampoo",
        tagline: "CLEAN • DEGREASE • SHINE • PROTECT",
        category: ["exterior-care", "cleaners"],
        categoryLabel: "Exterior Care",
        accentColor: "#1B4F8C",
        accentLight: "rgba(27,79,140,0.15)",
        size: "300 ml",
        mrp: "₹349.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/foam-wash-cleaner.png",
        imagePlaceholder: "#1B4F8C",
        description: "4M Autotech Foam Wash Cleaner is a high foam car shampoo that delivers thick foam for deep cleaning, removing dirt, mud and road film safely.",
        benefits: [
            "Thick foam for deep cleaning",
            "Removes dirt, mud & road film",
            "Safe on wax, sealant & ceramic",
            "pH balanced & paint friendly",
            "Leaves a brilliant shine",
            "Prevents surface dullness",
            "Easy to rinse, no residue",
            "Environment friendly"
        ],
        howToUse: [
            "Dilute 20–30 ml in 5 liters of clean water.",
            "Apply the foam on the vehicle using sponge or foam gun.",
            "Gently wash the surface to remove dirt and grime.",
            "Rinse thoroughly with clean water.",
            "Wipe with clean microfiber cloth for extra shine."
        ],
        recommendedUse: "All types of vehicles. Regular vehicle washing.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "For external use only."
        ],
        batchNo: "KGN-240611",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "seat-dry-cleaner",
        name: "Seat Dry Cleaner",
        subtitle: "Dry Foam Formula",
        tagline: "POWERFUL CLEANING WITHOUT WATER",
        category: ["interior-care", "cleaners"],
        categoryLabel: "Interior Care",
        accentColor: "#1B4F8C",
        accentLight: "rgba(27,79,140,0.15)",
        size: "300 ml",
        mrp: "₹349.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/seat-dry-cleaner.png",
        imagePlaceholder: "#1B4F8C",
        description: "4M Autotech Seat Dry Cleaner uses a dry foam formula for powerful interior cleaning without water. Removes stains, dirt and spills while neutralizing odors.",
        benefits: [
            "Dry foam cleaning — no soaking",
            "Removes stains, dirt & spills",
            "Neutralizes odors & leaves fresh",
            "Safe on fabric, leather & vinyl",
            "Restores original look of seats",
            "Dries quickly",
            "Non sticky & residue free",
            "Ideal for regular use"
        ],
        howToUse: [
            "Shake well before use.",
            "Spray foam evenly on the surface from 15–20 cm.",
            "Gently scrub with soft brush or microfiber cloth.",
            "Wipe clean with dry microfiber cloth.",
            "Let it dry. Enjoy clean & fresh interior."
        ],
        recommendedUse: "Car seats, Sofa seats, Fabric upholstery, Leather seats, Door panels, Roof lining.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "For interior use on upholstery only."
        ],
        batchNo: "KGN-240615",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "dashboard-polish",
        name: "Dashboard Polish",
        subtitle: "Premium Interior Care",
        tagline: "CLEAN • SHINE • PROTECT",
        category: ["interior-care", "polish"],
        categoryLabel: "Interior Care",
        accentColor: "#2E7D32",
        accentLight: "rgba(46,125,50,0.15)",
        size: "300 ml",
        mrp: "₹399.00",
        mrpNote: "including all taxes",
        image: "assets/images/products/dashboard-polish.png",
        imagePlaceholder: "#2E7D32",
        description: "4M Autotech Dashboard Polish is a premium interior care product that restores the original look of your dashboard and all interior surfaces with long-lasting shine and UV protection.",
        benefits: [
            "Restores original look",
            "UV protection",
            "Dust repellent",
            "Non greasy formula",
            "Long lasting shine",
            "Safe for all interior surfaces"
        ],
        howToUse: [
            "Shake well before use.",
            "Spray directly on surface or on a cloth.",
            "Spread evenly over dashboard or interior surface.",
            "Wipe gently with a clean dry cloth.",
            "Enjoy shine & protection."
        ],
        recommendedUse: "Dashboard, Door panels, Plastic trims, Center console, AC vents.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow.",
            "For interior use only."
        ],
        batchNo: "KDP-240610",
        mfgDate: "May 2024",
        expDate: "Apr 2027"
    },
    {
        id: "anti-rust-coating",
        name: "Anti Rust Coating",
        subtitle: "Rust Protection Formula",
        tagline: "PROTECT • PREVENT • PRESERVE",
        category: ["protection", "exterior-care"],
        categoryLabel: "Protection",
        accentColor: "#8B4513",
        accentLight: "rgba(139,69,19,0.15)",
        size: "300 ml",
        mrp: null,
        image: "assets/images/products/anti-rust-coating.png",
        imagePlaceholder: "#8B4513",
        description: "4M Autotech Anti Rust Coating provides powerful protection against rust and corrosion on exposed metal surfaces, extending the life of your vehicle's body panels and components.",
        benefits: [
            "Prevents rust & corrosion",
            "Long-lasting protection",
            "Safe on metal surfaces",
            "Easy to apply"
        ],
        howToUse: [
            "Clean the surface thoroughly before application.",
            "Shake well before use.",
            "Apply evenly on the metal surface.",
            "Allow to dry completely."
        ],
        recommendedUse: "Exposed metal parts, Under body, Chassis components.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Use in well ventilated area."
        ]
    },
    {
        id: "rubbing-polish",
        name: "Rubbing Polish",
        subtitle: "Paint Restoration Polish",
        tagline: "RESTORE • REFINE • SHINE",
        category: ["exterior-care", "polish"],
        categoryLabel: "Exterior Care",
        accentColor: "#607D8B",
        accentLight: "rgba(96,125,139,0.15)",
        size: "300 ml",
        mrp: null,
        image: "assets/images/products/rubbing-polish.png",
        imagePlaceholder: "#607D8B",
        description: "4M Autotech Rubbing Polish is a paint restoration formula that removes light scratches, swirl marks and surface imperfections to restore the original gloss and depth of your vehicle's paint.",
        benefits: [
            "Removes light scratches & swirl marks",
            "Restores paint gloss & depth",
            "Smooth finish",
            "Easy to apply by hand or machine"
        ],
        howToUse: [
            "Wash and dry the vehicle.",
            "Apply a small amount on applicator pad.",
            "Work in circular motions on the affected area.",
            "Buff off with a clean microfiber cloth."
        ],
        recommendedUse: "All vehicle paint surfaces.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes.",
            "Test on small area first."
        ]
    },
    {
        id: "body-polish",
        name: "Body Polish",
        subtitle: "Full Body Shine Formula",
        tagline: "CLEAN • POLISH • PROTECT",
        category: ["exterior-care", "polish"],
        categoryLabel: "Exterior Care",
        accentColor: "#455A64",
        accentLight: "rgba(69,90,100,0.15)",
        size: "300 ml",
        mrp: null,
        image: "assets/images/products/body-polish.png",
        imagePlaceholder: "#455A64",
        description: "4M Autotech Body Polish delivers a brilliant shine to your vehicle's entire body surface while providing a protective layer against environmental contaminants.",
        benefits: [
            "Full body shine",
            "Light scratch concealment",
            "Protective layer",
            "Enhances paint depth & gloss"
        ],
        howToUse: [
            "Wash and dry the vehicle.",
            "Apply evenly with applicator pad.",
            "Work in circular motions section by section.",
            "Buff to a brilliant shine with microfiber cloth."
        ],
        recommendedUse: "All vehicle paint surfaces. Regular maintenance polishing.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes.",
            "Do not apply in direct sunlight."
        ]
    },
    {
        id: "teflon-coating",
        name: "Teflon Coating",
        subtitle: "Advanced Paint Protection",
        tagline: "PROTECT • SEAL • SHINE",
        category: ["protection", "exterior-care"],
        categoryLabel: "Protection",
        accentColor: "#546E7A",
        accentLight: "rgba(84,110,122,0.15)",
        size: "300 ml",
        mrp: null,
        image: "assets/images/products/teflon-coating.png",
        imagePlaceholder: "#546E7A",
        description: "4M Autotech Teflon Coating provides an advanced protective layer on your vehicle's paint surface, delivering long-lasting gloss and protection against environmental damage.",
        benefits: [
            "Advanced paint protection",
            "Long-lasting gloss",
            "Water repellent",
            "UV protection",
            "Easy to clean surface"
        ],
        howToUse: [
            "Wash and decontaminate the vehicle.",
            "Apply evenly on clean, dry paint surface.",
            "Allow to cure as directed.",
            "Buff to a glossy finish."
        ],
        recommendedUse: "All vehicle paint surfaces.",
        caution: [
            "Keep out of reach of children.",
            "Use in shaded, well-ventilated area.",
            "Avoid contact with eyes and skin."
        ]
    },
    {
        id: "battery-jelly",
        name: "Battery Jelly",
        subtitle: "Battery Terminal Protector",
        tagline: "PROTECT • PREVENT • PERFORM",
        category: ["engine-care", "protection"],
        categoryLabel: "Engine Care",
        accentColor: "#F57F17",
        accentLight: "rgba(245,127,23,0.15)",
        size: "50 g",
        mrp: null,
        image: "assets/images/products/battery-jelly.png",
        imagePlaceholder: "#F57F17",
        description: "4M Autotech Battery Jelly protects battery terminals and connections from corrosion, ensuring reliable electrical contact and extended battery life.",
        benefits: [
            "Prevents terminal corrosion",
            "Ensures reliable electrical contact",
            "Extends battery life",
            "Easy to apply"
        ],
        howToUse: [
            "Clean the battery terminals.",
            "Apply a thin layer of Battery Jelly on terminals and connections.",
            "Reconnect terminals."
        ],
        recommendedUse: "Car & vehicle battery terminals.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes.",
            "For external use on terminals only."
        ]
    },
    {
        id: "injector-cleaner",
        name: "Injector Cleaner",
        subtitle: "Fuel Injector Treatment",
        tagline: "CLEAN • RESTORE • PERFORM",
        category: ["engine-care", "fuel-care"],
        categoryLabel: "Engine Care",
        accentColor: "#1565C0",
        accentLight: "rgba(21,101,192,0.15)",
        size: "300 ml",
        mrp: null,
        image: "assets/images/products/injector-cleaner.png",
        imagePlaceholder: "#1565C0",
        description: "4M Autotech Injector Cleaner is specially formulated to clean fuel injectors and remove deposits that affect performance and fuel efficiency.",
        benefits: [
            "Cleans fuel injectors",
            "Removes carbon deposits",
            "Restores fuel flow",
            "Improves performance"
        ],
        howToUse: [
            "Add to fuel tank before filling.",
            "Drive normally to allow the treatment to work through the system.",
            "Use as recommended for maintenance."
        ],
        recommendedUse: "All petrol and diesel vehicles.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes and skin.",
            "Do not swallow."
        ]
    },
    {
        id: "chrome-cleaner",
        name: "Chrome Cleaner",
        subtitle: "Crom / Chrome Polish & Cleaner",
        tagline: "SHINE • RESTORE • PROTECT",
        category: ["exterior-care", "cleaners", "polish"],
        categoryLabel: "Exterior Care",
        accentColor: "#9E9E9E",
        accentLight: "rgba(158,158,158,0.15)",
        size: "300 ml",
        mrp: null,
        image: "assets/images/products/chrome-cleaner.png",
        imagePlaceholder: "#9E9E9E",
        description: "4M Autotech Chrome Cleaner restores the brilliant shine of all chrome and metal surfaces, removing tarnish, oxidation and water spots.",
        benefits: [
            "Restores chrome brilliance",
            "Removes tarnish & oxidation",
            "Long-lasting shine",
            "Safe on all chrome & metal surfaces"
        ],
        howToUse: [
            "Apply a small amount on soft cloth or applicator.",
            "Rub gently in circular motions on chrome surface.",
            "Buff to a brilliant shine with clean microfiber cloth."
        ],
        recommendedUse: "Chrome bumpers, Exhaust tips, Wheel trims, Chrome accents.",
        caution: [
            "Keep out of reach of children.",
            "Avoid contact with eyes.",
            "Do not use on painted surfaces."
        ]
    }
];

// Filter categories
const PRODUCT_CATEGORIES = [
    { id: "all", label: "ALL" },
    { id: "exterior-care", label: "EXTERIOR CARE" },
    { id: "interior-care", label: "INTERIOR CARE" },
    { id: "engine-care", label: "ENGINE CARE" },
    { id: "fuel-care", label: "FUEL CARE" },
    { id: "cleaners", label: "CLEANERS" },
    { id: "polish", label: "POLISH" },
    { id: "protection", label: "PROTECTION" }
];
