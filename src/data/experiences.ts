export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  logo: string;
  logoAlt: string;
  logoClass?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-12",
    company: "Typeface",
    position: "Product Security Intern",
    duration: "September 2025 - Present",
    logo: "/static/imgs/logos/bw/typeface.png",
    logoAlt: "TypefaceAI logo",
    logoClass: "typeface"
  },
  {
    id: "exp-11",
    company: "Netflix",
    position: "Software Engineering Intern",
    duration: "May 2025 - August 2025",
    logo: "/static/imgs/logos/bw/netflix.png",
    logoAlt: "Netflix logo",
    logoClass: "netflix"
  },
  {
    id: "exp-10",
    company: "NU: Khoury College",
    position: "TA - Computer Systems",
    duration: "January 2025 - April 2025",
    logo: "/static/imgs/logos/bw/northeastern.png",
    logoAlt: "Northeastern University logo",
    logoClass: "northeastern"
  },
  {
    id: "exp-9",
    company: "HackBeanPot",
    position: "Software Engineer",
    duration: "April 2023 - April 2025",
    logo: "/static/imgs/logos/bw/hbp.png",
    logoAlt: "HackBeanPot logo",
    logoClass: "hbp"
  },
  {
    id: "exp-8",
    company: "RepRally",
    position: "Software Engineering Co-op",
    duration: "September 2024 - December 2024",
    logo: "/static/imgs/logos/bw/reprally.png",
    logoAlt: "RepRally logo",
    logoClass: "reprally"
  },
  {
    id: "exp-7",
    company: "Netflix x Formation",
    position: "Software Engineering Fellow",
    duration: "May 2024 - December 2024",
    logo: "/static/imgs/logos/bw/nf.png",
    logoAlt: "Formation logo",
    logoClass: "nf"
  },
  {
    id: "exp-6",
    company: "John Deere Financial",
    position: "Cybersecurity Intern",
    duration: "June 2024 - August 2024",
    logo: "/static/imgs/logos/bw/johndeere.png",
    logoAlt: "John Deere logo",
    logoClass: "johndeere"
  },
  {
    id: "exp-5",
    company: "Recorded Future",
    position: "Data Science Intern",
    duration: "January 2024 - May 2024",
    logo: "/static/imgs/logos/bw/recordedfuture.png",
    logoAlt: "Recorded Future logo",
    logoClass: "recordedfuture"
  },
  {
    id: "exp-4",
    company: "NU: Khoury College",
    position: "TA - Fund. of CompSci II",
    duration: "September 2023 - December 2023",
    logo: "/static/imgs/logos/bw/northeastern.png",
    logoAlt: "Northeastern University logo",
    logoClass: "northeastern"
  },
  {
    id: "exp-3",
    company: "Recorded Future",
    position: "Data Science Intern",
    duration: "June 2023 - August 2023",
    logo: "/static/imgs/logos/bw/recordedfuture.png",
    logoAlt: "Recorded Future logo",
    logoClass: "recordedfuture"
  },
  {
    id: "exp-2",
    company: "NU: Khoury College",
    position: "TA - Fund. of CompSci I",
    duration: "January 2023 - June 2023",
    logo: "/static/imgs/logos/bw/northeastern.png",
    logoAlt: "Northeastern University logo",
    logoClass: "northeastern"
  },
  {
    id: "exp-1",
    company: "StarApple Analytics",
    position: "Data Analyst Intern",
    duration: "December 2021 - August 2022",
    logo: "/static/imgs/logos/bw/starapple.png",
    logoAlt: "StarApple Analytics logo",
    logoClass: "starapple"
  }
];
