export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Departments",
    // link: "/services",

    subRoutes: [
      {
        name: "Managements",
        link: "/managements",
      },
      {
        name: "Consultant",
        link: "/dr-in-hospital",
      },

      {
        name: "Counsellor",
        link: "/counsellor",
      },
      {
        name: "Resident Medical Officer",
        link: "/rmo",
      },
      {
        name: "Nurses",
        link: "/nurses",
      },
      {
        name: "Technician",
        link: "/technician",
      },
      {
        name: "Supportive Staff",
        link: "/supportive-staff",
      },
    ],
  },

  {
    name: "Specialities",
    // link: "/products",

    subRoutes: [
      {
        name: "Pulmonology",
        link: "/pulmonology",
      },

      {
        name: "ENT",
        link: "/ent",
      },
      {
        name: "Surgery",
        link: "/surgery",
      },
      {
        name: "Internal Medicins",
        link: "/internal-medicins",
      },
      {
        name: "Cardiology",
        link: "/cardiology",
      },
      {
        name: "Neurology",
        link: "/neurology",
      },
      {
        name: "Gynecology",
        link: "/gynecology",
      },
      {
        name: "Orthopedics",
        link: "/orthopedics",
      },
      {
        name: "Emergency Care",
        link: "/emergency-care",
      },
      {
        name: "Pharmacy",
        link: "/pharmacy",
      },
      {
        name: "View all Specialities",
        link: "/viewall-specialities",
      },
    ],
  },

  {
    name: "Services",
    // link: "/services",

    subRoutes: [
      {
        name: "Insurance TPA",
        link: "/insurance-tpa",
      },
      {
        name: "Ayushman",
        link: "/ayushman",
      },
      {
        name: "Radiology",
        link: "/radiology",
      },
      {
        name: "Ambulance",
        link: "/ambulance-service",
      },
      {
        name: "Evan Lab",
        link: "/evan-lab",
      },
    ],
  },

  {
    name: "Video Gallery",
    link: "/video-gallery",
  },
  {
    name: "Photo Gallery",
    link: "/gallery",
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
];
