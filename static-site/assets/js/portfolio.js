// ============================================================
// SATHISH MEDIA - COMPLETE STATIC PORTFOLIO DATABASE
// Photography, Branding, Printing, Advertising, Video Production
// ============================================================

const DEFAULT_PORTFOLIO = [
  {
    id: 'port-001',
    title: 'Cinematic Studio Capture',
    category: 'photography',
    shortDescription: 'Professional photography studio campaign.',
    description: 'A premium studio session focusing on cinematic lighting, high-fashion styling, and advanced visual editing processes.',
    client: 'Royal Fashion India',
    date: '2026-03-15',
    image: 'assets/images/videography-photography/videography-and-photography.jpg',
    gallery: [
      'assets/images/videography-photography/corporate-photography-and-video-production.jpg',
      'assets/images/videography-photography/product-photography-and-promotional-videos.jpg'
    ],
    featured: true,
    visible: true,
    displayOrder: 1
  },
  {
    id: 'port-002',
    title: 'Corporate Identity Suite',
    category: 'branding',
    shortDescription: 'Modern corporate branding suite designs.',
    description: 'Complete brand architecture overhaul including typography kits, corporate color palettes, logo systems, and brand voice guidelines.',
    client: 'ITG Solutions',
    date: '2026-04-10',
    image: 'assets/images/branding/branding-2.jpg',
    gallery: [
      'assets/images/branding/branding.jpg'
    ],
    featured: true,
    visible: true,
    displayOrder: 2
  },
  {
    id: 'port-003',
    title: 'Archival Tactical Letterpress',
    category: 'printing',
    shortDescription: 'Tactile brochure book printing design.',
    description: 'Specialized heavy-stock book printing employing high-relief letterpress techniques, foil stamping, and customized alignment markers.',
    client: 'Salem Craft Guild',
    date: '2026-02-18',
    image: 'assets/images/web-app-development/printing.jpg',
    gallery: [],
    featured: true,
    visible: true,
    displayOrder: 3
  },
  {
    id: 'port-004',
    title: 'Organic Billboard Exposure',
    category: 'advertising',
    shortDescription: 'Brand visual advertisement campaigns.',
    description: 'Strategic media layouts targeted for high-exposure environments such as major highway billboards, custom posters, and bus shelter advertising.',
    client: 'Apex Agro Industries',
    date: '2026-05-05',
    image: 'assets/images/advertising/advertisement-video-production.jpg',
    gallery: [],
    featured: true,
    visible: true,
    displayOrder: 4
  },
  {
    id: 'port-005',
    title: 'Corporate Drone Film',
    category: 'video-production',
    shortDescription: '4K drone capture video production film.',
    description: 'Cinematic corporate profile video utilizing multiple 4K cameras, heavy drone rigging, smooth gimbal sweeps, and professional color grading pipelines.',
    client: 'Salem Tech Park',
    date: '2026-04-25',
    image: 'assets/images/videography-photography/videography-and-photography-2.jpg',
    gallery: [],
    featured: true,
    visible: true,
    displayOrder: 5
  },
  {
    id: 'port-006',
    title: 'Modern Typography Kit',
    category: 'branding',
    shortDescription: 'Logo design visual branding assets.',
    description: 'Creative typography systems and customized logo glyphs built for direct consumer engagement and multi-channel applications.',
    client: 'Cafe Ammapet',
    date: '2026-05-12',
    image: 'assets/images/branding/branding.jpg',
    gallery: [],
    featured: true,
    visible: true,
    displayOrder: 6
  }
];

const PORTFOLIO_STORAGE_KEY = 'sathish_portfolio';

// Retrieve portfolio items from LocalStorage or seed with default items
function getPortfolio() {
  try {
    const stored = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading sathish_portfolio from LocalStorage:', e);
  }
  
  // Seed LocalStorage if empty
  savePortfolio(DEFAULT_PORTFOLIO);
  return DEFAULT_PORTFOLIO;
}

// Save portfolio items back to LocalStorage
function savePortfolio(items) {
  try {
    localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Error saving portfolio to LocalStorage:', e);
  }
}

// Get single portfolio item by ID
function getPortfolioById(id) {
  const items = getPortfolio();
  return items.find(item => item.id === id);
}

// Get WhatsApp number from local settings or fallback
function getPortfolioWhatsAppNumber() {
  try {
    const settings = JSON.parse(localStorage.getItem('sathish_settings') || '{}');
    const num = settings.whatsapp || '+91 8762097098';
    return num.replace(/[^0-9]/g, '');
  } catch (e) {
    return '918762097098';
  }
}

// Map database category slug to human-friendly title
function getPortfolioCategoryName(cat) {
  const mapping = {
    'photography': 'Photography',
    'branding': 'Branding',
    'printing': 'Printing',
    'advertising': 'Advertising',
    'video-production': 'Video Production'
  };
  return mapping[cat] || cat;
}
