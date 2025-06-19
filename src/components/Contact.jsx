import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { toast, Toaster } from "sonner"; // ✅ Sonner import

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(
        "Message sent! Thank you for your message. I'll get back to you soon."
      ); // ✅ Sonner toast

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="p-20">
      <Toaster position="top-right" richColors /> {/* ✅ Sonner Toaster */}
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent ">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-purple-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Have a project in mind or want to discuss cloud and DevOps
            solutions? Feel free to reach out, and I'll get back to you as soon
            as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-gray-300">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-foreground/80">
              Feel free to reach out with any questions about my services,
              experience, or how I can help with your cloud and DevOps needs.
            </p>

            <div className="space-y-4 mt-8">
              <Card className="p-4 flex flex-row items-start gap-4 bg-slate-900/70 border border-border/50 border-blue-700">
                <Mail className="text-blue-700 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/80">contact@example.com</p>
                </div>
              </Card>

              <Card className="p-4 flex items-start flex-row gap-4 bg-slate-900/70 border border-border/50 border-purple-700">
                <MessageSquare className="text-purple-700 mt-1" />
                <div>
                  <h4 className="font-medium">Message</h4>
                  <p className="text-foreground/80">
                    Available for quick consultation
                  </p>
                </div>
              </Card>

              <Card className="p-4 flex items-start flex-row gap-4 bg-slate-900/70 border border-border/50 border-teal-700">
                <MapPin className="text-teal-700 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/80">
                    Belagavi / Karnataka, India
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-3">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sainathPatil09"
                  className="w-10 h-10 rounded-full bg-blue-700/20 flex items-center justify-center transition-colors hover:bg-tech-blue/40"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCGSYxtnF3c5Maq1vtjg2yTg"
                  className="w-10 h-10 rounded-full bg-blue-700/20 flex items-center justify-center transition-colors hover:bg-red-600/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184A4.912 4.912 0 0016.09 2H7.91A4.913 4.913 0 004.385 3.184 5.09 5.09 0 003 7.09v9.82a5.09 5.09 0 001.385 3.906A4.912 4.912 0 007.91 22h8.18a4.912 4.912 0 003.525-1.184A5.09 5.09 0 0021 16.91V7.09a5.09 5.09 0 00-1.385-3.906zM10 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                </a>

                <a
                  href="https://dev.to/patil_sai"
                  className="w-10 h-10 rounded-full bg-blue-700/20 flex items-center justify-center transition-colors hover:bg-tech-blue/40"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/Sai_patil09"
                  className="w-10 h-10 rounded-full bg-blue-700/20 flex items-center justify-center transition-colors hover:bg-tech-blue/40"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sainath-patil-00644a252/"
                  className="w-10 h-10 rounded-full bg-blue-700/20 flex items-center justify-center transition-colors hover:bg-tech-blue/40"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="backdrop-blur-md bg-slate-900/70 border border-border/50 border-gray-700">
              <form onSubmit={handleSubmit} className="p-6 space-y-6 ">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                  <div className="space-y-2 ">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={8}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
