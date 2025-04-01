import Hero from '@/components/home/Hero'
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/common/CTA";
import Footer from "@/components/common/Footer";
import StudyIn from "@/components/home/StudyIn";
import PromotionalBanner from '@/components/home/PromotionalBanner';

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <StudyIn/>
      <PromotionalBanner/>
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
