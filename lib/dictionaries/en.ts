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
                {icon: "🐱", name: "Cats"},
                {icon: "🐶", name: "Dogs"},
                {icon: "🦌", name: "Deer"},
                {icon: "🦊", name: "Foxes"},
                {icon: "🦝", name: "Raccoons"},
                {icon: "🐻", name: "Bears"},
                {icon: "🐦", name: "Birds"},
                {icon: "🐺", name: "Wolves"},
                {icon: "🐗", name: "Wild Boars"},
                {icon: "🐐", name: "Goats"},
                {icon: "🐄", name: "Cattle"},
                {icon: "🐑", name: "Sheep"}
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


    },
    carDetection: {
        hero: {
            title: "AI Car Detection for Security Cameras",
            subtitle:
                "Detect vehicles instantly with AI-powered camera monitoring. CamGuard sends smart alerts when cars enter your driveway, parking lot or property.",
            primaryCTA: "Start Monitoring",
            secondaryCTA: "Learn More",
            detectionLabel: "Vehicle detected"
        },

        whatIsCarDetection: {
            title: "What Is Car Detection?",
            description:
                "Car detection uses artificial intelligence to identify vehicles in a security camera feed. Instead of recording everything continuously, CamGuard analyzes the video stream and detects when a car or vehicle appears. This allows users to receive instant alerts when vehicles enter a driveway, parking area or private property."
        },
        whyVehicleDetection: {
            title: "Why Vehicle Detection Matters",
            subtitle:
                "Smart vehicle detection helps you monitor important areas and receive alerts only when vehicles appear.",

            driveway: {
                title: "Driveway Monitoring",
                description:
                    "Know immediately when a car enters your driveway. Perfect for homes, private properties and gated entrances."
            },

            parking: {
                title: "Parking Area Monitoring",
                description:
                    "Track vehicles entering or leaving parking spaces. Ideal for businesses, offices and residential buildings."
            },

            alerts: {
                title: "Instant Notifications",
                description:
                    "Receive real-time alerts when vehicles are detected so you can react quickly to activity around your property."
            }
        },
        useCases: {
            title: "Common Use Cases for Car Detection",
            subtitle:
                "AI vehicle detection can improve security and monitoring across many environments.",

            driveway: {
                title: "Driveway Monitoring",
                description:
                    "Detect when vehicles enter your driveway and receive instant notifications."
            },

            parking: {
                title: "Parking Lot Monitoring",
                description:
                    "Monitor vehicles entering and leaving parking spaces in real time."
            },

            business: {
                title: "Business Security",
                description:
                    "Track vehicles arriving at offices, warehouses or commercial properties."
            },

            garage: {
                title: "Garage Monitoring",
                description:
                    "Receive alerts when cars approach or enter your garage."
            }
        },
        howItWorks: {
            title: "How Car Detection Works",
            subtitle:
                "CamGuard uses artificial intelligence to analyze camera feeds and detect vehicles automatically.",

            camera: {
                title: "Camera Video Stream",
                description:
                    "Your security camera continuously sends video frames that are analyzed by the CamGuard system."
            },

            ai: {
                title: "AI Vehicle Recognition",
                description:
                    "Our AI model processes each frame and detects vehicles such as cars, vans or trucks."
            },

            alerts: {
                title: "Smart Alerts",
                description:
                    "When a vehicle is detected, CamGuard sends an instant notification so you can monitor the activity."
            }
        },
        smartAlerts: {
            title: "Smart Vehicle Alerts",
            description:
                "Receive instant notifications when vehicles are detected by your security cameras.",

            feature1: "Real-time notifications when cars enter your property",
            feature2: "Reduce false alerts by detecting only vehicles",
            feature3: "Monitor activity from anywhere using your phone",

            notificationLabel: "Vehicle detected"
        },
        whyCamGuard: {
            title: "Why Choose CamGuard",
            subtitle:
                "CamGuard combines advanced AI detection with a simple monitoring experience.",

            ai: {
                title: "Advanced AI Detection",
                description:
                    "Our AI models detect vehicles accurately in real time."
            },

            speed: {
                title: "Fast Notifications",
                description:
                    "Receive alerts instantly when vehicles appear in camera view."
            },

            mobile: {
                title: "Monitor From Anywhere",
                description:
                    "Access your camera alerts and activity directly from your phone."
            },

            security: {
                title: "Secure and Reliable",
                description:
                    "CamGuard protects your camera data while providing reliable detection."
            }
        },
        faq: {
            title: "Car Detection FAQ",

            q1: {
                question: "Can security cameras detect cars?",
                answer:
                    "Yes. AI-powered systems like CamGuard can detect vehicles in camera feeds and send alerts when a car appears."
            },

            q2: {
                question: "How accurate is AI vehicle detection?",
                answer:
                    "Modern AI detection models can identify vehicles with very high accuracy by analyzing video frames in real time."
            },

            q3: {
                question: "Can CamGuard detect parked cars?",
                answer:
                    "Yes. CamGuard can detect vehicles that enter or remain inside the camera view depending on the detection settings."
            },

            q4: {
                question: "Does car detection work at night?",
                answer:
                    "Yes. Vehicle detection works with night vision cameras and low-light environments."
            }
        }

    },
    customDetection: {
        hero: {

            title: "AI Custom Object Detection for Security Cameras",

            subtitle:
                "Detect people, vehicles, animals and over 80 different objects directly from your camera feed. CamGuard analyzes video streams in real time and sends smart alerts when important objects appear.",

            ctaPrimary: "Start Monitoring",

            ctaSecondary: "See How It Works",

            trust: [
                "AI Powered Detection",
                "80+ Detectable Objects",
                "Real-Time Alerts"
            ],

            preview: {
                title: "Camera Preview",
                person: "Person detected",
                car: "Vehicle detected",
                dog: "Dog detected",
                object: "Custom object detected"
            }

        },
        objects: {

            title: "Detect Over 80 Objects with AI",

            subtitle:
                "CamGuard can recognize dozens of objects in your camera feed, from vehicles and people to animals and everyday items.",

            categories: [

                {
                    title: "People & Vehicles",
                    description: "Monitor movement and vehicles around your property.",
                    objects: [
                        "Person",
                        "Bicycle",
                        "Car",
                        "Motorbike",
                        "Bus",
                        "Truck",
                        "Train"
                    ]
                },

                {
                    title: "Animals",
                    description: "Detect pets and wildlife near your home or business.",
                    objects: [
                        "Dog",
                        "Cat",
                        "Horse",
                        "Bird",
                        "Cow",
                        "Sheep",
                        "Bear",
                        "Elephant"
                    ]
                },

                {
                    title: "Electronics",
                    description: "Track valuable electronic devices.",
                    objects: [
                        "Laptop",
                        "Cell Phone",
                        "Keyboard",
                        "Remote",
                        "TV Monitor",
                        "Mouse"
                    ]
                },

                {
                    title: "Household Objects",
                    description: "Recognize common objects inside buildings.",
                    objects: [
                        "Chair",
                        "Sofa",
                        "Bed",
                        "Dining Table",
                        "Clock",
                        "Book"
                    ]
                },

                {
                    title: "Food & Everyday Items",
                    description: "Identify food and small everyday items.",
                    objects: [
                        "Bottle",
                        "Cup",
                        "Apple",
                        "Banana",
                        "Pizza",
                        "Cake"
                    ]
                }

            ]

        },
        whatIs: {

            title: "What Is AI Custom Object Detection?",

            description:
                "AI custom object detection allows security cameras to automatically recognize specific objects in video streams.",

            description2:
                "Instead of simply recording footage, the system analyzes every frame and identifies objects such as people, vehicles, animals, or everyday items.",

            previewTitle: "AI Detection Preview",

            examples: {
                person: "Person detected near the entrance",
                vehicle: "Vehicle entering the driveway",
                animal: "Animal detected in the yard",
                object: "Package detected at the door"
            }

        },
        howItWorks: {

            title: "How AI Custom Object Detection Works",

            subtitle:
                "CamGuard analyzes your camera feed in real time and automatically identifies important objects using advanced AI models.",

            steps: [

                {
                    icon: "📹",
                    title: "Camera Stream",
                    description:
                        "Your security camera sends a continuous video stream for analysis."
                },

                {
                    icon: "🧠",
                    title: "AI Processing",
                    description:
                        "The AI model analyzes every frame and searches for known object patterns."
                },

                {
                    icon: "🔍",
                    title: "Object Recognition",
                    description:
                        "The system identifies objects such as people, vehicles, animals, and everyday items."
                },

                {
                    icon: "🚨",
                    title: "Smart Alerts",
                    description:
                        "When a selected object appears, CamGuard sends notifications instantly."
                }

            ]

        },
        useCases: {

            title: "Real-World Use Cases for AI Object Detection",

            subtitle:
                "Custom object detection helps improve security, monitoring, and automation across many environments.",

            items: [

                {
                    icon: "🏠",
                    title: "Home Security",
                    description:
                        "Detect people, vehicles, or animals approaching your home and receive instant alerts."
                },

                {
                    icon: "📦",
                    title: "Package Monitoring",
                    description:
                        "Get notified when a package is delivered or removed from your doorstep."
                },

                {
                    icon: "🚗",
                    title: "Vehicle Detection",
                    description:
                        "Monitor driveways, parking areas, and garages for vehicle activity."
                },

                {
                    icon: "🐾",
                    title: "Animal Detection",
                    description:
                        "Detect pets or wildlife entering restricted areas around your property."
                }

            ]

        },
        faq: {

            title: "Frequently Asked Questions",

            subtitle:
                "Answers to common questions about AI custom object detection.",

            items: [

                {
                    question: "What objects can AI security cameras detect?",
                    answer:
                        "CamGuard can detect more than 80 different objects including people, vehicles, animals, electronics, furniture, and many everyday items."
                },

                {
                    question: "How accurate is AI object detection?",
                    answer:
                        "AI detection accuracy depends on camera quality and environment, but modern models can achieve very high recognition accuracy in real-world conditions."
                },

                {
                    question: "Can AI cameras detect animals?",
                    answer:
                        "Yes. CamGuard can detect many types of animals including dogs, cats, birds, and wildlife depending on the configured detection settings."
                },

                {
                    question: "Can I choose which objects trigger alerts?",
                    answer:
                        "Yes. Custom detection allows you to select specific objects that trigger notifications or recordings."
                }

            ]

        },
        cta: {

            title: "Start Monitoring with AI Object Detection",

            subtitle:
                "Detect people, vehicles, animals, and more than 80 different objects in your camera feed with CamGuard's intelligent monitoring system.",

            button: "Start Monitoring"

        },
    },
    homeSecurity: {
        hero: {
            title: "AI-Powered Home Security Monitoring",
            subtitle:
                "CamGuard analyzes your security cameras in real time and detects people, vehicles and animals instantly.",

            primaryCTA: "Start Monitoring",
            secondaryCTA: "See How It Works",

            preview: "Live Camera Feed",

            points: {
                security: "AI threat detection",
                alerts: "Instant alerts",
                cameras: "Works with existing cameras"
            },

            badges: {
                person: "Person detected",
                vehicle: "Vehicle detected"
            }
        },
        problems: {

            title: "Traditional Security Cameras Aren't Enough",

            subtitle:
                "Most security cameras only record video. They don't understand what's happening or alert you when something important occurs.",

            items: {

                recording: {
                    title: "Cameras Only Record",
                    description:
                        "Most systems simply store video footage without understanding events happening in the scene."
                },

                falseAlerts: {
                    title: "Too Many False Alerts",
                    description:
                        "Motion detection often triggers alerts from shadows, rain, or moving trees."
                },

                missedEvents: {
                    title: "Important Events Are Missed",
                    description:
                        "Without intelligent detection, critical moments can go unnoticed until it's too late."
                }

            }

        },
        solution: {

            title: "AI That Understands What Your Cameras See",

            subtitle:
                "CamGuard transforms your security cameras into an intelligent monitoring system that detects important events automatically.",

            preview: "AI Camera Analysis",

            labels: {
                person: "Person detected",
                vehicle: "Vehicle detected",
                animal: "Animal detected"
            },

            features: {

                ai: {
                    title: "Advanced AI Detection",
                    description:
                        "CamGuard analyzes camera footage using advanced AI models to recognize people, vehicles, animals and more."
                },

                detection: {
                    title: "Real-Time Object Detection",
                    description:
                        "Important events are detected instantly so you know exactly what is happening around your home."
                },

                alerts: {
                    title: "Instant Smart Alerts",
                    description:
                        "Receive immediate notifications when something important is detected in your camera feed."
                }

            }

        },
        useCases: {
            title: "Real Situations Where AI Home Security Helps",
            subtitle: "CamGuard watches your cameras 24/7 and instantly detects events that matter.",
            items: {
                intruder: {
                    title: "Intruder Detection",
                    description: "Get instant alerts when an unknown person appears near your home or property."
                },
                package: {
                    title: "Package Monitoring",
                    description: "Know when deliveries arrive and detect suspicious activity around your packages."
                },
                night: {
                    title: "Night-time Security",
                    description: "AI monitors your property during the night and alerts you about unusual movement."
                },
                vehicle: {
                    title: "Vehicle Monitoring",
                    description: "Detect cars entering your driveway or parking areas automatically."
                },
                animals: {
                    title: "Animal Detection",
                    description: "Receive alerts when animals enter your yard or garden."
                },
                family: {
                    title: "Family Safety",
                    description: "Know when family members arrive home safely."
                }
            }
        },
        howItWorks: {
            title: "How AI Home Security Works",
            subtitle: "CamGuard connects to your cameras and analyzes video in real time to detect important events.",
            steps: {
                connect: {
                    title: "Connect Your Cameras",
                    description: "Add your existing security cameras to CamGuard in seconds. No new hardware required."
                },
                analyze: {
                    title: "AI Analyzes Video",
                    description: "Our AI continuously analyzes the camera feed and detects people, vehicles, animals and other important objects."
                },
                alerts: {
                    title: "Receive Instant Alerts",
                    description: "Get notifications immediately when something important happens around your home."
                }
            }
        },
        features: {
            title: "Powerful AI Home Security Features",
            subtitle: "CamGuard turns your existing security cameras into an intelligent monitoring system.",
            items: {
                person: {
                    title: "Person Detection",
                    description: "Detect people appearing near your home and receive instant alerts."
                },
                vehicle: {
                    title: "Vehicle Detection",
                    description: "Know when a car enters your driveway or parking area."
                },
                animals: {
                    title: "Animal Detection",
                    description: "Detect animals entering your yard, garden or property."
                },
                notifications: {
                    title: "Instant Notifications",
                    description: "Receive alerts on your phone when important events are detected."
                },
                cameras: {
                    title: "Works With Existing Cameras",
                    description: "Use your current IP cameras or security systems without buying new hardware."
                },
                privacy: {
                    title: "Privacy First AI",
                    description: "Your camera feeds are processed securely with strong privacy protection."
                }
            }
        },
        detectionTypes: {
            title: "AI Detects People, Vehicles, Animals and More",
            subtitle: "CamGuard uses advanced object detection to recognize dozens of objects in your camera feed.",
            categories: {
                people: {
                    title: "People",
                    items: [
                        "Person",
                        "Child",
                        "Group of people"
                    ]
                },
                vehicles: {
                    title: "Vehicles",
                    items: [
                        "Car",
                        "Truck",
                        "Motorcycle",
                        "Bicycle"
                    ]
                },
                animals: {
                    title: "Animals",
                    items: [
                        "Dog",
                        "Cat",
                        "Bird",
                        "Wild animals"
                    ]
                },
                objects: {
                    title: "Objects",
                    items: [
                        "Package",
                        "Backpack",
                        "Suitcase",
                        "Box"
                    ]
                }
            },
            note: "CamGuard AI can detect more than 80 different object types."
        },
        faq: {
            title: "Home Security AI – Frequently Asked Questions",
            subtitle: "Everything you need to know about CamGuard AI monitoring.",
            items: [
                {
                    q: "What cameras work with CamGuard?",
                    a: "CamGuard works with most IP cameras and security systems that provide RTSP or video stream access."
                },
                {
                    q: "Does CamGuard store my video footage?",
                    a: "CamGuard analyzes the video stream for object detection. Storage depends on your camera system or recording setup."
                },
                {
                    q: "What objects can CamGuard detect?",
                    a: "CamGuard AI can detect people, vehicles, animals, packages and more than 80 different object categories."
                },
                {
                    q: "How fast are the alerts?",
                    a: "Alerts are generated in near real-time, usually within seconds after the object is detected."
                },
                {
                    q: "Is my camera feed private?",
                    a: "Yes. CamGuard is designed with strong privacy protection and secure processing of camera streams."
                }
            ]
        },
        cta: {
            title: "Start Monitoring Your Home with AI",
            subtitle: "Connect your cameras and let CamGuard detect people, vehicles and animals in real time.",
            button: "Start Monitoring"
        }
    },
    smallBusiness: {

        hero: {
            title: "AI Security Monitoring for Small Businesses",
            subtitle: "CamGuard analyzes your security cameras and detects people, vehicles, and suspicious activity in real time.",
            primaryCTA: "Start Monitoring",
            secondaryCTA: "See How It Works"
        },
        problems: {
            title: "Security Challenges for Small Businesses",
            subtitle: "Small businesses face daily security risks that traditional cameras alone cannot prevent.",

            items: {

                theft: {
                    title: "Theft and Shoplifting",
                    description: "Retail stores and businesses often struggle with shoplifting and internal theft that goes unnoticed."
                },

                afterHours: {
                    title: "After-Hours Intrusion",
                    description: "Break-ins and suspicious activity outside business hours can cause serious financial losses."
                },

                parking: {
                    title: "Parking Lot Incidents",
                    description: "Parking areas are difficult to monitor and often become hotspots for theft or vandalism."
                },

                staffSafety: {
                    title: "Staff Safety",
                    description: "Employees working late or alone may face risks that require quick detection and response."
                }

            }
        },
        detection: {

            title: "AI Detection Capabilities",
            subtitle: "CamGuard automatically detects important events across your business cameras in real time.",

            items: {

                people: {
                    title: "Person Detection",
                    description: "Detect customers, staff, or intruders entering restricted areas or moving through your business."
                },

                vehicles: {
                    title: "Vehicle Detection",
                    description: "Monitor vehicles entering parking areas or restricted zones around your business."
                },

                animals: {
                    title: "Animal Detection",
                    description: "Detect animals that may enter outdoor areas or warehouses."
                },

                suspicious: {
                    title: "Suspicious Activity",
                    description: "Identify unusual movement or activity patterns that may indicate potential threats."
                },

                objects: {
                    title: "Object Detection",
                    description: "Detect packages, equipment, or other objects appearing in sensitive areas."
                },

                custom: {
                    title: "Custom Object Detection",
                    description: "Train the AI to detect specific objects relevant to your business environment."
                }

            }

        },
        howItWorks: {

            title: "How CamGuard Works",
            subtitle: "Set up AI-powered monitoring in minutes using your existing cameras.",

            steps: {

                connect: {
                    title: "Connect Your Cameras",
                    description: "Add your existing IP cameras, RTSP streams, or NVR systems to CamGuard in minutes."
                },

                analyze: {
                    title: "AI Analyzes Video",
                    description: "Our AI continuously analyzes camera feeds to detect important events."
                },

                detect: {
                    title: "Detect Security Events",
                    description: "CamGuard detects people, vehicles, animals, and suspicious activity automatically."
                },

                alert: {
                    title: "Receive Instant Alerts",
                    description: "Get real-time notifications when something important happens."
                }

            }

        },
        useCases: {

            title: "Built for Different Business Environments",
            subtitle: "CamGuard helps monitor and protect different types of small businesses using AI-powered camera analysis.",

            items: {

                retail: {
                    title: "Retail Stores",
                    description: "Monitor entrances, shelves, and checkout areas to detect shoplifting, suspicious behavior, or unauthorized access."
                },

                restaurant: {
                    title: "Restaurants & Cafes",
                    description: "Improve staff safety and monitor activity during busy hours or late-night operations."
                },

                warehouse: {
                    title: "Warehouses",
                    description: "Monitor storage areas, loading docks, and restricted zones to prevent theft or unauthorized entry."
                },

                office: {
                    title: "Offices",
                    description: "Protect office buildings by monitoring entrances, hallways, and sensitive areas."
                },

                parking: {
                    title: "Parking Areas",
                    description: "Detect vehicles, suspicious activity, or incidents in parking lots around your business."
                }

            }

        },
        benefits: {

            title: "Why Small Businesses Choose CamGuard",
            subtitle: "AI-powered monitoring helps businesses prevent incidents and respond faster.",

            items: {

                preventTheft: {
                    title: "Prevent Theft",
                    description: "Detect suspicious activity early and reduce losses caused by theft or vandalism."
                },

                remoteMonitoring: {
                    title: "Monitor From Anywhere",
                    description: "Access your cameras and receive alerts from anywhere using your phone or computer."
                },

                instantAlerts: {
                    title: "Real-Time Alerts",
                    description: "Receive instant notifications when important events are detected."
                },

                aiAutomation: {
                    title: "AI-Powered Automation",
                    description: "Reduce manual monitoring by letting AI detect events automatically."
                },

                multiLocation: {
                    title: "Multiple Locations",
                    description: "Monitor multiple business locations from one centralized dashboard."
                },

                cameraCompatibility: {
                    title: "Works With Existing Cameras",
                    description: "CamGuard integrates with most IP cameras, RTSP streams, and NVR systems."
                }

            }

        },
        cta: {

            title: "Start Protecting Your Business with AI Monitoring",
            subtitle: "Connect your cameras and let CamGuard detect important events in real time.",
            button: "Start Monitoring"

        },
        faq: {

            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about using CamGuard for your business.",

            items: [

                {
                    "question": "Can CamGuard work with my existing cameras?",
                    "answer": "Yes. CamGuard supports most IP cameras, RTSP streams, and NVR systems."
                },

                {
                    "question": "Can I monitor multiple business locations?",
                    "answer": "Yes. CamGuard allows you to monitor multiple locations from a single dashboard."
                },

                {
                    "question": "Do I need special hardware?",
                    "answer": "No additional hardware is required. CamGuard works with your existing camera infrastructure."
                },

                {
                    "question": "What events can CamGuard detect?",
                    "answer": "CamGuard can detect people, vehicles, animals, objects, and other custom detections depending on your configuration."
                }

            ]

        }

    },
    warehouseMonitoring: {

        hero: {
            title: "AI Warehouse Monitoring with Smart Camera Detection",
            subtitle: "CamGuard analyzes warehouse cameras in real time to detect people, vehicles, forklifts and unusual activity instantly.",
            primaryCTA: "Start Monitoring",
            secondaryCTA: "See How It Works",

            points: {
                security: "Detect unauthorized access",
                operations: "Monitor warehouse operations",
                alerts: "Instant activity alerts"
            }
        },

        problems: {
            title: "Warehouse Security and Operational Challenges",
            subtitle: "Warehouses operate 24/7 and often cover large areas. Monitoring them manually is inefficient and costly.",

            items: {
                theft: {
                    title: "Inventory Theft",
                    description: "Goods and materials can disappear without immediate detection."
                },

                unauthorized: {
                    title: "Unauthorized Access",
                    description: "Employees or external individuals may enter restricted areas."
                },

                accidents: {
                    title: "Safety Risks",
                    description: "Forklifts and heavy equipment create safety risks if not monitored."
                },

                blindSpots: {
                    title: "Camera Blind Spots",
                    description: "Large warehouse spaces make manual monitoring difficult."
                }
            }
        },

        detectionTypes: {
            title: "AI Detection for Warehouse Monitoring",
            subtitle: "CamGuard can detect people, vehicles, forklifts, animals and unusual movement patterns in warehouse environments.",

            categories: {
                people: {
                    title: "People Detection",
                    description: "Detect workers or intruders entering restricted zones."
                },

                forklifts: {
                    title: "Forklift Detection",
                    description: "Track forklift movement and activity inside the warehouse."
                },

                vehicles: {
                    title: "Vehicle Detection",
                    description: "Monitor delivery trucks and vehicles in loading areas."
                },

                animals: {
                    title: "Animal Detection",
                    description: "Detect animals entering storage facilities."
                }
            }
        },

        howItWorks: {
            title: "How Warehouse Monitoring Works",
            subtitle: "CamGuard connects to your existing cameras and analyzes video feeds using AI.",

            steps: {
                connect: {
                    title: "Connect Cameras",
                    description: "Link your warehouse security cameras to CamGuard."
                },

                analyze: {
                    title: "AI Video Analysis",
                    description: "Our system analyzes the video stream continuously."
                },

                detect: {
                    title: "Object Detection",
                    description: "People, vehicles and forklifts are detected instantly."
                },

                alert: {
                    title: "Receive Alerts",
                    description: "Get notified immediately when activity occurs."
                }
            }
        },

        benefits: {
            title: "Benefits of AI Warehouse Monitoring",
            subtitle: "Improve security, safety and operational visibility.",

            items: {
                security: {
                    title: "Stronger Security",
                    description: "Detect intrusions and suspicious activity immediately."
                },

                safety: {
                    title: "Improved Safety",
                    description: "Monitor forklift movement and prevent accidents."
                },

                operations: {
                    title: "Operational Visibility",
                    description: "Understand how your warehouse operates in real time."
                },

                automation: {
                    title: "Automated Monitoring",
                    description: "Reduce the need for constant manual camera watching."
                }
            }
        },

        useCases: {
            title: "Warehouse Monitoring Use Cases",

            items: {
                intrusion: {
                    title: "Detect Intruders",
                    description: "Get alerts when someone enters the warehouse after hours."
                },

                forklift: {
                    title: "Forklift Monitoring",
                    description: "Track forklift activity and movement."
                },

                loading: {
                    title: "Loading Dock Monitoring",
                    description: "Monitor deliveries and loading operations."
                },

                restricted: {
                    title: "Restricted Area Monitoring",
                    description: "Detect when people enter sensitive storage areas."
                }
            }
        },

        cta: {
            title: "Start Monitoring Your Warehouse with AI",
            subtitle: "Connect your warehouse cameras and receive instant alerts when activity is detected.",
            button: "Start Monitoring"
        },

        faq: {
            title: "Warehouse Monitoring FAQ",

            items: [
                {
                    question: "Can CamGuard monitor large warehouses?",
                    answer: "Yes. CamGuard works with multiple cameras and can monitor large warehouse environments."
                },

                {
                    question: "Can CamGuard detect forklifts?",
                    answer: "Yes. Our AI models can detect forklifts, vehicles and other objects commonly found in warehouses."
                },

                {
                    question: "Do I need new cameras?",
                    answer: "No. CamGuard works with most existing IP security cameras."
                }
            ]
        }
    },
    farmMonitoring: {

        hero: {
            title: "AI Monitoring for Farms and Outdoor Properties",
            subtitle: "Detect people, vehicles, animals and equipment across large outdoor areas using your existing cameras.",
            primaryCTA: "Start Monitoring",
            secondaryCTA: "See How It Works"
        },

        detectionTypes: {
            title: "What Can Be Detected on Farms",
            subtitle: "CamGuard AI can detect a wide range of objects across outdoor farm environments.",

            people: {
                title: "People",
                description: "Detect workers, visitors or intruders entering your property."
            },

            vehicles: {
                title: "Vehicles",
                description: "Track tractors, trucks and unknown vehicles entering farm areas."
            },

            animals: {
                title: "Animals",
                description: "Monitor livestock movement or detect wild animals near your farm."
            },

            equipment: {
                title: "Equipment",
                description: "Monitor tractors, tools and valuable agricultural equipment."
            },

            packages: {
                title: "Deliveries",
                description: "Detect deliveries and activity at farm entrances."
            },

            custom: {
                title: "Custom Objects",
                description: "Train AI detection for specific farm equipment or assets."
            }
        },

        problems: {
            title: "Challenges of Monitoring Farms",
            subtitle: "Large outdoor environments make traditional security difficult.",

            largeAreas: {
                title: "Large Areas",
                description: "Farms often cover large areas that are difficult to monitor continuously."
            },

            nightActivity: {
                title: "Night Activity",
                description: "Many intrusions and thefts happen during nighttime."
            },

            wildAnimals: {
                title: "Wild Animals",
                description: "Detect predators or unwanted animals entering livestock areas."
            },

            equipmentTheft: {
                title: "Equipment Theft",
                description: "Farm equipment is expensive and frequently targeted by thieves."
            }
        },

        howItWorks: {
            title: "How Farm Monitoring Works",
            subtitle: "CamGuard analyzes your camera feeds and detects important events instantly.",

            steps: {

                connect: {
                    step: "Step 1",
                    title: "Connect Cameras",
                    description: "Connect your existing outdoor cameras to the CamGuard platform."
                },

                analyze: {
                    step: "Step 2",
                    title: "AI Analysis",
                    description: "Our AI analyzes every frame from your camera feeds."
                },

                detect: {
                    step: "Step 3",
                    title: "Object Detection",
                    description: "People, vehicles, animals and equipment are detected automatically."
                },

                alert: {
                    step: "Step 4",
                    title: "Instant Alerts",
                    description: "Receive alerts immediately when important events happen."
                }

            }
        },

        useCases: {
            title: "Farm Monitoring Use Cases",
            subtitle: "CamGuard helps protect farms, livestock and agricultural equipment.",

            perimeter: {
                title: "Perimeter Monitoring",
                description: "Detect intruders entering farm property or restricted areas."
            },

            livestock: {
                title: "Livestock Monitoring",
                description: "Monitor livestock areas and detect unusual animal activity."
            },

            equipment: {
                title: "Equipment Yard Security",
                description: "Protect tractors and expensive machinery stored outdoors."
            },

            remote: {
                title: "Remote Farm Monitoring",
                description: "Monitor multiple farms and outdoor locations from a single dashboard."
            }
        },

        benefits: {
            title: "Benefits for Farm Owners",
            subtitle: "AI monitoring helps farms operate more securely and efficiently.",

            reduceTheft: {
                title: "Reduce Theft",
                description: "Detect suspicious activity before theft occurs."
            },

            protectLivestock: {
                title: "Protect Livestock",
                description: "Monitor animals and detect predators or unusual movement."
            },

            saveTime: {
                title: "Save Time",
                description: "Stop watching camera feeds manually."
            },

            monitoring: {
                title: "24/7 Monitoring",
                description: "AI monitors your farm continuously day and night."
            }
        },

        cta: {
            title: "Start Monitoring Your Farm with AI",
            subtitle: "Protect livestock, equipment and land with intelligent camera monitoring.",
            button: "Start Monitoring"
        }

    },
    // Add this block inside the `const en = { ... }` object in your en.ts file
