import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={` top-0 fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient"></a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 text-lg hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button
            onClick={() => {
              window.open("/Sainath-Patil-Resume.pdf", "_blank");
            }}
            className="bg-gradient-to-r from-blue-700 to-purple-700 text-white"
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background/95 backdrop-blur-lg border-l border-border">
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-blue-700 to-purple-700  mt-4">
                Resume
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
