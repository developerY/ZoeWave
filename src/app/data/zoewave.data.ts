import { CompanyItem, ProjectItem, BeliefItem } from './zoewave-logic';

export const COMPANIES_DATA: CompanyItem[] = [
  // Tier 1: Core R&D Engine
  {
    id: 'ylabz',
    name: 'YLabZ',
    url: 'https://www.ylabz.com',
    tier: 'core',
    tierLabel: 'TIER 01 • R&D Engine',
    tagline: 'Experimental Tech & Physical Sciences',
    description: 'A pioneering technology lab dedicated to experimental research in artificial intelligence, robotics, and biosensors. YLabZ acts as the primary engine for technological breakthroughs, exploring and pushing the outer frontiers of physical computing.',
    domain: 'AI • Robotics • Biosensors',
    category: 'rnd',
    icon: 'science',
    highlight: 'Foundational Research Vector',
    imageUrl: '/assets/images/ylabz-core.jpg',
    metrics: [
      { label: 'Patents Active', value: '24+' },
      { label: 'Model Precision', value: '99.8%' },
      { label: 'Iteration Pace', value: '< 48h' }
    ]
  },
  {
    id: 'gnseven',
    name: 'G.N.Seven',
    url: 'https://www.gnseven.com',
    tier: 'core',
    tierLabel: 'TIER 01 • Design Studio',
    tagline: 'Consumer Product Prototyping & Ethnography',
    description: 'Building upon YLabZ research, G.N.Seven is a cutting-edge technology design studio transforming raw scientific breakthroughs into consumer-ready platforms through rapid ethnographic prototyping and intuitive human-machine design.',
    domain: 'Human Factors • UX • Mobile',
    category: 'rnd',
    icon: 'devices',
    highlight: 'Consumer Translation Engine',
    imageUrl: '/assets/images/gnseven-core.jpg',
    metrics: [
      { label: 'Active Apps', value: '14+' },
      { label: 'Prototypes', value: '50+' },
      { label: 'Design Sprints', value: 'Weekly' }
    ]
  },

  // Tier 2: Production Tier
  {
    id: 'hummingbird-fuel',
    name: 'Hummingbird Fuel Rx',
    url: 'https://www.hummingbirdfuel.com/',
    tier: 'production',
    tierLabel: 'TIER 02 • Production',
    tagline: 'AI/ML Micro dose Medications',
    description: 'Develops AI-driven micro-dosing applications for personalized medication schedules, providing targeted health interventions and optimizing bio-absorption curves while mitigating side effects.',
    domain: 'Digital Health • Precision Pharmacokinetics',
    category: 'health',
    icon: 'medication',
    highlight: 'Caffeine to ADHD Compounds',
    imageUrl: '/assets/images/hummingbird-fuel.jpg',
    metrics: [
      { label: 'Target Half-Life', value: '4.2h' },
      { label: 'Platform', value: 'iOS / CoreML' },
      { label: 'Status', value: 'Public Beta' }
    ]
  },
  {
    id: 'swift-ai-ad',
    name: 'Swift AI Ad Agency',
    url: 'http://www.swiftaiad.com',
    tier: 'production',
    tierLabel: 'TIER 02 • Production',
    tagline: 'AI can generate amazing Ads',
    description: 'Harnesses generative AI to deliver data-driven, hyper-personalized advertising campaigns in mere prompts rather than months, fundamentally compressing creative iteration cycles.',
    domain: 'Generative Media • Autonomous Marketing',
    category: 'ad',
    icon: 'auto_awesome',
    highlight: 'Instant Multi-Variant Generation',
    metrics: [
      { label: 'Turnaround', value: 'Instant' },
      { label: 'Engine', value: 'Multi-Modal LLM' },
      { label: 'ROI Lift', value: '3.4x' }
    ]
  },
  {
    id: 'zoeware',
    name: 'ZoeWare',
    url: 'http://www.zoeware.com',
    tier: 'production',
    tierLabel: 'TIER 02 • Production',
    tagline: 'AR/VR Design Studio',
    description: 'Dedicated to designing spatial computing and immersive AR/VR experiences across visionOS, Android XR, healthcare, and education—blending 3D physical sensor data with virtual presence.',
    domain: 'Spatial Computing • visionOS • RealityKit',
    category: 'spatial',
    icon: 'view_in_ar',
    highlight: 'Spatial Health & 3D Meditation',
    imageUrl: '/assets/images/zoeware.jpg',
    metrics: [
      { label: 'Engines', value: 'visionOS/XR' },
      { label: 'Sensors', value: 'Biometric 3D' },
      { label: 'Environments', value: 'Spatial 8K' }
    ]
  },

  // Tier 3: Development Tier
  {
    id: 'rxdigita',
    name: 'RxDigita',
    url: 'http://www.rxdigita.com',
    tier: 'development',
    tierLabel: 'TIER 03 • Development',
    tagline: 'AI/ML Med & Pharmacometrics',
    description: 'Advances AI-powered healthcare solutions to streamline medication management, ADME-Tox physiological response modeling, and patient engagement through camera and voice interaction.',
    domain: 'Clinical AI • Bio-Informatics',
    category: 'health',
    icon: 'monitor_heart',
    highlight: 'ADME-Tox Metabolism Engine',
    metrics: [
      { label: 'Intake Method', value: 'Voice / Vision' },
      { label: 'Compliance Lift', value: '+42%' }
    ]
  },
  {
    id: 'zoewear',
    name: 'ZoeWear',
    url: 'http://www.zoewear.com',
    tier: 'development',
    tierLabel: 'TIER 03 • Development',
    tagline: 'Technology is the new Black',
    description: 'Innovates at the intersection of haute couture fashion and wearable engineering, embedding invisible biosensors and AI monitoring into premium lifestyle apparel.',
    domain: 'Wearable Tech • Biosensors • Fashion',
    category: 'fashion',
    icon: 'checkroom',
    highlight: 'AI-Integrated Biosensor Apparel',
    imageUrl: '/assets/images/zoewear.jpg',
    metrics: [
      { label: 'Form Factor', value: 'Activewear' },
      { label: 'Telemetry', value: 'ECG / HRV / Temp' }
    ]
  },
  {
    id: 'ashbike',
    name: 'AshBike',
    url: 'http://www.ashbike.com',
    tier: 'development',
    tierLabel: 'TIER 03 • Development',
    tagline: 'Ebike built like a Motorcycle',
    description: 'Disrupts urban mobility with motorcycle aesthetics paired with intelligent electric pedal-assist, Apple Health/Google Fit telemetry sync, calendar route routing, and sustainability NFT rewards.',
    domain: 'Clean Mobility • Smart IoT • Web3',
    category: 'mobility',
    icon: 'two_wheeler',
    highlight: 'Motorcycle Chassis with Eco NFTs',
    imageUrl: '/assets/images/ashbike.jpg',
    metrics: [
      { label: 'Chassis', value: 'Motorcycle Grade' },
      { label: 'Range', value: '80+ Miles' },
      { label: 'Incentives', value: 'Carbon NFTs' }
    ]
  },

  // Tier 4: Experimentation & Frontier
  {
    id: 'zoerobo',
    name: 'ZoeRobo',
    url: 'http://www.zoerobo.com',
    tier: 'frontier',
    tierLabel: 'TIER 04 • Frontier',
    tagline: 'AI / ML Robotics',
    description: 'Focuses on AI/ML-powered assistive robotics for healthcare, physical security, and everyday life companions, leveraging Rust Robotics.rs for deterministic low-latency edge control.',
    domain: 'Autonomous Robotics • Rust Robotics.rs',
    category: 'robotics',
    icon: 'smart_toy',
    highlight: 'Edge Perception & Humanoid Motion',
    imageUrl: '/assets/images/zoerobo.jpg',
    metrics: [
      { label: 'Latency', value: '< 2ms Edge' },
      { label: 'Safety Cert', value: 'SIL-3' }
    ]
  },
  {
    id: 'ashwave',
    name: 'AshWave',
    url: 'http://ashwave.com',
    tier: 'frontier',
    tierLabel: 'TIER 04 • Frontier',
    tagline: 'AI & Blockchain @ FinTech',
    description: 'Pioneers the convergence of artificial intelligence with distributed ledger technology and Solana/Hashgraph smart contracts for next-generation automated banking and capital settlement.',
    domain: 'FinTech • Smart Contracts • Hashgraph',
    category: 'fintech',
    icon: 'account_balance',
    highlight: 'Autonomous Treasury Protocol',
    metrics: [
      { label: 'Throughput', value: '65k TPS' },
      { label: 'Settlement', value: 'Instant' }
    ]
  },
  {
    id: 'kocolor',
    name: 'KoColor / LunaSea',
    url: 'https://www.kocolor.com/home',
    tier: 'frontier',
    tierLabel: 'TIER 04 • Frontier',
    tagline: 'AI @ Fashion',
    description: 'Explores AI-driven procedural color palettes, generative textile pattern generation, and algorithmic styling systems for contemporary apparel lines.',
    domain: 'Generative Styling • Chromatic AI',
    category: 'fashion',
    icon: 'palette',
    highlight: 'Procedural Color Harmonization',
    metrics: [
      { label: 'Color Engine', value: 'SpectraNet' },
      { label: 'Collection', value: 'LunaSea' }
    ]
  },

  // Tier 5: Concepts & Stealth
  {
    id: 'babymonster',
    name: 'Seven Agentic LLM (babymons7er)',
    url: 'https://www.babymons7er.com/',
    tier: 'concepts',
    tierLabel: 'TIER 05 • Concepts',
    tagline: '7 C Monsters Swarm Architecture',
    description: 'Autonomous multi-agent orchestration architecture modeling foundational psychological archetypes: Love, Serenity, Grace, Guidance, Cadence, Hope, and Faith.',
    domain: 'Multi-Agent AI • Swarm Intelligence',
    category: 'ai',
    icon: 'psychology',
    highlight: '7 Archetypal Cooperative Agents',
    metrics: [
      { label: 'Agents', value: '7 Swarm Units' },
      { label: 'Framework', value: 'Autonomous LLM' }
    ]
  },
  {
    id: 'swiftmonster',
    name: 'SwiftMonster',
    url: 'http://swiftmonster.com',
    tier: 'concepts',
    tierLabel: 'TIER 05 • Concepts',
    tagline: 'DeSign Concepts',
    description: 'Experimental laboratory probing extreme ergonomics, speculative industrial design, and futuristic human-hardware interfaces.',
    domain: 'Industrial Design • Conceptual Hardware',
    category: 'rnd',
    icon: 'architecture',
    highlight: 'Radical Form Factor Exploration'
  },
  {
    id: 'stealth',
    name: 'Stealth Hardware Matrix',
    url: '#',
    tier: 'concepts',
    tierLabel: 'TIER 05 • Stealth',
    tagline: 'Confidential Physical-Digital Initiative',
    description: 'Under-wraps deep physical computing research integrating biosensing textiles, quantum-secure communications, and autonomous edge compute.',
    domain: 'Classified R&D • Deep Silicon',
    category: 'rnd',
    icon: 'lock',
    highlight: 'Proprietary Quantum R&D'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'hummingbird-fuel',
    title: 'Hummingbird Fuel',
    category: 'health',
    categoryLabel: 'Health ML',
    tagline: 'Personalized Pharmacokinetics on iOS',
    description: 'Mobile application powered by machine learning that offers personalized microdosing schedules for medication. The app aims to enhance medication effectiveness while minimizing side effects. Initially focusing on caffeine for calibrated cognitive endurance with plans to expand to ADHD drugs as clinical datasets mature.',
    platform: 'Native iOS • CoreML • SwiftData',
    url: 'https://www.hummingbirdfuel.com/',
    articleUrl: 'https://www.hummingbirdfuel.com/',
    simulatedHalfLifeTarget: '4.2h Half-Life Target',
    statusBadge: 'Active Production Beta',
    highlightMetric: 'Batch micro-dosing precision',
    imageUrl: '/assets/images/hummingbird-fuel.jpg',
    icon: 'medication'
  },
  {
    id: 'drunkwatch',
    title: 'DrunkWatch',
    category: 'health',
    categoryLabel: 'Health & Wearable ML',
    tagline: 'Life-Saving Kinematic Gait & Bio Detection',
    description: 'A life-saving system designed to determine intoxication levels and advise against driving under the influence. Employs advanced machine learning algorithms on watchOS to analyze walking patterns, handwriting dynamics, and wrist biosensors to evaluate driving safety in real time.',
    platform: 'watchOS • CoreMotion • HealthKit',
    articleUrl: 'https://zoewave.medium.com/life-saving-watchos-ml-app-c9fde03e79cf',
    statusBadge: 'Patent Awarded',
    highlightMetric: '99.4% Gait Anomaly Detection',
    imageUrl: '/assets/images/drunkwatch.jpg',
    icon: 'watch'
  },
  {
    id: 'fapa',
    title: 'Facial Aware Personalized Advertising (FAPA)',
    category: 'vision',
    categoryLabel: 'Computer Vision & Edge AI',
    tagline: 'Privacy-Preserving Edge Ad Optimization',
    description: 'An innovative approach that tailors in-mall advertisements in real time by analyzing shoppers\' facial features, emotions, and clothing styles without identifying them. Using convolutional neural networks (CNNs), FAPA guarantees user privacy by anonymizing all data at the sensor edge prior to demographic analysis.',
    platform: 'Edge AI • TensorRT • CNN Pipelines',
    articleUrl: 'https://zoewave.medium.com/autonomous-home-security-micro-drone-df989ea02075',
    statusBadge: 'Field Deployed',
    highlightMetric: 'Zero PII Retained',
    imageUrl: '/assets/images/zoeware.jpg',
    icon: 'face'
  },
  {
    id: 'self-driving-lego',
    title: 'Self-Driving LEGO® Car',
    category: 'robotics',
    categoryLabel: 'Robotics & Autonomous Systems',
    tagline: 'Smartphone as Autonomous Vehicle Brain',
    description: 'Explores the concept of creating a self-driving LEGO® vehicle where an off-the-shelf smartphone acts as the camera, neural computer, and motor controller. Features real-time lane following, obstacle avoidance, and sign recognition running locally.',
    platform: 'Android CameraX • TensorFlow Lite • BLE',
    articleUrl: 'https://zoewave.medium.com/self-driving-lego-car-concept-c3a50e72cccc',
    statusBadge: 'Open Research',
    highlightMetric: '30 FPS On-Device Vision',
    imageUrl: '/assets/images/lego-car.jpg',
    icon: 'toys'
  },
  {
    id: 'firefly-drone',
    title: 'AI/ML Security Micro-Drone Firefly',
    category: 'robotics',
    categoryLabel: 'Robotics & Autonomous Systems',
    tagline: 'Autonomous Indoor Aerial Sentry',
    description: 'Autonomous indoor home security micro-drone capable of surveying domestic spaces while residents are away. Firefly navigates through GPS-denied environments, captures vision streams, detects unexpected environmental anomalies, and broadcasts encrypted telemetry alerts to owners.',
    platform: 'Robotics.rs • Optical Flow • SLAM',
    articleUrl: 'https://zoewave.medium.com/autonomous-home-security-micro-drone-df989ea02075',
    statusBadge: 'Prototype V3',
    highlightMetric: 'Sub-inch Indoor Positioning',
    imageUrl: '/assets/images/firefly-drone.jpg',
    icon: 'flight'
  },
  {
    id: 'ashbike-proj',
    title: 'AshBike Smart E-Mobility',
    category: 'robotics',
    categoryLabel: 'Robotics & Clean Tech',
    tagline: 'Connected E-Bike with Fitness Rewards',
    description: 'Eco-friendly e-bike service integrating biometric fitness data from Apple Health and Google Fit. Machine learning models recommend dynamic transit routes based on calendar meetings, while sustainable riding habits are rewarded with carbon-offset NFTs.',
    platform: 'Kotlin Compose • BLE • Solana',
    url: 'http://www.ashbike.com/',
    statusBadge: 'Fleet Tested',
    highlightMetric: '1,200+ kg CO2 Offset',
    imageUrl: '/assets/images/ashbike.jpg',
    icon: 'two_wheeler'
  },
  {
    id: 'ai-nutritionist',
    title: 'AI Appliance Nutritionist',
    category: 'vision',
    categoryLabel: 'Computer Vision & Smart Home',
    tagline: 'Metabolic Guidance for Smart Kitchens',
    description: 'An AI/ML powered appliance nutritionist integrating with smart refrigerators and ovens. Analyzes ingredient inventory via computer vision, checks personal blood glucose and dietary markers, and suggests optimized real-time recipes and automated cooking profiles.',
    platform: 'Edge Vision • Python • IoT MQTT',
    articleUrl: 'https://zoewave.medium.com/ai-ml-appliance-nutritionist-8d9f8a1c84d5',
    statusBadge: 'Design Blueprint',
    highlightMetric: 'Real-time Macro Balancing',
    icon: 'kitchen'
  },

  // G.N.Seven Mobile Suite
  {
    id: 'photodo',
    title: 'Photodo',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Visual & Audio Contextual AI To-Do Assistant',
    description: 'An AI-powered task management application that allows users to create to-dos using their camera and voice memos. Photodo extracts contextual deadlines, matches local assistance services, and auto-tracks budgets—functioning as an intelligent pocket chief-of-staff.',
    platform: 'Android (Compose) • iOS (SwiftUI)',
    statusBadge: 'Mobile Release',
    highlightMetric: 'Multimodal Task Ingestion',
    icon: 'add_a_photo'
  },
  {
    id: 'timemap',
    title: 'TimeMap',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Spatially Mapped Calendar Schedules',
    description: 'Directly projects Google Calendar events onto an interactive Google Maps canvas, giving executives and travelers a clear spatio-temporal view of their day. Features multi-person route coordination and contextual waypoint alerts.',
    platform: 'Android • Google Maps SDK • WearOS',
    statusBadge: 'Store Available',
    highlightMetric: 'Zero Route Overlaps',
    icon: 'map'
  },
  {
    id: 'rxtrack',
    title: 'RxTrack',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Clinical Medication Intake Logger',
    description: 'Android application designed to assist patients in tracking complicated medication regimens with photo prescription verification and proactive adherence notifications powered by on-device ML.',
    platform: 'Android • Room • ML Kit',
    statusBadge: 'Google Play Store',
    highlightMetric: '98% Patient Adherence',
    icon: 'event_note'
  },
  {
    id: 'goswift',
    title: 'Go Swift Shared Biking',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Civic Micro-Mobility & NFT Fitness',
    description: 'Shared micro-mobility platform that encourages active commuting and environmental stewardship. Seamlessly tracks heart rate, caloric expenditure, and awards tokenized civic achievements.',
    platform: 'Android & iOS Coming Soon',
    statusBadge: 'Regional Deployment',
    highlightMetric: 'Green Transit Gamification',
    icon: 'pedal_bike'
  },
  {
    id: 'goswift-wearos',
    title: 'Go Swift WearOS Watch Face',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Real-time Wrist Velocity & Telemetry',
    description: 'Dedicated companion application for WearOS smartwatches, offering a high-contrast custom watch face with real-time speed, biometric cadence, battery range, and waypoint telemetry.',
    platform: 'WearOS • Watch Face Format (WFF)',
    statusBadge: 'WearOS Store',
    highlightMetric: 'Glanceable Cyclist HUD',
    icon: 'watch_later'
  },
  {
    id: 'breathtime',
    title: 'Breathe Time',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Haptic Guided Meditation for WearOS',
    description: 'A yoga and mindfulness application designed specifically for WearOS devices, utilizing gentle haptic pacing and heart rate variability (HRV) biosensing to guide users through stress-reducing breath cycles.',
    platform: 'WearOS • Health Services API',
    statusBadge: 'Store Live',
    highlightMetric: 'Bio-Responsive Haptics',
    icon: 'self_improvement'
  },
  {
    id: 'kble',
    title: 'K BeautifuLE (K BLE)',
    category: 'gnseven',
    categoryLabel: 'G.N.Seven Mobile Suite',
    tagline: 'Reactive Kotlin Bluetooth Low Energy Library',
    description: 'An open developer framework focused on simplifying and beautifying Bluetooth Low Energy (BLE) integration on Android with coroutines, flows, and type-safe GATT communication architectures.',
    platform: 'Kotlin Multiplatform • Open Source',
    statusBadge: 'Developer Tooling',
    highlightMetric: 'Zero Boilerplate BLE',
    icon: 'bluetooth'
  }
];

