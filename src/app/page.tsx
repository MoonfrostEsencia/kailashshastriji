"use client"


import Faq from "@/sections/Faq";
import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Testimonial from "@/sections/Testimonial";
import {AppleCardsCarouselDemo} from "@/sections/card2";
import Trust from "@/sections/Trust";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <Services />
      <Portfolio />
      <Testimonial />
      <Faq></Faq>
      <CTA />
    </>
  );
}