// The "as const" on ctaStyle values ensures TypeScript infers "outline" | "solid"
// instead of plain string

    pricing: {
        badge: "Simple, transparent pricing",
        heroTitle: "Plans that",
        heroTitleItalic: "protect",
        heroTitleEnd: "every space.",
        heroSubtitle:
            "Start free, scale when you need to. No hidden fees, no complex contracts — just smart camera monitoring.",
        billingMonthly: "Monthly",
        billingAnnual: "Annual",
        billingSave: "Save 25%",
        billingPeriodMonthly: "per month",
        billingPeriodAnnual: "per month, billed annually",
        pricingComingSoon: "Pricing coming soon",

        plans: [
            {
                key: "starter",
                name: "Starter",
                monthlyPrice: 0,
                annualPrice: 0,
                freeLabel: "Free forever",
                desc: "Monitor one space with essential detection. Perfect for getting started.",
                cta: "Get started free",
                ctaStyle: "outline" as const,
                featured: false,
                featuresLabel: "Includes",
                features: [
                    { text: "1 camera feed", muted: false },
                    { text: "Real-time person detection", muted: false },
                    { text: "Mobile push notifications", muted: false },
                    { text: "24-hour event history", muted: false },
                    { text: "No cloud recording", muted: true },
                    { text: "No multi-zone alerts", muted: true },
                ],
            },
            {
                key: "pro",
                name: "Pro",
                monthlyPrice: null,
                annualPrice: null,
                freeLabel: null,
                desc: "Everything you need for a home or small office — with cloud backup and smart zones.",
                cta: "Start 14-day free trial",
                ctaStyle: "solid" as const,
                featured: true,
                featuresLabel: "Everything in Starter, plus",
                features: [
                    { text: "Up to 5 camera feeds", muted: false },
                    { text: "30-day cloud recording", muted: false },
                    { text: "Custom detection zones", muted: false },
                    { text: "Email + SMS alerts", muted: false },
                    { text: "Night mode detection", muted: false },
                    { text: "Priority support (24h)", muted: false },
                ],
            },
            {
                key: "business",
                name: "Business",
                monthlyPrice: null,
                annualPrice: null,
                freeLabel: null,
                desc: "Designed for multi-site teams, property managers, and growing businesses.",
                cta: "Get started",
                ctaStyle: "outline" as const,
                featured: false,
                featuresLabel: "Everything in Pro, plus",
                features: [
                    { text: "Unlimited camera feeds", muted: false },
                    { text: "90-day cloud recording", muted: false },
                    { text: "Multi-site dashboard", muted: false },
                    { text: "Team access & roles", muted: false },
                    { text: "API & webhook access", muted: false },
                    { text: "Dedicated account manager", muted: false },
                ],
            },
        ],

        popularBadge: "Most popular",

        enterprise: {
            title: "Need something larger? Let's talk Enterprise.",
            desc: "Custom camera limits, on-premise deployment, SSO, SLA guarantees, and white-glove onboarding for large-scale operations.",
            cta: "Contact sales",
        },

        trustedLabel: "Trusted by teams at",
        trustedCompanies: ["Nexacore", "UrbanVault", "Brindis Group", "SafeHaven PM", "Fieldstone Co"],

        faqTitle: "Common questions",
        faqSubtitle: "Everything you need to know before choosing a plan.",
        faqs: [
            {
                q: "Can I change my plan at any time?",
                a: "Yes — you can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
            },
            {
                q: "Do I need new hardware to use CamGuard?",
                a: "No. CamGuard works with any existing IP camera via its RTSP stream or access link — no proprietary hardware required.",
            },
            {
                q: "Is my footage stored securely?",
                a: "All recordings are encrypted at rest and in transit. You retain full ownership and control of your footage at all times. CamGuard never shares or sells your data.",
            },
            {
                q: "What happens after the free trial ends?",
                a: "After 14 days, you're automatically moved to the free Starter plan — no charges, no credit card required upfront. You can upgrade whenever you're ready.",
            },
            {
                q: "Is there a refund policy?",
                a: "Yes. If you're not satisfied within the first 30 days of a paid plan, contact support for a full refund — no questions asked.",
            },
        ],

        ctaTitle: "Start protecting your space today.",
        ctaSubtitle: "No hardware. No setup fees. Ready in minutes.",
        ctaPrimary: "Get started free",
        ctaSecondary: "Download the app",
    },
    // Add this block inside the `const en = { ... }` object in your en.ts file

    download: {
        badge: "Available on mobile",
        heroTitle: "Monitor your cameras",
        heroTitleItalic: "anywhere,",
        heroTitleEnd: "anytime.",
        heroSubtitle:
            "Download the CamGuard app and get instant alerts, live camera feeds, and AI detection right on your phone.",

        appStore: {
            label: "Download on the",
            name: "App Store",
        },
        playStore: {
            label: "Get it on",
            name: "Google Play",
        },

        appStoreUrl: "https://apps.apple.com",
        playStoreUrl: "https://play.google.com",

        ratingLabel: "4.8 rating",
        reviewsLabel: "2,400+ reviews",
        freeLabel: "Free to download",

        featuresTitle: "Everything in your pocket",
        featuresSubtitle:
            "The CamGuard app puts full control of your security system in your hand.",
        features: [
            {
                icon: "bell",
                title: "Instant Alerts",
                desc: "Get notified the moment a person is detected on any of your cameras.",
            },
            {
                icon: "video",
                title: "Live Camera Feed",
                desc: "Watch live footage from all your connected cameras in real time.",
            },
            {
                icon: "moon",
                title: "Night Mode Detection",
                desc: "AI detection works around the clock, even in low-light conditions.",
            },
            {
                icon: "history",
                title: "Event History",
                desc: "Review past detections with timestamps and snapshots at any time.",
            },
            {
                icon: "shield",
                title: "Privacy First",
                desc: "Your footage is encrypted and processed securely. You stay in control.",
            },
            {
                icon: "sliders",
                title: "Custom Zones",
                desc: "Define exactly which areas of your camera feed should trigger alerts.",
            },
        ],

        stepsTitle: "Up and running in minutes",
        stepsSubtitle: "No new hardware. No complex setup. Just download and connect.",
        steps: [
            {
                number: "01",
                title: "Download the app",
                desc: "Install CamGuard from the App Store or Google Play for free.",
            },
            {
                number: "02",
                title: "Add your camera",
                desc: "Connect your existing IP camera using its access link or RTSP stream.",
            },
            {
                number: "03",
                title: "Start monitoring",
                desc: "AI detection activates immediately. Receive alerts when a person is detected.",
            },
        ],

        compatibilityTitle: "Works with your existing cameras",
        compatibilitySubtitle:
            "CamGuard integrates with most popular IP camera brands and standards.",
        compatibleBrands: ["Hikvision", "Dahua", "Reolink", "ONVIF", "RTSP", "Axis"],

        ctaTitle: "Ready to monitor smarter?",
        ctaSubtitle: "Download free today. No credit card required.",
        ctaAppStore: "App Store",
        ctaPlayStore: "Google Play",
    },


}

export default en;
