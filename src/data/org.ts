/**
 * Canonical Organization Data — Single Source of Truth
 * 
 * All organization facts are defined here and imported everywhere.
 * Never hard-code these values in component files.
 * 
 * @see Section 3 of the master specification
 */

export const orgData = {
  legalName: "School For All Welfare Organization",
  shortName: "SFA",
  type: "Non-profit / welfare organization, registered in Pakistan",
  founded: "2020-10-01",
  foundedDisplay: "October 1, 2020",
  headOffice: {
    label: "Central Office",
    city: "Turbat",
    district: "Kech",
    province: "Balochistan",
    country: "Pakistan",
    full: "Central Office, Turbat, Kech, Balochistan, Pakistan",
  },
  contact: {
    phone: "+92 322 2773334",
    phoneLocal: "0322 2773334",
    phoneTel: "+923222773334",
    whatsapp: "+923222773334",
    email: "Sfawelfareorganization@gmail.com",
  },
  social: {
    instagram: {
      url: "https://www.instagram.com/school_for_all_welfare_org",
      label: "Instagram",
      handle: "@school_for_all_welfare_org",
    },
    twitter: {
      url: "https://x.com/School_ForAll",
      label: "X (Twitter)",
      handle: "@School_ForAll",
    },
    youtube: {
      url: "https://www.youtube.com/@schoolforallwelfareorganiz2602",
      label: "YouTube",
      handle: "@schoolforallwelfareorganiz2602",
    },
    blog: {
      url: "https://sfadailyarticles.blogspot.com",
      label: "Blog",
      handle: "sfadailyarticles.blogspot.com",
    },
  },
  flagship: {
    name: "Zant Academy",
    location: "Raeesabad",
    full: "Zant Academy, Raeesabad",
  },
  recurringProgramme: "Student of the Week",
  mission:
    "Expanding educational access, empowering communities, supporting local educational initiatives",
  focusThemes: [
    "Community development",
    "Recognition events",
    "Educational initiatives",
    "Cultural legacy preservation",
  ],
  heroHeadline: "Empowering Communities Through Education in Balochistan",
  heroSubheadline:
    "Founded on October 1, 2020, dedicated to ensuring quality education for every child in Turbat and beyond.",
  siteUrl: "https://schoolforall.org.pk",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Educational Programs", href: "/programs" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;

export type OrgData = typeof orgData;
