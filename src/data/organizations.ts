export interface Organization {
  name: string;
  description: string;
  logo: string;
  logoAlt: string;
  logoClass: string;
  url: string;
}

export const organizations: Organization[] = [
  {
    name: "ColorStack",
    description: "ColorStack Member",
    logo: "/static/imgs/logos/bw/colorstack.png",
    logoAlt: "ColorStack logo",
    logoClass: "colorstack",
    url: "https://www.colorstack.org/"
  },
  {
    name: "Rewriting the Code",
    description: "RTC Member",
    logo: "/static/imgs/logos/bw/rtc.png",
    logoAlt: "RewritingTheCode (RTC) logo",
    logoClass: "rtc",
    url: "https://rewritingthecode.org/"
  }
];
