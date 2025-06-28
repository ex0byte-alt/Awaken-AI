import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="gradient-text pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Awaken the Power of AI</span>
            <br />
            <span className="text-[var(--primary)]">in Your Business</span>
          </h1>
          <p className="text-lg md:text-xl dark:text-gray-300 text-gray-700 mb-8 md:mb-10">
            Accelerate growth, boost sales, and reduce costs with AI solutions tailored for your business needs. From startups to enterprises, we help you harness AI technology with minimal complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-button hover:opacity-90 text-white text-lg py-6 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-blue-600 text-lg py-6 px-8  dark:text-gray-300 text-gray-700">
              Book a Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8  dark:text-gray-300 text-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-awaken-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-awaken-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-awaken-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 support</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
