// ============================================================
// SATHISH MEDIA - COMPLETE STATIC PRODUCT CATALOG
// Art & Stationery Showcase — No backend required
// ============================================================

function getWhatsAppNumber() {
  const settings = JSON.parse(localStorage.getItem('sathish_settings') || '{}');
  const num = settings.whatsapp || '918762097098';
  return num.replace(/[^0-9]/g, '');
}
const WHATSAPP_NUMBER = getWhatsAppNumber();

// ─── GIFT PRODUCTS ────────────────────────────────────────────────────────────
const GIFT_PRODUCTS = [
  {
    id: 'gift-album-royal',
    uniqueId: 'PRD-001',
    name: 'Sathish Royal Leather Wedding Album',
    category: 'Gifts',
    subCategory: 'PHOTO ALBUMS',
    price: 8499,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke, lay-flat heavy flush mound wedding album. Hand-bound in Italian full-grain leather with personalized hot-stamped gold foil custom title.',
    specs: ['350gsm archival matte premium papers', '180° true lay-flat seamless spreads', 'Waterproof & fingerprint resistant coating', 'Available in premium leather presentations'],
    rating: 5,
    popular: true,
    badge: 'BESTSELLER'
  },
  {
    id: 'gift-acrylic-mount',
    uniqueId: 'PRD-002',
    name: 'Premium Frameless Acrylic Glass Gift',
    category: 'Gifts',
    subCategory: 'FRAME GIFTS',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-high gloss frameless crystal acrylic desktop display. Laser-polished diamond edges with high-contrast metallic backed photo printing.',
    specs: ['8mm thick architectural graded acrylic', 'UV cured high-fidelity direct ink printing', 'Solid brass heavy support studs', 'Polished glass-like visual transparency'],
    rating: 5,
    popular: true,
    badge: 'POPULAR'
  },
  {
    id: 'gift-ceramic-mug',
    uniqueId: 'PRD-003',
    name: 'Sathish Signature Personalized Stoneware Mug',
    category: 'Gifts',
    subCategory: 'CUSTOM MUGS',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy clay stoneware mug featuring satin matte outer texture and beautifully printed high-fidelity artistic typography or custom photo layout.',
    specs: ['Artisanal stone ceramic composition', 'Scratch-resistant high temperature print glazing', 'Comfort double-finger handle design', 'Volume capacity: 380ml'],
    rating: 4,
    popular: false,
    badge: ''
  },
  {
    id: 'gift-classic-wood',
    uniqueId: 'PRD-004',
    name: 'Handcrafted Teakwood Collage Frame',
    category: 'Gifts',
    subCategory: 'PHOTO FRAMES',
    price: 4599,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal frame constructed with premium aged teakwood. Elegantly fits high contrast prints behind scratch-resistant high-transparency glass.',
    specs: ['Solid genuine plantation teak wood frame', 'Multi-window high density backing sheet', 'Acid-free double-layered cream mat board', 'Heavy duty metal hanging rigs pre-installed'],
    rating: 5,
    popular: false,
    badge: ''
  },
  {
    id: 'gift-led-lamp',
    uniqueId: 'PRD-005',
    name: 'Aura Warm LED Photo Prism Lamp',
    category: 'Gifts',
    subCategory: 'LED GIFTS',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    description: 'Laser engraved 3D glowing visual lamp with customizable cinematic pictures on acrylic plate. Soft wooden base emits premium golden ambient lighting.',
    specs: ['High brightness warm golden LED beads', 'Sustainable beechwood polished pedestal', 'Safe USB powered low voltage connection', 'Precision laser micro-groove detailing'],
    rating: 5,
    popular: true,
    badge: 'POPULAR'
  },
  {
    id: 'gift-memory-wooden',
    uniqueId: 'PRD-006',
    name: 'Luxury Wooden Keepsake Memory Box',
    category: 'Gifts',
    subCategory: 'MEMORY BOXES',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    description: 'Handmade maple wood memory trunk designed to house printed wedding highlights, USB drives, custom letters, and emotional keepsakes.',
    specs: ['Hand-selected dark maple wood structure', 'Magnetic safety latch mechanism', 'Plush velvet internal cushion backing', 'Compartment space dedicated for premium video prints'],
    rating: 5,
    popular: true,
    badge: 'NEW'
  },
  {
    id: 'gift-scrapbook-velvet',
    uniqueId: 'PRD-007',
    name: 'Bespoke Velvet Memory Scrapbook',
    category: 'Gifts',
    subCategory: 'PHOTO ALBUMS',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-soft velvet wrapped creative diary with thick black pages for handcrafted scrapbooking, tickets, polaroids, and handdrawn memoirs.',
    specs: ['Ultra plush dust-repellent velvet covers', '40 sheets of heavy 250gsm black card sheets', 'Hand-threaded vintage canvas spine bind', 'Includes custom metallic ink pen set'],
    rating: 4,
    popular: false,
    badge: ''
  }
];

