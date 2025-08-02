"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code2,
  Database,
  Smartphone,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const skills = [
  { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-orange-500" },
  { name: "React.js", icon: Code2, color: "from-blue-400 to-cyan-500" },
  { name: "Node.js", icon: Database, color: "from-green-400 to-emerald-500" },
  { name: "Express.js", icon: Database, color: "from-gray-400 to-gray-600" },
  { name: "Angular", icon: Code2, color: "from-red-400 to-pink-500" },
  { name: "Firebase", icon: Database, color: "from-orange-400 to-red-500" },
  { name: "Supabase", icon: Database, color: "from-green-400 to-teal-500" },
  { name: "Electron.js", icon: Smartphone, color: "from-purple-400 to-indigo-500" },
]

const projects = [
  {
    title: "EXAM MANAGEMENT & ATTENDANCE",
    category: "Government Project",
    description:
      "A secure government project for Karnataka State Police managing exam processes, attendance verification, and comprehensive reporting.",
    tech: ["React.js", "Electron.js", "Firebase", "Express.js"],
    highlights: [
      "Developed Admin Portal for exam scheduling and hall ticket generation",
      "Built Attendance Portal with biometric authentication",
      "Used Electron.js to create desktop application (.exe)",
      "Integrated Firebase for real-time database operations",
    ],
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "DEEM (DIGITAL BANKING APP)",
    category: "Banking Solution",
    description:
      "A secure digital banking platform offering users comprehensive access to account summaries, card services, and transaction management.",
    tech: ["Neutrinos (Low-code)", "REST APIs"],
    highlights: [
      "Developed UI screens for account summary and card services",
      "Handled secure user interactions like card blocking and limit setting",
      "Worked with RESTful APIs for real-time data sync",
      "Implemented KYC flows and secure transactions",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "ATMANIRBHARFINS",
    category: "Financial Platform",
    description:
      "A comprehensive dual-portal financial platform for managing advisor onboarding, product discovery, invoicing, and bank commission workflows.",
    tech: ["React.js", "React Native", "Node.js", "Express.js", "Supabase"],
    highlights: [
      "Developed both Admin and Advisor portals with full-stack architecture",
      "Built advisor onboarding, lead management, product browsing features",
      "Implemented role-based user creation and commission calculation",
      "Integrated WhatsApp, SMS, and Email services for real-time notifications",
    ],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "MEALPE",
    category: "Food Delivery",
    description:
      "A modern food ordering and delivery platform built for restaurants and tiffin services with real-time tracking capabilities.",
    tech: ["React.js", "Node.js", "Express.js", "Firebase", "Supabase"],
    highlights: [
      "Developed end-to-end frontend and backend for multiple panels",
      "Integrated real-time order tracking and delivery status",
      "Designed REST APIs for meal management and order processing",
      "Created dynamic dashboards and notification flows",
    ],
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "3D CELL TOWER INSPECTION SYSTEM",
    category: "Drone Technology",
    description:
      "A drone-based system for creating 3D models of cell towers to detect rust and determine required maintenance using advanced photogrammetry.",
    tech: ["React.js", "React Native", "Node.js", "Express.js", "Python"],
    highlights: [
      "Captured high-resolution images using drones from multiple angles",
      "Applied photogrammetry to reconstruct 3D tower structures",
      "Used OpenMVG for Structure-from-Motion and OpenMVS for dense reconstruction",
      "Enabled detection of rust-prone areas and structural defects",
      "Improved safety and reduced manual inspection time significantly",
    ],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "ONLINE CHESS GAME",
    category: "Gaming Platform",
    description:
      "A full-featured web-based chess platform supporting both single and multiplayer modes with comprehensive gaming features.",
    tech: ["React.js", "Firebase Realtime Database", "Firestore Authentication"],
    highlights: [
      "Account creation or play as guest functionality",
      "Player vs Computer and Player vs Player gameplay modes",
      "Leaderboard system to track top players",
      "Chess puzzle solving mode for training and skill improvement",
      "Match viewing feature for replay and analysis",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
]

const achievements = [
  {
    icon: Award,
    title: "OAuth2.0 Implementation",
    description:
      "Successfully implemented secure OAuth2.0 authentication and authorization for enhanced application security.",
  },
  {
    icon: Database,
    title: "IndexedDB Integration",
    description:
      "Expertly utilized Dexie.js within React.js to implement IndexedDB for offline functionality and enhanced performance.",
  },
  {
    icon: Smartphone,
    title: "Desktop Application Development",
    description: "Transformed web applications into executable (.exe) software tailored for Windows platforms.",
  },
]

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroRef = useRef(null)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Pankaj Agade
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6"
              >
                👋 Hello, I'm a Senior Software Engineer
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                <span className="block">Pankaj</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Agade
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Crafting exceptional digital experiences with 4+ years of expertise in full-stack development,
                specializing in React.js, Node.js, and modern web technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 opacity-20"
                />
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                  PA
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate about creating innovative solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A highly motivated Software Engineer with 4 years of professional experience in designing,
                    developing, and maintaining full-stack web applications. I specialize in JavaScript technologies
                    including React.js, Node.js, and Express.js.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    My expertise extends to Firebase, Supabase, and low-code platforms like Neutrinos. I'm passionate
                    about delivering scalable solutions with real-time capabilities, always focusing on performance,
                    security, and clean code architecture.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Nagpur, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+919130743559" className="text-gray-600 hover:text-blue-600 transition-colors">
                        (+91) 9130743559
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a
                        href="mailto:pankajagade.pa@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        pankajagade.pa@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/pankaj-agade-272240189"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-800 font-medium">Bachelor of Engineering</p>
                  <p className="text-gray-600">Information Technology</p>
                  <p className="text-gray-500 text-sm">Priyadarshini Institute of Engineering and Technology, Nagpur</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expertise across modern web technologies and frameworks
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center flex-col text-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-3`}>
                        <skill.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Senior Software Engineer</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-medium">
                        HTS TECH SOLUTIONS
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-2 md:mt-0">
                      February 2021 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-4">
                    {[
                      "Developed and maintained full-stack applications using React.js, Node.js, and Express.js",
                      "Designed and integrated RESTful APIs for user management, orders, payments, and role-based access",
                      "Built backend services for real-time features using Firebase and Supabase",
                      "Implemented authentication, authorization, and secure API flows",
                      "Mentored junior developers and contributed to internal POCs and architecture discussions",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative solutions across various domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <CardHeader className={`bg-gradient-to-r ${project.gradient} text-white`}>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:scale-105 transition-transform">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/90">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+919130743559" className="text-gray-600 hover:text-blue-600 transition-colors">
                    (+91) 9130743559
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:pankajagade.pa@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    pankajagade.pa@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/pankaj-agade-272240189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Connect with me
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 Pankaj Agade. Crafted with ❤️ using Next.js and Tailwind CSS.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/pankaj-agade-272240189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:pankajagade.pa@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
