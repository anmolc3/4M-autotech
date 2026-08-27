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
    },
    {
        id: "ac-duct-cleaner",
        name: "AC Duct Cleaning",
        subtitle: "Foaming Disinfectant & Odor Purifier",
        tagline: "PURIFY • DISINFECT • REFRESH",
        category: ["interior-care", "cleaners"],
        categoryLabel: "Interior Care",
        accentColor: "#00ACC1",
        accentLight: "rgba(0,172,193,0.15)",
        size: "300 ml",
        image: "assets/images/products/ac-duct-cleaner.svg",
        imagePlaceholder: "#00ACC1",
        description: "4M Autotech AC Duct Cleaner is an anti-bacterial foaming aerosol formula that deeply cleans evaporator coils, vents, and air ducts, eliminating mold, bacteria, and foul odors for long-lasting cabin freshness.",
        benefits: [
            "Eliminates 99.9% mold, mildew & bacteria",
            "Removes foul AC damp smell",
            "Improves cooling airflow efficiency",
            "Includes extended flexible application hose",
            "Leaves a refreshing natural fragrance",
            "Safe for all automotive AC systems"
        ],
        howToUse: [
            "Turn off vehicle ignition and AC system.",
            "Insert the extended application tube deep into AC vents.",
            "Spray foam generously until duct fills up.",
            "Let the active foam soak and dissolve grime for 10-15 minutes.",
            "Start engine, turn AC to MAX fan speed on fresh air mode for 5 minutes."
        ],
        recommendedUse: "Dashboard AC vents, Center vents, Rear blower vents, Evaporator ducting.",
        caution: [
            "Keep out of reach of children.",
            "Do not spray near electrical switches or dashboard displays.",
            "Use in a well-ventilated area.",
            "Aerosol contents under pressure."
        ]
    },
    {
        id: "rust-removal",
        name: "Rust Removal",
        subtitle: "Rapid Oxidation & Corrosion Dissolver",
        tagline: "DISSOLVE • RESTORE • PROTECT",
        category: ["engine-care", "protection", "cleaners"],
        categoryLabel: "Protection",
        accentColor: "#E65100",
        accentLight: "rgba(230,81,0,0.15)",
        size: "300 ml",
        image: "assets/images/products/rust-removal.svg",
        imagePlaceholder: "#E65100",
        description: "4M Autotech Rust Removal quickly dissolves stubborn rust, surface oxidation, and scale on automotive metal components without damaging base metal or threads.",
        benefits: [
            "Fast-acting rust and oxidation breakdown",
            "Penetrates seized nuts, bolts, and chassis joints",
            "Non-acidic surface-safe chemical formulation",
            "Leaves an anti-corrosion protective film",
            "Restores bare metal finish"
        ],
        howToUse: [
            "Spray directly onto rusted metal or seized fastener.",
            "Allow product to penetrate for 3 to 5 minutes.",
            "Use a wire brush or microfiber to scrub dissolved rust.",
            "Wipe clean and follow up with protective coating."
        ],
        recommendedUse: "Exhaust pipes, Chassis nuts & bolts, Suspension components, Tools, Battery trays.",
        caution: [
            "Avoid contact with vehicle paint and polished clear coats.",
            "Wear safety gloves during application.",
            "Store in a cool and dry place."
        ]
    },
    {
        id: "chain-cleaner",
        name: "Chain Cleaner",
        subtitle: "Heavy Duty Drive Chain Degreaser",
        tagline: "POWER DEGREASING • QUICK DRY • RING SAFE",
        category: ["engine-care", "cleaners"],
        categoryLabel: "Engine Care",
        accentColor: "#43A047",
        accentLight: "rgba(67,160,71,0.15)",
        size: "300 ml",
        image: "assets/images/products/chain-cleaner.svg",
        imagePlaceholder: "#43A047",
        description: "4M Autotech Chain Cleaner is an ultra-high-pressure cleaning spray engineered to dissolve hardened grease, road grime, and chain oil deposits without harming O-Ring, X-Ring, or Z-Ring seals.",
        benefits: [
            "Instantly blasts away sticky sludge and road grit",
            "100% safe for O/X/Z-Ring rubber seals",
            "Rapid evaporation with zero oily residue",
            "Reduces drivetrain friction and sprocket wear",
            "Prepares chain for optimal lube adhesion"
        ],
        howToUse: [
            "Place bike on center stand or paddock stand.",
            "Spray generously onto chain while slowly rotating rear wheel.",
            "Allow degreaser to break down dirt, scrub with grunge brush if needed.",
            "Wipe dry with clean cloth before applying chain lubricant."
        ],
        recommendedUse: "Motorcycle drive chains, Bicycle chains, Industrial drive linkages, Sprockets.",
        caution: [
            "Do not apply while motorcycle engine is running in gear.",
            "Keep away from brake discs and pads.",
            "Extremely flammable aerosol."
        ]
    },
    {
        id: "chain-lubricant",
        name: "Chain Lubricant",
        subtitle: "Synthetic Anti-Fling Chain Lube",
        tagline: "HIGH SPEED • NO FLING • WATERPROOF",
        category: ["engine-care", "protection", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#FBC02D",
        accentLight: "rgba(251,192,45,0.15)",
        size: "300 ml",
        image: "assets/images/products/chain-lubricant.svg",
        imagePlaceholder: "#FBC02D",
        description: "4M Autotech Synthetic Chain Lubricant utilizes high-tack PTFE ceramic polymers to provide ultra-durable boundary lubrication, preventing metal-to-metal wear, corrosion, and high-speed fling.",
        benefits: [
            "Advanced anti-fling tack formula",
            "Resists heavy rain and high-pressure water wash",
            "PTFE & ceramic micro-barrier for ultra-smooth power delivery",
            "Protects chain links and sprockets from friction elongation",
            "All-weather extreme temperature stability"
        ],
        howToUse: [
            "Ensure chain is clean and dry using 4M Chain Cleaner.",
            "Shake can vigorously for 30 seconds.",
            "Spray evenly on the inside run of chain while rotating wheel.",
            "Allow 15-20 minutes curing time before riding for anti-fling lock."
        ],
        recommendedUse: "High-performance superbikes, Cruiser & commuter motorcycles, Go-karts, ATVs.",
        caution: [
            "Do not spray on tyre treads, brake discs or calipers.",
            "Shake well before each use.",
            "Store below 50°C."
        ]
    },
    {
        id: "bike-body-polish",
        name: "Bike Body Polish",
        subtitle: "Perfect Shine & Protection",
        tagline: "REMOVES SWIRLS • RESTORES ORIGINAL GLOSS • UV PROTECT",
        category: ["exterior-care", "polish", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#7B1FA2",
        accentLight: "rgba(123,31,162,0.15)",
        size: "300 ml",
        image: "assets/images/products/bike-body-polish.svg",
        imagePlaceholder: "#7B1FA2",
        description: "4M Autotech Bike Body Polish is a premium German formula specially developed to eliminate swirl marks, light scratches, and oxidation while restoring depth and gloss on all motorcycle finishes.",
        benefits: [
            "Removes swirls & fine scratches",
            "Restores showroom gloss & paint depth",
            "Protects from UV rays, dust & road grime",
            "Safe for metallic, gloss & matte bike paints",
            "Smooth mirror-like hydrophobic finish"
        ],
        howToUse: [
            "Wash and dry bike completely.",
            "Shake well before use.",
            "Apply small amount on applicator or microfiber cloth.",
            "Spread evenly in circular motions.",
            "Allow to dry to a light haze and buff to a deep shine."
        ],
        recommendedUse: "Sports bikes, Commuter bikes, Scooters, Cruiser bikes. All motorcycle paint surfaces.",
        caution: [
            "Do not apply on hot surfaces or in direct sunlight.",
            "Do not apply on tyres, seats or brake parts.",
            "Keep out of reach of children."
        ]
    },
    {
        id: "bike-engine-flushing",
        name: "Bike Engine Flushing",
        subtitle: "Deep Engine Clean in 10 Minutes",
        tagline: "CLEAN ENGINE • SMOOTHER PICKUP • BETTER MILEAGE",
        category: ["engine-care", "fuel-care", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#2E7D32",
        accentLight: "rgba(46,125,50,0.15)",
        size: "60 ml",
        image: "assets/images/products/bike-engine-flushing.svg",
        imagePlaceholder: "#2E7D32",
        description: "4M Autotech Bike Engine Flushing is a high-performance German formula designed to deeply clean internal 4-stroke motorcycle engine components, dissolving sludge, gum, carbon, and varnish deposits before oil change.",
        benefits: [
            "Removes sludge, carbon & varnish deposits in 10 mins",
            "Cleans oil passages and piston galleries",
            "Restores compression and improves engine pickup",
            "Reduces friction, engine noise, and operating heat",
            "Safe for catalytic converters & all 4T bike engines"
        ],
        howToUse: [
            "Ride bike for 5-10 minutes to warm engine.",
            "Switch off engine.",
            "Add entire 60 ml bottle into old engine oil.",
            "Start engine and let it idle for 8-10 minutes (do not rev).",
            "Switch off engine, drain old oil completely, and replace with new oil & filter."
        ],
        recommendedUse: "Use every 3,000 – 4,000 km before engine oil change for all 4-stroke motorcycles & scooters.",
        caution: [
            "Do not use in 2-stroke engines.",
            "Do not drive or rev bike while flushing is in engine.",
            "Keep out of reach of children."
        ]
    },
    {
        id: "bike-chain-lube",
        name: "Bike Chain Lubricant Spray",
        subtitle: "Superior Drivetrain Lubrication",
        tagline: "SUPERIOR LUBRICATION • MAXIMUM PROTECTION",
        category: ["engine-care", "protection", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#D32F2F",
        accentLight: "rgba(211,47,47,0.15)",
        size: "60 ml",
        image: "assets/images/products/bike-chain-lube.svg",
        imagePlaceholder: "#D32F2F",
        description: "4M Autotech Bike Chain Lubricant Spray provides high-tack synthetic lubrication engineered to penetrate deep into pin bushings, preventing chain elongation and resisting water wash-off without messy fling.",
        benefits: [
            "Reduces friction & sprocket tooth wear",
            "100% safe for O-Ring, X-Ring & Z-Ring chains",
            "Water, dust & road grime repellent",
            "Prevents rust and corrosive road salt attack",
            "Ensures smooth, quieter power transmission"
        ],
        howToUse: [
            "Clean chain thoroughly with Chain Cleaner.",
            "Shake can well before use.",
            "Spray evenly on the inner rollers while rotating wheel.",
            "Allow a few minutes for tack bonding before riding."
        ],
        recommendedUse: "Sports bikes, Commuters, Scooters, Cruisers, Off-road bikes. Apply every 500-800 km.",
        caution: [
            "Do not spray on brake discs, pads or tyre contact patches.",
            "Aerosol under pressure."
        ]
    },
    {
        id: "monogram-cleaner",
        name: "Monogram Cleaner Spray",
        subtitle: "Ultimate Emblems & Logos Cleaner",
        tagline: "CLEAN • RESTORE • PROTECT",
        category: ["exterior-care", "cleaners", "car-care"],
        categoryLabel: "Car Care",
        vehicleType: "car",
        accentColor: "#0288D1",
        accentLight: "rgba(2,136,209,0.15)",
        size: "500 ml",
        image: "assets/images/products/monogram-cleaner.svg",
        imagePlaceholder: "#0288D1",
        description: "4M Autotech Monogram Cleaner Spray is specially formulated to lift and dissolve stubborn dirt, water scale, and road grime from vehicle badges, monograms, logos, and spare wheel covers without scratching.",
        benefits: [
            "Deep cleaning action for intricate letters & badges",
            "Restores original chrome & gloss brightness",
            "Zero scratches — gentle on clear coat & paint",
            "Safe on ABS plastic, chrome, metal & fiberglass",
            "Quick drying, residue-free formula with fresh fragrance"
        ],
        howToUse: [
            "Shake well before use.",
            "Spray directly on emblem, badge or spare wheel cover.",
            "Allow product to dwell for 15-30 seconds.",
            "Gently agitate with soft detailing brush or microfiber.",
            "Wipe clean with a dry microfiber cloth."
        ],
        recommendedUse: "Car badges, Chrome monograms, SUV spare wheel covers, Lettering, Emblems.",
        caution: [
            "Do not spray on hot vehicle surfaces.",
            "Use in well-ventilated areas."
        ]
    },
    {
        id: "brake-disc-cleaner",
        name: "Brake Disc & Parts Cleaner",
        subtitle: "High Performance Degreaser Spray",
        tagline: "CLEAN • DEGREASE • RESTORE BRAKING",
        category: ["engine-care", "cleaners", "bike-care", "car-care"],
        categoryLabel: "Engine Care",
        vehicleType: "both",
        accentColor: "#C62828",
        accentLight: "rgba(198,40,40,0.15)",
        size: "600 ml",
        image: "assets/images/products/brake-disc-cleaner.svg",
        imagePlaceholder: "#C62828",
        description: "4M Autotech Brake Disc & Parts Cleaner is an industrial-strength aerosol degreaser formulated to blast away stubborn brake dust, fluid, oil, and road grime from discs, calipers, and pads.",
        benefits: [
            "Rapidly removes brake dust, grease, and oil",
            "Restores optimal braking grip & eliminates squeal",
            "Ultra fast drying with zero powdery residue",
            "Safe on alloy wheels, stainless steel & calipers",
            "Professional grade German formulation"
        ],
        howToUse: [
            "Shake can vigorously.",
            "Spray generously directly onto brake disc, rotor, and caliper.",
            "Allow solvent to dissolve grime and drip dry.",
            "Wipe with clean cloth if heavy grease is present."
        ],
        recommendedUse: "Disc brakes, Drum brakes, Calipers, Rotors, Clutch components on cars & bikes.",
        caution: [
            "Do not spray on hot brake rotors.",
            "Avoid contact with rubber seals and painted body panels."
        ]
    },
    {
        id: "bike-rust-mast",
        name: "Bike Rust Mast",
        subtitle: "Multi-Purpose Rust Lubricant Spray",
        tagline: "PENETRATES FAST • LOOSENS RUST • STOPS SQUEAKS",
        category: ["protection", "cleaners", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#E65100",
        accentLight: "rgba(230,81,0,0.15)",
        size: "60 ml",
        image: "assets/images/products/bike-rust-mast.svg",
        imagePlaceholder: "#E65100",
        description: "4M Autotech Bike Rust Mast is an all-angle 360° penetrant and lubricant spray that rapidly breaks down rust on seized bolts, linkages, footrests, and cables while driving out moisture.",
        benefits: [
            "Instantly loosens rusted nuts, bolts & fasteners",
            "Stops squeaks and lubricates moving bike parts",
            "Drives out moisture from electrical switches & spark plugs",
            "360° spray valve operates at any angle upside down",
            "Leaves a long-lasting anti-corrosion barrier"
        ],
        howToUse: [
            "Shake can well before application.",
            "Spray directly on rusted or squeaking parts.",
            "Allow 2-3 minutes for deep capillary penetration.",
            "Loosen part with tool or wipe excess."
        ],
        recommendedUse: "Chains, Nuts & bolts, Screws, Hinges, Main & side stands, Footrests, Levers, Cables, Silencer joints.",
        caution: [
            "Do not spray on brakes or tyre contact surfaces.",
            "Extremely flammable."
        ]
    },
    {
        id: "bike-teflon-coating",
        name: "Bike Teflon Coating",
        subtitle: "Premium Protective Spray",
        tagline: "SHINE • PROTECT • REPEL • PERFORM",
        category: ["protection", "exterior-care", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#1565C0",
        accentLight: "rgba(21,101,192,0.15)",
        size: "60 ml",
        image: "assets/images/products/bike-teflon-coating.svg",
        imagePlaceholder: "#1565C0",
        description: "4M Autotech Bike Teflon Coating is a PTFE molecular protective spray that creates an invisible hydrophobic shield over fuel tanks, fairings, and metal parts to repel dust, water, and UV fading.",
        benefits: [
            "High gloss showroom shine with PTFE sealant",
            "Extreme water beading and dust repelling shield",
            "Shields against UV paint oxidation & fading",
            "Prevents rust and corrosion on exposed metal",
            "Quick wipe application — long lasting protection"
        ],
        howToUse: [
            "Wash and dry bike completely.",
            "Shake can well before use.",
            "Spray evenly from a distance of 15-20 cm.",
            "Allow 2-3 minutes for molecular bonding.",
            "Buff to a glossy finish with a clean microfiber cloth."
        ],
        recommendedUse: "Sports bikes, Commuters, Scooters, Cruisers, Dirt bikes. Safe on paint, plastic, chrome & metal.",
        caution: [
            "Do not apply on tyres, seats or brake discs.",
            "Do not apply in direct hot sunlight."
        ]
    },
    {
        id: "bike-chain-cleaner",
        name: "Bike Chain Cleaner",
        subtitle: "Spray Chain Cleaner & Degreaser",
        tagline: "DEEP CLEAN • FAST DRY • SAFE FOR O-RINGS",
        category: ["engine-care", "cleaners", "bike-care"],
        categoryLabel: "Bike Care",
        vehicleType: "bike",
        accentColor: "#00838F",
        accentLight: "rgba(0,131,143,0.15)",
        size: "60 ml",
        image: "assets/images/products/bike-chain-cleaner.svg",
        imagePlaceholder: "#00838F",
        description: "4M Autotech Bike Chain Cleaner is a specialized compact degreaser designed to instantly dissolve oil, grit, and old chain lube from motorcycle drive chains without damaging delicate rubber O/X/Z-Rings.",
        benefits: [
            "Removes stubborn road grit, grease & old lube",
            "100% O-Ring, X-Ring & Z-Ring safe",
            "Cleans chain links and sprocket teeth for smooth ride",
            "Fast drying formula leaves zero oily film",
            "Easy portable spray can"
        ],
        howToUse: [
            "Put bike on main stand.",
            "Spray directly on chain and sprockets.",
            "Allow 2-3 minutes to dissolve dirt; scrub with brush if required.",
            "Wipe clean with cloth and apply chain lube."
        ],
        recommendedUse: "All motorcycle drive chains, Sprockets, Commuters & Superbikes.",
        caution: [
            "Do not apply on hot chains.",
            "Do not spray on brake pads or discs."
        ]
    }
];

// Add vehicleType default 'car' to earlier products if not specified
PRODUCTS.forEach(p => {
    if (!p.vehicleType) {
        if (p.id.startsWith('bike-') || p.id.includes('chain-')) {
            p.vehicleType = 'bike';
        } else if (p.id === 'fuel-additive' || p.id === 'tyre-polish' || p.id === 'brake-cleaner') {
            p.vehicleType = 'both';
        } else {
            p.vehicleType = 'car';
        }
    }
});

// Filter categories
const PRODUCT_CATEGORIES = [
    { id: "all", label: "ALL PRODUCTS" },
    { id: "car-care", label: "CAR CARE", iconName: "car" },
    { id: "bike-care", label: "BIKE CARE", iconName: "bike" },
    { id: "exterior-care", label: "EXTERIOR CARE" },
    { id: "interior-care", label: "INTERIOR CARE" },
    { id: "engine-care", label: "ENGINE CARE" },
    { id: "cleaners", label: "CLEANERS" },
    { id: "polish", label: "POLISH" },
    { id: "protection", label: "PROTECTION" }
];

