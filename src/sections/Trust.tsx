import Image from "next/image";

import Button from "../components/Button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import style from "@/style";
import Ring from "/public/t7.jpg"
import OSTransition, { YXtransition } from "@/components/Transition";

const Trust = () => {
  return (
    <>
    <section className={style.section}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 sm:gap-x-7 gap-x-6 gap-y-7">
          <div className="lg:col-span-4 col-span-12">
            <YXtransition x={-40}>
            <h4
              className="lg:text-[26px] text-[24px] font-semibold"
            >
              हर समस्या का समाधान, 100% भरोसेमंद परिणाम! आज ही {" "}
              <span className="text-gray-500">अपॉइंटमेंट बुक करें <br />और पाएं विश्वसनीय मार्गदर्शन।</span>
            </h4>
            </YXtransition>
          
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-12 gap-5">
              
                <div  className="sm:col-span-4 col-span-6">
                 
                
                </div>
             
            </div>
          </div>
        </div>
        
      </MaxWidthWrapper>
    </section>
    <section className={style.section}>
      <MaxWidthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5 place-items-center">
          <div>
            <YXtransition x={-40}>
            <h4
              className="lg:text-[34px] text-[24px] font-semibold mb-10"
            >
              अपनी समस्याओं का समाधान आज ही प्राप्त करें। Call Now पर क्लिक करें  {" "}
              <span className="text-gray-500"> या Book Appointment पर क्लिक करके अपने अपॉइंटमेंट को शेड्यूल करें!</span>
            </h4>
            </YXtransition>
              <YXtransition x={-40} delay={0.4}>
                <div className="flex gap-4">
                <Button type="button" href="https://calendly.com/panditkailashshastriji-o/30min" title="Book Appointment" />
                <Button type="button" href="tel:7357565986" title="Call Now" />
              </div>
              </YXtransition>
            
          </div>
          <OSTransition scale={0.6} delay={0.1}>
            <Image
              className="w-full"
              width={590}
              height={338}
              src={Ring}
              alt="media ring"
            />
          </OSTransition>
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
};

export default Trust;
