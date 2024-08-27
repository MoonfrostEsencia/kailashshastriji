import Image from "next/image";
import Button from "../components/Button";
import { playfair } from "@/app/fonts";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Gradient from "@/components/Gradient";
import HeroImage from "/public/t6.jpg";
import OSTransition, { YXtransition } from "@/components/Transition";

const Hero = () => {
  return (
    <section className="lg:pb-[150px] pb-16 overflow-hidden relative">
      <Gradient
        fill
        className="sm:block hidden object-cover"
        src="/gradient.png"
        isPriority
      />
      <Gradient
        fill
        className="sm:hidden block object-cover"
        src="/gradient-mobile.png"
        isPriority
      />
      <MaxWidthWrapper>
        <div className="sm:mt-[200px] mt-[150px] relative">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-y-7 gap-x-5 lg:place-items-center">
            <div className="lg:col-span-7 col-span-12">
              <div className="hero-text mb-10">
                <YXtransition x={-40}>
                  <h1 className="lg:text-[65px] md:text-[55px] text-[40px] font-semibold leading-tight">
                  Hi, I am{" "}
                    <span className={`font-medium ${playfair.className}`}>
                    Pandit Kailash Shastri 
                    </span>{" "}
                    👋.
                  </h1>
                </YXtransition>
                <YXtransition x={-40} delay={0.2}>
                  <p className="lg:mt-16 mt-10 font-semibold lg:text-[26px] text-[24px]">
                  आपके जीवन की हर चुनौती का समाधान, {" "}
                    <span className="text-gray-500">
                    एक ही स्थान पर...
                    </span>
                    .
                  </p>
                </YXtransition>
              </div>
              <YXtransition x={-40} delay={0.4}>
                <Button type="button" href="https://calendly.com/panditkailashshastriji-o/30min" title="Book Appointment" />
              </YXtransition>
            </div>
            <div className="lg:col-span-5 col-span-12">
              <OSTransition scale={0.6} delay={0.3}>
                <Image
                  width={488}
                  height={489}
                  quality={80}
                  priority
                  src={HeroImage}
                  alt="hero image"
                />
              </OSTransition>
            </div>
          </div>
          <OSTransition delay={0.4}>
            <div className="relative lg:block hidden">
              <span className="hscroll-line"></span>
            </div>
          </OSTransition>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
