import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Code, Server, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "End to End DevSecOps Pipeline with Jenkins",
      description:
        "I developed a production-grade DevSecOps pipeline utilizing Jenkins, Kubernetes, GitOps (ArgoCD) and Security Scanning tools.",
      technologies: ["Jenkins", "AWS EKS", "AWS EC2", "Docker", "ArgoCD"],
      image: "DevSecOps.png",
      category: "devops",
      demoUrl: "https://github.com/sainathPatil09/Wanderlust-Mega-Project",
      repoUrl: "https://github.com/sainathPatil09/Wanderlust-Mega-Project",
    },
    {
      id: 2,
      title: "Password Manager - Multi-Stage Docker Deployment with NGINX",
      description:
        "Containerized a full-stack web application with separate containers for frontend, backend, and database. Used NGINX as a reverse proxy, making the deployment production-ready.",
      technologies: ["Docker", "Node.js", "React", "MongoDB"],
      image: "passwordmanager.png",
      category: "devops",
      demoUrl: "https://github.com/sainathPatil09/PasswordManager",
      repoUrl: "https://github.com/sainathPatil09/PasswordManager ",
    },
    {
      id: 3,
      title: "Kubernetes Deployment Three-Tier Application",
      description:
        "Deployed a containerized web application using Kubernetes with a Deployment, Service, and ConfigMap. Used Kind for local testing and kubectl for cluster management.",
      technologies: ["Kubernetes", "Docker", "YAML", "KIND"],
      image: "kind.png",
      category: "devops",
      demoUrl: "https://github.com/sainathPatil09/full-stack_chatApp",
      repoUrl: "https://github.com/sainathPatil09/full-stack_chatApp",
    },
    {
      id: 4,
      title: "AI DevOps Assistant Bot (AWS + GenAI + Slack)",
      description:
        "I’ve integrated a Slack bot with AWS services to automatically trigger CI/CD and summarize CI/CD pipeline logs and send them directly to Slack — saving time, reducing noise, and helping teams focus on what matters!",
      technologies: [
        "AWS Lambda",
        "Amazon Bedrock",
        "API Gateway",
        "Python",
        "CI/CD",
      ],
      image: "slackbot.png",
      category: "gen Ai",
      demoUrl: "https://github.com/sainathPatil09/Slack-Bot",
      repoUrl: "https://github.com/sainathPatil09/Slack-Bot",
    },
    {
      id: 5,
      title: "AI Coach Application",
      description:
        "Developed an AI-powered career coaching platform that provides personalized learning roadmaps, interview preparation, and resume-building Templates. Integrated Gemini AI for smart feedback and MongoDB for storing user progress and sessions.",
      technologies: ["Terraform", "AWS EC2", "VPC", "Security Groups"],
      image: "ai-saas.png",
      category: "gen Ai",
      demoUrl: "https://github.com/sainathPatil09/resume",
      repoUrl: "https://github.com/sainathPatil09/resume",
    },
    {
      id: 6,
      title: "DevOps Kubernetes Deployment with CI/CD",
      description:
        "Created a CI/CD pipeline for a Blog App deployed on Kubernetes running on AWS EC2. Utilized GitHub Actions for automation, Docker Hub for container image management, and Kubernetes for orchestration.",
      technologies: [
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "AWS EC2",
        "Docker Hub",
      ],
      image: "gitactions.png",
      category: "devops",
      demoUrl: "https://github.com/sainathPatil09/internOrbit-Blog-System",
      repoUrl: "https://github.com/sainathPatil09/internOrbit-Blog-System",
    },
    {
      id: 7,
      title: "Personal Finance Management App",
      description:
        "Built a full-stack finance management application to help users track income, expenses, and visualize spending habits using interactive charts. Includes authentication, dashboard, and data persistence features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      image: "finance.png", // Replace with your custom image ID or link
      category: "full Stack",
      demoUrl: "https://github.com/sainathPatil09/finance-app", // Add your live demo link
      repoUrl: "https://github.com/sainathPatil09/finance-app", // Add your GitHub repo link
    },
    {
      id: 8,
      title: "Online Book Store Application",
      description:
        "Developed a full-stack MERN application where users can browse, search, and manage books. Features include CRUD operations for books, user authentication, and responsive UI for a seamless experience.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Tailwind CSS",
      ],
      image: "bookstore.png", // Replace with actual image ID or URL
      category: "full Stack",
      demoUrl: "https://book-store-app-rouge.vercel.app/", 
      repoUrl: "https://github.com/sainathPatil09/bookStoreApp", 
    },
    {
      id: 10,
      title: "DSA Shortest Path Visualizer",
      description:
        "Created an interactive pathfinding visualizer using Dijkstra's Algorithm to demonstrate the shortest path in a graph. Users can set start/end points, and observe algorithm execution step-by-step.",
      technologies: ["HTML", "CSS", "JavaScript", "Dijkstra's Algorithm"],
      image: "shortestpath.png", // Replace with a fitting image ID or link
      category: "DSA",
      demoUrl: "https://github.com/sainathPatil09/shortest-path-visualizer", 
      repoUrl: "https://github.com/sainathPatil09/shortest-path-visualizer", 
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "cloud":
        return <Cloud className="w-5 h-5" />;
      case "devops":
        return <Code className="w-5 h-5" />;
      case "genai":
        return <Server className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="p-20 bg-accent/30 bg-gray-800">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Learning{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80 text-gray-200">
            Here are some projects I've worked on during my studies and
            internships to learn cloud technologies and DevOps practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "devops", "gen Ai","full Stack", "DSA"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeFilter === type
                  ? "bg-gradient-to-r from-blue-400 to-purple-700 text-white"
                  : "bg-gray-700 hover:bg-accent text-gray-300"
              }`}
            >
              {type === "cloud" && <Cloud className="w-4 h-4" />}
              {type === "devops" && <Code className="w-4 h-4" />}
              {type === "gen Ai" && <Server className="w-4 h-4" />}
              {type === "all"
                ? "All Projects"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in bg-slate-900 text-gray-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={`${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm p-1 rounded-md">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
                <CardContent className=" flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-accent/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex gap-2"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex gap-2"
                      asChild
                    >
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
