import { playfair } from "@/app/fonts";
import { counter, services } from "@/lib/placeholder-data";
import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import style from "@/style";
import { YXtransition } from "@/components/Transition";

const Services = () => {
  return (
    <section className={`${style.section}`}>
      <MaxWidthWrapper>
        <YXtransition y={40} delay={0.1}>
          <div className="text-center">
            <h3 className={`${style.heading3} mb-4`}>
              What{" "}
              <span className={`font-medium ${playfair.className}`}>we do</span>
            </h3>
            <p className="sm:text-[26px] text-[24px] font-semibold">
            Pandit Kailash Shastri Ji आपकी हर समस्या का समाधान प्रदान करते हैं,{" "}
              <span className="text-gray-500">चाहे वह व्यक्तिगत हो, व्यवसाय से संबंधित हो, या आध्यात्मिक हो:</span>
            </p>
          </div>
        </YXtransition>
        <YXtransition y={40} delay={0.1}>
          <div className="grid grid-cols-8 gap-4 pt-20 lg:pb-32 pb-20">
            {services.map(({ id, icon, title, text }) => (
              <div
                className="lg:col-span-4 md:col-span-6 col-span-12 bg-primary-200 p-12"
                key={id}
              >
                <div
                  className="services-icon flex flex-col justify-center items-center 
              w-[100px] h-[100px] bg-white rounded-full p-6"
                >
                  <Image width={45} height={45} src={icon} alt="service icon" />
                </div>
                <div className="services-text">
                  <h5 className="text-[22px] mt-10 font-semibold">{title}</h5>
                  <p className="text-[18px] opacity-[0.8] font-medium">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </YXtransition>

        <YXtransition className="text-center" y={70} delay={0.1}>
          <h4 className="font-semibold sm:text-[26px] text-[24px]">
            100% {" "}
            <span className="text-gray-500">
            Results
            </span>
            .
          </h4>
        </YXtransition>
        <div className="counter grid grid-cols-12 sm:gap-7 gap-6 mt-10 justify-center">
          {counter.map(({ number, text, id, delay }) => (
            <YXtransition
              y={40}
              delay={delay}
              className="lg:col-span-4 md:col-span-6 col-span-12 text-center"
              key={id}
            >
              <h2 className="sm:text-[91px] text-[70px] font-semibold">
                {number}
              </h2>
              <p className="text-[18px] font-semibold text-gray-400">{text}</p>
            </YXtransition>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
