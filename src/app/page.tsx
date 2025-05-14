import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";
import { ButtonDownload } from "@/components/client/ButtonDownload";
import { seoHead } from "@/utils/seoHead";

export default function Home() {
  return (
    <main className="mt-12 lg:mt-18">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center">
          <div className="text-center lg:text-left mb-8">
            <p>Software Developer</p>
            <h1 className="h1 mb-4">
              Hello I&apos;m <br />
              <span className="text-accent">Quety Nguyen</span>
            </h1>
            <p className="text-white/80 max-w-[500px] mb-5">
              With 5 years of experience in web and mobile programming, I
              consistently strive to deliver effective and high-quality
              solutions.
            </p>

            <ButtonDownload
              className="border-accent border-1 text-accent hover:bg-accent transition-colors hover:text-black"
              text="Download CV"
            />
          </div>
          {/* photo */}
          <div className="order-first lg:w-[500px] lg:h-[500px] mb-10 lg:order-last lg:mb-0 relative">
            <Photo />
          </div>
        </div>
        <div>
          <Stats />
        </div>
      </div>
    </main>
  );
}
export const metadata = seoHead({
  title: "Quety",
  url: "/",
});
