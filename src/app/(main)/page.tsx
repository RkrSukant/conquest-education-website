import Hero from '@/components/home/Hero'
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/common/CTA";
import Footer from "@/components/common/Footer";
import StudyIn from "@/components/home/StudyIn";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <StudyIn/>
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
