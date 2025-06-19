import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <section id="about" className="p-20 rounded-lg bg-gray-800">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-white">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent ">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center text-gray-200">
            <div className="space-y-6">
              {/* <p className="text-lg">
                I'm a recent graduate passionate about{" "}
                <span className="text-tech-blue font-medium">
                  Cloud Technologies
                </span>{" "}
                and
                <span className="text-tech-purple font-medium">
                  {" "}
                  DevOps practices
                </span>
                . I'm eager to start my career in designing, implementing, and
                managing cloud infrastructure and CI/CD pipelines.
              </p> */}
              <p className="">
                I’m a final-year Computer Science student passionate about
                <span className="text-white font-medium">
                  {" "}
                  Cloud
                Computing and DevOps.
                </span> I’m actively building hands-on experience
                by freelancing on platforms like
                <span className="text-green-500 font-medium">
                  {" "}
                  [Fiver.com]
                </span>, where I help
                clients automate infrastructure, deploy scalable applications,
                and optimize cloud environments.
              </p>
              <p>
                I also love sharing knowledge with the community. I write
                technical blogs on Dev.to and create content on my
                <span className="text-red-500 font-medium">
                  {" "}
                  YouTube
                channel, AWSome AI,
                </span> where I break down AWS concepts and projects
                for beginners and intermediates.
              </p>
              <p>
                Apart from DevOps, I have a strong foundation in Data Structures
                and Algorithms, and I regularly practice on platforms like
                <span className="text-blue-600 font-medium">
                  {" "}
                  LeetCode
                </span> and
                <span className="text-blue-600 font-medium">
                  {" "}
                  GeeksforGeeks.
                </span> I am currently looking for
                internship or placement opportunities in Cloud, DevOps, or SRE
                roles to contribute and grow alongside passionate teams.
              </p>


              <div className="pt-4">
                <h3 className="text-xl font-medium mb-3">What I Bring:</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Fresh Perspective
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                    Quick Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    Enthusiasm
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Adaptability
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                    Team Work
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    Innovation
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="backdrop-blur-md bg-card/50 border border-border/50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-3 text-blue-500">
                        Experience
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <p className="font-medium">Freelance DevOps Engineer</p>
                          <p className="text-sm text-foreground/70">
                            Self-Employed | Present 2025
                          </p>
                        </li>
                        <li>
                          <p className="font-medium">Content Creator – YouTube Channel (AWSome AI)</p>
                          <p className="text-sm text-foreground/70">
                            Content Creator (Tech/Programming) | Present 2025
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-3 text-purple-500">
                        Education
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <p className="font-medium">
                            B.E in Computer Science
                          </p>
                          <p className="text-sm text-foreground/70">
                            SG Balekundri Institute Of Technology | 2026
                          </p>
                          {/* <p className="text-sm text-foreground/60">
                            CGPA: 8.5/10
                          </p> */}
                        </li>
                        {/* <li>
                          <p className="font-medium">Higher Secondary</p>
                          <p className="text-sm text-foreground/70">
                            XYZ School | 2020
                          </p>
                          <p className="text-sm text-foreground/60">92%</p>
                        </li> */}
                      </ul>
                    </div>

                    {/* <div>
                      <h3 className="text-xl font-medium mb-3 text-green-500">
                        Certifications
                      </h3>
                      <ul className="space-y-2">
                        <li>AWS Cloud Practitioner</li>
                        <li>Docker Fundamentals</li>
                        <li>Git & GitHub Essentials</li>
                        <li>Linux Administration Basics</li>
                      </ul>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      );
    </>
  );
};

export default About;
