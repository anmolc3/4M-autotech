/**
 * 4M AUTOTECH — Site Configuration
 * Update this file to change business information site-wide.
 */

const SITE_CONFIG = {
    // Business
    businessName: "4M AUTOTECH",
    detailingName: "Khawaja Garib Nawaz Car Detailing",
    tagline: "CARE TODAY • PERFORMANCE TOMORROW",

    // Contact
    phone: "+919999746003",
    phoneDisplay: "+91 9999746003",
    whatsapp: "+919999746003",
    email: "khawajagaribnawaz66@gmail.com",

    // Address
    address: "H. No. 820, Block B, Phase 2,\nGautampuri, Badarpur,\nNew Delhi - 110044",
    addressLine1: "H. No. 820, Block B, Phase 2",
    addressLine2: "Gautampuri, Badarpur",
    addressLine3: "New Delhi - 110044",

    // Legal
    gst: "07AINPY5452B1ZZ",
    website: "www.khawajagaribnawazcardetailing.com",

    // Google Maps — insert your embed URL here
    // Example: "https://www.google.com/maps/embed?pb=..."
    googleMapsUrl: "https://www.google.com/maps?q=Gautampuri+Badarpur+New+Delhi+110044",
    googleMapsEmbed: "", // Paste full embed iframe src here

    // Social Media — insert actual profile URLs when available
    facebook: "",   // e.g. "https://www.facebook.com/yourpage"
    instagram: "",  // e.g. "https://www.instagram.com/yourhandle"
    youtube: "",    // e.g. "https://www.youtube.com/@yourchannel"

    // WhatsApp pre-filled messages
    waMessages: {
        general: "Hello, I am interested in 4M Autotech products. Please provide more information.",
        services: "Hello, I would like to enquire about your car detailing services.",
        productTemplate: (name) => `Hello, I am interested in 4M Autotech ${name}. Please provide more details.`,
        carSpa: "Hello, I would like to enquire about the Car Spa detailing package."
    }
};

// Helper: build WhatsApp URL
function whatsappUrl(message) {
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Helper: build call URL
function callUrl() {
    return `tel:${SITE_CONFIG.phone}`;
}
