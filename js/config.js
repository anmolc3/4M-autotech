/**
 * 4M AUTOTECH — Site Configuration
 * Update this file to change business information site-wide.
 */

const SITE_CONFIG = {
    // Business
    businessName: "4M AUTOTECH",
    detailingName: "Khawaja Garib Nawaz Car Detailing",
    brandTagline: "A Khawaja Garib Nawaz Car Detailing Brand",
    tagline: "CARE TODAY • PERFORMANCE TOMORROW",

    // Contact
    phone: "+919999746003",
    phoneDisplay: "+91 9999746003",
    whatsapp: "919999746003",
    email: "info@khawajagaribnawaz.com",          // primary (used in footers)
    emails: [
        "Info@khawajagaribnawaz.com",
        "Admin@khawajagaribnawaz.com",
        "Salemanger@khawajagaribnawaz.com",
        "gm@khawajagaribnawaz.com",
        "marketingmanager@khawajagaribnawaz.com",
        "saleadviser@khawajagaribnawaz.com"
    ],

    // Address
    address: "H. No. 820, Block B, Phase 2,\nGautampuri, Badarpur,\nNew Delhi - 110044",
    addressLine1: "H. No. 820, Block B, Phase 2",
    addressLine2: "Gautampuri, Badarpur",
    addressLine3: "New Delhi - 110044",

    // Legal
    website: "www.khawajagaribnawazcardetailing.com",

    // Google Maps Embed & URL
    googleMapsUrl: "https://www.google.com/maps?q=Gautampuri+Badarpur+New+Delhi+110044",
    googleMapsEmbed: "https://maps.google.com/maps?q=H.+No.+820,+Block+B,+Phase+2,+Gautampuri,+Badarpur,+New+Delhi+-+110044&t=&z=15&ie=UTF8&iwloc=&output=embed",

    // Social Media — insert actual profile URLs when available
    facebook: "",   // e.g. "https://www.facebook.com/yourpage"
    instagram: "",  // e.g. "https://www.instagram.com/yourhandle"
    youtube: "",    // e.g. "https://www.youtube.com/@yourchannel"

    // WhatsApp pre-filled messages
    waMessages: {
        general: "Hello, I am interested in 4M Autotech products. Please provide more information.",
        services: "Hello, I would like to enquire about your car detailing services.",
        productTemplate: (name) => `Hello, I am interested in 4M Autotech ${name}. Please provide more details.`,
        carSpa: "Hello, I would like to enquire about the Car Spa detailing package.",
        homeService: "Hello 4M Autotech, I would like to book a Doorstep Car Care / Home Service for my vehicle."
    }
};

// Helper: build WhatsApp URL
function whatsappUrl(message) {
    const cleanNumber = (SITE_CONFIG.whatsapp || "919999746003").replace(/[^0-9]/g, '');
    if (message) {
        return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    }
    return `https://wa.me/${cleanNumber}`;
}

// Helper: build call URL
function callUrl() {
    return `tel:${SITE_CONFIG.phone}`;
}

