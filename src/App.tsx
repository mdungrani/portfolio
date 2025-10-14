import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ExternalLink,
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Code2,
  Database,
  Layout,
  Server,
  Cloud,
  GitBranch,
  Zap,
  Send,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "./components/ImageWithFallback";

// Toast notification component
const toast = {
  success: (message: string) => {
    const toastEl = document.createElement("div");
    toastEl.className = "fixed bottom-4 right-4 bg-card border border-border px-6 py-4 rounded-lg shadow-lg z-50 animate-slideIn";
    toastEl.textContent = message;
    document.body.appendChild(toastEl);
    setTimeout(() => {
      toastEl.remove();
    }, 3000);
  },
};

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-xl tracking-tight hover:text-primary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <dev /> */}
          </motion.button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-full text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Full-time Opportunities
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient">
                Mansi Dungrani
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-xl md:text-2xl mb-4 font-bold text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer 
            </motion.h2>

            <motion.p
              className="text-base sm:text-md text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting beautiful, performant web experiences with 3+ years of expertise in
              React, Vue, TypeScript, and modern design systems. Currently pursuing M.S. ITM at Illinois Tech.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={scrollToProjects}
                className="group relative px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => window.location.href = "#contact"}
                className="px-6 py-3 border-2 border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: Github, href: "https://github.com/mdungrani", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/mansidungrani", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.mansidungrani13@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-accent/30 hover:bg-accent/50 border border-border/50 rounded-lg transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50 animate-pulse" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-border/50 backdrop-blur-sm bg-card/50">
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src="/profile_13.jpeg"
                    alt="Professional Developer Portrait"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating tech badges */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">React Expert</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 px-3 py-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-lg shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Layout className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Product Designer</span>
                  </div>
                </motion.div>
              </div>

              {/* Stats cards */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-4 py-3 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">3+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 px-4 py-3 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">4.0</div>
                  <div className="text-xs text-muted-foreground">GPA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "Industry Student Collabration Platform [in progress]",
      description: "Connecting students with industry partners for real-world project collaboration, guided by expert faculty mentors.",
      image: "/iit-scp.png",
      tags: ["React", "Spring Boot", "AWS S3", "Cloudfront" , "Github Actions", "Docker"],
      github: "https://github.com/mdungrani/IIT-SCP-react-frontend",
      demo: "https://dj3eozung04ja.cloudfront.net/",
    },
    {
      title: "Appointment Booking System",
      description: "Healthcare appointment system with JWT auth, role-based access, and email notifications.",
      image: "https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBvaW50bWVudCUyMGJvb2tpbmclMjBtZWRpY2FsfGVufDF8fHx8MTc2MDI5NTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Django", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "FlavorBook",
      description: "Recipe management app with CRUD operations, validation, and image handling.",
      image: "/flavorbook.png",
      tags: ["Next.js", "MongoDB", "TypeScript"],
      github: "https://github.com/mdungrani/ITMD542-Final-app",
      demo: "https://flavorbook-final-app.vercel.app/",
    },
    {
      title: "Stock Price Dashboard",
      description: "Displays live stock data and integrate with actual stock market APIs..",
      image: "/stock-price-dashboard.png",
      tags: ["React", "Tailwind"],
      github: "https://github.com/mdungrani/stock-price-dashbaord",
      demo: "https://stock-price-dashbaord-md.vercel.app/",
    },
    {
      title: "Library Management System",
      description: "Multi-user platform for book cataloging and checkout management.",
      image: "https://images.unsplash.com/photo-1668441126118-7ba4c6bac1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2MDI5NTExM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Role-based Access", "Database"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent work showcasing diverse technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="relative p-5 flex-1 flex flex-col z-10">
                  <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <Github className="h-3.5 w-3.5 group-hover/link:scale-110 transition-transform" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <ExternalLink className="h-3.5 w-3.5 group-hover/link:scale-110 transition-transform" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices",
    },
    {
      icon: Layout,
      title: "Design Focus",
      description: "Creating intuitive, beautiful interfaces that users love",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project",
    },
    {
      icon: Briefcase,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and user experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden border border-border rounded-lg">
              <div className="relative aspect-square">
                <ImageWithFallback
                  src="/profile_8.jpeg"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a full-stack developer with 3+ years of professional experience building clean,
                reliable applications with modern web technologies. Currently pursuing my M.S. in Information
                Technology and Management at Illinois Institute of Technology with a perfect 4.00 GPA.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                My expertise spans across React, Vue.js, TypeScript, Django, Laravel, and cloud technologies
                (AWS S3, CloudFront, Route 53). I'm passionate about writing maintainable code, implementing
                robust security measures, and building scalable REST APIs. I've successfully delivered projects
                ranging from healthcare appointment systems to real-time messaging applications.
              </p>
              <p className="text-lg text-muted-foreground">
                As a Teaching Assistant at Illinois Tech, I mentor students in web development fundamentals
                and conduct code reviews, reinforcing my commitment to clean code practices and knowledge sharing.
                I'm always eager to collaborate on innovative projects and tackle complex technical challenges.
              </p>
            </div>

            
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="p-2 bg-accent rounded-lg">
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "Illinois Institute of Technology",
      location: "Chicago, IL",
      period: "Aug 2025 - Dec 2025",
      type: "Part-time",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "Mentored students in HTML/CSS/JS, improving lab completion rates",
        "Conducted code reviews and created debugging guides via Git/GitHub",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
    },
    {
      title: "Full-Stack Web Developer",
      company: "Gopanear LLP",
      location: "Surat, India",
      period: "Jul 2020 - Sep 2023",
      type: "Full-time",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      highlights: [
        "Built Laravel + Vue apps with REST APIs, improving delivery speed",
        "Developed Biddo.net ad-management platform with scalable architecture",
        "Implemented security with JWT, validation, and role-based access control",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "JWT"],
    },
    {
      title: "Intern Trainee",
      company: "Gopanear LLP",
      location: "Surat, India",
      period: "Jan 2020 - Jun 2020",
      type: "Internship",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      highlights: [
        "Assisted senior engineers in feature development across multiple projects",
      ],
      technologies: ["PHP", "Vue.js", "React", "SASS"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
              Career Journey
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3+ years of professional development across diverse tech stacks
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-12 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${experience.color} ring-4 ring-background`}
                  />
                </div>

                <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}>
                  {/* Card */}
                  <div className={index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:col-start-2"}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative"
                    >
                      {/* Gradient glow effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${experience.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500`} />
                      
                      <div className="relative p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300">
                        {/* Header with icon */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${experience.color} shadow-lg`}>
                              <experience.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl mb-1">{experience.title}</h3>
                              <p className="text-sm text-muted-foreground">{experience.company}</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs border border-border/50">
                            {experience.type}
                          </span>
                        </div>

                        {/* Location and date */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-primary" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-primary" />
                            {experience.location}
                          </div>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2 mb-4">
                          {experience.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                              className="flex gap-2 text-sm text-muted-foreground"
                            >
                              <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${experience.color} flex-shrink-0`} />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIdx) => (
                            <motion.span
                              key={techIdx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.2, delay: index * 0.2 + techIdx * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 bg-accent/50 text-xs rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 && <div className="hidden lg:block" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Education Section
// function EducationSection() {
//   const education = [
//     {
//       degree: "M.S. in Information Technology and Management",
//       school: "Illinois Institute of Technology",
//       location: "Chicago, IL",
//       period: "Jan 2024 - Dec 2025",
//       gpa: "4.00",
//       status: "In Progress",
//       icon: GraduationCap,
//       color: "from-blue-500 to-cyan-500",
//       courses: [
//         "OOP",
//         "Web Dev",
//         "Project Mgmt",
//         "Testing",
//         "Adv Programming",
//         "IoT Apps",
//       ],
//     },
//     {
//       degree: "Bachelor of Computer Applications",
//       school: "C. B. Patel Computer College",
//       location: "Surat, India",
//       period: "Graduated",
//       gpa: "7.39 / 10",
//       status: "Completed",
//       icon: Award,
//       color: "from-purple-500 to-pink-500",
//       courses: [],
//     },
//   ];

//   return (
//     <section id="education" className="py-20 px-4 bg-accent/10">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-block mb-4"
//           >
//             <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
//               Academic Background
//             </span>
//           </motion.div>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
//             Education
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Strong foundation in computer science and software engineering
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <motion.div
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group h-full"
//               >
//                 {/* Gradient glow effect */}
//                 <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500`} />
                
//                 <div className="relative h-full p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
//                   {/* Background pattern */}
//                   <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
//                     <div className={`w-full h-full bg-gradient-to-br ${edu.color} rounded-full blur-2xl`} />
//                   </div>

//                   <div className="relative z-10">
//                     {/* Header */}
//                     <div className="flex items-start justify-between mb-6">
//                       <div className={`p-4 rounded-xl bg-gradient-to-br ${edu.color} shadow-lg`}>
//                         <edu.icon className="h-8 w-8 text-white" />
//                       </div>
//                       <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-xs shadow-lg`}>
//                         {edu.status}
//                       </span>
//                     </div>

//                     {/* Degree info */}
//                     <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
//                       {edu.degree}
//                     </h3>
//                     <p className="text-muted-foreground mb-1">{edu.school}</p>
//                     <p className="text-sm text-muted-foreground mb-6">{edu.location}</p>

//                     {/* Stats */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="p-3 bg-accent/50 rounded-lg border border-border/50">
//                         <div className="flex items-center gap-2 mb-1">
//                           <Calendar className="h-3.5 w-3.5 text-primary" />
//                           <span className="text-xs text-muted-foreground">Period</span>
//                         </div>
//                         <p className="text-sm">{edu.period}</p>
//                       </div>
//                       <div className="p-3 bg-accent/50 rounded-lg border border-border/50">
//                         <div className="flex items-center gap-2 mb-1">
//                           <Award className="h-3.5 w-3.5 text-primary" />
//                           <span className="text-xs text-muted-foreground">GPA</span>
//                         </div>
//                         <p className={`text-sm bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
//                           {edu.gpa}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Coursework */}
//                     {edu.courses.length > 0 && (
//                       <div>
//                         <div className="flex items-center gap-2 mb-3">
//                           <BookOpen className="h-4 w-4 text-primary" />
//                           <h4 className="text-sm">Key Courses</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                           {edu.courses.map((course, courseIdx) => (
//                             <motion.span
//                               key={courseIdx}
//                               initial={{ opacity: 0, scale: 0.8 }}
//                               whileInView={{ opacity: 1, scale: 1 }}
//                               viewport={{ once: true }}
//                               transition={{ duration: 0.2, delay: index * 0.2 + courseIdx * 0.05 }}
//                               whileHover={{ scale: 1.05, y: -2 }}
//                               className="px-2.5 py-1 bg-secondary/50 text-xs rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
//                             >
//                               {course}
//                             </motion.span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Achievement badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex justify-center"
//         >
//           {/* <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="group relative"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-300" />
//             <div className="relative px-8 py-4 bg-card border border-border/50 rounded-2xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full">
//                   <Award className="h-6 w-6 text-yellow-500" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm text-muted-foreground">Academic Excellence</p>
//                   <p className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
//                     Perfect 4.00 GPA
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Django", "Python", "Laravel", "PHP", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["MySQL", "MongoDB Atlas", "Django ORM"],
    },
    {
      title: "DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["AWS S3", "CloudFront", "Route 53", "GitHub Actions", "Docker"],
    },
    {
      title: "Tools",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      skills: ["Git/GitHub", "npm", "Vercel", "Firebase", "JWT"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
              Technical Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern tech stack for building scalable web applications
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500`} />
                
                <div className="relative h-full p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200 
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -4,
                          transition: { duration: 0.2 }
                        }}
                        className={`px-3 py-1.5 border/50 border text-sm rounded-lg  hover:border-primary/50 hover:shadow-md cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{category.skills.length} Technologies</span>
                      <motion.div
                        className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div> */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {skillCategories.map((category, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="group h-full">
        {/* Gradient glow */}
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0`}
        />

        <div className="relative h-full p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl">
          {/* Icon header */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
              <category.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg">{category.title}</h3>
          </div>

          {/* Skills grid */}
          {/* <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1.5 border border-border/50 text-sm rounded-lg cursor-default"
              >
                {skill}
              </span>
            ))}
          </div> */}
          <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200 
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -4,
                          transition: { duration: 0.2 }
                        }}
                        className={`px-3 py-1.5 border/50 border text-sm rounded-lg  hover:border-primary/50 hover:shadow-md cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

          {/* Skill count badge */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{category.skills.length} Technologies</span>
              <div
                className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full">
            <GitBranch className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Always exploring new technologies and best practices
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mansidungrani13@gmail.com",
      href: "mailto:mansidungrani13@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (872) 340-5928",
      href: "tel:+18723405928",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chicago, IL",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mdungrani", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mansidungrani", label: "LinkedIn" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 bg-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="p-8 md:p-10 border border-border bg-card/50 backdrop-blur-sm rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity group min-w-[200px]"
                >
                  Send Message
                  <Send className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6 border border-border bg-card/50 backdrop-blur-sm rounded-lg hover:border-primary/50 transition-all duration-300 group text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-4 bg-accent rounded-full group-hover:bg-primary/10 transition-colors">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card/50 backdrop-blur-sm hover:bg-accent border border-border rounded-full transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
// function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="py-8 px-4 border-t border-border">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row items-center justify-between gap-4"
//         >
//           <p className="text-sm text-muted-foreground">
//             © {currentYear} Mansi Dungrani.
//           </p>
//           <p className="text-sm text-muted-foreground flex items-center gap-2">
//             Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

// Main App
export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        {/* <EducationSection /> */}
        <SkillsSection />
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