// ─── ART MATERIALS ─────────────────────────────────────────────────────────────
const ART_PRODUCTS = [
  { id: 'art-pencil', uniqueId: 'ART-001', name: 'Pencil', category: 'Art Materials', subCategory: 'DRAWING TOOLS', price: 10, image: 'assets/images/yellow_pencil_1779693082077.png', description: 'Premium HB graphite pencil designed for smooth sketching, writing, and creative drafting.', specs: ['HB grade graphite core', 'Smooth writing performance', 'Break-resistant formula', 'Ideal for school & art'], rating: 4, badge: '' },
  { id: 'art-eraser', uniqueId: 'ART-002', name: 'Eraser', category: 'Art Materials', subCategory: 'DRAWING TOOLS', price: 5, image: 'assets/images/blue_eraser_1779693102453.png', description: 'Soft non-dust eraser for clean corrections and smooth paper finish.', specs: ['Non-dust formula', 'Soft elastomer composition', 'Clean correction', 'Smudge-free finish'], rating: 4, badge: '' },
  { id: 'art-sharpener', uniqueId: 'ART-003', name: 'Sharpener', category: 'Art Materials', subCategory: 'DRAWING TOOLS', price: 15, image: 'assets/images/camlin_sharpener_1779693123365.png', description: 'Durable precision sharpener with smooth blade rotation for clean pencil tips.', specs: ['Steel alloy blade', 'Smooth rotation mechanism', 'Dual hole design', 'Shaving collector tray'], rating: 4, badge: '' },
  { id: 'art-color-pencils', uniqueId: 'ART-004', name: 'Color Pencils', category: 'Art Materials', subCategory: 'COLOR TOOLS', price: 120, image: 'assets/images/color_pencils_cup_1779694087249.png', description: '24-shade vibrant color pencil set for sketching, shading, school projects, and professional artwork.', specs: ['24 vibrant shades', 'Soft wax core', 'Pre-sharpened tips', 'Blendable formula'], rating: 5, badge: 'POPULAR' },
  { id: 'art-sketch-pens', uniqueId: 'ART-005', name: 'Sketch Pens', category: 'Art Materials', subCategory: 'COLOR TOOLS', price: 180, image: 'assets/images/camel_sketch_pens_1779694107981.png', description: '24-shade smooth-flow sketch pen collection with bright vibrant ink for creative illustrations.', specs: ['24 vibrant colors', 'Smooth flow nib', 'Durable tip', 'Water-based ink'], rating: 5, badge: 'POPULAR' },
  { id: 'art-crayons', uniqueId: 'ART-006', name: 'Crayons', category: 'Art Materials', subCategory: 'COLOR TOOLS', price: 95, image: 'assets/images/camel_wax_crayons_1779694129023.png', description: 'Non-toxic jumbo wax crayons with rich pigment colors for kids and creative artwork.', specs: ['Non-toxic wax formula', 'Rich pigment', 'Jumbo size', 'Easy grip'], rating: 4, badge: '' },
  { id: 'art-water-colors', uniqueId: 'ART-007', name: 'Water Colors', category: 'Art Materials', subCategory: 'PAINT', price: 160, image: 'assets/images/camel_watercolor_cakes_1779694145552.png', description: '24-shade watercolor cake palette with smooth blending and rich artistic finish.', specs: ['24 shades', 'Smooth blending', 'Rewettable cakes', 'Portable palette'], rating: 5, badge: 'POPULAR' },
  { id: 'art-oil-pastels', uniqueId: 'ART-008', name: 'Oil Pastels', category: 'Art Materials', subCategory: 'PAINT', price: 210, image: 'assets/images/camel_oil_pastels_1779694160116.png', description: 'Premium soft oil pastel color set with vibrant shades and smooth texture blending.', specs: ['Buttery soft formula', 'Vibrant pigments', 'Blendable shades', 'Artist grade'], rating: 5, badge: 'NEW' },
  { id: 'art-paint-brushes', uniqueId: 'ART-009', name: 'Paint Brushes', category: 'Art Materials', subCategory: 'BRUSHES', price: 185, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', description: 'Set of hand-tapered synthetic golden taklon brushes built for high point memory and supreme fluid execution.', specs: ['Taklon synthetic hair', 'Solid brass ferrule', 'Wooden handle', 'Multi-size set'], rating: 5, badge: '' },
  { id: 'art-canvas-board', uniqueId: 'ART-010', name: 'Canvas Board', category: 'Art Materials', subCategory: 'SURFACES', price: 140, image: 'assets/images/camel_canvas_board_1779694177066.png', description: 'Professional textured canvas board ideal for acrylic and oil painting artwork.', specs: ['100% cotton canvas', 'Triple primed surface', 'Rigid board backing', 'Artist grade'], rating: 4, badge: '' },
  { id: 'art-sketch-book', uniqueId: 'ART-012', name: 'Sketch Book', category: 'Art Materials', subCategory: 'SURFACES', price: 185, image: 'assets/images/camel_sketchbook_1779695024349.png', description: 'Premium A4 spiral sketchbook with 270 GSM thick sheets suitable for watercolor, charcoal, markers, and pencil artwork.', specs: ['270 GSM thick sheets', 'A4 spiral bound', 'Multi-media compatible', '50 sheets'], rating: 5, badge: 'POPULAR' },
  { id: 'art-charcoal', uniqueId: 'ART-013', name: 'Charcoal Pencil', category: 'Art Materials', subCategory: 'DRAWING TOOLS', price: 95, image: 'assets/images/camlin_charcoal_pencils_1779695095586.png', description: 'Professional charcoal pencil set for sketching, shading, portrait drawing, and deep artistic textures.', specs: ['Professional grade charcoal', 'Deep rich tones', 'Breakage-resistant', 'Set of 6'], rating: 4, badge: '' },
  { id: 'art-markers', uniqueId: 'ART-014', name: 'Marker Pens', category: 'Art Materials', subCategory: 'COLOR TOOLS', price: 110, image: 'assets/images/camlin_markers_1779695044154.png', description: 'Fine-tip permanent marker set with smooth bold ink flow ideal for labeling, sketching, and creative projects.', specs: ['Fine tip point', 'Permanent ink', 'Bold line quality', 'Quick dry'], rating: 4, badge: '' },
  { id: 'art-poster-colors', uniqueId: 'ART-015', name: 'Poster Colors', category: 'Art Materials', subCategory: 'PAINT', price: 240, image: 'assets/images/camel_poster_colors_1779695060691.png', description: '12-shade rich poster color paint set with smooth matte finish for school and professional artwork.', specs: ['12 rich shades', 'Smooth matte finish', 'High opacity', 'Water soluble'], rating: 5, badge: 'POPULAR' },
  { id: 'art-glue', uniqueId: 'ART-016', name: 'Glue / Fevicol', category: 'Art Materials', subCategory: 'ADHESIVES', price: 45, image: 'assets/images/camlin_white_glue_1779695079988.png', description: 'Strong white craft glue ideal for paper art, school projects, handmade crafts, and model making.', specs: ['Strong bonding formula', 'White non-toxic glue', 'Dries clear', 'Easy application'], rating: 4, badge: '' },
  { id: 'art-scissors', uniqueId: 'ART-017', name: 'Scissors', category: 'Art Materials', subCategory: 'CUTTING TOOLS', price: 70, image: 'assets/images/krafty_scissors_1779695129758.png', description: 'Comfort-grip stainless steel scissors designed for safe smooth cutting in school and craft work.', specs: ['Stainless steel blade', 'Comfort grip handle', 'Sharp precision cut', 'Safety tip'], rating: 4, badge: '' },
  { id: 'art-scale', uniqueId: 'ART-018', name: 'Scale / Ruler', category: 'Art Materials', subCategory: 'DRAWING TOOLS', price: 35, image: 'assets/images/camlin_scale_ruler_1779695113238.png', description: 'Transparent 30cm precision ruler with clear measurement markings for technical and creative drafting.', specs: ['30cm transparent ruler', 'Dual measurement scale', 'Anti-slip base', 'Break-resistant'], rating: 4, badge: '' }
];

// ─── STATIONERY PRODUCTS ──────────────────────────────────────────────────────
const STATIONERY_PRODUCTS = [
  { id: 'stat-notebook', uniqueId: 'ART-019', name: 'Notebook', category: 'Stationery', subCategory: 'WRITING PADS', price: 249, image: 'assets/images/black_spiral_notebook_1779700614574.png', description: 'Premium spiral-bound hardcover notebook with smooth ruled pages for office notes, journaling, and creative writing.', specs: ['Spiral bound', 'Hardcover', 'Smooth ruled pages', '200 pages'], rating: 5, badge: 'POPULAR' },
  { id: 'stat-pen', uniqueId: 'ART-020', name: 'Fountain Pen', category: 'Stationery', subCategory: 'PENS', price: 450, image: 'assets/images/luxury_fountain_pen_1779700747684.png', description: 'Luxury brass-plated iridium-nib fountain pen that provides supreme tactile ink flow for executive tasks.', specs: ['Iridium nib point', 'Brass-plated body', 'Smooth ink flow', 'Refillable cartridge'], rating: 5, badge: 'PREMIUM' },
  { id: 'stat-gel-pen', uniqueId: 'ART-021', name: 'Gel Pen', category: 'Stationery', subCategory: 'PENS', price: 20, image: 'assets/images/reynolds_gel_pen_1779700631918.png', description: 'Smooth-flow quick dry gel pen engineered for effortless writing, precision notes, and clean ink delivery.', specs: ['Quick dry gel ink', '0.5mm fine point', 'Comfortable grip', 'Smooth write'], rating: 4, badge: '' },
  { id: 'stat-ball-pen', uniqueId: 'ART-022', name: 'Ball Pen', category: 'Stationery', subCategory: 'PENS', price: 45, image: 'assets/images/pastel_ball_pens_1779700653650.png', description: 'Minimal matte-finish retractable ball pen with ergonomic grip and ultra-smooth writing performance.', specs: ['Retractable mechanism', 'Matte finish', 'Ergonomic grip', 'Smooth ball tip'], rating: 4, badge: '' },
  { id: 'stat-highlighter', uniqueId: 'ART-023', name: 'Highlighter Set', category: 'Stationery', subCategory: 'MARKERS', price: 149, image: 'assets/images/kores_highlighters_1779700669725.png', description: 'Fluorescent highlighter set with vibrant colors for studying, office marking, note organization, and journaling.', specs: ['Fluorescent colors', 'Chisel tip', 'Quick dry ink', 'Set of 6'], rating: 4, badge: 'POPULAR' },
  { id: 'stat-sticky-notes', uniqueId: 'ART-024', name: 'Sticky Notes', category: 'Stationery', subCategory: 'OFFICE', price: 99, image: 'assets/images/neon_sticky_notes_1779700684550.png', description: 'Multi-size adhesive sticky notes designed for reminders, planning, bookmarks, and productivity workflows.', specs: ['Neon color pack', 'Strong adhesive', 'Repositionable', 'Multiple sizes'], rating: 4, badge: '' },
  { id: 'stat-stapler', uniqueId: 'ART-025', name: 'Stapler', category: 'Stationery', subCategory: 'OFFICE', price: 185, image: 'assets/images/blue_desktop_stapler_1779700699836.png', description: 'Compact durable desktop stapler with smooth press mechanism ideal for office, school, and documentation work.', specs: ['Desktop stapler', 'Smooth press action', 'Jam-free mechanism', '25 sheet capacity'], rating: 4, badge: '' },
  { id: 'stat-staple-pins', uniqueId: 'ART-026', name: 'Staple Pins', category: 'Stationery', subCategory: 'OFFICE', price: 40, image: 'assets/images/kangaro_staple_pins_1779700718025.png', description: 'Premium galvanized staple pins engineered for jam-free smooth stapling and long-lasting office performance.', specs: ['Galvanized steel', 'No. 10 size', 'Jam-free design', '1000 pins pack'], rating: 4, badge: '' },
  { id: 'stat-paper-clips', uniqueId: 'ART-027', name: 'Paper Clips', category: 'Stationery', subCategory: 'OFFICE', price: 50, image: 'assets/images/rose_gold_paperclips_1779700771580.png', description: 'Anti-scratch copper wire paper clamps offering a non-marring grasp to protect valuable executive portfolios.', specs: ['Rose gold finish', 'Anti-scratch coating', 'Standard 33mm', '100 pcs pack'], rating: 4, badge: '' },
  { id: 'stat-folder', uniqueId: 'ART-028', name: 'File Folder', category: 'Stationery', subCategory: 'FILING', price: 120, image: 'assets/images/minimal_file_folder_1779700788117.png', description: 'Minimalist heavy-duty presentation file binders with multi-sleeve archival sheet protection pockets.', specs: ['Heavy-duty material', 'Multi-pocket design', 'Archive class quality', 'A4 size'], rating: 4, badge: '' },
  { id: 'stat-brown-sheet', uniqueId: 'ART-029', name: 'Brown Sheet', category: 'Stationery', subCategory: 'PAPER', price: 30, image: 'assets/images/kraft_brown_sheet_1779700809889.png', description: 'Rolls of natural long-fiber unbleached kraft paper, perfect for studio backdrops or wrapping design models.', specs: ['Long fiber kraft', 'Unbleached natural', '70gsm weight', 'Multi-purpose'], rating: 4, badge: '' },
  { id: 'stat-white-paper', uniqueId: 'ART-030', name: 'White Paper (Ream)', category: 'Stationery', subCategory: 'PAPER', price: 180, image: 'assets/images/thick_white_paper_1779700826522.png', description: 'Loom-faced 120gsm high comfort white letterpress pages perfect for typography and luxury scripts.', specs: ['120gsm weight', 'Bright white finish', 'Smooth texture', 'A4 format'], rating: 4, badge: '' },
  { id: 'stat-a4', uniqueId: 'ART-031', name: 'A4 Sheets (500 pk)', category: 'Stationery', subCategory: 'PAPER', price: 299, image: 'assets/images/a4_copier_sheets_1779700843259.png', description: 'High-white copier sheets with treated low-friction coating for jam-free printing configurations.', specs: ['500 sheets ream', '75gsm weight', 'High-white brightness', 'Jam-free print'], rating: 5, badge: 'VALUE' },
  { id: 'stat-calculator', uniqueId: 'ART-032', name: 'Calculator', category: 'Stationery', subCategory: 'OFFICE', price: 499, image: 'assets/images/cream_calculator_1779700867625.png', description: 'Aesthetic sand-textured desktop dual-powered scientific calculator with highly tactile key mechanisms.', specs: ['Dual solar power', 'Scientific functions', 'Large display', 'Tactile keys'], rating: 5, badge: 'POPULAR' },
  { id: 'stat-tape', uniqueId: 'ART-033', name: 'Tape', category: 'Stationery', subCategory: 'ADHESIVES', price: 35, image: 'assets/images/clear_sealer_tape_1779700884414.png', description: 'High-strength crystal-clear cellulose sealer tape that remains completely invisible upon surface mount.', specs: ['Crystal clear', 'Cellulose material', 'Invisible on paper', 'Strong adhesion'], rating: 4, badge: '' },
  { id: 'stat-punch', uniqueId: 'ART-034', name: 'Punch Machine', category: 'Stationery', subCategory: 'OFFICE', price: 145, image: 'assets/images/punch_machine_metal_1779700918566.png', description: 'Heavy steel-alloy desktop double hole punches with alignment grids and comfortable push-down handles.', specs: ['Steel-alloy body', 'Double hole punch', 'Alignment grid', '20 sheet capacity'], rating: 4, badge: '' },
  { id: 'stat-correction-pen', uniqueId: 'ART-035', name: 'Correction Pen', category: 'Stationery', subCategory: 'OFFICE', price: 45, image: 'assets/images/precision_correction_pen_1779700938014.png', description: 'Squeeze-controlled precision micro-tip correction fluids for immediate white opaque error masking.', specs: ['Micro-tip precision', 'Opaque white fluid', 'Fast drying', 'Squeeze control'], rating: 4, badge: '' }
];

// ─── CRAFT MATERIALS ──────────────────────────────────────────────────────────
const CRAFT_PRODUCTS = [
  { id: 'craft-glitter-sheets', uniqueId: 'ART-039', name: 'Glitter Sheets', category: 'Craft Materials', subCategory: 'CRAFT PAPER', price: 129, image: 'https://images.unsplash.com/photo-1572945281861-68b28384e5a9?auto=format&fit=crop&w=600&q=80', description: 'Premium sparkling glitter craft sheets designed for DIY decoration, school projects, scrapbooks, and art applications.', specs: ['Shed-free glitter', 'A4 size sheets', 'Multiple colors', 'Adhesive backing'], rating: 4, badge: '' },
  { id: 'craft-paper', uniqueId: 'ART-040', name: 'Craft Paper', category: 'Craft Materials', subCategory: 'CRAFT PAPER', price: 49, image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80', description: 'Vibrant double-sided folding sheets ideal for dimensional paper origami, miniature architecture, and crafts.', specs: ['Double-sided color', 'Origami grade', '80gsm weight', '50 sheets pack'], rating: 4, badge: '' },
  { id: 'craft-satin-ribbon', uniqueId: 'ART-041', name: 'Satin Ribbon', category: 'Craft Materials', subCategory: 'DECORATION', price: 89, image: 'https://images.unsplash.com/photo-1544412933-514a83d2f3c8?auto=format&fit=crop&w=600&q=80', description: 'Luxury satin ribbon roll with smooth glossy texture ideal for gift wrapping, decoration, crafts, and event styling.', specs: ['Silk satin texture', 'Glossy finish', '25mm width', '10m roll'], rating: 4, badge: '' },
  { id: 'craft-stickers', uniqueId: 'ART-042', name: 'Decorative Stickers', category: 'Craft Materials', subCategory: 'DECORATION', price: 149, image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80', description: 'Kawaii decorative sticker collection perfect for journaling, scrapbooking, planners, laptops, and stationery customization.', specs: ['Vinyl adhesive', 'Kawaii design', 'Repositionable', '200 stickers pack'], rating: 5, badge: 'POPULAR' },
  { id: 'craft-glue-gun', uniqueId: 'ART-043', name: 'Hot Glue Gun', category: 'Craft Materials', subCategory: 'TOOLS', price: 399, image: 'https://images.unsplash.com/photo-1620393470010-fd99908a8d11?auto=format&fit=crop&w=600&q=80', description: 'Professional quick-heating hot glue gun designed for craft work, DIY fixing, decorations, and school projects.', specs: ['Anti fluid leak', 'Quick heat up', '20W power', 'Includes 10 glue sticks'], rating: 4, badge: '' },
  { id: 'craft-thread', uniqueId: 'ART-044', name: 'Thread & Needle Kit', category: 'Craft Materials', subCategory: 'TOOLS', price: 99, image: 'https://images.unsplash.com/photo-1584263347416-85a696b4dba7?auto=format&fit=crop&w=600&q=80', description: 'Durable stitching thread and premium steel needle kit suitable for tailoring, embroidery, crafting, repairs, and handmade projects.', specs: ['Polyester thread', 'Steel needles set', 'Multiple colors', 'Book binding grade'], rating: 4, badge: '' },
  { id: 'craft-clay', uniqueId: 'ART-045', name: 'Modeling Clay', category: 'Craft Materials', subCategory: 'SCULPTING', price: 199, image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5db?auto=format&fit=crop&w=600&q=80', description: 'Soft colorful non-toxic creative clay set with shaping tools, ideal for kids crafts, DIY modeling, school activities, and creative artwork.', specs: ['Non-toxic formula', 'Air solidified', 'Colorful set', 'Includes tools'], rating: 4, badge: '' },
  { id: 'craft-thermocol', uniqueId: 'ART-046', name: 'Thermocol Sheets', category: 'Craft Materials', subCategory: 'SCULPTING', price: 149, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', description: 'Lightweight premium thermocol sheets perfect for craft modeling, architecture projects, school exhibitions, decorations, and DIY artwork.', specs: ['Dense styrene', 'Lightweight', 'Easy to cut', 'A3 size sheets'], rating: 4, badge: '' },
  { id: 'craft-cutter', uniqueId: 'ART-047', name: 'Cutter Knife', category: 'Craft Materials', subCategory: 'TOOLS', price: 55, image: 'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80', description: 'Heavy anti-slip steel craft slider utility knife featuring multi-segment snap-off razors.', specs: ['Snap-off razor blades', 'Anti-slip grip', 'Steel construction', '18mm blade width'], rating: 4, badge: '' }
];

// ─── MOBILE & COMPUTER ACCESSORIES (50 PREMIUM PRODUCTS) ─────────────────────────
const MCA_PRODUCTS = [
  // Mobile Accessories (20 items)
  {
    id: 'mca-charger-standard',
    uniqueId: 'MCA-001',
    name: 'Sathish Premium 18W Mobile Charger',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 499,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    description: 'High-speed 18W charging adapter with intelligent smart-IC chip. Safeguards devices against overcurrent, short circuits, and overheating.',
    specs: ['18W Quick Charge 3.0 support', 'Intelligent smart-IC voltage controller', 'Fire-resistant polycarbonate casing', 'Universal USB-A port configuration'],
    rating: 5,
    popular: true,
    badge: 'BESTSELLER',
    availability: 'in-stock'
  },
  {
    id: 'mca-charger-fast',
    uniqueId: 'MCA-002',
    name: 'Sathish Ultra-Fast 65W GaN Charger',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1622445262465-248197576550?auto=format&fit=crop&w=800&q=80',
    description: 'Next-gen Gallium Nitride (GaN) high-speed charger. Delivers massive 65W output power to charge smartphones and modern laptops efficiently.',
    specs: ['65W max output power', 'Gallium Nitride (GaN) technology', 'Dual USB-C and USB-A output ports', 'Foldable plug compact design'],
    rating: 5,
    popular: true,
    badge: 'PREMIUM',
    availability: 'in-stock'
  },
  {
    id: 'mca-cable-typec',
    uniqueId: 'MCA-003',
    name: 'Sathish Braided Type-C Fast Cable',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 299,
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
    description: 'Nylon-braided heavy-duty USB-C charging cable with reinforced copper core for maximum durability and fast data syncing.',
    specs: ['3A fast charging compatibility', 'Nylon-braided tearproof cover', 'Heavy-duty strain-relief joints', 'High-speed 480Mbps data transfer'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-cable-usb',
    uniqueId: 'MCA-004',
    name: 'Sathish Heavy-Duty USB-A to Micro-USB Cable',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 199,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
    description: 'Highly resilient micro-USB syncing cable. Ideal for daily charging of legacy Android devices, power banks, and wireless accessories.',
    specs: ['Flexible TPE exterior shielding', 'Extra copper core wire gauge', 'Reinforced metal connectors', 'Length: 1.2 meters / 4 feet'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-cable-lightning',
    uniqueId: 'MCA-005',
    name: 'Sathish Premium Lightning to Type-C Cable',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 399,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    description: 'Apple MFi-certified Lightning to USB-C charging cord. Fully compatible with fast charging specifications of iPhones and iPads.',
    specs: ['Apple MFi-certified smart chip', 'Supports USB-C Power Delivery', 'Reinforced internal aramid fibers', 'Tangle-free protective design'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-otg-adapter',
    uniqueId: 'MCA-006',
    name: 'Sathish Dual-Connector OTG Adapter',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 149,
    image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=800&q=80',
    description: 'Pocket-sized metallic OTG adapter. Connect standard USB flash drives, keyboards, and mice directly to smartphones.',
    specs: ['USB-C & Micro-USB dual interface', 'Ultra-durable aluminum shell', 'Plug-and-play driverless setup', 'SuperSpeed data transmission'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-mobile-stand',
    uniqueId: 'MCA-007',
    name: 'Sathish Multi-Angle Desktop Mobile Stand',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 249,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy carbon steel-alloy mobile pedestal. Features adjustable angles and non-slip rubber pads for hands-free video watching.',
    specs: ['180-degree multi-angle adjustment', 'Solid weighted metal base', 'Anti-scratch silicone grip linings', 'Rear charging cable pass-through slot'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-mobile-holder',
    uniqueId: 'MCA-008',
    name: 'Sathish Flexible Car Windshield Mount',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 349,
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy suction windshield dashboard mobile mount. Features 360-degree rotation and shockproof spring clamps.',
    specs: ['Industrial-strength sticky suction cup', '360-degree rotatable ball joint', 'Extendable telescoping arm reach', 'Shock-absorbing padded side arms'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-back-cover',
    uniqueId: 'MCA-009',
    name: 'Sathish Clear TPU Shockproof Back Case',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 199,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-clear crystal clear hybrid protective back cover. Shock-absorbing TPU bumpers protect phone borders against drops.',
    specs: ['Yellowing-resistant premium TPU', 'Raised camera bezel protection', 'Mil-grade drop-tested cushions', 'Slim, lightweight layout profiles'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-tempered-glass',
    uniqueId: 'MCA-010',
    name: 'Sathish 9H Hardness Tempered Glass Guard',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty 9H tempered glass screen shield. Resists direct impacts, knife scratches, and fingerprints cleanly.',
    specs: ['Ultra-tough 9H scratch resistance', '0.33mm slim responsive glass layer', 'Oleophobic smudge-proof coating', 'Bubble-free self-adhesive install'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-earphones',
    uniqueId: 'MCA-011',
    name: 'Sathish Deep Bass Wired Earphones',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Metallic in-ear high-definition headphones. Equipped with dynamic 10mm bass drivers and clear inline microphone.',
    specs: ['Premium metallic driver chambers', 'High-definition sound with deep bass', 'Tangle-resistant flat cable', 'Integrated universal mic controls'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-bluetooth-earbuds',
    uniqueId: 'MCA-012',
    name: 'Sathish Aura ANC Wireless Earbuds',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    description: 'Active Noise Cancelling (ANC) TWS earbuds. Features Bluetooth 5.3 and dynamic ambient filtering for perfect acoustics.',
    specs: ['25dB Active Noise Cancellation', 'Bluetooth 5.3 instant syncing', 'Up to 30 hours playback case backup', 'IPX5 sweat & water resistant rating'],
    rating: 5,
    popular: true,
    badge: 'POPULAR',
    availability: 'in-stock'
  },
  {
    id: 'mca-neckband',
    uniqueId: 'MCA-013',
    name: 'Sathish Active Sports Neckband Headset',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 999,
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight ergonomic collar band headset. Designed with premium liquid silicone and magnetic locking earbuds for secure workouts.',
    specs: ['Premium liquid silicone collar', 'Magnetic auto-lock earbud shells', 'Massive 24-hour non-stop battery', 'Dedicated ultra low-latency gaming mode'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-speaker',
    uniqueId: 'MCA-014',
    name: 'Sathish Neon 10W Waterproof Bluetooth Speaker',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    description: 'Rugged portable 10W speaker featuring colorful breathing RGB light rings and punchy double passive radiator audio.',
    specs: ['10W powerful stereo audio drivers', 'Breathing RGB audio-sync neon ring', 'IPX7 certified waterproof shell', 'Built-in high-capacity rechargeable cell'],
    rating: 5,
    popular: true,
    badge: 'POPULAR',
    availability: 'in-stock'
  },
  {
    id: 'mca-powerbank',
    uniqueId: 'MCA-015',
    name: 'Sathish 20000mAh Power Delivery Power Bank',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1609592424089-9a76d8ab8706?auto=format&fit=crop&w=800&q=80',
    description: 'High-density 20,000mAh external battery pack. Delivers rapid 22.5W Power Delivery (PD) speeds through smart USB output ports.',
    specs: ['20000mAh lithium-polymer cells', '22.5W dual-way Power Delivery', 'Aesthetic matte carbon finish', 'Digital LED battery status display'],
    rating: 5,
    popular: true,
    badge: 'BESTSELLER',
    availability: 'in-stock'
  },
  {
    id: 'mca-selfiestick',
    uniqueId: 'MCA-016',
    name: 'Sathish Compact Bluetooth Selfie Stick',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 299,
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight extendable selfie pole constructed with architectural grade aluminum. Converts into a stable desktop tripod.',
    specs: ['Extendable up to 28 inches length', 'Detachable pocket Bluetooth remote', 'Dual-use tripod desktop configuration', 'Lightweight aluminum telescoping body'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-ringlight',
    uniqueId: 'MCA-017',
    name: 'Sathish Professional 10-inch Ring Light',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 799,
    image: 'https://images.unsplash.com/photo-1595956553229-a1b7e40854c6?auto=format&fit=crop&w=800&q=80',
    description: 'Dual color-tone LED light ring for content creators. Provides uniform shadowless illumination with 3 brightness modes.',
    specs: ['10-inch diameter circular panel', '3 distinct light spectrum tones', 'USB plug powered inline controller', 'Universal flexible spring smartphone clamp'],
    rating: 5,
    popular: false,
    badge: 'NEW',
    availability: 'in-stock'
  },
  {
    id: 'mca-tripod',
    uniqueId: 'MCA-018',
    name: 'Sathish Portable 3-Way Mobile Tripod',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 499,
    image: 'https://images.unsplash.com/photo-1616423643768-5e5bfaf1e12a?auto=format&fit=crop&w=800&q=80',
    description: 'Premium extendable studio tripod. Stable rubber feet with 3-way panning head ensure blur-free photography and video filming.',
    specs: ['Sturdy aluminum alloy frame structure', '3-way panning and tilting head', 'Quick-release plate mechanisms', 'Adjustable height up to 50 inches'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-memorycard',
    uniqueId: 'MCA-019',
    name: 'Sathish Ultra-Speed 128GB MicroSD Card',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 899,
    image: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=800&q=80',
    description: 'Class-10 UHS-I micro secure digital flash storage card. Fully optimized for high-resolution 4K video recording on smartphones and cameras.',
    specs: ['128GB raw data capacity storage', 'Ultra fast 100MB/s read speeds', 'Class 10 UHS-I Grade 3 rating', 'Shock, heat, and waterproof build'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-cardreader',
    uniqueId: 'MCA-020',
    name: 'Sathish USB 3.0 High-Speed Card Reader',
    category: 'CAT-MCA',
    subCategory: 'MOBILE ACCESSORIES',
    price: 249,
    image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80',
    description: 'Dual-slot OTG memory reader. Instantly import photos from digital cameras directly onto laptops and smartphones.',
    specs: ['SD & MicroSD independent slots', 'SuperSpeed USB 3.0 controller chip', 'Highly compact travel cap structure', 'Plug-and-play driverless operations'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },

  // Computer Accessories (20 items)
  {
    id: 'mca-mouse-usb',
    uniqueId: 'MCA-021',
    name: 'Sathish Ergonomic USB Optical Mouse',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 249,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    description: 'Full-sized optical mouse designed for maximum hand comfort and smooth cursor positioning on multiple desk surfaces.',
    specs: ['1200 DPI high-precision engine', 'Comfortable symmetrical design profile', 'Durable 5-million clicks buttons', '1.5-meter reinforced interface cord'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-mouse-wireless',
    uniqueId: 'MCA-022',
    name: 'Sathish Silent Click Wireless Mouse',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 699,
    image: 'https://images.unsplash.com/photo-1625772290748-160be2a9dd75?auto=format&fit=crop&w=800&q=80',
    description: 'Premium 2.4GHz wireless mouse. Built with noise-reduction silent button mechanisms, perfect for quiet work environments.',
    specs: ['2.4GHz wireless nano-receiver slot', 'Silent click noise dampeners', 'Adjustable 1600 DPI resolution', 'Smart auto-sleep power saving mode'],
    rating: 5,
    popular: true,
    badge: 'BESTSELLER',
    availability: 'in-stock'
  },
  {
    id: 'mca-mouse-gaming',
    uniqueId: 'MCA-023',
    name: 'Sathish Titan RGB Wired Gaming Mouse',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80',
    description: 'Pro gaming grade optical mouse. Outfitted with dynamic multi-color RGB backlighting, DPI hotkeys, and textured anti-slip side grips.',
    specs: ['Dynamic chroma RGB color lighting', 'On-the-fly adjustable 7200 DPI', '6 fully programmable macro buttons', 'Braided high-strength USB cord'],
    rating: 5,
    popular: true,
    badge: 'NEW',
    availability: 'in-stock'
  },
  {
    id: 'mca-keyboard-usb',
    uniqueId: 'MCA-024',
    name: 'Sathish Sleek USB Desktop Keyboard',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 499,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    description: 'Full-sized desktop QWERTY keyboard. Features spill-resistant layouts, whisper-quiet membrane keys, and sturdy tilt legs.',
    specs: ['Spill-resistant defensive layout', 'Soft membrane silent keys caps', 'Full-size integrated numeric pad', 'Plug-and-play USB connection cable'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-keyboard-wireless',
    uniqueId: 'MCA-025',
    name: 'Sathish Slim Wireless Keyboard',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1626266842426-8054a88f7c11?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-thin aesthetic wireless keyboard. Built with premium aluminum-feel framing and comfortable tactile scissor-switch key caps.',
    specs: ['Ultra-thin 5mm profile construction', 'Premium scissor-switch key mechanisms', 'Reliable 2.4GHz signal transmission', 'Excellent 6-month battery lifetime'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-keyboard-mechanical',
    uniqueId: 'MCA-026',
    name: 'Sathish Mechanical Gaming Keyboard',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
    description: 'Aesthetic clicky mechanical keyboard. Outfitted with high-durability blue tactile switches and dynamic multi-mode LED backlights.',
    specs: ['Tactile clicky blue mechanical switches', 'Chroma LED backlighting options', '100% anti-ghosting rollover keys', 'Premium brushed metal upper panel'],
    rating: 5,
    popular: true,
    badge: 'PREMIUM',
    availability: 'in-stock'
  },
  {
    id: 'mca-mousepad',
    uniqueId: 'MCA-027',
    name: 'Sathish Precision Textured Mouse Pad',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 199,
    image: 'https://images.unsplash.com/photo-1632292224971-0d45778b3002?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy rubber base mouse pad. Smooth micro-textured fabric surface guarantees optimal tracking and pixel-perfect control.',
    specs: ['Micro-woven fabric speed surface', 'Anti-slip natural rubber underlay', 'Anti-fraying stitched border seams', 'Spill-resistant water wash coating'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-laptopstand',
    uniqueId: 'MCA-028',
    name: 'Sathish Aluminum Folding Laptop Stand',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 899,
    image: 'https://images.unsplash.com/photo-1616353071855-2c045094516e?auto=format&fit=crop&w=800&q=80',
    description: 'Fully collapsible ergonomic aluminum laptop stand. Adjusts notebook screen angles to minimize neck strain.',
    specs: ['Architectural-grade brushed aluminum', '6 adjustable height tilting steps', 'Collapsible pocket travel framework', 'Anti-skid soft protective rubber grips'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-coolingpad',
    uniqueId: 'MCA-029',
    name: 'Sathish Dual-Fan Laptop Cooling Pad',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty cooling deck for gaming notebooks. Features dual high-speed 140mm silent fans and striking blue LED accents.',
    specs: ['Dual 140mm silent airflow fans', 'High-durability metal mesh frame', 'Integrated dual USB pass-through ports', 'Adjustable typing tilt angle stands'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-usbhub',
    uniqueId: 'MCA-030',
    name: 'Sathish 4-in-1 Ultra Slim USB 3.0 Hub',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 599,
    image: 'https://images.unsplash.com/photo-1616353118120-f5a60e0a5528?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-thin 4-port USB splitter. Effortlessly connect multiple flash drives, keyboards, and printers via a single USB connection.',
    specs: ['4 independent USB 3.0 output ports', '5Gbps ultra-high speed sync rates', 'Reinforced cable core insulation', 'Slim pocket-friendly structural layout'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-external-hdd',
    uniqueId: 'MCA-031',
    name: 'Sathish Portable 1TB External Hard Drive',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    description: 'High-capacity 1TB portable hard disk. Perfect for offline backing up of dynamic videography files and large digital catalogs.',
    specs: ['Massive 1TB offline storage space', 'USB 3.0 high-speed data connection', 'Rugged shockproof outer enclosure', 'Auto backup utility integration'],
    rating: 5,
    popular: true,
    badge: 'BESTSELLER',
    availability: 'in-stock'
  },
  {
    id: 'mca-external-ssd',
    uniqueId: 'MCA-032',
    name: 'Sathish High-Speed 500GB External SSD',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 4899,
    image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2806a?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-compact solid state drive. Delivers breathtaking write speeds to directly read, edit, and catalog heavy video timelines.',
    specs: ['Super-fast 540MB/s data write speed', 'Premium metal shock-resistant shell', 'Compact credit-card sized profile', 'Type-C to Type-A connectivity cords'],
    rating: 5,
    popular: true,
    badge: 'PREMIUM',
    availability: 'in-stock'
  },
  {
    id: 'mca-pendrive',
    uniqueId: 'MCA-033',
    name: 'Sathish Swivel Metal 64GB USB Pen Drive',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 499,
    image: 'https://images.unsplash.com/photo-1601524909162-be87252be362?auto=format&fit=crop&w=800&q=80',
    description: 'Capless 360-degree swivel metal USB flash stick. Highly convenient key-ring loop prevents losing important files.',
    specs: ['64GB heavy flash storage storage', '360-degree protective metal swivel cap', 'SuperSpeed USB 3.0 output driver', 'Convenient lanyard key-ring hook slot'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-webcam',
    uniqueId: 'MCA-034',
    name: 'Sathish 1080P Full HD Autofocus Webcam',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1603566205809-5b0c950294e7?auto=format&fit=crop&w=800&q=80',
    description: 'HD web camera for online meetings and live streams. Outfitted with automatic color balance and dual noise-reduction microphones.',
    specs: ['1080P Full HD glass lens panel', 'Smart automatic autofocus tracking', 'Dual stereo noise-reduction microphones', 'Integrated physical privacy slide cover'],
    rating: 5,
    popular: false,
    badge: 'NEW',
    availability: 'in-stock'
  },
  {
    id: 'mca-headset',
    uniqueId: 'MCA-035',
    name: 'Sathish Comfort Over-Ear Office Headset',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    description: 'Ergonomic over-ear communication headset. Equipped with premium protein-leather memory ear cups and flexible adjustable boom microphone.',
    specs: ['Acoustic noise-cancelling microphone boom', 'Soft memory foam padded ear cups', 'In-line sound volume control dial', 'Universal dual 3.5mm input jacks'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-gaming-headset',
    uniqueId: 'MCA-036',
    name: 'Sathish Pro 7.1 Surround Gaming Headset',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80',
    description: 'Premium gaming headset with 7.1 virtual surround sound engine, deep bass vibration drivers, and breathing colorful RGB accent cups.',
    specs: ['7.1 virtual spatial surround audio', 'Powerful 50mm neodymium magnets', 'Dynamic chroma RGB auto lights', 'Heavy-duty steel wire headband core'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-microphone',
    uniqueId: 'MCA-037',
    name: 'Sathish Studio USB Condenser Microphone',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    description: 'Professional grade cardioid recording microphone. High-end pop filter and stable tripod base capture pristine voiceovers for video campaigns.',
    specs: ['Professional cardioid polar sound pickup', '24-Bit / 96kHz premium sample chips', 'Detachable metal wire mesh pop filter', 'Premium adjustable desktop tripod stand'],
    rating: 5,
    popular: true,
    badge: 'NEW',
    availability: 'in-stock'
  },
  {
    id: 'mca-speakers',
    uniqueId: 'MCA-038',
    name: 'Sathish Active 2.1 Multi-Media Speaker System',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Hi-Fi active speaker bookshelf bundle. Features heavy wood composite enclosures, deep subwoofers, and integrated Bluetooth receivers.',
    specs: ['Wooden composite resonance cabinet', 'Dynamic bass and treble adjustment dials', 'Integrated high-fidelity Bluetooth 5.0', 'Total output: 40W RMS sound'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-wifi-adapter',
    uniqueId: 'MCA-039',
    name: 'Sathish Dual-Band AC1200 USB WiFi Adapter',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 799,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    description: 'High-gain dual-band wireless USB card. Outfitted with dual omni-directional antennas to guarantee stable connection across multi-floor offices.',
    specs: ['Speed up to 1200Mbps dual-band', 'Dual 5dBi adjustable high-gain antennas', 'High-speed USB 3.0 interface card', 'Supports secure WPA3 encryption'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-lan-cable',
    uniqueId: 'MCA-040',
    name: 'Sathish Category-6 Shielded Gigabit LAN Cable',
    category: 'CAT-MCA',
    subCategory: 'COMPUTER ACCESSORIES',
    price: 299,
    image: 'https://images.unsplash.com/photo-1551703599-6b3dbb57c24e?auto=format&fit=crop&w=800&q=80',
    description: 'Oxygen-free copper CAT6 internet patch cord. High durability shielding locks out electrical interference for lag-free file transfers.',
    specs: ['Gigabit 1000Mbps transmission speed', 'Oxygen-free pure copper wire lines', 'Shielded RJ45 crystal terminal plugs', 'Length: 10 meters / 33 feet'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },

  // Office & Productivity (10 items)
  {
    id: 'mca-printer-ink',
    uniqueId: 'MCA-041',
    name: 'Sathish Premium Cyan/Magenta/Yellow Printer Ink',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 449,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Refill liquid dye inks for inkjet tanks. Delivers rich, highly saturated hues and smudge-free professional catalog brochures.',
    specs: ['Rich color pigments saturation', 'Smudge-proof fast drying formula', 'Universal bottle nozzle refill design', '70ml volume capacity per color bottle'],
    rating: 5,
    popular: true,
    badge: 'BESTSELLER',
    availability: 'in-stock'
  },
  {
    id: 'mca-printer-cartridge',
    uniqueId: 'MCA-042',
    name: 'Sathish Premium LaserJet Black Toner Cartridge',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    description: 'High-yield monochrome toner cartridge. Prints deep black letters and sharp graphics with zero smudging on office documents.',
    specs: ['Prints up to 2000 standard pages', 'Deep black magnetic toner microparticles', 'Smart chip volume display integration', 'Ensures smooth high-speed laser prints'],
    rating: 5,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-hdmi-cable',
    uniqueId: 'MCA-043',
    name: 'Sathish Gold-Plated 4K Ultra-HD HDMI Cable',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 349,
    image: 'https://images.unsplash.com/photo-1600541519468-4a91217b46df?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-HD HDMI patch cord. Outfitted with triple shielding layer and pure gold-plated plugs to support 4K@60Hz projections.',
    specs: ['Supports high-fidelity 4K@60Hz video', 'Corrosion resistant gold-plated plugs', 'Triple shielded noise defensive wraps', 'SuperSpeed 18Gbps bandwidth rates'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-vga-cable',
    uniqueId: 'MCA-044',
    name: 'Sathish Double-Shielded SVGA Monitor Cable',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 299,
    image: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=800&q=80',
    description: 'Standard 15-pin SVGA male-to-male video cord. Outfitted with dual ferrite cores to block out magnetic blur on older projectors.',
    specs: ['Standard 15-pin gold plated pins', 'Dual high-grade ferrite filtering cores', 'Highly flexible outer protective wrap', 'Supports resolutions up to 1080P HD'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-display-adapter',
    uniqueId: 'MCA-045',
    name: 'Sathish 3-in-1 Type-C to HDMI/VGA Adapter',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 899,
    image: 'https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-display hub for modern laptops. Seamlessly broadcast video outputs to HDMI TVs or standard VGA office projectors.',
    specs: ['HDMI output supports 4K resolution', 'VGA output supports 1080P resolution', 'USB-C charging pass-through slot', 'Aesthetic space-grey aluminum build'],
    rating: 5,
    popular: false,
    badge: 'NEW',
    availability: 'in-stock'
  },
  {
    id: 'mca-extension-board',
    uniqueId: 'MCA-046',
    name: 'Sathish 6-Socket Power Extension Board',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 599,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty multi-socket power board. Outfitted with individual safety shutters, master switches, and LED indicator lights.',
    specs: ['6 universal power sockets strips', 'Individual safety protection shutters', 'Overload defensive trip breaker', '3-meter heavy copper cord line'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-surge-protector',
    uniqueId: 'MCA-047',
    name: 'Sathish Heavy-Duty 10A Surge Protector',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 799,
    image: 'https://images.unsplash.com/photo-1606229365731-98ac98f41f71?auto=format&fit=crop&w=800&q=80',
    description: 'High-capacity surge guard strip. Absorbs massive voltage spikes to completely shield valuable studio cameras and systems.',
    specs: ['1000 Joules protective surge rating', 'Resilient fire-retardant exterior casing', 'Integrated power cord breaker switch', 'Premium built-in EMI/RFI noise filters'],
    rating: 5,
    popular: true,
    badge: 'POPULAR',
    availability: 'in-stock'
  },
  {
    id: 'mca-ups-battery',
    uniqueId: 'MCA-048',
    name: 'Sathish replacement 12V 7.2Ah UPS Battery',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Sealed Lead Acid (SLA) backup battery. Guarantees uninterrupted backup power to desktop setups during voltage blackouts.',
    specs: ['Standard 12V 7.2Ah output power', 'Maintenance-free sealed layout design', 'Highly leakproof structural layers', 'Excellent recharge recycling life'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-cleaning-kit',
    uniqueId: 'MCA-049',
    name: 'Sathish Anti-Static 3-in-1 Screen Cleaning Kit',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 199,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    description: 'Professional monitor cleaning bundle. Removes dust, streaks, and oils safely off laptop screens and high-end camera lens elements.',
    specs: ['Anti-static, alcohol-free fluid spray', 'Washable premium microfiber cloth wipe', 'Anti-dust soft bristled styling brush', 'Safe for all modern LED/LCD panels'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  },
  {
    id: 'mca-cable-organizer',
    uniqueId: 'MCA-050',
    name: 'Sathish Silicone Desktop Cable Organizer',
    category: 'CAT-MCA',
    subCategory: 'OFFICE & PRODUCTIVITY',
    price: 149,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Self-adhesive silicone desktop cord anchors. Keeps USB, charging, and audio cables neatly managed on studio workspaces.',
    specs: ['5 slots cable organizing anchors', 'Eco-friendly soft silicone construction', 'Ultra-strong double-sided backing tape', 'Holds standard charging and USB wires'],
    rating: 4,
    popular: false,
    badge: '',
    availability: 'in-stock'
  }
];

// ─── COMBINED & EXPORTED ───────────────────────────────────────────────────────
// Initialize LocalStorage arrays if not present
if (!localStorage.getItem('sathish_products')) {
  localStorage.setItem('sathish_products', JSON.stringify([...GIFT_PRODUCTS, ...MCA_PRODUCTS]));
} else {
  // If sathish_products already exists, make sure MCA products are injected
  const currentLocal = JSON.parse(localStorage.getItem('sathish_products') || '[]');
  if (!currentLocal.some(p => p.category === 'CAT-MCA')) {
    localStorage.setItem('sathish_products', JSON.stringify([...currentLocal, ...MCA_PRODUCTS]));
  }
}
if (!localStorage.getItem('sathish_arts')) {
  const mergedArts = [...ART_PRODUCTS, ...STATIONERY_PRODUCTS, ...CRAFT_PRODUCTS];
  localStorage.setItem('sathish_arts', JSON.stringify(mergedArts));
}
if (!localStorage.getItem('sathish_settings')) {
  localStorage.setItem('sathish_settings', JSON.stringify({
    name: 'Sathish Media',
    email: 'sathishmedia4u@gmail.com',
    whatsapp: '+91 8762097098',
    phone: '+91 87620 97098',
    address: 'Salem, Tamil Nadu, India',
    hours: '9:00 AM - 9:00 PM',
    facebook: 'https://facebook.com/sathishmedia',
    instagram: 'https://instagram.com/sathishmedia',
    youtube: 'https://youtube.com/sathishmedia',
    twitter: 'https://twitter.com/sathishmedia',
    keywords: 'photography, videography, Salem, courses, web design',
    description: 'Sathish Media - Creative digital agency, corporate event organizer, photography, and academy in Salem.',
    theme: 'dark',
    website: 'Sathish Media'
  }));
}

// Load products and arts dynamically from LocalStorage
const localProducts = JSON.parse(localStorage.getItem('sathish_products') || '[]');
const localArts = JSON.parse(localStorage.getItem('sathish_arts') || '[]');
const ALL_PRODUCTS = [...localProducts, ...localArts];

const PRODUCT_CATEGORIES = [
  { id: 'all', label: '✦ All Products', icon: '🛍️' },
  { id: 'CAT-MCA', label: 'Mobile & Computer Accessories', icon: '💻' },
  { id: 'Gifts', label: 'Gifts & Frames', icon: '🎁' },
  { id: 'Art Materials', label: 'Art Materials', icon: '🎨' },
  { id: 'Stationery', label: 'Stationery', icon: '📚' },
  { id: 'Craft Materials', label: 'Craft Materials', icon: '🧵' }
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "The precision in light rendering, lens depth, and overall premium aesthetic provided for our cosmetics project was unparalleled. Sathish Media commands digital photography with a raw artistic mastery that we failed to find anywhere across three continents.",
    author: "ELENA ROSTOVA",
    role: "Global Creative Director, Maison de Caprice",
    rating: 5
  },
  {
    quote: "Securing our market segment was effortless once Sathish Media drafted our brand architecture. Their custom cinematic assets generated a 400% increment in organic conversion under 60 days.",
    author: "MARCUS SHIELD",
    role: "Campaign Director, Overlord Technologies",
    rating: 5
  },
  {
    quote: "Sathish Media refuses to blend in. They transformed our entire identity into a high-octane visual spectacle that continues to dominate search and social indexes alike.",
    author: "LEOPOLD VANCE",
    role: "Creative Director, HyperWear Co.",
    rating: 5
  }
];

// ─── CART UTILITIES ───────────────────────────────────────────────────────────
const Cart = {
  STORAGE_KEY: 'sathish_media_cart',

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    } catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this._dispatch();
  },

  add(product, qty = 1) {
    const items = this.get();
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      items.push({ ...product, quantity: qty });
    }
    this.save(items);
  },

  remove(productId) {
    const items = this.get().filter(i => i.id !== productId);
    this.save(items);
  },

  updateQty(productId, qty) {
    const items = this.get();
    const item = items.find(i => i.id === productId);
    if (item) {
      if (qty <= 0) return this.remove(productId);
      item.quantity = qty;
    }
    this.save(items);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this._dispatch();
  },

  count() {
    return this.get().reduce((s, i) => s + i.quantity, 0);
  },

  total() {
    return this.get().reduce((s, i) => s + i.price * i.quantity, 0);
  },

  _dispatch() {
    window.dispatchEvent(new CustomEvent('cart-updated'));
  }
};

// ─── WHATSAPP ORDER ───────────────────────────────────────────────────────────
function buildWhatsAppURL(cartItems, customerName, customerPhone) {
  const itemLines = cartItems.map((item, idx) =>
    `${idx + 1}. Product Name: ${item.name}\n   Product ID: ${item.uniqueId || item.id}\n   Quantity: ${item.quantity}\n   Price: ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
  ).join('\n\n');

  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  const msg =
`Hello,
I would like to order:

${itemLines}

──────────────────
Total: ₹${total.toLocaleString('en-IN')}
──────────────────

Customer Name: ${customerName}
Phone Number: ${customerPhone}

Please confirm my order. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── DIRECT WHATSAPP PRODUCT ORDER ─────────────────────────────
window.orderProductOnWhatsApp = function (productId) {
  const p = getProductById(productId);
  if (!p) return;
  const num = getWhatsAppNumber();
  const msg =
`Hello Sathish Media,

I would like to order:

Product Name:
${p.name}

Product ID:
${p.uniqueId || p.id}

Category:
${p.category}

Please share complete details.`;

  const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function formatINR(price) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}

function getStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function getProductById(id) {
  return ALL_PRODUCTS.find(p => p.id === id) || null;
}
