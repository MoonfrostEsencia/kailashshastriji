import { playfair } from "../fonts";
import Image from "next/image";
import Button from "@/components/Button";
import Gradient from "@/components/Gradient";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CTA from "@/sections/CTA";
import styles from "@/style";
import AboutBlogImage from "/public/t6.jpg"
import { YXtransition } from "@/components/Transition";

const Page = () => {
  return (
    <>
      <section className={`${styles.route} relative overflow-hidden`}>
        <Gradient
          fill
          className="sm:block hidden"
          src="/gradient.png"
          isPriority
        />
        <Gradient
          fill
          className="sm:hidden block"
          src="/gradient-mobile.png"
          isPriority
        />
        <MaxWidthWrapper>
          <YXtransition y={40}>
          <div className="text-center lg:mb-48 mb-20 relative">
            <h1
              className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
            >
              About <span className={playfair.className}>K S.</span>
            </h1>
            <div 
              >
              <span className="hscroll-line"></span>
            </div>
          </div>
          </YXtransition>
          <YXtransition y={40} delay={0.2}>
          <div
            className="relative lg:h-[750px] md:h-[500px] h-[260px] overflow-hidden"
            >
            <Image
              className="object-cover"
              fill
              src={AboutBlogImage}
              alt="about image"
              quality={100}
              priority
            />
          </div>
          </YXtransition>
         
          <div className="aboutus-text text-center">
            <h2 className="sm:text-[40px] text-[36px] font-semibold mt-14 mb-6">
              About Us
            </h2>
            <p className="sm:text-[26px] md:text-[24px] text-[22px] font-semibold 
            max-w-[700px] mx-auto mb-6">
             Pandit Kailash Shastri Ji की परामर्श सेवा में आपका स्वागत है, जहाँ प्राचीन ज्ञान आधुनिक समाधान से मिलता है। दशकों के अनुभव के साथ, पंडित जी ज्योतिष और आध्यात्मिक परामर्श में गहन मार्गदर्शन प्रदान करते हैं ताकि आप जीवन की चुनौतियों का सामना कर सकें। हमारा दृष्टिकोण समग्र है, जो केवल लक्षणों को नहीं बल्कि आपकी समस्याओं की जड़ को भी संबोधित करता है। व्यक्तिगत मुद्दों और संबंध कठिनाइयों से लेकर व्यवसायी समस्याओं और आध्यात्मिक बाधाओं तक, पंडित जी की विशेषज्ञता आपके जीवन के हर पहलू को कवर करती है। उनकी ईमानदारी और ग्राहकों की देखभाल के प्रति समर्पण उन्हें एक विश्वसनीय सलाहकार बनाता है, जो आपको समाधान और शांति की ओर मार्गदर्शन करता है।
            </p>
            
            <Button type="button" href="tel:7357565986" className="mt-14" title="Call Now" />
          </div>
        </MaxWidthWrapper>
      </section>
     
     
    </>
  );
};

export default Page;
