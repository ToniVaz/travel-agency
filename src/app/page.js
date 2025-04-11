import Hero from '@/sections/Hero/Hero';
import IntroSection from "@/sections/IntroSection/IntroSection";
import BannerSection from "@/sections/BannerSection/BannerSection"
import Infosection from '@/sections/InfoSection/InfoSection';
import FeaturedImage from '@/sections/FeaturedImage/FeaturedImage';
import PresentationSection from '@/sections/PresentationSection/PresentationSection'
import AdventureSection from '@/sections/AdventureSection/AdventureSection'
import ContactFooter from '@/sections/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection/>
      <Infosection/>
      <BannerSection/>
      <FeaturedImage/>
      <PresentationSection/>
      <AdventureSection/>
      <ContactFooter/>
    </main>
  );
}