export const BELIEFS_DATA: BeliefItem[] = [
  {
    id: 'ashbike-belief',
    name: 'AshBike',
    url: 'http://ashbike.com',
    initial: 'A',
    category: 'mobility',
    categoryLabel: 'E-Mobility • IoT',
    quote: '“We believe in the transformative power of bicycles to revolutionize personal health, urban mobility, and environmental sustainability.”',
    description: 'By combining the structural robustness of a motorcycle with intuitive AI-driven electric power-assist, AshBike reclaims metropolitan transit from combustion gridlock. Built-in biometrics incentivize active carbon reductions through tokenized sustainability rewards.',
    hypothesis: 'Decarbonization via Peak Thrill',
    status: 'Active Production Beta',
    imageUrl: '/assets/images/ashbike.jpg',
    imageAlt: 'High-tech sleek electric urban motorcycle bicycle hybrid in radiant minimalist showroom with clean lighting, blue reflective accents, architectural minimalism.',
    specOverlay: { tag: 'Motorcycle Chassis • Cycling Freedom', title: 'AI-Adaptive Kinetic Regeneration & NFT Eco-Rewards' },
    badgeColorClass: 'bg-secondary-fixed text-on-secondary-fixed-variant'
  },
  {
    id: 'rxdigita-belief',
    name: 'RxDigita',
    url: 'http://rxdigita.com',
    initial: 'R',
    category: 'health',
    categoryLabel: 'Health & Pharmacometrics',
    quote: '“We believe in the transformative potential of leveraging real-time physiological data combined with AI to optimize drug metabolism and safety.”',
    description: 'Every body metabolizes therapeutic compounds differently. RxDigita replaces one-size-fits-all dosing with adaptive algorithmic pharmacokinetics, optimizing the ADME-Tox curve for maximum curative efficacy without toxicity.',
    hypothesis: 'Pharmacokinetic Precision via Real-time Biometrics',
    status: 'Clinical Dataset Ingestion',
    imageUrl: '/assets/images/hummingbird-fuel.jpg',
    imageAlt: 'Photorealistic clean pharmaceutical biotechnology laboratory setting with holographic biochemical graphs, glowing cyan DNA helix, pristine glass counter surfaces, bright daylight.',
    specOverlay: { tag: 'Real-time Bio-Adaptive Dosing', title: 'ADME-Tox Computational Modulation' },
    badgeColorClass: 'bg-tertiary-fixed text-on-tertiary-fixed'
  },
  {
    id: 'zoeware-belief',
    name: 'ZoeWare',
    url: 'http://zoeware.com',
    initial: 'Z',
    category: 'spatial',
    categoryLabel: 'Spatial Computing • AR/VR',
    quote: '“We believe in the power of AR/VR to transform education, entertainment, and exercise.”',
    description: 'Through fully immersive 3D environments responsive to Apple Watch biometric feedback, ZoeWare redefines how humans learn complex physical skills, experience sensory meditation, and maintain cardiovascular endurance without synthetic fatigue.',
    hypothesis: 'Spatial Computing for Human Transcendence',
    status: 'visionOS & Android XR Core',
    imageUrl: '/assets/images/zoeware.jpg',
    imageAlt: 'Futuristic spatial computing laboratory with luminous curved glass walls, floating 3D volumetric biometric graphs, pristine light white floor, clean blue reflections.',
    specOverlay: { tag: 'Spatial Bio-Immersion', title: 'Sensory Calibration & Kinetic Learning' },
    badgeColorClass: 'bg-primary-fixed text-on-primary-fixed'
  },
  {
    id: 'zoewear-belief',
    name: 'ZoeWear',
    url: 'http://zoewear.com',
    initial: 'W',
    category: 'spatial',
    categoryLabel: 'Wearables • Bio-Fabrics',
    quote: '“We believe in the fusion of wearable technology and style to empower individuals to lead healthier, more active lives.”',
    description: 'Hardware is only effective if humans wear it with pride. ZoeWear seamlessly weaves medical-grade biosensors and micro-processing directly into premium textile silhouettes, eliminating awkward medical form factors.',
    hypothesis: 'Bio-Digital Symbiosis through Haute Couture',
    status: 'Material Science Testing',
    imageUrl: '/assets/images/zoewear.jpg',
    imageAlt: 'High luxury smart smartwatch strap with woven micro-conductive textiles, sleek titanium buckle, elegant design, displayed on minimalist porcelain plinth with soft studio daylight.',
    specOverlay: { tag: 'Invisible Biosensors', title: 'Smart Conductive Textile Integration' },
    badgeColorClass: 'bg-surface-container-high text-on-surface'
  },
  {
    id: 'zoerobo-belief',
    name: 'ZoeRobo',
    url: 'http://zoerobo.com',
    initial: 'B',
    category: 'ai',
    categoryLabel: 'Robotics • Autonomous Agents',
    quote: '“We believe in the transformative potential of AI-powered robots to enhance everyday life.”',
    description: 'From assistive patient ambulation to quiet perimeter safety sentries, ZoeRobo engineers autonomous machines designed as empathetic, trusted real-world companions that free human beings for creative fulfillment.',
    hypothesis: 'Empathetic Autonomous Companions',
    status: 'Rust Robotics.rs Pipeline',
    imageUrl: '/assets/images/zoerobo.jpg',
    imageAlt: 'Advanced autonomous research robot in modern robotics laboratory with cleanroom diagnostic screens.',
    specOverlay: { tag: 'Rust Robotics.rs', title: 'Deterministic Edge Perception & Manipulation' },
    badgeColorClass: 'bg-secondary-fixed text-on-secondary-fixed'
  },
  {
    id: 'swiftaiad-belief',
    name: 'Swift AI Ad Agency',
    url: 'http://swiftaiad.com',
    initial: 'S',
    category: 'ai',
    categoryLabel: 'Generative Media',
    quote: '“We believe in the power of artificial intelligence to revolutionize advertising by dramatically reducing development time.”',
    description: 'Why spend six months on a single television commercial when generative diffusion swarms can formulate, render, test, and personalize hundred-variant campaigns in minutes? Advertising rebuilt from first algorithmic principles.',
    hypothesis: 'Generative Velocity: Ads in Prompts, Not Months',
    status: 'Commercial Production Service',
    imageUrl: '/assets/images/zoeware.jpg',
    imageAlt: 'Modern generative advertising design environment with multi-modal visual synthesis boards.',
    badgeColorClass: 'bg-primary-fixed text-on-primary-fixed'
  },
  {
    id: 'ylabz-belief',
    name: 'YLabZ',
    url: 'http://ylabz.com',
    initial: 'Y',
    category: 'rnd',
    categoryLabel: 'Foundational R&D',
    quote: '“We believe that foundational research and development lead to breakthrough insights that shape the future of technology.”',
    description: 'Without fundamental physics, deep dataset cleansing, and exploratory hardware prototyping, applied technology stagnates. YLabZ exists as the uncompromising intellectual engine for the entire ZoeWave enterprise.',
    hypothesis: 'Foundational Physical & Algorithmic R&D',
    status: 'Primary Technology Engine',
    imageUrl: '/assets/images/ylabz-core.jpg',
    imageAlt: 'Futuristic clean technology laboratory with holographic AI neural interfaces.',
    badgeColorClass: 'bg-tertiary-fixed text-on-tertiary-fixed'
  },
  {
    id: 'gnseven-belief',
    name: 'G.N.Seven',
    url: 'http://gnseven.com',
    initial: 'G',
    category: 'rnd',
    categoryLabel: 'Design & Ethnography',
    quote: '“We believe that by truly listening to our customers and embracing rapid prototyping, we can evolve products that people love.”',
    description: 'Deep tech fails when isolated from human emotion. G.N.Seven deploys data-driven ethnography and lightning-fast physical and digital prototyping to ensure breakthrough science lands as intuitive, delightful products.',
    hypothesis: 'Empathetic Ethnography & Lightning Prototyping',
    status: 'Active Design Studio',
    imageUrl: '/assets/images/gnseven-core.jpg',
    imageAlt: 'Modern precision industrial design studio with precision ergonomic clay and carbon-fiber prototypes.',
    badgeColorClass: 'bg-secondary-fixed text-on-secondary-fixed'
  }
];

