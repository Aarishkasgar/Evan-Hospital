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
    name: "Our Doctor",
    // link: "/services",

    subRoutes: [
      {
        name: "Dr Visiting",
        link: "/dr-visiting",
      },
      {
        name: "Dr In Hospital",
        link: "/dr-in-hospital",
      },
    ],
  },

  {
    name: "All Departments",
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
    ],
  },

  {
    name: "Specialities",
    link: "/specialities",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
];
