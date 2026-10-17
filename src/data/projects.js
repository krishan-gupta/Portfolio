export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'web', label: 'Web & Tools' },
  { id: 'cloud', label: 'Cloud & IoT' },
  { id: 'hackathon', label: 'Hackathons' }
];

export const projects = [
  {
    slug: 'dhobitrack',
    title: 'DhobiTrack: Campus Laundry Platform',
    category: 'web',
    tracks: ['developer'],
    status: 'Built (dashboard), backend planned',
    date: '2026',
    summary: 'Admin dashboard for a campus laundry service with companion mobile app (Dhobi Terminal), designed for 15,000+ students.',
    tags: ['React', 'Vite', 'Tailwind', 'Capacitor.js', 'Fastify', 'PostgreSQL', 'Redis', 'Socket.io'],
    github: 'https://github.com/krishan-gupta/LaundroLink',
    demo: 'https://krishangupta-laundrolink.hf.space/',
    role: 'Campus project',
    overview: 'A campus utility platform built to solve queue bottlenecks and order tracking for college laundry operations. Built as an admin dashboard with a companion mobile app ("Dhobi Terminal") tailored to streamline order statuses, notifications, and pickups across 15,000+ campus residents.',
    problem: 'Manual slip tracking and unorganized pickup times in large-scale university hostels lead to lost garments, elongated wait times, and zero real-time visibility for students.',
    approach: 'Engineered an intuitive frontend dashboard in React and Vite with mobile packaging via Capacitor.js. Planned backend architecture leverages Fastify, PostgreSQL for relational order states, Redis for caching, and Socket.io for instantaneous order status pushes.',
    result: 'Frontend admin dashboard interface completed and verified; architectural blueprint ready for university-wide rollout upon backend integration.',
    metrics: [
      { label: 'Campus Scale', value: '15,000+ Students' },
      { label: 'Interface Status', value: 'Built' },
      { label: 'Mobile Wrapper', value: 'Capacitor.js' }
    ]
  },
  {
    slug: 'neuralabstract-retrieval-engine',
    title: 'NeuralAbstract: Semantic-Retrieval-Engine',
    category: 'ai-ml',
    tracks: ['ai-research'],
    status: 'Working (active build)',
    date: '2026',
    summary: 'High-throughput semantic search and vector retrieval engine querying dense research documents and technical abstracts.',
    tags: ['Python', 'Vector Search', 'sentence-transformers', 'FAISS', 'Embeddings', 'Information Retrieval'],
    github: 'https://github.com/krishan-gupta/NeuralAbstract-Semantic-Retrieval-Engine',
    demo: '',
    role: 'AI/ML project',
    overview: 'A dedicated semantic search and information retrieval engine designed to process, index, and query dense scientific abstracts and complex documentation using neural embeddings.',
    problem: 'Traditional keyword search (BM25 or regex) fails when queries use synonyms, conceptual parallels, or phrasing different from the source literature.',
    approach: 'Employs bi-encoder neural embedding models (sentence-transformers) combined with vector indexing via FAISS for sub-millisecond similarity matching across large abstract corpuses, featuring cosine similarity ranking and contextual passage extraction.',
    result: 'Fully functioning vector search engine enabling intuitive natural language exploration across technical literature with low latency.',
    metrics: [
      { label: 'Index Type', value: 'Dense Vector (FAISS)' },
      { label: 'Embeddings', value: 'sentence-transformers' },
      { label: 'Search Latency', value: 'Sub-millisecond' }
    ]
  },
  {
    slug: 'context-preserving-document-editor',
    title: 'Context-Preserving Document Text Editor',
    category: 'hackathon',
    tracks: ['ai-research'],
    status: 'iQOO Hackathon 2026 concept (idea-screening stage)',
    date: '2026',
    summary: 'Privacy-first, fully on-device mobile app that edits text inside images while preserving the original background and graphics.',
    tags: ['On-Device OCR', 'Vision Models', 'Image Inpainting', 'Mobile AI', 'Hackathon'],
    github: 'https://github.com/krishan-gupta/Textract',
    demo: 'https://editwithtextract.vercel.app/',
    role: 'Hackathon concept',
    overview: 'Conceived for the iQOO Hackathon 2026. A privacy-first mobile application that allows users to edit text directly inside flyers, posters, and documents without disturbing the underlying texture, typography aesthetics, or photographic background.',
    problem: 'Existing mobile editing tools either white-out the background, mismatch font styling, or require uploading sensitive documents to third-party cloud servers.',
    approach: 'Formulated an on-device pipeline: automated text bounding box detection, tap-to-edit interactions, inpainting to reconstruct the graphic background behind the letters, and style-matched re-rendering with font metric estimation. Includes undo, before/after comparative slider, and batch processing mode.',
    result: 'Selected for competitive screening at the iQOO Hackathon 2026 concept stage; architectural blueprint and interaction wireframes defined.',
    metrics: [
      { label: 'Privacy Mode', value: '100% On-Device' },
      { label: 'Hackathon', value: 'iQOO 2026' },
      { label: 'Features', value: '7 Core Workflows' }
    ]
  },
  {
    slug: 'noise-pollution-monitor',
    title: 'AI-Powered Noise Pollution Monitor',
    category: 'cloud',
    tracks: ['ai-research'],
    status: 'Foundational project',
    date: '2025 — 2026',
    summary: 'Hardware sound-monitoring device classifying ambient acoustic noise via an ML model and logging telemetry to the cloud.',
    tags: ['ESP32', 'INMP441 Microphone', 'Edge Impulse', 'Firebase', 'IoT', 'Embedded ML'],
    github: 'https://github.com/krishan-gupta/AI-Powered-Noise-Pollution-Monitor',
    demo: 'https://noise-pollution-monitor.vercel.app/',
    role: 'Embedded ML project',
    overview: 'An environmental intelligence hardware monitor designed to detect, classify, and map urban noise pollution hot-spots in real time using embedded machine learning at the edge.',
    problem: 'Traditional sound level meters only measure decibel volume (dB) without context; municipal bodies cannot distinguish between construction drilling, traffic honking, and emergency sirens.',
    approach: 'Interfaced an INMP441 I2S digital microphone with an ESP32 microcontroller running an Edge Impulse acoustic classification neural network. Processed audio spectrograms locally and streamed telemetry to Firebase.',
    result: 'Successfully achieved local inference classification on-device with low power consumption and continuous wireless telemetry logging.',
    metrics: [
      { label: 'Inference Device', value: 'ESP32' },
      { label: 'Acoustic Model', value: 'Edge Impulse' },
      { label: 'Cloud Database', value: 'Firebase' }
    ]
  },
  {
    slug: 'geovigil',
    title: 'GeoVigil: AI Earth Intelligence & Temporal Analytics',
    category: 'ai-ml',
    tracks: ['ai-research'],
    status: 'Built (SIH 2026)',
    date: '2026',
    summary: 'Longitudinal Earth Observation, dual-tier machine learning (16-yr OLS + Siamese U-Net), and urban sprawl forecasting across 15,643 km².',
    tags: ['Sentinel-2', 'Landsat', 'Siamese U-Net', 'PyTorch', 'Computer Vision', 'GIS', 'Flask', 'Vite'],
    github: 'https://github.com/krishan-gupta/GeoVigil',
    demo: '',
    role: 'AI/ML project',
    overview: 'An end-to-end AI-powered Earth Observation intelligence platform ingesting a 16-year continuous baseline (2010–2025) of cloud-free multispectral satellite imagery (Sentinel-2 and harmonized Landsat-7/8/9) with Dynamic World 9-class LULC labels to quantify urban sprawl and ecological vulnerability across the 15,643 km² Pune District.',
    problem: 'Municipal authorities and urban planners struggle to differentiate permanent concrete sprawl from cyclical vegetation loss or seasonal rainfall variations, resulting in unmonitored environmental stress and surface heat island spikes.',
    approach: 'Engineered a dual-tier analytical pipeline: Tier-1 vectorized per-pixel Ordinary Least Squares (OLS) regression across 16 time steps with Pearson r confidence, and Tier-2 deep bitemporal Siamese U-Net (BCE + Soft Dice loss) for non-linear morphological change detection. Includes 2030 sprawl extrapolation and Surface Urban Heat Island (SUHI) proxy modeling.',
    result: 'Calibrated across all 13 talukas of Pune District with an interactive photography-first intelligence dashboard, raster pixel inspector, and automated situation report generator.',
    metrics: [
      { label: 'Coverage Area', value: '15,643 km²' },
      { label: 'Temporal Baseline', value: '16 Years (2010–2025)' },
      { label: 'ML Models', value: 'OLS + Siamese U-Net' }
    ]
  },
  {
    slug: 'ai-posture-corrector',
    title: 'AI Posture Corrector & Virtual Gym Trainer',
    category: 'ai-ml',
    tracks: ['ai-research'],
    status: 'Built (Interdisciplinary Project)',
    date: '2026',
    summary: 'Vision-based virtual trainer computing 3D camera-invariant joint angles via MediaPipe for real-time posture correction and rep counting.',
    tags: ['Python', 'OpenCV', 'MediaPipe', '3D Pose Estimation', 'NumPy', 'Biomechanics'],
    github: 'https://github.com/krishan-gupta/AI-Posture-Corrector',
    demo: '',
    role: 'AI/ML project',
    overview: 'An intelligent, vision-based virtual trainer and workout assistant designed to guide gym and home exercises with accurate biomechanical form without expensive wearable sensors.',
    problem: 'Exercising with incorrect posture leads to chronic joint strain and musculoskeletal injuries, while professional coaching is inaccessible or cost-prohibitive for many home lifters.',
    approach: 'Leveraged Google MediaPipe pose_world_landmarks to compute true 3D Euclidean joint angles immune to camera tilt or perspective distortion. Features automatic user viewpoint detection, Exponential Moving Average (EMA) landmark jitter smoothing, hysteresis feedback debouncing, and biomechanical state machines tracking concentric, peak, and eccentric phases for Bicep Curls, Squats, and Tricep Extensions.',
    result: 'Delivered an interactive virtual workout trainer operating at high frame rates with real-time HUD visual cues and clean repetition verification.',
    metrics: [
      { label: 'Joint Geometry', value: '3D Camera-Invariant' },
      { label: 'Motion Smoothing', value: 'Temporal EMA' },
      { label: 'Supported Movements', value: 'Curls, Squats, Triceps' }
    ]
  },
  {
    slug: 'cinecipher',
    title: 'CineCipher: Movie Discovery Platform',
    category: 'web',
    tracks: ['developer'],
    status: 'Foundational project',
    date: '2025',
    summary: 'Movie recommendation platform that combines rich film metadata, ratings, and embedded trailers.',
    tags: ['React', 'TMDB API', 'YouTube API', 'CSS3', 'Web App'],
    github: 'https://github.com/krishan-gupta/CineCipher',
    demo: 'https://cinecipher.vercel.app/',
    role: 'Web project',
    overview: 'A visual discovery engine aggregating movie intelligence, genres, cast details, and synchronized video previews into an engaging single-page application.',
    problem: 'Users frequently bounce between search engines, IMDb, and video streaming apps just to evaluate film recommendations.',
    approach: 'Integrated TMDB API for dynamic search, trending filters, and metadata with the YouTube API for trailer previews.',
    result: 'Delivered a snappy, responsive web application for movie exploration and recommendation.',
    metrics: [
      { label: 'API Integrations', value: 'TMDB + YouTube' },
      { label: 'Type', value: 'Web App' }
    ]
  },
  {
    slug: 'portfolio',
    title: 'Personal Portfolio & Engineering Showcase',
    category: 'web',
    tracks: ['developer'],
    status: 'Production (live)',
    date: '2026',
    summary: 'Interactive personal portfolio built with React 19, custom design system tokens, smooth canvas shaders, and targeted resume tracks.',
    tags: ['React 19', 'Vite', 'CSS3', 'WebGL / Canvas', 'Responsive Design', 'Architecture'],
    github: 'https://github.com/krishan-gupta/Portfolio',
    demo: 'https://krishan-gupta.vercel.app',
    role: 'Web project',
    overview: 'A performance-focused personal portfolio and project showcase presenting engineering projects, research manuscripts, and multi-track resumes with custom-built typography, interactions, and shader effects.',
    problem: 'Template-based portfolios often look generic, lack interactive performance, and fail to provide targeted perspectives for distinct engineering roles.',
    approach: 'Engineered with React 19 and Vite using vanilla CSS design tokens, glassmorphism, responsive clamp typography, shader-based Horizon Bloom and Meteors canvas backgrounds, and targeted role tracks.',
    result: 'Responsive, zero external UI framework bloat, fast load performance, and custom interactive presentation across all devices.',
    metrics: [
      { label: 'Framework', value: 'React 19 + Vite' },
      { label: 'Styling', value: 'Vanilla CSS Tokens' },
      { label: 'Graphics', value: 'Custom Canvas Shaders' }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects() {
  const topSlugs = [
    'dhobitrack',
    'neuralabstract-retrieval-engine',
    'context-preserving-document-editor'
  ];
  return topSlugs.map(slug => projects.find(p => p.slug === slug)).filter(Boolean);
}
