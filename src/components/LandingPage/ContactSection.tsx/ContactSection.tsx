"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function ContactSection () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form data submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-xl border overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">

            <div className="dark:text-gray-300 text-gray-700 p-8 md:p-12 gradient-card">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Ready to transform your business with AI? Contact our team for personalized solutions and expert guidance.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Our Location</h3>
                  <p>
                    Common Ground Q Sentral<br />
                    Q Sentral, Level 39, Unit 39-02 (East Wing)<br />
                    2A, Jalan Stesen Sentral 2<br />
                    Kuala Lumpur Sentral<br />
                    50470 Kuala Lumpur
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Email Us</h3>
                  <a href="mailto:jesslynjob512@gmail.com" className="text-blue-600 underline">
                    jesslynjob512@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Call Us</h3>
                  <a href="tel:+60176895131" className="text-blue-600 underline">
                    +60176895131
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  <div className="font-medium">Message sent successfully!</div>
                  <p>Thank you for reaching out. Our team will be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6 dark:text-gray-300 text-gray-700">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md "
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="gradient-button hover:opacity-90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">...</svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
