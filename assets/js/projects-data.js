const PROJECTS = {
  intelligere: {
    id: "intelligere",
    title: "Intelligere",
    image: "assets/img/portfolio/intelligere1.png",
    shortdescription: "Free Invoice Creation and management",
    description:
      "Intelligere is a perfect App for free Invoicing and to seamlessly manage Accounts payable / Receivables info. Designed in India but made for the world to cater to small or large businesses, with extremely easy-to-use features to create invoice in seconds. Create e-invoice and e-way bill with single click and share it effortlessly. Share your voucher data instantly with connected ERP and manage your inventory.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.app.intelligere",
    appstore: "https://apps.apple.com/in/app/intelligere/id6742895075",
    tags: [
      "Invoice Management",
      "Accounts Payable & Receivable",
      "Business Automation",
    ],
  },

  allevents: {
    id: "allevents",
    title: "AllEvents",
    image: "assets/img/portfolio/ae1.png",
    shortdescription: "Discover Events nearby & Things to do",
    description:
      "Allevents is an event discovery mobile application enabling users to explore thousands of events across multiple cities using location and interest-based filtering. The platform aggregates and normalizes event data from multiple sources, supporting large datasets with fast search, categorization, and real-time updates. Designed to scale, the app emphasizes performance optimization, efficient API consumption, and a smooth browsing experience under high data volume.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.amitech.allevents",
    appstore: "",

    tags: [
      "Event Discovery Platform",
      "Personalized Recommendations",
      "500k+ downloads",
    ],
  },

  payx: {
    id: "payx",
    title: "PayX",
    image: "assets/img/portfolio/.png",
    description: "Short project description.",
    tags: ["Digital Payments Platform", "Real-Time Payment Processing"],
    shortdescription: "Payments & Transaction Platform",
    playstore:
      "https://play.google.com/store/apps/details?id=com.worldtradex.payx",
    appstore: "",
    description:
      "PayX is a digital payments platform that functions both as a standalone consumer app and an API-driven payment service. It enables users to send and receive payments while also allowing external applications to initiate payment requests and track transaction status in real time. Integrated with banks and payment gateways, PayX ensures reliable payment processing, instant status updates, and seamless buyer–seller transaction flows.",
  },

  eventsmanager: {
    id: "allevents_manager",
    title: "AllEvents Manager",
    image: "assets/img/portfolio/e-manager.png",
    shortdescription: "Event Management & Check-In App",
    description:
      "Allevents Manager is an event management mobile application designed for organizers to manage on-ground event operations efficiently. The app supports fast attendee check-ins with full offline capability, automatically syncing data once internet connectivity is restored. Event Organizers can list events, monitor real-time attendance analytics, and manage event data from a single platform, ensuring smooth execution even in low-connectivity environments.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.amitech.alleventsorg",
    appstore: "",
    tags: [
      "Event Check-In System",
      "Offline-First Mobile App",
      "Analytics Dashboard",
    ],
  },

  gox: {
    id: "go_homes",
    title: "Go2Homes",
    image: "assets/img/portfolio/go2home.png",
    shortdescription: "Your Smart Property Search Companion",
    description:
      "Go2Homes is a real estate application that enables users to search nearby properties for rent or purchase with powerful location-based filtering. The platform allows brokers, sellers, and property owners to register and list properties with detailed information, images, and video walkthroughs. Designed for ease of use and discovery, Go2Homes delivers fast search, rich property data, and a seamless browsing experience for buyers and renters.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.rogers.go2homes",
    appstore: "",
    tags: [
      "Real Estate Marketplace",
      "Personalized Property Search",
      // "Media-Rich Property Listings",
    ],
  },

  // gox: {
  //   id: "wit",
  //   title: "Wash in Time",
  //   image: "assets/img/portfolio/wit.png",
  //   description: "Short project description.",
  //   tags: [],
  // },
  // gox: {
  //   id: "easy_advicing",
  //   title: "Easy Advicing",
  //   image: "assets/img/portfolio/ea2.png",
  //   description: "Short project description.",
  //   tags: [],
  // },
  // gox: {
  //   id: "easy_advicing_cons",
  //   title: "Easy Advicing - Consultant",
  //   image: "assets/img/portfolio/ea-c1.png",
  //   description: "Short project description.",
  //   tags: [],
  // },
  //   gox: {
  //     id: "gox",
  //     title: "GoX",
  //     image: "assets/img/portfolio/intelligere1.png",
  //     description: "Short project description.",
  //     tags: [],
  //   },
  //   gox: {
  //     id: "gox",
  //     title: "GoX",
  //     image: "assets/img/portfolio/intelligere1.png",
  //     description: "Short project description.",
  //     tags: [],
  //   },
  //   gox: {
  //     id: "gox",
  //     title: "GoX",
  //     image: "assets/img/portfolio/intelligere1.png",
  //     description: "Short project description.",
  //     tags: [],
  //   },
  //   gox: {
  //     id: "gox",
  //     title: "GoX",
  //     image: "assets/img/portfolio/intelligere1.png",
  //     description: "Short project description.",
  //     tags: [],
  //   },
  //   gox: {
  //     id: "gox",
  //     title: "GoX",
  //     image: "assets/img/portfolio/intelligere1.png",
  //     description: "Short project description.",
  //     tags: [],
  //   },

  //   gohomes: {
  //     id: "go_homes",
  //     title: "Go2Homes",
  //     image: "assets/img/portfolio/intelligere1.png",
  //     subtitle:
  //       "Happy Staff is a task and incentive management app that helps employers assign goal-based tasks and track staff performance through a structured, time-bound workflow.",
  //     tags: ["Tooling", "Performance", "UI/UX"],
  //     playStoreUrl: "https://play.google.com/store",
  //     heroImages: [
  //       "assets/img/happy_staff_1.png",
  //       "assets/img/happy_staff_2.png",
  //       "assets/img/happy_staff_3.png",
  //       "assets/img/happy_staff_4.png",
  //     ],

  //     about: `
  // Happy Staff is a productivity and incentive-based task management platform built for employers and staff teams.
  // Employers can assign time-bound tasks with incentives, attach rich media files (images, videos, audio, and PDFs),
  // and track task progress in real time.

  // Staff members complete tasks within defined deadlines to earn incentives and communicate updates directly inside
  // each task. The app provides detailed work history and performance analytics, enabling employers to measure staff
  // efficiency and overall productivity.

  // This application was developed as a freelance project for Social Seller Academy with a strong focus on usability,
  // scalability, and clear role-based experiences.
  //     `,

  //     features: [
  //       {
  //         title: "Task Management",
  //         description:
  //           "Employers can assign tasks to staff members and track their progress.",
  //       },
  //       {
  //         title: "Appointment Management",
  //         description:
  //           "Staff members can schedule and manage their appointments.",
  //       },
  //       {
  //         title: "Notification",
  //         description:
  //           "Staff members receive notifications for appointments and tasks.",
  //       },
  //       {
  //         title: "Cross-Platform Support",
  //         description:
  //           "Built with Flutter for a unified experience on Android and iOS.",
  //       },
  //     ],
  //   },
};
