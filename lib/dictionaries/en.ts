// const en = {
//     personDetection: {
//         heroTitle: "AI Person Detection for Existing CCTV Cameras",
//         heroSubtitle:
//             "Reduce false alerts and receive notifications only when a real person is detected. Smart upgrade without new hardware.",
//         cta: "Start Free Trial",
//
//         comparisonTitle: "Motion detection creates noise, not security",
//         comparisonSubtitle:
//             "Traditional motion systems trigger alerts for shadows, pets and light changes.",
//
//         videoTitle: "See Detection in Action",
//
//         upgradeTitle: "Smart Upgrade for Existing CCTV Systems",
//         upgradeText:
//             "Most CCTV systems rely on basic motion detection. CamGuard adds AI intelligence through cloud processing, without new hardware or complex IT projects. Simple activation via subscription.",
//
//         statsTitle: "Measurable Results",
//         stat1Title: "70%",
//         stat1Text: "Fewer false alerts",
//         stat2Title: "0",
//         stat2Text: "New hardware required",
//         stat3Title: "Minutes",
//         stat3Text: "To activate",
//
//         useCasesTitle: "Who It's For",
//         useCase1Title: "🏠 Homeowners",
//         useCase1Text:
//             "Receive alerts only when a real person appears and enjoy daily peace of mind.",
//         useCase2Title: "🏢 Businesses",
//         useCase2Text:
//             "Reduce monitoring costs and eliminate unnecessary alert checks.",
//         useCase3Title: "🔐 Installers",
//         useCase3Text:
//             "Offer modern AI subscription services and generate recurring revenue.",
//
//         trustTitle: "Security & Privacy",
//         trust1Title: "Secure Processing",
//         trust1Text:
//             "Images are analyzed within secure cloud infrastructure.",
//         trust2Title: "GDPR Compliant",
//         trust2Text:
//             "Fully aligned with European data protection standards.",
//         trust3Title: "No Continuous Storage",
//         trust3Text:
//             "No permanent video storage unless explicitly configured.",
//
//         faqTitle: "Frequently Asked Questions",
//         faq1Q: "Does it work with any IP camera?",
//         faq1A:
//             "Yes, it supports most IP cameras that provide RTSP streams.",
//         faq2Q: "Is additional hardware required?",
//         faq2A:
//             "No. The system works entirely in the cloud with your existing cameras.",
//         faq3Q: "Where are images processed?",
//         faq3A:
//             "Processing takes place securely in cloud infrastructure following EU standards.",
//         faq4Q: "Can I try it for free?",
//         faq4A:
//             "Yes, you can start a free trial and experience the difference.",
//
//         conversionTitle:
//             "Turn Your Existing Cameras Into Intelligent Security Systems",
//         conversionSubtitle:
//             "Eliminate false alarms and receive meaningful alerts.",
//         conversionCta: "Start Free Trial",
//     },
// };
const en = {
    personDetection: {
        heroTitle: "AI Person Detection for Security Cameras",
        heroSubtitle:
            "CamGuard analyzes camera feeds in real time and instantly alerts you when a person is detected. Reduce false alarms and monitor your property smarter.",
        ctaPrimary: "Start Monitoring",
        ctaSecondary: "See How It Works"
    },
    personDetectionWhatIs: {
        title: "What Is AI Person Detection?",
        description:
            "Traditional motion detection triggers alerts for any movement. CamGuard uses artificial intelligence to identify human activity and notify you only when it matters.",

        cards: [
            {
                icon: "🎥",
                title: "Motion Detection",
                text:
                    "Standard cameras trigger alerts for any movement such as shadows, animals, or moving trees."
            },
            {
                icon: "🧠",
                title: "AI Analysis",
                text:
                    "CamGuard analyzes video frames using AI to determine whether the movement belongs to a person."
            },
            {
                icon: "🔔",
                title: "Smart Alerts",
                text:
                    "When a person is detected, you receive an instant notification so you can respond immediately."
            }
        ]
    },
    personDetectionHowItWorks: {
        title: "How AI Person Detection Works",
        description:
            "CamGuard analyzes camera streams in real time using artificial intelligence to detect human activity accurately.",

        steps: [
            {
                title: "Motion Detected",
                text:
                    "Your security camera detects movement within the monitored area."
            },
            {
                title: "AI Frame Analysis",
                text:
                    "CamGuard analyzes the video frame to determine what caused the movement."
            },
            {
                title: "Person Identified",
                text:
                    "The AI determines whether the detected object is a person."
            },
            {
                title: "Instant Alert Sent",
                text:
                    "If a person is detected, you receive a notification immediately."
            }
        ]
    },
    personDetectionBenefits: {
        title: "Why AI Person Detection Matters",
        description:
            "AI-powered detection helps you focus only on real security events instead of unnecessary alerts.",

        items: [
            {
                icon: "🛑",
                title: "Reduce False Alerts",
                text:
                    "Ignore notifications triggered by animals, shadows, or moving trees. CamGuard detects real human activity."
            },
            {
                icon: "⚡",
                title: "Instant Notifications",
                text:
                    "Receive alerts immediately when a person appears in the monitored area."
            },
            {
                icon: "🧠",
                title: "Smarter Security Monitoring",
                text:
                    "Focus on important events and respond faster to potential threats."
            }
        ]
    },
    personDetectionUseCases: {
        title: "Where AI Person Detection Is Most Useful",
        description:
            "AI person detection improves security in many environments by focusing only on human activity.",

        items: [
            {
                icon: "🏠",
                title: "Home Security",
                text:
                    "Monitor entrances, driveways, and yards with smart alerts when someone approaches your property.",
                href: "/solutions/home-security"
            },
            {
                icon: "🏢",
                title: "Small Businesses",
                text:
                    "Protect your store or office by detecting people entering restricted areas.",
                href: "/solutions/small-business"
            },
            {
                icon: "🏭",
                title: "Warehouse Monitoring",
                text:
                    "Track human activity in warehouses and storage facilities to improve safety.",
                href: "/solutions/warehouses"
            },
            {
                icon: "🌾",
                title: "Outdoor & Farm Security",
                text:
                    "Monitor large outdoor properties and receive alerts only when people are detected.",
                href: "/solutions/farm-security"
            }
        ]
    },
    personDetectionCameras: {
        title: "Works With Popular Security Cameras",
        description:
            "CamGuard integrates with most modern IP cameras and widely used security camera standards.",

        items: [
            "Hikvision",
            "Dahua",
            "Reolink",
            "ONVIF",
            "RTSP"
        ]
    },
    animalDetection: {

        hero: {
            title: "AI Animal Detection for Security Cameras",
            subtitle:
                "CamGuard automatically detects animals such as cats, dogs, and wildlife using advanced AI vision models.",
            ctaPrimary: "Start Monitoring",
            ctaSecondary: "Learn More",

            trust: [
                "AI-powered detection",
                "Works with existing cameras",
                "Smart alerts"
            ],

            preview: {
                cat: "Cat detected",
                dog: "Dog detected",
                wildlife: "Wildlife detected"
            }
        },

        selectAnimals: {
            title: "Detect the Animals That Matter to You",

            subtitle:
                "Choose exactly which animals trigger alerts and avoid unnecessary notifications.",

            animals: [
                {
                    icon: "🐱",
                    title: "Cat Detection",
                    description:
                        "Receive alerts when cats appear near your property."
                },
                {
                    icon: "🐶",
                    title: "Dog Detection",
                    description:
                        "Detect dogs entering restricted areas."
                },
                {
                    icon: "🦌",
                    title: "Wildlife Detection",
                    description:
                        "Identify wildlife such as deer, foxes, and raccoons."
                },
                {
                    icon: "⚙️",
                    title: "Custom Detection Filters",
                    description:
                        "Choose which animals trigger notifications."
                }
            ]
        },
        detectableAnimals: {

            title: "Animals CamGuard Can Detect",

            subtitle:
                "Our AI models can recognize a wide range of animals using advanced computer vision.",

            animals: [
                { icon: "🐱", name: "Cats" },
                { icon: "🐶", name: "Dogs" },
                { icon: "🦌", name: "Deer" },
                { icon: "🦊", name: "Foxes" },
                { icon: "🦝", name: "Raccoons" },
                { icon: "🐻", name: "Bears" },
                { icon: "🐦", name: "Birds" },
                { icon: "🐺", name: "Wolves" },
                { icon: "🐗", name: "Wild Boars" },
                { icon: "🐐", name: "Goats" },
                { icon: "🐄", name: "Cattle" },
                { icon: "🐑", name: "Sheep" }
            ]

        },
        howItWorks: {

            title: "How AI Animal Detection Works",

            subtitle:
                "CamGuard uses advanced computer vision models to analyze camera footage and identify animals in real time.",

            steps: [
                {
                    number: "01",
                    title: "Camera Detects Motion",
                    description:
                        "Your security camera captures movement in the monitored area."
                },
                {
                    number: "02",
                    title: "AI Analyzes the Image",
                    description:
                        "Our AI model processes the video frame and identifies objects such as animals."
                },
                {
                    number: "03",
                    title: "Smart Alert Is Sent",
                    description:
                        "You receive an instant notification when a selected animal is detected."
                }
            ]

        },
        useCases: {

            title: "Where Animal Detection Is Most Useful",

            subtitle:
                "AI-powered animal detection helps protect property, monitor wildlife, and reduce unnecessary alerts.",

            items: [
                {
                    icon: "🏡",
                    title: "Homes and Gardens",
                    description:
                        "Detect animals entering your yard or garden before they cause damage."
                },
                {
                    icon: "🚜",
                    title: "Farms and Livestock",
                    description:
                        "Monitor farm areas and detect predators or wildlife near livestock."
                },
                {
                    icon: "🏕",
                    title: "Cabins and Remote Properties",
                    description:
                        "Stay informed about wildlife activity around cabins or vacation homes."
                },
                {
                    icon: "🌲",
                    title: "Wildlife Monitoring",
                    description:
                        "Observe wildlife behavior and movement around your property."
                }
            ]

        },
        benefits: {

            title: "Benefits of AI Animal Detection",

            subtitle:
                "CamGuard helps you monitor wildlife activity and reduce unnecessary motion alerts.",

            items: [
                {
                    icon: "🔔",
                    title: "Fewer False Alerts",
                    description:
                        "Receive notifications only when specific animals are detected."
                },
                {
                    icon: "⚡",
                    title: "Instant Notifications",
                    description:
                        "Get real-time alerts directly on your phone when animals appear."
                },
                {
                    icon: "🧠",
                    title: "Smart AI Recognition",
                    description:
                        "Advanced AI models accurately identify animals in camera footage."
                },
                {
                    icon: "🌙",
                    title: "24/7 Monitoring",
                    description:
                        "Works day and night when paired with cameras that support night vision."
                }
            ]

        },
        faq: {

            title: "Animal Detection FAQ",

            subtitle:
                "Answers to common questions about AI animal detection and wildlife monitoring.",

            items: [
                {
                    question: "Can security cameras detect animals?",
                    answer:
                        "Yes. AI-powered systems like CamGuard can identify animals using computer vision and send alerts when wildlife or pets are detected."
                },
                {
                    question: "What animals can CamGuard detect?",
                    answer:
                        "CamGuard can recognize many animals including cats, dogs, deer, foxes, raccoons and other wildlife depending on camera quality."
                },
                {
                    question: "Does animal detection work at night?",
                    answer:
                        "Yes. Cameras with infrared night vision can still detect animals when combined with AI recognition."
                },
                {
                    question: "Can I choose which animals trigger alerts?",
                    answer:
                        "Yes. CamGuard allows you to select specific animals such as cats, dogs or wildlife to receive notifications only when they appear."
                },
                {
                    question: "Do I need special cameras for animal detection?",
                    answer:
                        "No. CamGuard works with many existing IP cameras and surveillance systems."
                }
            ]

        },
        cta: {

            title: "Start Detecting Animals Today",

            subtitle:
                "Turn your existing security cameras into smart AI wildlife monitoring systems with CamGuard.",

            primaryButton: "Start Monitoring",

            secondaryButton: "Explore Features"

        },
        metadata: {
            title: "AI Animal Detection for Security Cameras | CamGuard",
            description:
                "Detect cats, dogs and wildlife with AI-powered animal detection. CamGuard sends smart alerts when animals appear near your property."
        },

    }
}

export default en;
