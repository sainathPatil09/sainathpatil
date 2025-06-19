import { useState } from "react";
import { Cloud, Database, Code, Server, Settings, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: Layout },
    { id: "cloud", name: "Cloud", icon: Cloud },
    { id: "devops", name: "DevOps", icon: Settings },
    { id: "infra", name: "Infrastructure", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "code", name: "Coding", icon: Code },
  ];

  const skills = [
    // Cloud
    { name: "AWS", level: 65, category: "cloud" },
    // { name: "Azure", level: 55, category: "cloud" },
    // { name: "Google Cloud", level: 50, category: "cloud" },
    { name: "Docker", level: 70, category: "cloud" },
    { name: "Kubernetes", level: 45, category: "cloud" },

    // DevOps
    { name: "Git & GitHub", level: 80, category: "devops" },
    { name: "CI/CD", level: 60, category: "devops" },
    { name: "Jenkins", level: 50, category: "devops" },
    { name: "GitHub Actions", level: 65, category: "devops" },
    { name: "Linux", level: 70, category: "devops" },

    // Infrastructure
    { name: "Terraform", level: 25, category: "infra" },
    { name: "Ansible", level: 35, category: "infra" },
    { name: "CloudFormation", level: 20, category: "infra" },

    // Database
    { name: "MySQL", level: 65, category: "database" },
    { name: "PostgreSQL", level: 55, category: "database" },
    { name: "MongoDB", level: 70, category: "database" },
    { name: "Redis", level: 30, category: "database" },

    // Coding
    { name: "Python", level: 60, category: "code" },
    { name: "JavaScript", level: 70, category: "code" },
    { name: "Bash Scripting", level: 65, category: "code" },
    { name: "Java", level: 60, category: "code" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getColorForCategory = (category) => {
    switch (category) {
      case "cloud":
        return "bg-blue-500";
      case "devops":
        return "bg-purple-500";
      case "infra":
        return "bg-teal-500";
      case "database":
        return "bg-blue-500";
      case "code":
        return "bg-purple-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <section id="skills" className="p-20">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            As a fresh graduate, I've been building my expertise across cloud
            platforms, DevOps tools, and programming languages through academic
            projects and hands-on learning.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-400 to-purple-600 text-white"
                    : "bg-gray-700 hover:bg-accent text-gray-300"
                }`}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="bg-card/50 border border-border/50 h-full hover:shadow-sm hover:shadow-blue-100 transition-all text-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                    <span className="text-sm text-foreground/70">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-accent/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColorForCategory(
                        skill.category
                      )} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
