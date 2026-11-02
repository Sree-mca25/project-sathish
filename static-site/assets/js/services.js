/* ================================================================
   SATHISH MEDIA — Service Data Manager
   Pure LocalStorage | No Backend | Static Website
   Version 2.0 — Restructured Service Categories & Subcategories
   ================================================================ */

const SMH_SERVICES_KEY = 'sathish_services_v2';

/* ── Default Seed Data ──────────────────────────────────────── */
const SMH_DEFAULT_SERVICES = [
  /* ─── 1. VIDEOGRAPHY & PHOTOGRAPHY ───────────────────────── */
  {
    id: 'SRV-001', active: true,
    category: 'Videography & Photography', subcategory: 'Media Production',
    title: 'Videography & Photography',
    tagline: 'Cinematic Vision. Timeless Frames.',
    description: 'From cinematic 4K brand films and drone aerial shoots to wedding photography, fashion portfolios, and studio captures — our media production team delivers breathtaking visual content that tells your story with precision and artistry. We combine cutting-edge technology with creative direction to produce images and videos that leave a lasting impression.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500913268234-08b02c9f7440?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '📷', title: 'Professional DSLR & Cinema Cameras', desc: 'Full-frame cinema cameras and prime lenses for razor-sharp, cinematic imagery' },
      { icon: '🚁', title: 'Drone Aerial Photography & Video', desc: 'Licensed drone operators for breathtaking aerial footage and landscape captures' },
      { icon: '💒', title: 'Wedding & Event Photography', desc: 'Emotional storytelling and candid moments captured beautifully on your special day' },
      { icon: '👗', title: 'Fashion & Studio Photography', desc: 'High-fashion shoots with expert lighting setups and creative direction' },
      { icon: '🎬', title: '4K Cinematic Videography', desc: 'Brand films, product reels, corporate documentaries with cinematic grade post-production' },
      { icon: '✨', title: 'Expert Color Grading & Editing', desc: 'Professional post-processing, cinematic color grading, and motion graphics' },
    ],
    packages: [
      { name: 'Basic Photo', price: '₹5,000', badge: '', features: ['2-Hour Photo Session', '20 Edited Photos', '1 Location', 'Digital Delivery', '7-Day Delivery'] },
      { name: 'Photo + Video Combo', price: '₹20,000', badge: 'Most Popular', features: ['Full-Day Shoot (8 hrs)', '100+ Edited Photos', '3-Min Edited Video', 'Drone Shots', 'Color Grading', '5-Day Delivery'] },
      { name: 'Premium Production', price: '₹45,000', badge: 'Best Value', features: ['2-Day Full Production', '200+ Edited Photos', '5-Min Cinematic Film', 'Drone Aerial Footage', 'Voice Over & Music', 'Unlimited Revisions', 'Printed Album Included'] },
    ],
    process: [
      { step: 1, icon: '💬', title: 'Consultation', desc: 'We discuss your vision, goals, and shot requirements in detail.' },
      { step: 2, icon: '🗺️', title: 'Pre-Production', desc: 'Location scouting, shoot schedule, equipment and team preparation.' },
      { step: 3, icon: '📷', title: 'Photo & Video Shoot', desc: 'Our photographers and videographers capture every moment with precision.' },
      { step: 4, icon: '🖥️', title: 'Post-Production', desc: 'Professional editing, color grading, retouching, and motion graphics.' },
      { step: 5, icon: '📦', title: 'Delivery', desc: 'High-resolution files and video delivered via cloud storage.' },
    ],
    reviews: [
      { name: 'Abinaya M', initials: 'AM', rating: 5, text: 'Amazing photography and videography work! The team was professional and the results were stunning beyond expectations.' },
      { name: 'Sujith S', initials: 'SS', rating: 5, text: 'One of the best media production services in Salem. Drone shots were absolutely breathtaking!' },
      { name: 'Mohammed Majeed', initials: 'MM', rating: 5, text: 'The cinematic video they created for our brand was outstanding. Incredible team and creative direction.' },
    ],
    relatedIds: ['SRV-002', 'SRV-003', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-101', title: 'Wedding Photography & Videography',
        description: 'Professional wedding photography and cinematic videography services capturing every memorable moment with elegance and creativity.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Wedding Photography & Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Available Dates\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-102', title: 'Pre-Wedding Photography & Films',
        description: 'Creative pre-wedding photography and cinematic films designed to tell your love story beautifully.',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Pre-Wedding Photography & Films* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Location Options\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-103', title: 'Post-Wedding Photography & Videos',
        description: 'Premium post-wedding shoots and video productions capturing unforgettable moments after the wedding celebration.',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Post-Wedding Photography & Videos* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Available Dates\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-104', title: 'Candid Photography & Cinematic Videography',
        description: 'Authentic candid photography and cinematic videography focused on real emotions and spontaneous moments.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Candid Photography & Cinematic Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Available Dates\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-105', title: 'Event Photography & Videography',
        description: 'Complete photography and videography coverage for corporate, cultural, educational, and special events.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Event Photography & Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Event Date & Venue\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-106', title: 'Birthday Photography & Videography',
        description: 'Creative birthday photography and videography services designed to preserve joyful memories forever.',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Birthday Photography & Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Event Date & Venue\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-107', title: 'Corporate Photography & Video Production',
        description: 'Professional corporate photography and video production for branding, presentations, training, and business promotion.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Corporate Photography & Video Production* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Shoot Requirements\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-108', title: 'Product Photography & Promotional Videos',
        description: 'High-quality product photography and promotional videos that enhance brand visibility and increase customer engagement.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Product Photography & Promotional Videos* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Product Type & Quantity\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-109', title: 'Fashion Photography & Fashion Films',
        description: 'Creative fashion photography and cinematic fashion films for brands, designers, influencers, and campaigns.',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Fashion Photography & Fashion Films* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Shoot Concept & Requirements\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-110', title: 'Portrait Photography & Video Shoots',
        description: 'Personal and professional portrait photography with cinematic video storytelling and creative direction.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Portrait Photography & Video Shoots* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Session Type (Individual / Group)\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-111', title: 'Baby, Kids & Family Photography & Videos',
        description: 'Beautiful family photography and video sessions preserving precious memories for generations.',
        image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Baby, Kids & Family Photography & Videos* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Number of Family Members\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-112', title: 'Maternity & Newborn Photography & Videography',
        description: 'Elegant maternity and newborn photography capturing the beauty of parenthood and early childhood.',
        image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Maternity & Newborn Photography & Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Preferred Session Date\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-113', title: 'Food Photography & Food Videography',
        description: 'Professional food photography and videography for restaurants, cafes, food brands, and digital marketing campaigns.',
        image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Food Photography & Food Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Number of Dishes / Products\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-114', title: 'Real Estate Photography & Property Videos',
        description: 'High-quality property photography and cinematic real estate videos for marketing and promotional purposes.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Real Estate Photography & Property Videos* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Property Type & Location\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-115', title: 'Travel Photography & Travel Films',
        description: 'Creative travel photography and cinematic travel films showcasing destinations, experiences, and adventures.',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Travel Photography & Travel Films* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Destination & Travel Dates\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-116', title: 'Drone Photography & Videography',
        description: 'Professional drone photography and videography services delivering stunning aerial visuals and cinematic perspectives.',
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Drone Photography & Videography* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Portfolio\n\u2022 Location & Shoot Date\n\u2022 Delivery Timeline\n\nThank You.'
      }
    ]
  },

  /* ─── 2. EVENT ────────────────────────────────────────────── */
  {
    id: 'SRV-002', active: true,
    category: 'Event', subcategory: 'Event Management & Coverage',
    title: 'Event',
    tagline: 'Unforgettable Events, Perfectly Executed.',
    description: 'From corporate conferences and product launches to weddings, cultural events, and private celebrations — we manage, design, and capture every event with flawless execution. Our full-service event team handles décor, stage design, lighting, sound, and comprehensive photography & videography coverage for an unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '🎪', title: 'Full Event Planning & Management', desc: 'End-to-end event coordination, vendor management, and timeline planning' },
      { icon: '🎨', title: 'Stage & Décor Design', desc: 'Custom stage setups, floral arrangements, themed décor, and lighting design' },
      { icon: '🎤', title: 'Sound & AV Equipment', desc: 'Professional audio-visual setup with PA systems, LED screens, and lighting rigs' },
      { icon: '📷', title: 'Event Photography Coverage', desc: 'Complete photo documentation capturing every candid and formal moment' },
      { icon: '🎬', title: 'Event Videography & Live Streaming', desc: 'Full event filming with cinematic highlights and live-stream capabilities' },
      { icon: '🎁', title: 'Corporate Events & Product Launches', desc: 'Professional corporate event production from strategy to execution' },
    ],
    packages: [
      { name: 'Coverage Only', price: '₹12,000', badge: '', features: ['Full-Day Photography', 'Edited Photo Album', 'Highlight Reel (2 min)', 'Same-day Preview', '5-Day Delivery'] },
      { name: 'Event Plus', price: '₹35,000', badge: 'Most Popular', features: ['Event Management (half-day)', 'Photography & Videography', 'Basic Stage Décor', 'Sound & Lighting Setup', 'Printed Album (20 pages)', 'Cinematic Highlights Film'] },
      { name: 'Full Production', price: '₹85,000', badge: 'Best Value', features: ['Complete Event Management', 'Full-Day Multi-Cam Coverage', 'Custom Stage & Décor Design', 'Professional Sound & AV', 'Live Streaming', 'Drone Coverage', 'Full Edited Film', 'Unlimited Prints'] },
    ],
    process: [
      { step: 1, icon: '💬', title: 'Consultation', desc: 'Discuss event details, requirements, theme, and timeline.' },
      { step: 2, icon: '🗓️', title: 'Planning', desc: 'Vendor coordination, décor sourcing, and shoot schedule planning.' },
      { step: 3, icon: '🎪', title: 'Event Day', desc: 'Professional execution with dedicated team and full coverage.' },
      { step: 4, icon: '🖥️', title: 'Post-Production', desc: 'Photo editing, video compilation, and highlight film creation.' },
      { step: 5, icon: '📦', title: 'Delivery', desc: 'Digital files and printed album delivered to your doorstep.' },
    ],
    reviews: [
      { name: 'Nandhini M', initials: 'NM', rating: 5, text: 'Fantastic event coverage! Every special moment was captured beautifully. The team was very professional.' },
      { name: 'Janani', initials: 'JA', rating: 5, text: 'They managed our corporate event perfectly. From décor to photography, everything was world-class.' },
      { name: 'Sujith S', initials: 'SS', rating: 5, text: 'The wedding coverage exceeded all our expectations. Highly recommend Sathish Media for events!' },
    ],
    relatedIds: ['SRV-001', 'SRV-003', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-201',
        title: 'Wedding Events',
        description: 'Premium wedding planning, stage setup, photography, videography and complete wedding production.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Wedding Events.\n\nPlease share details about:\n• Pricing\n• Photography\n• Videography\n• Decoration\n• Stage Setup\n\nThank you.'
      },
      {
        id: 'SUB-202',
        title: 'College Events',
        description: 'Professional management of college culturals, symposiums, graduation and entertainment events.',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224574?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1523580494863-6f3031224574?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in College Events.\n\nPlease share package details and pricing.\n\nThank you.'
      },
      {
        id: 'SUB-203',
        title: 'Corporate Events',
        description: 'Corporate event planning, conferences, award functions and brand launch management.',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Corporate Events.\n\nPlease share corporate event solutions and pricing.\n\nThank you.'
      },
      {
        id: 'SUB-204',
        title: 'Cultural Events',
        description: 'Traditional and modern cultural event production with complete stage management.',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Cultural Events.\n\nPlease share cultural event package details and pricing.\n\nThank you.'
      },
      {
        id: 'SUB-205',
        title: 'Birthday Events',
        description: 'Creative birthday event planning with photography, decoration and entertainment.',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Birthday Events.\n\nPlease share pricing and decoration theme options.\n\nThank you.'
      },
      {
        id: 'SUB-206',
        title: 'Tech Events',
        description: 'Technical workshops, coding competitions, AI events and innovation showcases.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Tech Events.\n\nPlease share details about technical event coordination and pricing.\n\nThank you.'
      },
      {
        id: 'SUB-207',
        title: 'Media Production Events',
        description: 'Media launch events, promotional activities and entertainment industry productions.',
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Media Production Events.\n\nPlease share media launch services and package details.\n\nThank you.'
      },
      {
        id: 'SUB-208',
        title: 'Photography & Videography Events',
        description: 'Complete photography and videography coverage for all events and occasions.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Photography & Videography Events.\n\nPlease share coverage packages and pricing.\n\nThank you.'
      }
    ]
  },

  /* ─── 3. BRANDING ─────────────────────────────────────────── */
  {
    id: 'SRV-003', active: true,
    category: 'Branding', subcategory: 'Brand Identity & Strategy',
    title: 'Branding',
    tagline: 'Building Brands That Inspire and Endure.',
    description: 'We craft powerful, complete visual brand systems — from logo design and color palettes to brand guidelines, business stationery, and brand strategy — that communicate your identity with authority and clarity. Every element is meticulously designed to position your business as a premium, recognizable brand in your market.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '✏️', title: 'Logo Design', desc: 'Unique, timeless logo concepts delivered in all formats (SVG, PNG, PDF)' },
      { icon: '🎨', title: 'Color Palette & Typography', desc: 'Curated brand color systems and typography hierarchy for visual consistency' },
      { icon: '📋', title: 'Brand Guidelines Manual', desc: 'Comprehensive brand book covering every rule of usage, tone, and presentation' },
      { icon: '🏢', title: 'Corporate Identity Kit', desc: 'Business cards, letterhead, envelopes, and all stationery design' },
      { icon: '💡', title: 'Brand Strategy & Positioning', desc: 'Market research-backed positioning and messaging framework' },
      { icon: '📱', title: 'Digital Brand Assets', desc: 'Social media templates, email signatures, and digital brand elements' },
    ],
    packages: [
      { name: 'Starter Brand', price: '₹7,000', badge: '', features: ['Logo Design (3 Concepts)', 'Color Palette', 'Basic Brand Guide', '2 Revision Rounds', 'All File Formats'] },
      { name: 'Brand Identity', price: '₹18,000', badge: 'Most Popular', features: ['Logo (5 Concepts)', 'Color & Typography System', 'Full Brand Guidelines', 'Business Card Design', 'Letterhead Design', 'Unlimited Revisions'] },
      { name: 'Complete Brand System', price: '₹38,000', badge: 'Best Value', features: ['Logo (8 Concepts)', 'Full Visual Identity', 'Brand Book (50 pages)', 'All Stationery Designs', 'Social Media Templates', 'Brand Strategy Workshop', 'Unlimited Revisions', '1-Year Support'] },
    ],
    process: [
      { step: 1, icon: '🔍', title: 'Discovery', desc: 'Deep-dive into your business, values, audience, and competitors.' },
      { step: 2, icon: '💡', title: 'Strategy', desc: 'Developing brand positioning, visual direction, and messaging.' },
      { step: 3, icon: '✏️', title: 'Design', desc: 'Creating logo concepts, color palette, and brand identity elements.' },
      { step: 4, icon: '🔄', title: 'Refinement', desc: 'Iterating based on your feedback until the brand feels perfect.' },
      { step: 5, icon: '📦', title: 'Brand Delivery', desc: 'Complete brand assets, guidelines, and files delivered in full.' },
    ],
    reviews: [
      { name: 'Abinaya M', initials: 'AM', rating: 5, text: 'Our brand identity has been completely transformed. Incredible creative work from the Sathish Media team!' },
      { name: 'Mani K', initials: 'MK', rating: 5, text: 'Professional, creative, and delivered exactly what we envisioned. The brand book is outstanding.' },
      { name: 'Nandhini M', initials: 'NM', rating: 5, text: 'The logo and brand system they created is simply stunning. Our customers love the new brand look!' },
    ],
    relatedIds: ['SRV-004', 'SRV-005', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-301', title: 'Personal Branding',
        description: 'Build a strong personal identity through logo design, visual identity, social presence, and personal brand strategy.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Personal Branding Services.\n\nPlease share details regarding:\n• Branding Packages\n• Pricing\n• Design Process\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-302', title: 'Corporate Branding',
        description: 'Complete corporate identity systems including logo design, stationery, company profiles, and brand guidelines.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Corporate Branding Services.\n\nPlease share details regarding:\n• Corporate Identity Packages\n• Pricing\n• Brand Guidelines\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-303', title: 'Product Branding',
        description: 'Professional branding solutions for products including packaging, labels, visual identity, and product positioning.',
        image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Product Branding Services.\n\nPlease share details regarding:\n• Product Packaging Design\n• Label & Logo Design\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-304', title: 'Service Branding',
        description: 'Develop unique service identities with brand strategy, communication systems, and customer-focused branding.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Service Branding Solutions.\n\nPlease share details regarding:\n• Brand Strategy\n• Communication Systems\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-305', title: 'Digital Branding',
        description: 'Create a powerful digital presence through websites, social media branding, and online marketing assets.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Digital Branding Services.\n\nPlease share details regarding:\n• Digital Identity Design\n• Website Branding\n• Online Marketing Assets\n• Pricing\n\nThank you.'
      },
      {
        id: 'SUB-306', title: 'Luxury Branding',
        description: 'High-end branding solutions designed for luxury brands, premium businesses, and exclusive products.',
        image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Luxury Branding Services.\n\nPlease share details regarding:\n• Premium Design Packages\n• Exclusive Branding Options\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-307', title: 'Event Branding',
        description: 'Complete branding solutions for weddings, corporate events, exhibitions, conferences, and public events.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Event Branding Services.\n\nPlease share details regarding:\n• Event Branding Packages\n• Stage & Backdrop Design\n• Pricing\n• Availability\n\nThank you.'
      },
      {
        id: 'SUB-308', title: 'Fashion Branding',
        description: 'Creative fashion branding including lookbooks, campaigns, visual identity, and promotional designs.',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Fashion Branding Services.\n\nPlease share details regarding:\n• Lookbook Design\n• Fashion Campaign Branding\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-309', title: 'Social Media Branding',
        description: 'Professional social media identity design, content branding, profile optimization, and digital engagement.',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Social Media Branding Services.\n\nPlease share details regarding:\n• Social Media Identity Design\n• Content Branding Packages\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-310', title: 'Food & Restaurant Branding',
        description: 'Brand identity solutions for restaurants, cafes, food products, cloud kitchens, and hospitality businesses.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Food & Restaurant Branding Services.\n\nPlease share details regarding:\n• Menu Design\n• Brand Identity Package\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-311', title: 'Retail Branding',
        description: 'Complete retail branding including store visuals, signage, packaging, and customer experience design.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Retail Branding Services.\n\nPlease share details regarding:\n• Store Branding Packages\n• Signage & Display Design\n• Pricing\n• Delivery Timeline\n\nThank you.'
      },
      {
        id: 'SUB-312', title: 'Entertainment Branding',
        description: 'Creative branding solutions for movies, music albums, artists, media productions, and entertainment businesses.',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Entertainment Branding Services.\n\nPlease share details regarding:\n• Artist & Media Branding\n• Album Art & Poster Design\n• Pricing\n• Delivery Timeline\n\nThank you.'
      }
    ]
  },

  /* ─── 4. DESIGNING ────────────────────────────────────────── */
  {
    id: 'SRV-004', active: true,
    category: 'Designing', subcategory: 'Graphic & Visual Design',
    title: 'Designing',
    tagline: 'Designs That Communicate, Captivate, Convert.',
    description: 'From premium marketing brochures, event flyers, social media banners, and packaging to presentation decks and large-format outdoor designs — our design team creates visually compelling graphics that make your brand stand out in every medium and every format, print or digital.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575321628880-c49b78f1d1f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '🖼️', title: 'Print Design (Brochures & Flyers)', desc: 'Brochures, flyers, catalogues, posters, and all print marketing materials' },
      { icon: '📱', title: 'Digital & Social Media Graphics', desc: 'Social media posts, stories, banners, and digital ad creatives' },
      { icon: '📊', title: 'Presentation & Pitch Deck Design', desc: 'Stunning PowerPoint and Keynote decks for business presentations' },
      { icon: '📦', title: 'Packaging & Label Design', desc: 'Product packaging, box design, and label artwork that stands on shelf' },
      { icon: '🪧', title: 'Outdoor & Banner Design', desc: 'Large-format flex boards, banners, standees, and hoarding designs' },
      { icon: '⚡', title: 'Quick Turnaround', desc: 'Fast delivery without compromising on design quality or creativity' },
    ],
    packages: [
      { name: 'Single Design', price: '₹2,500', badge: '', features: ['1 Design (Any Format)', '2 Revision Rounds', 'Print & Digital Ready', '3-Day Delivery'] },
      { name: 'Design Bundle', price: '₹9,000', badge: 'Best Value', features: ['5 Designs', 'Social Media Kit (10 templates)', 'Unlimited Revisions', 'Print & Digital Ready', '5-Day Delivery'] },
      { name: 'Monthly Retainer', price: '₹20,000/mo', badge: 'Most Popular', features: ['20 Designs Per Month', 'Priority Support', 'Unlimited Revisions', 'Same-Day Rush Available', 'Dedicated Designer'] },
    ],
    process: [
      { step: 1, icon: '📋', title: 'Design Brief', desc: 'Gathering design requirements, brand assets, references, and goals.' },
      { step: 2, icon: '💡', title: 'Concept Development', desc: 'Presenting initial design concepts for your review and feedback.' },
      { step: 3, icon: '🔄', title: 'Refinement', desc: 'Refining the design based on your feedback until perfected.' },
      { step: 4, icon: '📦', title: 'File Delivery', desc: 'Delivering print-ready and digital files in all required formats.' },
    ],
    reviews: [
      { name: 'Janani', initials: 'JA', rating: 5, text: 'Amazing design work. Fast, professional, and exactly what we needed for our campaign!' },
      { name: 'Mani K', initials: 'MK', rating: 5, text: 'Quality output every single time. Highly recommended for all graphic design requirements.' },
      { name: 'Abinaya M', initials: 'AM', rating: 5, text: 'Creative and talented team. Delivered beyond our expectations with every project.' },
    ],
    relatedIds: ['SRV-003', 'SRV-005', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-401', title: 'Photo & Frame Designing',
        description: 'Creative photo enhancement, custom framing solutions, wall frame layouts, collage designs, and premium gift frame concepts.',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Photo & Frame Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-402', title: 'Album Designing',
        description: 'Professional album designing services including wedding albums, event albums, cinematic layouts, and storytelling photo books.',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Album Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-403', title: 'Custom T-Shirt Designing',
        description: 'Creative t-shirt design solutions for businesses, colleges, events, brands, teams, and promotional campaigns.',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Custom T-Shirt Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-404', title: 'Mug & Glass Designing',
        description: 'Unique mug and glass design services with personalized artwork, branding elements, logos, and creative print concepts.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Mug & Glass Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-405', title: 'Product Designing',
        description: 'Professional product design services including packaging, label design, product presentation, branding, and mockup creation.',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Product Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-406', title: 'Poster & Advertisement Designing',
        description: 'High-impact promotional posters, banners, advertisements, social media creatives, and marketing campaign designs.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Poster & Advertisement Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-407', title: '3D Designing',
        description: 'Professional 3D design services including product rendering, architectural visualization, exhibition concepts, and digital modeling.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in 3D Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-408', title: 'Video Editing & Cinematic Designing',
        description: 'Professional video editing, cinematic storytelling, color grading, motion graphics, visual effects, and post-production services.',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Video Editing & Cinematic Designing Services.\n\nPlease share:\n• Pricing Details\n• Sample Works\n• Available Packages\n• Delivery Timeline\n\nThank You.'
      }
    ]
  },

  /* ─── 5. SOCIAL MEDIA MARKETING ──────────────────────────── */
  {
    id: 'SRV-005', active: true,
    category: 'Social Media Marketing', subcategory: 'Digital Marketing',
    title: 'Social Media Marketing',
    tagline: 'Grow Your Brand. Expand Your Reach.',
    description: 'Strategic social media marketing that builds engaged communities, drives consistent growth, and converts followers into loyal customers. We manage your presence across Instagram, Facebook, YouTube, and LinkedIn with creative content creation, targeted paid advertising, analytics reporting, and community management.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507764923504-cd21c4cda0f2?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '📱', title: 'Creative Content Creation', desc: 'Professional posts, reels, stories, carousels, and short-form video content' },
      { icon: '📅', title: 'Content Strategy & Calendar', desc: 'Monthly content strategy, editorial planning, and post scheduling' },
      { icon: '📢', title: 'Paid Ad Campaigns (Meta & Google)', desc: 'Targeted Meta Ads and Google Ads campaigns for maximum ROI' },
      { icon: '📊', title: 'Analytics & Monthly Reports', desc: 'Detailed monthly performance analytics and strategic insights' },
      { icon: '💬', title: 'Community Management', desc: 'Responding to comments, DMs, and actively growing your community' },
      { icon: '🎯', title: 'Audience Targeting & Growth', desc: 'Data-driven strategies to reach your ideal customer segments' },
    ],
    packages: [
      { name: 'Starter', price: '₹8,000/mo', badge: '', features: ['2 Posts Per Week', 'Instagram & Facebook', 'Basic Analytics', 'Caption Writing', '10 Stories/Month'] },
      { name: 'Growth', price: '₹18,000/mo', badge: 'Most Popular', features: ['5 Posts Per Week', 'All Platforms', 'Monthly Analytics Report', '4 Reels/Month', 'Ad Campaign Management (₹5k budget)'] },
      { name: 'Elite', price: '₹35,000/mo', badge: 'Best Value', features: ['Daily Posts', 'All Platforms + YouTube', 'Weekly Analytics', 'Unlimited Reels', 'Full Ad Management', 'Influencer Coordination', 'Dedicated Account Manager'] },
    ],
    process: [
      { step: 1, icon: '🔍', title: 'Strategy & Audit', desc: 'Audience analysis, competitor research, and brand content planning.' },
      { step: 2, icon: '✏️', title: 'Content Creation', desc: 'Designing graphics, writing captions, and producing video reels.' },
      { step: 3, icon: '📅', title: 'Publishing & Scheduling', desc: 'Posting content at optimal times for maximum reach.' },
      { step: 4, icon: '💬', title: 'Community Engagement', desc: 'Managing comments, DMs, and building audience relationships.' },
      { step: 5, icon: '📊', title: 'Reporting & Optimization', desc: 'Monthly performance review and strategy refinement.' },
    ],
    reviews: [
      { name: 'Sujith S', initials: 'SS', rating: 5, text: 'Our social media engagement tripled in just 2 months. The team delivers exceptional results!' },
      { name: 'Mohammed Majeed', initials: 'MM', rating: 5, text: 'Professional social media management. Our follower count and inquiries have grown significantly.' },
      { name: 'Nandhini M', initials: 'NM', rating: 5, text: 'Creative content and consistent audience growth. Very satisfied with the social media service.' },
    ],
    relatedIds: ['SRV-003', 'SRV-004', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-501', title: 'Cinematic Video Production',
        description: 'Premium cinematic storytelling with professional cameras, creative direction, cinematic color grading, and film-quality production.',
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Cinematic Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-502', title: 'Advertisement Video Production',
        description: 'Creative promotional videos for brands, products, services, digital campaigns, television commercials, and social media advertising.',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Advertisement Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-503', title: 'Wedding Video Production',
        description: 'Luxury wedding films capturing emotions, traditions, celebrations, and memorable moments through cinematic storytelling.',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Wedding Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-504', title: 'YouTube Video Production',
        description: 'Complete YouTube content production including scripting, filming, editing, thumbnails, branding, and publishing support.',
        image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in YouTube Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-505', title: 'Social Media Reel Production',
        description: 'Creative short-form vertical videos optimized for Instagram Reels, Facebook Reels, YouTube Shorts, and social engagement.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Social Media Reel Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-506', title: 'Corporate Video Production',
        description: 'Professional corporate videos for company profiles, training, product showcases, internal communications, and business branding.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Corporate Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-507', title: 'Music Video Production',
        description: 'Creative music video production featuring cinematic visuals, storytelling concepts, performance sequences, and artistic direction.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Music Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-508', title: 'Documentary Production',
        description: 'Professional documentary filmmaking focused on real stories, organizations, communities, events, and brand narratives.',
        image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Documentary Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-509', title: 'Event Video Production',
        description: 'Complete event video coverage for weddings, corporate events, college functions, cultural programs, and special occasions.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Event Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-510', title: 'Drone Video Production',
        description: 'High-quality aerial videography for real estate, tourism, events, commercial projects, and promotional campaigns.',
        image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Drone Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-511', title: 'Product Video Production',
        description: 'Professional product videos designed to increase customer engagement, improve conversions, and enhance product presentation.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Product Video Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      },
      {
        id: 'SUB-512', title: 'Motion Graphic Production',
        description: 'Creative motion graphics, animated explainer videos, logo animations, promotional visuals, and digital content production.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Motion Graphic Production Services.\n\nPlease share:\n• Package Details\n• Pricing Information\n• Sample Videos\n• Delivery Timeline\n• Available Dates\n\nThank You.'
      }
    ]
  },

  /* ─── 6. ADVERTISING ──────────────────────────────────────── */
  {
    id: 'SRV-006', active: true,
    category: 'Advertising', subcategory: 'Creative Campaigns',
    title: 'Advertising',
    tagline: 'Campaigns That Convert. Campaigns That Inspire.',
    description: 'End-to-end advertising campaign creation — from concept, creative strategy, and copywriting to print, outdoor, digital, and video execution. We build integrated multi-channel campaigns that position your brand powerfully in the marketplace and drive measurable, real-world results for your business.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '🎯', title: 'Campaign Strategy & Concept', desc: 'Research-backed advertising strategy and creative concept development' },
      { icon: '🖼️', title: 'Print Advertising', desc: 'Newspaper, magazine, and catalogue ad design with high visual impact' },
      { icon: '🪧', title: 'Outdoor & Hoarding Advertising', desc: 'Billboard, hoarding, flex board, and transit ad design and placement' },
      { icon: '💻', title: 'Digital Advertising', desc: 'Google Ads, Meta Ads, YouTube pre-rolls, and display banner campaigns' },
      { icon: '📹', title: 'TV & Video Advertisements', desc: 'TVC, digital video ads, and brand film production for broadcast' },
      { icon: '📈', title: 'ROI Tracking & Optimization', desc: 'Campaign performance measurement, analytics, and ongoing optimization' },
    ],
    packages: [
      { name: 'Campaign Starter', price: '₹15,000', badge: '', features: ['Campaign Strategy', 'Print Ad Design (3 Sizes)', 'Digital Banner Set', '2 Social Media Ads', '3-Day Delivery'] },
      { name: 'Full Campaign', price: '₹35,000', badge: 'Most Popular', features: ['Complete Campaign Strategy', 'All Print Formats', 'Outdoor Hoarding Design', 'Digital Ad Set', '15-Second Video Ad', 'Social Media Campaign Pack'] },
      { name: 'Enterprise', price: '₹75,000', badge: 'Best Value', features: ['Multi-Channel Strategy', 'Full Creative Suite', 'Video Ad Production', 'Media Placement Coordination', 'Analytics Dashboard', 'Monthly Optimization', 'Dedicated Campaign Manager'] },
    ],
    process: [
      { step: 1, icon: '🔍', title: 'Market Research', desc: 'Competitor analysis, audience profiling, and campaign objectives.' },
      { step: 2, icon: '💡', title: 'Strategy & Concept', desc: 'Creative concept, messaging, channel mix, and budget planning.' },
      { step: 3, icon: '🎨', title: 'Creative Production', desc: 'Designing all ad assets, scripts, and campaign visuals.' },
      { step: 4, icon: '🚀', title: 'Campaign Launch', desc: 'Deploying campaigns across all selected media channels.' },
      { step: 5, icon: '📊', title: 'Optimize & Report', desc: 'Performance monitoring, A/B testing, and optimization reports.' },
    ],
    reviews: [
      { name: 'Mani K', initials: 'MK', rating: 5, text: 'Our advertising campaign drove incredible results. A very professional and creative team.' },
      { name: 'Abinaya M', initials: 'AM', rating: 5, text: 'Outstanding advertising work. Our brand visibility improved significantly within weeks.' },
      { name: 'Janani', initials: 'JA', rating: 5, text: 'Excellent campaign management across print and digital. Would definitely work with them again!' },
    ],
    relatedIds: ['SRV-003', 'SRV-005', 'SRV-007'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-601', title: 'Content Creative',
        description: 'Professional content creation services including marketing creatives, promotional graphics, social media posts, campaign visuals, and branded content assets.',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Content Creative Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-602', title: 'Paid Social Ads',
        description: 'Targeted paid advertising campaigns on Facebook, Instagram, YouTube, LinkedIn, and other platforms to maximize audience reach and conversions.',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Paid Social Ads Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-603', title: 'Social Media Management',
        description: 'Complete social media account management including content planning, posting schedules, audience engagement, and performance tracking.',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Social Media Management Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-604', title: 'Influencer Marketing',
        description: 'Collaborate with influencers and content creators to increase brand visibility, audience trust, and customer engagement.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Influencer Marketing Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-605', title: 'Video Ads',
        description: 'Creative video advertisements designed for digital platforms, television campaigns, YouTube promotions, and social media marketing.',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Video Ads Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-606', title: 'SEO (Search Engine Optimization)',
        description: 'Improve online visibility through keyword optimization, content strategy, technical SEO, local SEO, and organic search growth.',
        image: 'https://images.unsplash.com/photo-1571721795195-a4ca2d937068?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1571721795195-a4ca2d937068?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in SEO (Search Engine Optimization) Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-607', title: 'Event Ads',
        description: 'Advertising solutions for weddings, college events, corporate events, exhibitions, product launches, and cultural programs.',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Event Ads Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-608', title: 'Photography Advertising',
        description: 'Professional advertising photography services designed for product promotions, branding campaigns, catalogs, and digital marketing.',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Photography Advertising Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      },
      {
        id: 'SUB-609', title: 'Email Marketing',
        description: 'Targeted email marketing solutions including promotional campaigns, newsletters, automated sequences, and customer engagement strategies.',
        image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in Email Marketing Services.\n\nPlease share:\n• Pricing Details\n• Available Packages\n• Campaign Examples\n• Expected Results\n• Project Timeline\n\nThank You.'
      }
    ]
  },

  /* ─── 7. WEB & APP DEVELOPMENT ───────────────────────────── */
  {
    id: 'SRV-007', active: true,
    category: 'Web & App Development', subcategory: 'Digital Solutions',
    title: 'Web & App Development',
    tagline: 'Beautiful Digital Products That Perform.',
    description: 'From stunning responsive websites and e-commerce platforms to mobile apps and custom web applications — we build digital products that represent your brand professionally, drive user engagement, and convert visitors into customers. Every project is built with modern technologies, performance optimization, and SEO best practices from the ground up.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '💻', title: 'Responsive Website Design & Development', desc: 'Pixel-perfect websites optimized for mobile, tablet, and desktop' },
      { icon: '🛒', title: 'E-Commerce Development', desc: 'Online stores with secure payment gateways and inventory management' },
      { icon: '📱', title: 'Mobile App Development', desc: 'iOS and Android apps with native performance and intuitive UX' },
      { icon: '⚡', title: 'Speed & Performance Optimization', desc: 'Built for speed with Core Web Vitals and performance benchmarks' },
      { icon: '🔍', title: 'SEO-Ready Architecture', desc: 'Built with technical SEO best practices from the ground up' },
      { icon: '🔒', title: 'Security & Hosting Setup', desc: 'SSL, security hardening, CMS setup, and reliable cloud hosting' },
    ],
    packages: [
      { name: 'Landing Page', price: '₹12,000', badge: '', features: ['Single Page Website', 'Responsive Design', 'Contact Form', 'SEO Basics', 'WhatsApp Integration', '7-Day Delivery'] },
      { name: 'Business Website', price: '₹30,000', badge: 'Most Popular', features: ['5-Page Custom Website', 'Blog Section', 'Full SEO Setup', 'Contact & Enquiry Forms', 'Social Media Integration', 'Admin Panel', '14-Day Delivery'] },
      { name: 'Premium Web + App', price: '₹75,000', badge: 'Best Value', features: ['Unlimited Pages Website', 'E-Commerce Ready', 'Mobile App (iOS/Android)', 'Advanced SEO + Analytics', 'Hosting Setup', 'Payment Gateway', '1-Year Support', '30-Day Delivery'] },
    ],
    process: [
      { step: 1, icon: '🔍', title: 'Discovery & Planning', desc: 'Understanding your goals, audience, sitemap, and technical requirements.' },
      { step: 2, icon: '📐', title: 'Wireframing & Design', desc: 'Creating wireframes, UI design, and visual prototypes for approval.' },
      { step: 3, icon: '💻', title: 'Development', desc: 'Coding the website or app with full functionality and integrations.' },
      { step: 4, icon: '🧪', title: 'Testing & QA', desc: 'Cross-browser, mobile, and performance testing before launch.' },
      { step: 5, icon: '🚀', title: 'Launch & Support', desc: 'Going live with ongoing support, updates, and optimizations.' },
    ],
    reviews: [
      { name: 'Mohammed Majeed', initials: 'MM', rating: 5, text: 'Our website looks absolutely premium. Clients are very impressed with the design and speed!' },
      { name: 'Sujith S', initials: 'SS', rating: 5, text: 'Fast, professional, and delivered on time. Exceptional web development work from the team.' },
      { name: 'Abinaya M', initials: 'AM', rating: 5, text: 'The website they built gets so many compliments from our clients. Highly recommend!' },
    ],
    relatedIds: ['SRV-003', 'SRV-005', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      {
        id: 'SUB-701', title: 'Graphic Designing',
        description: 'Professional graphic design services including logos, social media creatives, advertisements, brochures, banners, and visual communication materials.',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Graphic Designing* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Projects\n\u2022 Delivery Timeline\n\u2022 Revision Policy\n\nThank You.'
      },
      {
        id: 'SUB-702', title: 'Web Designing',
        description: 'Custom website design services focused on user experience, modern layouts, responsive interfaces, and business branding.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Web Designing* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Projects\n\u2022 Number of Pages Supported\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-703', title: 'App Designing',
        description: 'Creative mobile application design services with modern interfaces, user-friendly navigation, and engaging visual experiences.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *App Designing* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Platform (iOS / Android / Both):\n\u2022 Number of Screens:\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-704', title: 'Brand Identity Designing',
        description: 'Complete brand identity design including logos, typography, color systems, business stationery, and branding guidelines.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Brand Identity Designing* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Brand Kits\n\u2022 Inclusions (Logo / Guidelines / Stationery)\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-705', title: 'Business Websites',
        description: 'Professional business websites designed to establish online presence, generate leads, and showcase services effectively.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Business Website Development* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Projects\n\u2022 Development Timeline\n\u2022 Hosting & Maintenance Plans\n\nThank You.'
      },
      {
        id: 'SUB-706', title: 'E-Commerce Website Development',
        description: 'Modern e-commerce solutions including product management, shopping experiences, online catalogs, and business growth platforms.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *E-Commerce Website Development* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Projects\n\u2022 Development Timeline\n\u2022 Feature List\n\nThank You.'
      },
      {
        id: 'SUB-707', title: 'UI & UX Designing',
        description: 'Professional UI/UX design services focused on usability, accessibility, user engagement, and modern digital experiences.',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *UI & UX Designing* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample UI/UX Projects\n\u2022 Tools Used (Figma / Adobe XD)\n\u2022 Delivery Timeline\n\nThank You.'
      },
      {
        id: 'SUB-708', title: 'Motion Graphic Designing',
        description: 'Creative motion graphic design services including logo animation, promotional videos, animated content, and visual storytelling.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'],
        whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in *Motion Graphic Designing* Services.\n\nPlease share:\n\u2022 Package Details\n\u2022 Pricing Information\n\u2022 Sample Animations\n\u2022 Duration & Format Options\n\u2022 Delivery Timeline\n\nThank You.'
      }
    ]
  },

  /* ─── 8. PRINTING ─────────────────────────────────────────── */
  {
    id: 'SRV-008', active: true,
    category: 'Printing', subcategory: 'Print & Media Solutions',
    title: 'Printing',
    tagline: 'Premium Print Quality for Every Need.',
    description: 'High-quality professional printing services for business cards, brochures, catalogues, flyers, banners, flex boards, notebooks, corporate stationery kits, and all large-format printing needs across Salem and surrounding areas. We offer premium finishes including lamination, UV coating, embossing, and spot varnish.',
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1200&q=90',
    heroImage: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=1920&q=90',
    gallery: [
      'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517842536804-bf6629e2c291?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { icon: '🖨️', title: 'Offset & Digital Printing', desc: 'Premium offset and digital printing technology for all quantities' },
      { icon: '🎨', title: 'Full Color CMYK Printing', desc: 'Vibrant, accurate color reproduction with Pantone matching' },
      { icon: '✨', title: 'Premium Finishing Options', desc: 'Matte/gloss lamination, embossing, UV coating, and spot varnish' },
      { icon: '🪧', title: 'Flex & Large Format Printing', desc: 'Flex boards, vinyl banners, standees, and large-format signage' },
      { icon: '📦', title: 'Bulk Orders & Corporate Kits', desc: 'Competitive rates for large volume and complete corporate stationery kits' },
      { icon: '🚚', title: 'Express Printing & Delivery', desc: 'Same-day, next-day options with doorstep delivery across Salem' },
    ],
    packages: [
      { name: 'Business Starter', price: '₹3,000', badge: '', features: ['500 Business Cards', '500 Letterheads', '100 Envelopes', 'Matte or Gloss Finish', '3-Day Delivery'] },
      { name: 'Corporate Pack', price: '₹12,000', badge: 'Most Popular', features: ['1000 Business Cards', '1000 Letterheads', '500 Envelopes', '500 Tri-fold Brochures', '200 Flyers', 'Premium Lamination'] },
      { name: 'Full Stationery Suite', price: '₹28,000', badge: 'Best Value', features: ['Complete Corporate Kit', 'All Stationery Items', 'Custom Notebooks (50 pcs)', 'Flex Board 4x8 ft', 'Premium Packaging', 'Embossing & UV Options', 'Dedicated Print Manager'] },
    ],
    process: [
      { step: 1, icon: '📁', title: 'File Preparation', desc: 'We receive or prepare your print-ready design files.' },
      { step: 2, icon: '👁️', title: 'Digital Proof Approval', desc: 'Digital proof presented for your approval before printing begins.' },
      { step: 3, icon: '🖨️', title: 'Printing', desc: 'High-quality offset or digital printing with color precision.' },
      { step: 4, icon: '✂️', title: 'Finishing & Binding', desc: 'Cutting, lamination, embossing, binding, and packaging.' },
      { step: 5, icon: '🚚', title: 'Quality Check & Delivery', desc: 'Thorough quality inspection and doorstep delivery.' },
    ],
    reviews: [
      { name: 'Nandhini M', initials: 'NM', rating: 5, text: 'Excellent print quality. The business cards look very premium and professional. Great service!' },
      { name: 'Mani K', initials: 'MK', rating: 5, text: 'Fast turnaround and outstanding quality. Will definitely order again from Sathish Media.' },
      { name: 'Janani', initials: 'JA', rating: 5, text: 'Our corporate stationery suite came out perfectly. Highly recommended for all printing needs!' },
    ],
    relatedIds: ['SRV-003', 'SRV-004', 'SRV-006'],
    whatsapp: '918762097098', phone: '+91 87620 97098', email: 'sathishmedia4u@gmail.com',
    subcategories: [
      { id: 'SUB-801', title: 'Business Cards', description: 'Thick premium 350gsm business cards, spot UV coatings, elegant matte laminations, and rounded edge designs.', image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Business Cards* Printing Service.\n\n📌 *Details Required:*\n• Quantity:\n• Size (Standard 90x55mm / Custom):\n• Finish (Matte / Gloss / UV / Embossed):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-802', title: 'Brochures', description: 'Trifold and bifold company brochures, detailed corporate profiles, and heavy-stock matte brochure prints.', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Brochure Printing* Service.\n\n📌 *Details Required:*\n• Quantity:\n• Fold Type (Trifold / Bifold / Z-Fold):\n• Paper Quality (Art Board / Matt / Gloss):\n• Size (A4 / A5 / Custom):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-803', title: 'Pamphlets & Flyers', description: 'High-volume flyer printing for local brand distribution, colorful pamphlets, and promotional handouts.', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Pamphlets & Flyers Printing* Service.\n\n📌 *Details Required:*\n• Quantity:\n• Size (A4 / A5 / A6 / Custom):\n• Paper (80gsm / 100gsm / 130gsm Art):\n• Single / Double Sided:\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-804', title: 'Catalogs', description: 'Multi-page product catalog booklets, perfect bound booklets, and thick magazine-style color catalogs.', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Catalog Printing* Service.\n\n📌 *Details Required:*\n• Quantity of Catalogs:\n• Number of Pages:\n• Binding (Saddle Stitch / Perfect Bind / Spiral):\n• Cover Finish (Matte Lamination / Gloss / UV Spot):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-805', title: 'Events & Programs', description: 'Premium event schedules, theater program handbooks, custom credentials, and VIP program card prints.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Event & Program Printing* Service.\n\n📌 *Details Required:*\n• Event Name / Type:\n• Quantity:\n• Format (Booklet / Card / Folded Program):\n• Number of Pages:\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-806', title: 'Restaurant Menus', description: 'Waterproof laminated restaurant menus, leather-bound menus, and beautiful cafe pricing booklets.', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Restaurant Menu Printing* Service.\n\n📌 *Details Required:*\n• Restaurant Name:\n• Quantity:\n• Menu Type (Laminated Card / Booklet / Leather Bound / Wipe-Clean):\n• Number of Pages:\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-807', title: 'Banners & Flex', description: 'Heavy-duty vinyl flex banners, outdoor hoarding billboards, retractable roll-up standees, and store boards.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Banners & Flex Printing* Service.\n\n📌 *Details Required:*\n• Banner Type (Flex / Vinyl / Roll-Up / Hoarding):\n• Size (Width x Height in feet):\n• Quantity:\n• Material (280gsm Eco / 440gsm Premium / Mesh):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-808', title: 'Magazine Ads', description: 'Premium full-page and half-page print ad insertions, glossy prints, and catalog ad layouts.', image: 'https://images.unsplash.com/photo-1517842536804-bf6629e2c291?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1517842536804-bf6629e2c291?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Magazine Ad Design & Printing* Service.\n\n📌 *Details Required:*\n• Ad Size (Full Page / Half Page / Quarter Page):\n• Magazine Name / Target Publication:\n• Quantity of Print Copies:\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-809', title: 'Vouchers & Coupons', description: 'Custom printed promotional discount vouchers, gift coupons with secure barcode serials, and ticket cards.', image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Vouchers & Coupons Printing* Service.\n\n📌 *Details Required:*\n• Voucher Type (Gift Voucher / Discount Coupon / Event Ticket):\n• Quantity:\n• Size (Standard Credit Card / A5 / Custom):\n• Security Feature (Serial Numbers / Barcode / Scratch Panel):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-810', title: 'Posters', description: 'High-definition gloss poster prints, custom academic conference posters, and premium retail signage.', image: 'https://images.unsplash.com/photo-1583258292688-d0213df4a3a8?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1583258292688-d0213df4a3a8?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Poster Printing* Service.\n\n📌 *Details Required:*\n• Poster Size (A4 / A3 / A2 / A1 / Custom):\n• Quantity:\n• Paper Finish (Gloss / Matte / Satin):\n• Purpose (Retail / Event / Conference / Promotional):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-811', title: 'Invitations', description: 'Elegant luxury wedding invitations, foil-stamped corporate invitation cards, and die-cut envelope sleeves.', image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Invitation Card Printing* Service.\n\n📌 *Details Required:*\n• Event Type (Wedding / Birthday / Corporate / Graduation):\n• Quantity:\n• Card Style (Flat / Folded / Gatefold / Box Style):\n• Finish (Foil Stamp / Emboss / Matte / UV Spot):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' },
      { id: 'SUB-812', title: 'Stickers & Labels', description: 'Premium vinyl adhesive stickers, custom product labels, bottle stickers, and die-cut custom brand stickers.', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80', images: ['https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80'], whatsappTemplate: 'Hello Sathish Media,\n\nI am interested in your *Stickers & Labels Printing* Service.\n\n📌 *Details Required:*\n• Sticker Type (Product Label / Brand Sticker / Die-Cut / QR Code):\n• Quantity:\n• Size (Standard / Custom - specify dimensions):\n• Material (Paper / Vinyl / Waterproof / Metallic):\n• Shape (Rectangle / Circle / Die-Cut Custom):\n• Design (Ready / Need Design):\n\nPlease share pricing and turnaround time.\n\nThank you.' }
    ]
  },
];

/* ── Hydrate helper ─────────────────────────────────────────── */
function hydrateSubcategory(sub, parent) {
  const defaultImage = sub.image || `https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80`;
  
  // Custom images based on subcategory to give a premium feel
  const gallery = sub.gallery || [
    defaultImage,
    `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-1500913268234-08b02c9f7440?auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&w=800&q=80`
  ];
  
  const features = sub.features || [
    { icon: '💎', title: 'Premium Quality Standards', desc: `Professional high-grade delivery of ${sub.title} using top-tier industry gear.` },
    { icon: '✨', title: 'Creative Art Direction', desc: `Artistic staging, concepts, and setups custom tailored to your specific needs.` },
    { icon: '⚡', title: 'Fast & Efficient Turnaround', desc: `Expedited post-production editing and high-resolution delivery within schedules.` },
    { icon: '🛡️', title: 'Dedicated Project Experts', desc: `Experienced local professionals handling every technical detail of your ${parent.category} requirements.` },
    { icon: '💬', title: 'Collaborative Design Iterations', desc: 'Multiple feedback rounds ensuring the final assets fully represent your dream vision.' },
    { icon: '📱', title: 'Multi-platform Optimization', desc: `Perfect formatting for web presence, social media reel feeds, local printing, and advertisements.` }
  ];

  const packages = sub.packages || [
    { name: 'Essential Tier', price: '₹4,999', badge: '', features: ['1x Creative Consultation', 'Core Delivery Assets', 'High-Res Digital Files', '2 Revision Rounds', '3-Day Quick Delivery'] },
    { name: 'Professional Tier', price: '₹14,999', badge: 'Most Popular', features: ['End-to-End Creative Staging', 'Complete Media Asset Suite', 'Premium Visual Grading', 'Unlimited Revisions', '5-Day Guaranteed Delivery', 'WhatsApp Support'] },
    { name: 'Elite Production Tier', price: '₹34,999', badge: 'Best Value', features: ['Premium Crew & Team Allocation', 'Full Multi-angle Cinematic Assets', 'Priority Studio Pipeline', 'Source Master File Delivery', '1-Year Secure Cloud Backup', 'Dedicated Production Manager'] }
  ];

  const process = sub.process || [
    { step: 1, icon: '💬', title: 'Consultation & Concept Planning', desc: 'We align on your expectations, project timeline, brand aesthetics, and budget outlines.' },
    { step: 2, icon: '🎨', title: 'Staging & Pre-production', desc: 'Visual concepts, location scouting, set design, scripting, and equipment readiness checklists.' },
    { step: 3, icon: '🎥', title: 'Production & Execution', desc: `Our specialized team shoots or builds the high-quality source assets for ${sub.title}.` },
    { step: 4, icon: '🖥️', title: 'Editing & Post-production', desc: 'Advanced timeline trimming, sound engineering, color grading, layout polishing, and final checks.' },
    { step: 5, icon: '📦', title: 'Delivery & Deployment', desc: 'High-speed cloud delivery of files, client reviews, and final signoff support.' }
  ];

  const reviews = sub.reviews || [
    { name: 'Aravind K', initials: 'AK', rating: 5, text: `Outstanding work on ${sub.title}. The team was incredibly efficient, polite, and creative!` },
    { name: 'Nisha R', initials: 'NR', rating: 5, text: `Highly professional service right here in Salem. Extremely pleased with the packages pricing and speed.` },
    { name: 'Deepak Kumar', initials: 'DK', rating: 5, text: `The quality of the output exceeded our highest expectations. Truly premium team.` }
  ];

  return {
    ...sub,
    category: parent.category,
    parentTitle: parent.title,
    parentId: parent.id,
    tagline: sub.tagline || `Professional ${sub.title} services by Sathish Media.`,
    heroImage: sub.heroImage || parent.heroImage || defaultImage,
    image: defaultImage,
    gallery,
    features,
    packages,
    process,
    reviews,
    whatsapp: parent.whatsapp || '918762097098',
    phone: parent.phone || '+91 87620 97098',
    email: parent.email || 'sathishmedia4u@gmail.com',
    relatedIds: parent.subcategories ? parent.subcategories.filter(x => x.id !== sub.id).slice(0, 3).map(x => x.id) : []
  };
}

/* ── CRUD Functions ─────────────────────────────────────────── */

function smhGetServices() {
  const raw = localStorage.getItem(SMH_SERVICES_KEY);
  if (!raw) { smhSeedData(); return SMH_DEFAULT_SERVICES; }
  try {
    const parsed = JSON.parse(raw);

    // Basic structural checks
    if (!Array.isArray(parsed) || parsed.length < 8 || !parsed[0].tagline) {
      smhSeedData();
      localStorage.setItem('smh_events_v3_migration', 'true');
      return SMH_DEFAULT_SERVICES;
    }

    // v9 migration: ensure SRV-001 through SRV-008 subcategories have whatsappTemplate & images
    const migKey = 'smh_catalog_v9_migration';
    if (!localStorage.getItem(migKey)) {
      const checkService = (id) => {
        const svc = parsed.find(s => s.id === id);
        const subs = (svc && svc.subcategories) || [];
        return subs.length === 0 || subs.some(sub => !sub.whatsappTemplate || !Array.isArray(sub.images));
      };
      if (checkService('SRV-001') || checkService('SRV-002') || checkService('SRV-003') || checkService('SRV-004') || checkService('SRV-005') || checkService('SRV-006') || checkService('SRV-007') || checkService('SRV-008')) {
        smhSeedData();
        localStorage.setItem(migKey, 'true');
        // Clear all legacy migration flags
        localStorage.removeItem('smh_events_v3_migration');
        localStorage.removeItem('smh_catalog_v3_migration');
        localStorage.removeItem('smh_catalog_v4_migration');
        localStorage.removeItem('smh_catalog_v5_migration');
        localStorage.removeItem('smh_catalog_v6_migration');
        localStorage.removeItem('smh_catalog_v7_migration');
        localStorage.removeItem('smh_catalog_v8_migration');
        return SMH_DEFAULT_SERVICES;
      }
      localStorage.setItem(migKey, 'true');
    }

    return parsed;
  } catch (e) {
    return SMH_DEFAULT_SERVICES;
  }
}

function smhGetServiceById(id) {
  return smhGetServices().find(s => s.id === id) || null;
}

function smhGetByCategory(category, excludeId) {
  return smhGetServices().filter(s => s.category === category && s.id !== excludeId && s.active !== false);
}

function smhGetRelated(ids) {
  const all = smhGetServices();
  return ids.map(id => all.find(s => s.id === id)).filter(Boolean);
}

function smhSeedData() {
  localStorage.setItem(SMH_SERVICES_KEY, JSON.stringify(SMH_DEFAULT_SERVICES));
}

function smhSaveServices(services) {
  localStorage.setItem(SMH_SERVICES_KEY, JSON.stringify(services));
}

function smhAddService(service) {
  const services = smhGetServices();
  if (!service.subcategories) service.subcategories = [];
  services.push(service);
  smhSaveServices(services);
}

function smhUpdateService(id, updates) {
  const services = smhGetServices();
  const idx = services.findIndex(s => s.id === id);
  if (idx === -1) return false;
  services[idx] = { ...services[idx], ...updates };
  smhSaveServices(services);
  return true;
}

function smhDeleteService(id) {
  smhSaveServices(smhGetServices().filter(s => s.id !== id));
}

function smhGenerateId() {
  const nums = smhGetServices()
    .map(s => parseInt(s.id.replace('SRV-', ''), 10))
    .filter(n => !isNaN(n));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return 'SRV-' + String(next).padStart(3, '0');
}

/* ── Subcategory CRUD Functions ─────────────────────────────── */

function smhGetSubcategoryById(id) {
  const services = smhGetServices();
  for (const s of services) {
    if (s.subcategories) {
      const sub = s.subcategories.find(sub => sub.id === id);
      if (sub) {
        return hydrateSubcategory(sub, s);
      }
    }
  }
  return null;
}

function smhAddSubcategory(parentId, sub) {
  const services = smhGetServices();
  const parent = services.find(s => s.id === parentId);
  if (!parent) return false;
  if (!parent.subcategories) parent.subcategories = [];
  
  if (!sub.id) {
    // Generate simple ID like SUB-117
    const parentNum = parentId.replace('SRV-00', '').replace('SRV-0', '');
    const currentNum = parent.subcategories.length + 1;
    sub.id = `SUB-${parentNum}${String(currentNum).padStart(2, '0')}`;
  }
  
  parent.subcategories.push(sub);
  smhSaveServices(services);
  return true;
}

function smhUpdateSubcategory(parentId, subId, updates) {
  const services = smhGetServices();
  const parent = services.find(s => s.id === parentId);
  if (!parent || !parent.subcategories) return false;
  const idx = parent.subcategories.findIndex(x => x.id === subId);
  if (idx === -1) return false;
  parent.subcategories[idx] = { ...parent.subcategories[idx], ...updates };
  smhSaveServices(services);
  return true;
}

function smhDeleteSubcategory(parentId, subId) {
  const services = smhGetServices();
  const parent = services.find(s => s.id === parentId);
  if (!parent || !parent.subcategories) return false;
  parent.subcategories = parent.subcategories.filter(x => x.id !== subId);
  smhSaveServices(services);
  return true;
}

/* ── Migrate old key & ensure data is seeded/validated on load ─ */
if (localStorage.getItem('sathish_services') && !localStorage.getItem(SMH_SERVICES_KEY)) {
  localStorage.removeItem('sathish_services');
}
smhGetServices();
