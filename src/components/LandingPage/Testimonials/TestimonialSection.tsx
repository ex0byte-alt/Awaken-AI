"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface TestimonialProps {
  Quote: string;
  Name: string;
  Position: string;
  Company: string;
  ImageURL: string;
}

const testimonials = [
  {
    Quote: "Implementing Gao DIM AI the Law AI has reduced 3 times of overhead costing, 5 times faster, generate extra sales for company. The ROI was evident.",
    Name: "CY NG & BARRY",
    Position: "Legal Firm",
    Company: "ADVOCATES & SOLICITORS",
    ImageURL: "LegalFirmIcon.svg",
  },
  {
    Quote: "As a growing e-commerce business, we needed scalable AI tools that could grow with us. Awaken AI provided exactly that, helping us increase sales by 28% year-over-year.",
    Name: "Michael Chen",
    Position: "Founder & CEO",
    Company: "StyleCommerce",
    ImageURL: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    Quote: "The AI Engine package revolutionized how we handle supply chain logistics. Predictions are 93% accurate, and we've cut waste by 31% across our facilities.",
    Name: "Priya Patel",
    Position: "Supply Chain Director",
    Company: "Global Logistics Inc",
    ImageURL: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
];


const Testimonial = ({ Quote, Name, Position, Company, ImageURL }: TestimonialProps) => (
  <div className="gradient-card rounded-xl shadow-lg p-8 md:p-10">
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img
          src={ImageURL}
          alt={Name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
        />
      </div>
      <div>
        <blockquote className="text-lg mb-6">"{Quote}"</blockquote>
        <div>
          <div className="font-semibold text-gray-900">{Name}</div>
          <div className="text-sm text-gray-300">
            {Position}, {Company}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function TestimonialSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text ">Success Stories</span> From Our Clients
          </h2>
          <p className="dark:text-gray-300 text-gray-700 text-lg">
            Hear from businesses that have transformed their operations and achieved remarkable results with Awaken AI.
          </p>
        </div>

        <Carousel
          className="max-w-4xl mx-auto overflow-visible"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="px-2 pl-6 mx-auto md:px-4">
                <Testimonial {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2" aria-label="Previous testimonial" />
            <CarouselNext aria-label="Next testimonial" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
