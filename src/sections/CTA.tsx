import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Gradient from "../components/Gradient";
import styles from "@/style";

const CTA = () => {
  return (
    <section className={`${styles.section} overflow-hidden relative`}>
      <Gradient fill className="sm:block hidden" src="/gradient.png" />
      <Gradient fill className="sm:hidden block" src="/gradient-mobile.png" />

      <MaxWidthWrapper className="relative">
        <div className="grid grid-cols-12 sm:gap-20 gap-y-20 items-center">
          <div className="md:col-span-7 col-span-12">
            <h2
              className="sm:text-[37px] text-[33px] font-semibold leading-tight mb-5"
            >
             Get in{" "}
              <span className="text-gray-500">Touch</span>.
            </h2>
            <p
              className="text-[18px] font-medium text-gray-500"
            >
           क्या आप अपनी समस्याओं का समाधान चाहते हैं? तो आज ही अपॉइंटमेंट बुक करें। मैं जल्द से जल्द आपकी मदद के लिए तैयार हूँ, लेकिन कृपया ध्यान दें—सिर्फ वही सवाल पूछें जो वाकई मायने रखते हैं। बेवजह की बातों पर मेरा ध्यान नहीं जाता!
            </p>
            <Button type="button" href="https://calendly.com/panditkailashshastriji-o/30min" className="mt-14" title="Make An Appointment" />
          </div>
          
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