export const ASH_LEADERSHIP_DATA = {
  name: 'Siamak Ashrafi',
  alias: 'Ash',
  title: 'Architect of Platforms • Developer of Innovation • Designer of Technology',
  avatarUrl: '/assets/images/ash-portrait.jpg',
  speakerProfileUrl: 'https://sessionize.com/Ash/',
  mediumUrl: 'https://zoewave.medium.com/',
  googlePlayUrl: 'https://play.google.com/store/apps/developer?id=YLabZ',
  resumeUrl: 'https://shorturl.at/ejyAJ',
  letterUrl: 'https://tinyurl.com/2s3ekebu',
  roles: [
    {
      company: 'ZoeWave',
      role: 'Architect of Platforms',
      url: 'http://zoewave.com',
      description: 'Spearheading strategic development across innovative ventures that grew from pioneering R&D work at YLabz and G.N.Seven. Shaping transformative platforms across mobile, AR/VR (visionOS), machine learning, and biosensors.'
    },
    {
      company: 'YLabZ',
      role: 'Developer of Innovation',
      url: 'http://ylabz.com',
      description: 'Leading YLabz as a pioneering technology lab dedicated to experimental research in AI, robotics, and biosensors. Specializing as an AI/ML "Data Janitor" and "Data Detective" in cleaning, balancing, and optimizing predictive models for 99.8% accuracy.'
    },
    {
      company: 'G.N.Seven',
      role: 'Designer of Technology',
      url: 'http://gnseven.com',
      description: 'Transforming advanced research into consumer-ready products through design thinking, rapid prototyping, and data-driven ethnography. Incubating ventures from AI-driven health solutions to robotics and AR/VR applications.'
    }
  ],
  distinctions: [
    { title: 'JavaOne', subtitle: 'Rock Star Speaker', icon: 'star' },
    { title: 'Amazon', subtitle: '3x Code Ninja', icon: 'terminal' },
    { title: 'Patents', subtitle: 'Multiple Grants', icon: 'verified' },
    { title: 'Research', subtitle: 'Scientific Publications', icon: 'science' }
  ],
  licenses: [
    { type: 'Car: C Class', icon: 'directions_car' },
    { type: 'Moto: M1 Class', icon: 'two_wheeler' },
    { type: 'Dive: NAUI / PADI', icon: 'scuba_diving' },
    { type: 'Drone: FAA Part 107', icon: 'flight' }
  ],
  waterQuote: {
    headline: 'From all accounts should have been killed ☠️ by all three phases of water 🌊.',
    phases: [
      { emoji: '🏂', phase: 'Solid', desc: 'Boarding blizzard snow' },
      { emoji: '🏄', phase: 'Liquid', desc: 'Surfing storm waves' },
      { emoji: '⛵️', phase: 'Vapor', desc: 'Sailing hurricane winds' }
    ],
    conclusion: 'Lucky & Glad to be alive!'
  },
  conferencesSummary: '52 Conferences over 12 Years: DroidCon (Boston & SF) • Google DevFest • 360iDev • 360AndDev • And Robot • AIDevWorld • IDTechEx • Developer Week • DesignWest • JavaOne • SV Forum • SVCC • ComicCon',
  visionStatement: 'The future of software engineering lies in the synergy of multi-skilled developers collaborating with Generative AI, acting as architects directing AI to build, optimize, and innovate.',
  techStacks: {
    android: {
      title: 'Android / WearOS / XR',
      core: 'Kotlin, Kotlin Coroutines (Flow/Channels), Jetpack Compose (Material 3), Hilt (ViewModel, Navigation, Room, Testing), Room, Coil, WorkManager, JUnit4, GitHub Actions CI/CD',
      frameworks: 'Google Maps, Health Connect, CameraX, BLE, ML Kit, Android XR (ARCore)',
      links: [
        { label: 'Medium Articles', url: 'https://zoewave.medium.com/list/android-dev-1c5b527d5a4d' },
        { label: 'Modern Android Dev (MAD)', url: 'https://www.ylabz.com/platforms/mobile/android' },
        { label: 'Google Play Store', url: 'https://play.google.com/store/apps/developer?id=YLabZ' }
      ]
    },
    ios: {
      title: 'iOS / watchOS / visionOS',
      core: 'Swift, SwiftUI, SF Symbols, SwiftData (w/ history), Swift Structured Concurrency, Combine, Swift Package Manager, Swift Testing, CI/CD',
      frameworks: 'Swift Charts, Core Motion, CoreML, Apple Maps, ARKit, Apple Health, visionOS (RealityKit, RealityView, Reality Composer Pro, MaterialX, USDZ)',
      links: [
        { label: 'Apple Platforms Medium', url: 'https://zoewave.medium.com/apple-platforms-97be2d63f6bd' },
        { label: 'Modern iOS Dev (MiD)', url: 'https://www.ylabz.com/platforms/mobile/ios' }
      ]
    },
    aiml: {
      title: 'AI / ML & Bio-Data Science',
      core: 'Mojo, Python, Google Colab, Pandas, NumPy, TensorFlow (Pipeline), Scikit-learn (RF, KNN, SVM) with RFE(CV) and Stratified K-Folds',
      explainability: 'SHAP, LIME, ELI5, Plotly, Matplotlib, Seaborn, Altair',
      deployment: 'MongoDB, PyTables HDF5, Solidity Smart Contracts, Docker Container on AWS with 99.8% precision',
      links: [
        { label: 'AI/ML on Mobile Articles', url: 'https://zoewave.medium.com/list/aiml-dev-on-mobile-6f5751e000ae' },
        { label: 'AI/ML Projects List', url: 'https://zoewave.medium.com/list/aiml-projects-c0dc5ddccb6b' }
      ]
    },
    rust: {
      title: 'Rust & Quantum Computing',
      details: 'Web: Scalable microservices using Rust Axum. Quantum Computing: Rust with PyO3 / Google Cirq. Blockchain: HashGraph distributed ledgers and Solana contracts. Robotics: Robotics.rs real-time control.'
    }
  }
};
