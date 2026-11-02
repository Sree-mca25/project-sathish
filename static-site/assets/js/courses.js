// ============================================================
// SATHISH MEDIA - COMPLETE STATIC COURSES DATABASE
// Workshops, Summer Classes, ITG Academy Courses
// ============================================================

const DEFAULT_COURSES = [
  {
    id: 'course-workshop-photography',
    name: 'Advanced Photography & Composition Workshop',
    category: 'workshops',
    description: 'Hands-on practical workshops on media production, photography, videography, designing, branding, digital marketing, and creative technologies.',
    shortDescription: 'Learn studio lighting, manual exposure controls, and creative composition rules.',
    duration: '2 Weeks',
    mode: 'Offline',
    startDate: '2026-06-15',
    fee: 4999,
    seatsAvailable: 15,
    status: 'active',
    image: 'assets/images/courses/workshop.jpg',
    banner: 'assets/images/courses/workshop.jpg',
    overview: 'This workshop provides intensive practical training in a professional studio environment with modern lighting equipment, live model setups, and interactive portrait sessions.',
    eligibility: 'Open to all beginners, design students, and photography enthusiasts.',
    modules: [
      'Introduction to DSLR and Mirrorless Cameras',
      'Understanding Shutter Speed, Aperture, and ISO (Exposure Triangle)',
      'Studio Lighting Techniques & Light Modifiers',
      'Portraiture, Landscape, and Product Composition Rules',
      'Post-Processing Workflow in Adobe Lightroom & Photoshop'
    ],
    trainer: 'Sathish Kumar (Founder & Chief Photographer)',
    schedule: 'Saturdays & Sundays, 10:00 AM - 1:00 PM'
  },
  {
    id: 'course-itg-branding',
    name: 'ITG Academy Brand Design & Corporate Identity',
    category: 'itg-academy',
    description: 'Professional skill development programs and training courses offered through ITG Academy.',
    shortDescription: 'Master vector illustrations, logo typography, and brand system setups.',
    duration: '6 Weeks',
    mode: 'Online',
    startDate: '2026-07-01',
    fee: 11999,
    seatsAvailable: 25,
    status: 'active',
    image: 'assets/images/courses/itg-academy.jpg',
    banner: 'assets/images/courses/itg-academy.jpg',
    overview: 'Learn professional graphic designing, visual design principles, typography, corporate color matching, and modern brand guidelines construction.',
    eligibility: 'Basic computer operations. Prior familiarity with design concepts is not required.',
    modules: [
      'Vector Graphics & Drawing Tools in Adobe Illustrator',
      'Corporate Color Systems, Typography, & Visual Hierarchy',
      'Designing Logos & Branding Identity Guideline Booklets',
      'Creating Corporate Stationery & Responsive Web UI Assets',
      'Freelance Portfolios, Client Management, & Pricing Workflows'
    ],
    trainer: 'ITG Creative Designing Panel Specialists',
    schedule: 'Mondays, Wednesdays & Fridays, 7:00 PM - 8:30 PM'
  },
  {
    id: 'course-summer-media',
    name: 'Summer Media & Filmmaking Camp',
    category: 'summer-classes',
    description: 'Creative and technical summer programs for students, beginners, and aspiring professionals.',
    shortDescription: 'Introduction to video editing, storyboard design, and camera operating.',
    duration: '4 Weeks',
    mode: 'Offline',
    startDate: '2026-05-10',
    fee: 6499,
    seatsAvailable: 0,
    status: 'closed',
    image: 'assets/images/courses/summer-class.jpg',
    banner: 'assets/images/courses/summer-class.jpg',
    overview: 'A high-impact creative vacation camp designed to teach the fundamentals of visual storytelling, scriptwriting, gimbal balancing, and basic editing layouts.',
    eligibility: 'School & College students (Ages 12-22).',
    modules: [
      'Visual Scriptwriting, Storyboarding, & Direction Concepts',
      'Mobile Videography & Gimbal Stabilization Techniques',
      'Audio Recording & Voiceover Syncing Configurations',
      'Basic Video Editing in CapCut & Adobe Premiere Pro',
      'Publishing Layouts & Social Media Reel Formats'
    ],
    trainer: 'Sathish Media Creative Video Production Team',
    schedule: 'Monday to Friday, 10:00 AM - 12:30 PM'
  },
  {
    id: 'course-upcoming-ai-media',
    name: 'AI-Powered Creative Content Production Masterclass',
    category: 'upcoming',
    description: 'Display future courses, events, training programs, and workshops.',
    shortDescription: 'Leverage generative AI for prompt design, image rendering, and scriptwriting.',
    duration: '3 Days',
    mode: 'Online',
    startDate: '2026-08-20',
    fee: 2999,
    seatsAvailable: 50,
    status: 'upcoming',
    image: 'assets/images/courses/workshop.jpg',
    banner: 'assets/images/courses/workshop.jpg',
    overview: 'A futuristic masterclass covering prompt design, generative image production, audio synthesis, and AI video editing integrations.',
    eligibility: 'Creators, content marketers, social media specialists, and designers.',
    modules: [
      'Overview of Generative AI tools in Creative Pipelines',
      'Prompt Engineering for Midjourney, DALL-E, & ChatGPT',
      'AI Audio Clones, Background Music Synthesis, & Syncing',
      'Generating Short-form Video Reels & AI Avatars',
      'Copyright Regulations, Ethical AI, & Commercial Use Cases'
    ],
    trainer: 'AI Integration Expert Panel & Guest Speakers',
    schedule: 'Friday, Saturday & Sunday, 6:00 PM - 8:00 PM'
  }
];

const COURSES_STORAGE_KEY = 'sathish_courses';

// Get WhatsApp number from local settings or fallback
function getCoursesWhatsAppNumber() {
  try {
    const settings = JSON.parse(localStorage.getItem('sathish_settings') || '{}');
    const num = settings.whatsapp || '+91 8762097098';
    return num.replace(/[^0-9]/g, '');
  } catch (e) {
    return '918762097098';
  }
}

// Retrieve courses from LocalStorage or seed with default courses
function getCourses() {
  try {
    const stored = localStorage.getItem(COURSES_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading sathish_courses from LocalStorage:', e);
  }
  
  // Seed LocalStorage if empty
  saveCourses(DEFAULT_COURSES);
  return DEFAULT_COURSES;
}

// Save courses back to LocalStorage
function saveCourses(courses) {
  try {
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(courses));
  } catch (e) {
    console.error('Error saving courses to LocalStorage:', e);
  }
}

// Get single course by ID
function getCourseById(id) {
  const courses = getCourses();
  return courses.find(c => c.id === id);
}

// Generate prefilled WhatsApp URL for a course
function getCourseEnquiryUrl(courseName) {
  const whatsappNum = getCoursesWhatsAppNumber();
  
  const textMessage = 
`Hello Sathish Media,

I am interested in the following course:

Course Name:
${courseName}

Please share:

• Fee Details
• Duration
• Schedule
• Registration Process

Thank You.`;

  return `https://wa.me/${whatsappNum}?text=${encodeURIComponent(textMessage)}`;
}

// Format INR Price helper
function formatINR(price) {
  return '₹' + parseInt(price).toLocaleString('en-IN');
}
