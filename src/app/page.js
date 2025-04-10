import Hero from '@/sections/Hero/Hero';
import IntroSection from "@/sections/IntroSection/IntroSection";
import BannerSection from "@/sections/BannerSection/BannerSection"
import Infosection from '@/sections/InfoSection/InfoSection';
import FeaturedImage from '@/sections/FeaturedImage/FeaturedImage';

export default function Home() {
  return (
    <main>
      <Hero />
      <Infosection/>
      <BannerSection/>
      <FeaturedImage/>
      <IntroSection/>
    </main>
  );
}
