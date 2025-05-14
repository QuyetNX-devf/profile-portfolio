import { FormContact } from "@/components/FormContact";
import { seoHead } from "@/utils/seoHead";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "+8498 161 8988",
  },
  {
    icon: <MdEmail />,
    title: "Email",
    description: "quyetnxm04120@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ha Noi",
  },
];

export default function Contact() {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="order-2 lg:order-none">
          <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-3xl text-accent">{"Let's work together"}</h3>
            <p className="text-white/60">
              We believe that collaboration will lead to innovative and
              optimized solutions, helping you create attractive, user-friendly
              interfaces that achieve outstanding results.
            </p>
            <FormContact />
          </div>
        </div>
        <div className="order-1 flex-1 lg:justify-end ">
          <ul className="flex flex-col gap-y-8">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-x-4 ">
                <div className="bg-[#27272c] h-[50px] w-[50px] flex justify-center items-center text-accent">
                  <div>{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p>{item.title}</p>

                  {item.title === "Phone" ? (
                    <a href="tel:+84981618988">{item.description}</a>
                  ) : item.title === "Email" ? (
                    <a href={`mailto:${item.description}`}>
                      {item.description}
                    </a>
                  ) : (
                    <h3>{item.description}</h3>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export const metadata = seoHead({
  title: "Contact",
  url: "/contact",
});
