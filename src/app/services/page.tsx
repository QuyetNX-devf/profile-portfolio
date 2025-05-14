import { seoHead } from "@/utils/seoHead";
import Link from "next/link";
import { IoIosArrowRoundDown } from "react-icons/io";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building responsive and functional websites.",
  },
  {
    num: "02",
    title: "Mobile Development",
    description: "Creating mobile applications for iOS and Android.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
  },
  {
    num: "04",
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
  },
];
const Services = () => {
  return (
    <section className="container mt-[40px] md:min-h-[80vh] flex flex-col justify-center ">
      <div className="flex flex-col gap-y-[70px] md:flex-wrap md:flex-row md:gap-[70px]">
        {services.map((service, index) => (
          <Link
            href={"/contact"}
            key={index}
            className="md:w-[calc((100%-70px)/2)] group pb-3 border-b-1 border-[#c1c1c1] cursor-pointer"
          >
            <div className="relative mb-2 md:mb-5">
              <div className="text-3xl md:text-5xl font-semibold text-outline text-transparent transition-all duration-300 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]">
                {service.num}
              </div>
              <div
                className="absolute top-0 right-0 flex items-center justify-center bg-white rounded-full duration-300
              group-hover:bg-accent group-hover:rotate-[-90deg]
              "
              >
                <IoIosArrowRoundDown className="text-[35px] text-black" />
              </div>
            </div>
            <h2 className="text-[28px] md:leading-snug md:text-[30px] lg:text-[42px] font-bold group-hover:text-accent">
              {service.title}
            </h2>
            <p className="text-white/80">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
export const metadata = seoHead({
  title: "Services",
  url: "/services",
});
