// Import Swiper React components

import { seoHead } from "@/utils/seoHead";
import { IoIosArrowRoundDown } from "react-icons/io";

const stackHurasoft = [
  { name: "Html 5" },
  { name: "Sass" },
  { name: "Javascript" },
  { name: "Jquery" },
  { name: "Ajax" },
  { name: "Php" },
  { name: "Bootstrap" },
  { name: "TPL Liquid" },
  { name: "BEM" },
  { name: "Swiperjs" },
];

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "POA sales portal",
    url: "https://actnow-uat.pacificoffice.com/",
    description:
      "A large system (ERP) that manages and provides office equipment products for all types of office models from various manufacturers. It has many branches and large distribution centers in the United States.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Ant Design" },
      { name: "Redux" },
      { name: "Exceljs" },
      { name: "React-PDF" },
      { name: "Sass" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    num: "02",
    category: "Frontend",
    title: "Sorona",
    url: "https://www.sonarahealth.com/",
    description:
      "A web application for managing patients, medications, and supporting doctors in scheduling online appointments for patients.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Mui" },
      { name: "Redux" },
      { name: "React-PDF" },
      { name: "Socket.io" },
      { name: "Twilio Video " },
      { name: "Microsoft Translator" },
      { name: "Sass" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    num: "03",
    category: "Frontend",
    title: "Ecocheck",
    url: "https://bee-tenant.ecocheck.ai",
    description:
      "An application for calculating greenhouse gas emissions for companies and enterprises, helping them create emission reports to submit to the Ministry of Industry and Trade.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Ant Design" },
      { name: "Redux" },
      { name: "Exceljs" },
      { name: "React-PDF" },
      { name: "Sass" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    num: "04",
    category: "Frontend",
    title: "Ecocheck Website",
    url: "https://ecocheck.ai",
    description:
      "A website for introducing features, blogs, contact information, services in the Ecocheck application, and creating training courses for usage.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Typescript" },
      { name: "Nextjs" },
      { name: "Ant Design" },
      { name: "Redux" },
      { name: "Sass" },
      { name: "Stapi" },
      { name: "Sql server" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    num: "05",
    category: "Frontend",
    title: "Beevr",
    url: "https://beevr.ai",
    description: "A website introducing the Beevr technology company.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Nextjs" },
      { name: "Ant Design" },
      { name: "Redux" },
      { name: "Sass" },
      { name: "Stapi" },
      { name: "Sql server" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    num: "06",
    category: "Frontend",
    title: "Hanoinew",
    url: "https://hanoinew-quety.web.app",
    description:
      "This is an e-commerce website personally researched and developed.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Mui" },
      { name: "React-query" },
      { name: "Excel-ja" },
      { name: "Expressjs" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Github" },
      { name: "Firebase" },
    ],
  },
  {
    num: "07",
    category: "Frontend",
    title: "Hacom",
    url: "https://hacom.vn",
    description:
      "An e-commerce website specializing in selling technology products, household items, and office equipment.",
    stack: [...stackHurasoft],
  },
  {
    num: "08",
    category: "Frontend",
    title: "HoangHaPC",
    url: "https://hoanghapc.vn/",
    description:
      "An e-commerce website specializing in selling technology products, household items, and office equipment.",
    stack: [...stackHurasoft],
  },
  {
    num: "09",
    category: "Frontend",
    title: "TheThaoTaiPhat",
    url: "https://thethaotaiphat.com.vn",
    description:
      "An e-commerce website specializing in selling sports technology products and massage equipment.",
    stack: [...stackHurasoft],
  },
  {
    num: "10",
    category: "Frontend",
    title: "AnPhatPC",
    url: "https://www.anphatpc.com.vn/",
    description:
      "An e-commerce website specializing in selling technology products, household items, and office equipment.",
    stack: [...stackHurasoft],
  },
  {
    num: "11",
    category: "Frontend",
    title: "Laptop88",
    url: "https://laptop88.vn/",
    description:
      "An e-commerce website specializing in selling technology products, household items, and office equipment.",
    stack: [...stackHurasoft],
  },
  {
    num: "12",
    category: "Frontend",
    title: "Pico",
    url: "https://pico.vn/",
    description:
      "An e-commerce website and electronics supermarket specializing in selling technology products, household items, and office equipment.",
    stack: [...stackHurasoft],
  },
  {
    num: "13",
    category: "Frontend",
    title: "MccVietNam",
    url: "https://mccvietnam.vn/",
    description: "An e-commerce website.",
    stack: [...stackHurasoft],
  },
];
const Work = () => {
  return (
    <section className="container py-20 lg:py-40">
      <div className="flex flex-col gap-y-[60px] max-w-[800px] mx-auto">
        {projects.map((projects, index) => (
          <a
            href={projects.url}
            target="_blank"
            key={index}
            className="group block pb-3 border-b-1 border-[#c1c1c1] cursor-pointer"
          >
            <div className="relative mb-2 md:mb-5">
              <div className="text-3xl md:text-5xl font-semibold text-outline text-transparent transition-all duration-300  group-hover:translate-y-[-10px]">
                {index > 8 ? index + 1 : `0${index + 1}`}
              </div>
              <div className="absolute top-0 right-0 flex items-center justify-center bg-white rounded-full duration-300 group-hover:bg-accent group-hover:rotate-[-135deg]">
                <IoIosArrowRoundDown className="text-[35px] text-black" />
              </div>
            </div>
            <h2 className="text-[28px] md:leading-snug md:text-[30px]  font-bold group-hover:text-accent">
              {projects.title}
            </h2>
            <p className="text-white/80">{projects.description}</p>
            <div>
              {projects.stack.map((item, index) => (
                <span
                  className="inline-block pr-[20px] text-accent"
                  key={index}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </a>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default Work;
export const metadata = seoHead({
  title: "Work",
  url: "/work",
});
