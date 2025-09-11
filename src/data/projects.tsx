import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiAndroid,
  SiApple,
  SiAmazonaws,
  SiAnsible,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGitlab,
  SiGooglecloud,
  SiJavascript,
  SiKeycloak,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiOpencv,
  SiPostgresql,
  SiPrisma,
  SiPrometheus,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbRobot, TbCube, TbLock } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  const isLinkedIn = repo?.includes('linkedin.com');
  const linkLabel = isLinkedIn ? 'LinkedIn' : 'Github';
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            {linkLabel}
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws />,
  },
  gcp: {
    title: "GCP",
    bg: "black",
    fg: "white",
    icon: <SiGooglecloud />,
  },
  git: {
    title: "Git",
    bg: "black",
    fg: "white",
    icon: <SiGit />,
  },
  ios: {
    title: "iOS",
    bg: "black",
    fg: "white",
    icon: <SiApple />,
  },
  android: {
    title: "Android",
    bg: "black",
    fg: "white",
    icon: <SiAndroid />,
  },
  linux: {
    title: "Linux",
    bg: "black",
    fg: "white",
    icon: <SiLinux />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  fanuc: {
    title: "FANUC",
    bg: "black",
    fg: "white",
    icon: <TbRobot />,
  },
  solidworks: {
    title: "SolidWorks",
    bg: "black",
    fg: "white",
    icon: <TbCube />,
  },
  bash: {
    title: "Bash",
    bg: "black",
    fg: "white",
    icon: "B",
  },
  ansible: {
    title: "Ansible",
    bg: "black",
    fg: "white",
    icon: <SiAnsible />,
  },
  vault: {
    title: "Vault",
    bg: "black",
    fg: "white",
    icon: <Lock />,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
  gitlab: {
    title: "GitLab CI/CD",
    bg: "black",
    fg: "white",
    icon: <SiGitlab />,
  },
  artifactory: {
    title: "Artifactory",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  openshift: {
    title: "OpenShift",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform />,
  },
  keycloak: {
    title: "Keycloak",
    bg: "black",
    fg: "white",
    icon: <SiKeycloak />,
  },
  openldap: {
    title: "OpenLDAP",
    bg: "black",
    fg: "white",
    icon: "LDAP",
  },
  privacyidea: {
    title: "PrivacyIDEA",
    bg: "black",
    fg: "white",
    icon: "MFA",
  },
  prometheus: {
    title: "Prometheus",
    bg: "black",
    fg: "white",
    icon: <SiPrometheus />,
  },
  ubuntu: {
    title: "Ubuntu",
    bg: "black",
    fg: "white",
    icon: <SiLinux />,
  },
  universalRobots: {
    title: "Universal Robots",
    bg: "black",
    fg: "white",
    icon: <TbRobot />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "evolve-consulting",
    category: "Technical consulting",
    title: "Evolve Consulting",
    src: "/assets/projects-screenshots/evolve/evolve.png",
    screenshots: ["evolve.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.gcp,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ios,
        PROJECT_SKILLS.android,
      ],
      backend: [],
    },
    live: "https://www.evo-devs.com",
    github: "https://www.linkedin.com/company/evolve-consulting-devs/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Evolve Consulting: We engineer the software backbone for startups and growing businesses.
          </TypographyP>
          <TypographyP className="font-mono ">
            We are a technical consulting partner for startups and established businesses. We provide end-to-end support to help you navigate the complexities of technology, offering services from initial technical consultations and project planning to the full development and deployment of your digital products.
          </TypographyP>
          <TypographyP className="font-mono ">
            Our goal is to serve as an outsourced helping hand, offering ongoing support and dedicated consultants to guide your business from an idea, to an early-stage MVP, to a scalable, fully-realized platform.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Our Services</TypographyH3>
          <p className="font-mono mb-2">
            From concept to deployment, we provide comprehensive technical solutions for your business needs.
          </p>
          <div className="flex justify-center">
            <Image
              src={`${BASE_PATH}/evolve/evolve.png`}
              alt="Evolve Consulting"
              width={800}
              height={600}
              className="w-full max-w-4xl rounded-lg h-auto"
            />
          </div>
        </div>
      );
    },
  },
  {
    id: "sewts-velum",
    category: "Industrial Automation",
    title: "sewts.VELUM",
    src: "/assets/projects-screenshots/sewts/sewts_velum.jpg",
    screenshots: ["sewts_velum2.webp"],
    live: "https://www.sewts.com/automation-solutions/sewts-velum",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.fanuc,
        PROJECT_SKILLS.solidworks,
      ],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            sewts.VELUM represents the cutting edge of industrial automation, transforming the textile handling industry with AI-driven robotic precision. As a Software Engineer at sewts, I played a pivotal role in bringing this revolutionary system from concept to production, bridging one of the last manual gaps in industrial laundry automation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">The Challenge</TypographyH3>
          <p className="font-mono mb-2">
            Industrial laundries operate in a highly automated environment, yet 30% of personnel costs are dedicated to manually feeding folding machines. VELUM addresses this critical gap by autonomously feeding towels and terrycloth into folding machines, eliminating manual labor while significantly reducing operating costs.
          </p>
          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <p className="font-mono mb-2">
            Throughout the development lifecycle, I contributed across multiple domains including robotics programming, computer vision systems, hardware integration, and solution architecture. My work encompassed FANUC robot programming, OpenCV-based textile analysis, Linux system optimization, and Docker containerization for scalable deployment.
          </p>
          <p className="font-mono mb-2">
            One of my most significant achievements was optimizing the system&apos;s performance, resulting in a <strong>40% increase in system output</strong>. This optimization involved fine-tuning robotic movements, improving computer vision algorithms for textile recognition, and streamlining the overall workflow efficiency.
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src={`${BASE_PATH}/sewts/sewts_velum2.webp`}
              alt="sewts.VELUM System"
              width={800}
              height={600}
              className="w-full max-w-4xl rounded-lg h-auto"
            />
          </div>
          <TypographyH3 className="my-4 mt-8">Technical Innovation</TypographyH3>
          <p className="font-mono mb-2">
            VELUM&apos;s AI analyzes textiles in real-time, translating complex visual data into precise robotic commands. The system handles different textile types without restrictions in color, size, or texture, achieving what was previously impossible for mechanically-driven robots. My work on the computer vision pipeline and robotic control systems was crucial to this breakthrough.
          </p>
          <p className="font-mono mb-2">
            The system processes up to 700 textiles per hour with minimal setup time, representing a paradigm shift in industrial automation. Working alongside a talented team, I helped create a solution that outperforms manual labor within 1.5 to 2.5 years, offering both immediate operational benefits and long-term cost savings for our customers.
          </p>
        </div>
      );
    },
  },
  {
    id: "deutsche-telekom-iam",
    category: "Enterprise Infrastructure",
    title: "Deutsche Telekom IAM",
    src: "/assets/projects-screenshots/IAM/IAM1.png",
    screenshots: ["dt-iam-overview.png"],
    live: "https://www.telekom.com/en",
    skills: {
      frontend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.ansible,
        PROJECT_SKILLS.vault,
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.gitlab,
        PROJECT_SKILLS.artifactory,
        PROJECT_SKILLS.openshift,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.keycloak,
        PROJECT_SKILLS.prometheus,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Spearheaded the development of Deutsche Telekom's next-generation Identity and Access Management (IAM) system as a Senior Software Developer and Architect. Worked directly with customers to ensure requirements were met while building a comprehensive, secure infrastructure that supported DT's vision.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview</TypographyH3>
          <p className="font-mono mb-2">
            The RIAM (Rebuild Identity and Access Management) project addressed Deutsche Telekom's growing security requirements and compliance standards. Previously, authentication methods were highly varied across systems, creating management complexity and security vulnerabilities. RIAM centralized and standardized security management while supporting Network Resilience goals.
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src={`${BASE_PATH}/IAM/IAM2.png`}
              alt="Deutsche Telekom IAM Architecture"
              width={800}
              height={600}
              className="w-full max-w-4xl rounded-lg h-auto"
            />
          </div>
          <TypographyH3 className="my-4 mt-8">Key Components</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Access Layer Sub-project:</strong> Implemented a central authentication system with MyCard certificates, Single Sign-On (SSO) via Keycloak, and Multi-Factor Authentication (MFA) for secure access to applications and servers within the DCN network.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Leadership</TypographyH3>
          <p className="font-mono mb-2">
            As a senior developer and architect, I led the technical implementation using modern DevOps practices including Kubernetes orchestration, Terraform infrastructure-as-code, GitLab CI/CD pipelines, and comprehensive monitoring with Prometheus. The system operated entirely within DT Technik infrastructure, ensuring independence from external dependencies while meeting the highest security standards.
          </p>
          <p className="font-mono mb-2">
            This project represented a fundamental modernization of Deutsche Telekom's IAM system, significantly improving efficiency and security of access controls while supporting service continuity essential for premier customer experience.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://nareshkhatri.vercel.app",
    github:"https://github.com/Naresh-Khatri/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Anonymous chat",
    title: "GhostChat",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://ghostchat.vercel.app",
    github:"https://github.com/Naresh-Khatri/GhostChat",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ghostchat is your go-to spot for sending anonymous messages without
            leaving a trace. Powered by Supabase, it&apos;s all about keeping things
            low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
            or just having some fun, Ghostchat ensures your identity stays
            hidden, while your voice is heard. Say what you want, without the
            worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "sortbot-bmw",
    category: "Industrial Robotics",
    title: "SortBot - BMW",
    src: "/assets/projects-screenshots/BMW/bmw_sortbot1.jpg",
    screenshots: ["bmw_sortbot1.jpg"],
    live: "https://www.bmw.com",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.ubuntu,
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.universalRobots,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            SortBot represented a breakthrough in automotive manufacturing automation, revolutionizing BMW's vehicle production process across multiple manufacturing plants in Germany. As a Software Engineer, I played a crucial role in finalizing this robotics automation system and successfully transitioning it from development to production deployment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <div className="flex justify-center mt-8">
            <Image
              src={`${BASE_PATH}/BMW/bmw_sortbot2.png`}
              alt="SortBot System at BMW Manufacturing Plant"
              width={800}
              height={600}
              className="w-full max-w-4xl rounded-lg h-auto"
            />
          </div>
          <TypographyH3 className="my-4 mt-8">System Overview</TypographyH3>
          <p className="font-mono mb-2">
            SortBot was designed to automate the handling of KLTs (Kleinladungsträger - small load carriers) containing essential vehicle parts throughout BMW's manufacturing workflow. This sophisticated robotics system significantly enhanced production efficiency while reducing manual labor and potential human errors in the critical parts handling process.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Architecture</TypographyH3>
          <p className="font-mono mb-2">
            The system integrated advanced UR10 robotic arms with a comprehensive computer vision pipeline built using Python and OpenCV. This combination enabled precise object recognition, positioning, and manipulation of various KLT types and configurations. The entire system was containerized using Docker and deployed on Ubuntu Linux infrastructure for optimal performance and scalability.
          </p>
          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <p className="font-mono mb-2">
            As a Software Engineer on this project, I was responsible for putting the finishing touches on the SortBot system and ensuring its successful production deployment. My work encompassed final system integration, performance optimization, and comprehensive testing to guarantee reliability in real-world manufacturing environments.
          </p>
          <p className="font-mono mb-2">
            I played a pivotal role in transitioning SortBot from development to production, coordinating deployment across several BMW manufacturing plants throughout Germany. This involved meticulous system validation, operator training, and establishing monitoring protocols to ensure seamless operation in high-volume production settings.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact & Results</TypographyH3>
          <p className="font-mono mb-2">
            SortBot's deployment marked a significant milestone in BMW's digital transformation journey, demonstrating the company's commitment to Industry 4.0 principles. The system's successful implementation across multiple plants showcased the scalability and reliability of the robotic automation solution, contributing to BMW's continued leadership in automotive manufacturing innovation.
          </p>
        </div>
      );
    },
  },
];
export default projects;
