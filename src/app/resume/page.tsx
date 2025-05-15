import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { seoHead } from "@/utils/seoHead";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Drawing upon my experience and passion in web and mobile app development, I am a responsible and creative person who is always eager to take on new challenges and provide practical value. Contact me to learn more.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Quyet Nguyen",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8498 161 8988",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "quyetnxm04120@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

//experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "Practical experience encompassing website analysis, design, and development, demonstrating the ability to address technical complexities and deliver quality solutions.",
  items: [
    {
      company: "Lobstertechnologies",
      position: "Fullstack developer",
      duration: "2022-2025",
    },
    {
      company: "Hurasoft",
      position: "Frontend developer",
      duration: "2019-2021",
    },
  ],
};

//education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "The learning process at this institution has enabled me to develop my analytical thinking, problem-solving abilities, UI/UX knowledge, and a strong passion for web programming.",
  items: [
    {
      institution: "FPT Arena Multimedia",
      degree: "Certificate ux/ui design",
      duration: "2018-2019",
    },
    {
      institution: "Military Technical Academy (MTA)",
      degree: "Bachelor of Engineering",
      duration: "2012-2016",
    },
  ],
};

//skills data
const skills = {
  icon: "",
  title: "My Skills",
  description:
    "With a solid foundation of skills, I am committed to delivering high-quality and effective solutions for any challenge.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "Reactjs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
  ],
};

const tabVlues = {
  experience: "experience",
  education: "education",
  skills: "skills",
  aboutMe: "about me",
};

const Resume = () => {
  return (
    <section className="container min-h-[80vh] flex flex-col py-12 lg:py-40 ">
      <Tabs
        defaultValue={tabVlues.experience}
        className="flex flex-col gap-[70px] lg:flex-row"
      >
        <TabsList
          className="grid grid-cols-1 gap-4 w-full lg:grid-cols-1 lg:max-w-[300px] mx-auto
          h-max md:grid-cols-2 md:max-w-[500px]
        "
        >
          <TabsTrigger
            className="h-max"
            defaultChecked
            value={tabVlues.experience}
          >
            Experience
          </TabsTrigger>
          <TabsTrigger className="h-max" value={tabVlues.education}>
            Education
          </TabsTrigger>
          <TabsTrigger className="h-max" value={tabVlues.skills}>
            Skills
          </TabsTrigger>
          <TabsTrigger className="h-max" value={tabVlues.aboutMe}>
            About Me
          </TabsTrigger>
        </TabsList>
        <div className="mt-10 lg:mt-0 w-full">
          <TabsContent value={tabVlues.experience}>
            <div className="flex flex-col text-center lg:text-left">
              <h3 className="text-3xl font-semibold mb-5">
                {experience.title}
              </h3>
              <p className="text-white/60 max-w-[500px] lg:max-w-screen mx-auto lg:mx-0">
                {experience.description}
              </p>

              <ul className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] py-6 px-10 rounded-xl"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-[16px] font-bold mb-4">
                      {item.position}
                    </h3>
                    <div className="flex items-center justify-center lg:justify-start gap-x-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p>{item.company}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value={tabVlues.education}>
            <div className="flex flex-col text-center lg:text-left">
              <h3 className="text-3xl font-semibold mb-5">{education.title}</h3>
              <p className="text-white/60 max-w-[500px] lg:max-w-screen mx-auto lg:mx-0">
                {education.description}
              </p>

              <ul className="grid mt-8 grid-cols-1 gap-[30px]">
                {education.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] py-6 px-10 rounded-xl"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-[16px] font-bold mb-4">
                      {item.institution}
                    </h3>
                    <div className="flex items-center justify-center lg:justify-start gap-x-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/50 leading-snug">
                        {item.degree}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value={tabVlues.skills}>
            <div>
              <div>
                <h3 className="text-3xl font-bold mb-5 text-center lg:text-left">
                  {skills.title}
                </h3>
                <p className="text-white/60 text-center max-w-[500px] lg:max-w-screen mx-auto lg:mx-0 lg:text-left">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mt-12">
                {skills.skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center py-5 bg-[#232329]"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="text-4xl hover:text-accent ">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value={tabVlues.aboutMe}>
            <div className="mb-5 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-5">{about.title}</h3>
              <p className="text-white/60 max-w-[700px] mx-auto lg:mx-0 lg:max-w-screen">
                {about.description}{" "}
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[10px] border-t-1 border-[#7d7d7d] pt-[30px]">
              {about.info.map((item, index) => (
                <li className="text-center md:text-left" key={index}>
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="pl-2">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};
export default Resume;
export const metadata = seoHead({
  title: "Resume",
  url: "/contact",
});
