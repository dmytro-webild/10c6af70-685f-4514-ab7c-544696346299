"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Smile, Star, Mail } from 'lucide-react';

export default function LuxuryDentistPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxury Dental Care"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Schedule Consultation",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="California's Premier Luxury Dental Practice"
          description="Experience world-class cosmetic and restorative dentistry with cutting-edge technology. Our award-winning dentists are committed to creating stunning smiles with personalized care and exceptional attention to detail."
          tag="Excellence Since 2005"
          tagIcon={Sparkles}
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/hero/hero1.avif"
          imageAlt="Modern luxury dental practice with state-of-the-art equipment"
          imagePosition="right"
          kpis={[
            { value: "5000+", label: "Satisfied Patients" },
            { value: "99.8%", label: "Satisfaction Rate" },
            { value: "15+", label: "Industry Awards" }
          ]}
          enableKpiAnimation={true}
          buttons={[
            { text: "View Our Services", href: "#services" },
            { text: "Book Your Visit", href: "#contact" }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Our Signature Services"
          description="From cosmetic enhancement to restorative excellence, our comprehensive services transform smiles and improve oral health with precision and artistry."
          tag="Premium Dental Services"
          tagIcon={Smile}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={true}
          products={[
            {
              id: "1",
              brand: "Cosmetic",
              name: "Smile Design & Whitening",
              price: "From $500",
              rating: 5,
              reviewCount: "234",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/services/service1.avif",
              imageAlt: "Cosmetic smile design consultation"
            },
            {
              id: "2",
              brand: "Restorative",
              name: "Dental Implants & Crowns",
              price: "From $1,200",
              rating: 5,
              reviewCount: "312",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/services/service2.avif",
              imageAlt: "Advanced dental implant technology"
            },
            {
              id: "3",
              brand: "Advanced",
              name: "Orthodontics & Aligners",
              price: "From $800",
              rating: 5,
              reviewCount: "289",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/services/service3.avif",
              imageAlt: "Clear aligner orthodontic treatment"
            }
          ]}
          buttons={[
            { text: "Schedule Consultation", href: "#contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Trusted Excellence in Dental Care Across California" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Meet Our Team", href: "#testimonials" },
            { text: "Learn More", href: "#contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose Our Luxury Practice"
          description="We combine artistic excellence with scientific precision, utilizing the latest technology and techniques to deliver transformative results that exceed expectations."
          tag="Premium Dental Excellence"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground={true}
          features={[
            {
              title: "Digital Technology",
              description: "3D imaging, intraoral cameras, and computer-aided design for precise diagnostics and treatment planning",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/about/about1.avif",
            },
            {
              title: "Master Craftsmanship",
              description: "Award-winning dentists with decades of experience in cosmetic and restorative excellence",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/about/about2.avif",
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Patients Say"
          description="Discover why hundreds of California's discerning patients trust us for their dental care and smile transformations"
          tag="Patient Reviews"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              handle: "San Diego Patient",
              testimonial: "The most professional and caring dental experience I've ever had. The results exceeded my expectations and the attention to detail is extraordinary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial1.webp",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "Robert Chen",
              handle: "Business Executive",
              testimonial: "Finally found a dentist who understands aesthetics and function. My smile is now my confidence. Highly recommended to anyone serious about quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial2.webp",
              imageAlt: "Robert Chen"
            },
            {
              id: "3",
              name: "Sarah Williams",
              handle: "Entertainment Industry",
              testimonial: "This is the place where art meets science. My smile transformation has been life-changing. The expertise here is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial3.webp",
              imageAlt: "Sarah Williams"
            },
            {
              id: "4",
              name: "Michael Torres",
              handle: "Loyal Patient",
              testimonial: "I've been a patient for 8 years. The consistent excellence, warm staff, and cutting-edge treatments keep me coming back with confidence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image5.avif",
              imageAlt: "Michael Torres"
            },
            {
              id: "5",
              name: "Amanda Rodriguez",
              handle: "Social Media Influencer",
              testimonial: "When your smile matters for your career, you go to the best. This practice delivered a smile that's both beautiful and natural-looking.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image6.avif",
              imageAlt: "Amanda Rodriguez"
            },
            {
              id: "6",
              name: "David Kim",
              handle: "Healthcare Professional",
              testimonial: "The clinical precision combined with artistic vision is remarkable. This team truly understands comprehensive dental care at the highest level.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image7.avif",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          tagIcon={Mail}
          title="Schedule Your Luxury Dental Experience"
          description="Connect with our team to discuss your smile goals and discover how our personalized treatments can transform your dental health and confidence."
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/dentist/contact/contact.avif"
          imageAlt="Comfortable consultation room at our luxury dental practice"
          mediaPosition="right"
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="We respect your privacy. Unsubscribe anytime. Your smile deserves the best care."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxury Dental Care California"
          copyrightText="© 2025 Luxury Dental Care | Premium Dentistry Since 2005"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Cosmetic Dentistry", href: "#services" },
                { label: "Dental Implants", href: "#services" },
                { label: "Orthodontics", href: "#services" },
                { label: "Restorative Care", href: "#services" }
              ]
            },
            {
              title: "Practice",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#testimonials" },
                { label: "Technology", href: "#features" },
                { label: "Contact Us", href: "#contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Google Reviews", href: "https://google.com" },
                { label: "Smile Gallery", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
