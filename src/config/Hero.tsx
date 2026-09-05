import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
// Technology Components
import TypeScript from "@/components/technologies/TypeScript";

// Static image import for blur placeholder
import bannerImage from "@/../public/assets/banner.jpeg";
import avatarImage from "@/../public/assets/logoNew.png";

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: "Bishal Das",
  title: [
    "A Frontend Engineer.",
    "A Design Enthusiast.",
    "Small details matter.",
  ],
  avatar: avatarImage,
  banner: bannerImage,
  role: "UI/UX Focused Frontend Developer and Design Enthusiast.",
  location: "New Delhi, India",
  email: "bishaldas2932004@gmail.com",
  phone: "+91 9971398663",
  website: "Mugiwara-Bishal.vercel.app",
  gender: "He/Him",

  // Description Configuration
  description: {
    template:
      "I build interactive web apps using {skills:0}, {skills:1}, {skills:2} and {skills:3}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.",
  },
};
