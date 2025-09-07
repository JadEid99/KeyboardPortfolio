const config = {
  title: "Jad Eid | Software Engineer",
  description: {
    long: "Explore the portfolio of Jad, a software engineer specializing in software development, full-stack development, DevOps, Cloud Architecture, and project management. Reach out to me for any software development needs!", 
    short:
      "Discover the portfolio of Jad, a software engineer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Jad",
    "portfolio",
    "Software Engineer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Cloud Architect",
    "Project Manager",
  ],
  author: "JAD EID",
  email: "jad.n.eid@gmail.com",
  site: "https://jad-eid.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/jadeid99/",
    github: "https://github.com/JadEid99",
  },
};
export { config };
