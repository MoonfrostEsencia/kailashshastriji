"use client";

import Faq from "@/sections/Faq";
import { playfair } from "../fonts";
import Image from "next/image";

import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import CTA from "@/sections/CTA";
import ContactImage from "/public/t6.jpg";
import { YXtransition } from "@/components/Transition";

import { useState } from "react";


const Contact = () => {
  
 




  return (
    <>
      <section className={`${styles.route} lg:pb-24 pb-16 relative`}>
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
              <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
                Stay in <span className={playfair.className}>touch</span>
              </h1>
              <div>
                <span className="hscroll-line"></span>
              </div>
            </div>
          </YXtransition>
          <YXtransition y={40} delay={0.2}>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-6 col-span-12 lg:pr-12">
              
                  <div className="grid grid-cols-12 gap-4">
                  
                  
                    <div className="col-span-12 mt-4">
                 <a href="tel:7357565986">
                    <button className="w-full relative inline-flex h-24 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                     <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                        Call Now
                           </span>
                               </button>
                   </a>
                      
                    </div>
                  </div>
                
              </div>
              <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-8">
                <div className="relative lg:h-[400px] md:h-[420px] h-[260px] overflow-hidden">
                  <Image
                    className="object-cover"
                    fill
                    loading="eager"
                    src={ContactImage}
                    alt="contact image"
                    sizes="(min-width: 1440px) 592px, 
                    (min-width: 1040px) 42.11vw, (min-width: 780px) 
                    calc(100vw - 112px), calc(100vw - 32px)"
                  />
                </div>
              </div>
            </div>
          </YXtransition>
        </MaxWidthWrapper>
      </section>
      <Faq />
      <CTA />
    </>
  );
};

export default Contact;
