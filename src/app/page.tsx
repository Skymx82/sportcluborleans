import Hero from "@/components/Hero";
import SpiritSection from "@/components/SpiritSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SpiritSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
