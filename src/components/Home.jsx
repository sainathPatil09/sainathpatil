import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Cloud, Code, Server } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const roles = [
    "Cloud & DevOps Engineer",
    "Freelancer",
    "Tech Blogger",
    "AWS Content Creator",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section id="home" className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
            <Cloud className="w-64 h-64 text-blue-900 animate-float" />
          </div>
          <div className="absolute top-1/4 right-1/5 transform translate-x-1/2 -translate-y-1/2">
            <Code
              className="w-48 h-48 text-blue-900  animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
            <Server
              className="w-40 h-40 text-blue-800  animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="w-full relative z-10">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img
              className="w-40 h-40 rounded-full  border border-gray-500 shadow-gray-300 hover:shadow-gray-400 shadow-2xl "
              src="mypic.jpg"
              alt=""
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-tech-blue font-medium mb-2 animate-fade-in
          bg-gradient-to-r from-purple-100 to-blue-800 bg-clip-text text-transparent"
            >
              Hi, I'm an aspiring
            </p>
            {/* <h1
              className="text-4xl md:text-6xl text-white font-bold mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className=" bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                Cloud & DevOps
              </span>{" "}
              Engineer
            </h1> */}

            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl text-white font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                {roles[index]}
              </span>
            </motion.h1>
            <p
              className="text-xl text-foreground/80 mb-8 animate-fade-in text-gray-400"
              style={{ animationDelay: "0.2s" }}
            >
              Fresh graduate passionate about cloud technologies and DevOps
              practices. Ready to start my journey in building scalable
              infrastructure and automation.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-6">
                View My Projects
              </Button>
              <Button
                variant="outline"
                className="border-tech-purple text-purple-600 hover:text-black hover:bg-purple-200  px-6 py-6"
                onClick={() => {
                  window.open("/Sainath-Patil-Resume.pdf", "_blank");
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-gray-300/60 hover:text-foreground">
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
