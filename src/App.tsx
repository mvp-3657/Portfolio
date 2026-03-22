import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Cpu, 
  GraduationCap, 
  Award,
  ChevronRight,
  Terminal,
  Globe,
  Binary
} from "lucide-react";

// Data from resume
const projects = [
  {
    title: "Multimodal Deepfake Detection",
    description: "Built a system detecting mismatch between audio phonemes and visual visemes.",
    achievements: [
      "Designed cross-modal attention model for synchronization detection",
      "Built scalable preprocessing and training pipeline",
      "Achieved 97% accuracy and F1-score of 0.98"
    ],
    tags: ["Deep Learning", "Computer Vision", "NLP", "PyTorch"]
  },
  {
    title: "Document Segmentation & Classification",
    description: "Developed intelligent document processing pipeline.",
    achievements: [
      "Used OCR + U-Net for segmentation and classification",
      "Achieved 87% validation accuracy"
    ],
    tags: ["Computer Vision", "OCR", "U-Net", "TensorFlow"]
  }
];

const skills = [
  { category: "Programming", items: ["Python", "Data Structures & Algorithms"] },
  { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Multi-Modal Learning"] },
  { category: "Frameworks/Tools", items: ["PyTorch", "TensorFlow", "OpenCV", "Transformers", "LangChain", "Ollama"] },
  { category: "Domains", items: ["Software Engineering", "AI/ML", "Problem-Solving", "Competitive Programming"] }
];

const certifications = [
  { name: "Salesforce Certified Agentforce Specialist", year: "2025" },
  { name: "Data Structures & Algorithms — Smart Interviews" },
  { name: "NPTEL: Introduction to Machine Learning" },
  { name: "NPTEL: Responsible & Safe AI Systems" },
  { name: "NPTEL: Soft Skills" }
];

const education = {
  degree: "B.Tech – Computer Science (Artificial Intelligence and Machine Learning)",
  institution: "B V Raju Institute of Technology",
  period: "2023 – 2027",
  cgpa: "7.15"
};

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com" },
  { icon: <Globe className="w-5 h-5" />, label: "Codeforces", href: "https://codeforces.com" },
  { icon: <Binary className="w-5 h-5" />, label: "LeetCode", href: "https://leetcode.com" },
  { icon: <Terminal className="w-5 h-5" />, label: "CodeChef", href: "https://codechef.com" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-lg tracking-tighter"
          >
            MALLIKARJUN.PATIL
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-black/60 transition-colors">About</a>
            <a href="#skills" className="hover:text-black/60 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-black/60 transition-colors">Projects</a>
            <a href="#education" className="hover:text-black/60 transition-colors">Education</a>
            <a href="#contact" className="hover:text-black/60 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="brutal-button text-sm uppercase tracking-widest"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                AI & ML Undergraduate
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                MALLIKARJUN <br /> PATIL
              </h1>
              <p className="text-xl text-black/60 max-w-lg leading-relaxed mb-10">
                Aspiring AI and ML undergraduate with strong foundations in machine learning, deep learning, and data structures. 
                Experienced in building end-to-end intelligent systems involving computer vision, NLP, and multimodal learning.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 flex items-center justify-center brutal-border bg-white hover:bg-black hover:text-white transition-colors"
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-3 text-sm font-mono text-black/60">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" /> 23211A6698@bvrit.ac.in
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" /> +91 9959463657
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> Hyderabad, India
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square brutal-border bg-white overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/tech/800/800" 
                  alt="Mallikarjun Patil" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/5 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-black/10 -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Technical Skills</h2>
            <div className="h-[1px] flex-grow bg-black/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 brutal-border bg-white"
              >
                <div className="mb-6">
                  {i === 0 && <Code2 className="w-8 h-8" />}
                  {i === 1 && <BrainCircuit className="w-8 h-8" />}
                  {i === 2 && <Cpu className="w-8 h-8" />}
                  {i === 3 && <Terminal className="w-8 h-8" />}
                </div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-black/40">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="text-sm font-medium flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-black/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Selected Projects</h2>
            <div className="h-[1px] flex-grow bg-black/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="brutal-border bg-white p-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-black/60 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.achievements.map((achievement, j) => (
                      <li key={j} className="text-sm flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-black/5 text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section id="education">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tighter">Education</h2>
              <div className="h-[1px] flex-grow bg-black/10" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="brutal-border bg-white p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/40">{education.period}</div>
                  <h3 className="text-xl font-bold">{education.institution}</h3>
                </div>
              </div>
              <p className="text-lg font-medium mb-4 leading-snug">
                {education.degree}
              </p>
              <div className="inline-block px-3 py-1 bg-black/5 text-sm font-bold">
                CGPA: {education.cgpa}
              </div>
            </motion.div>
          </section>

          <section id="certifications">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tighter">Certifications</h2>
              <div className="h-[1px] flex-grow bg-black/10" />
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 brutal-border bg-white group hover:bg-black hover:text-white transition-colors"
                >
                  <Award className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm">{cert.name}</h4>
                    {cert.year && <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">{cert.year}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-black/5 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase">Let's Connect</h2>
          <div className="flex justify-center gap-8 mb-12">
            {socialLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest hover:underline underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-black/40 text-xs font-mono">
            &copy; {new Date().getFullYear()} MALLIKARJUN PATIL. BUILT WITH PRECISION.
          </p>
        </div>
      </footer>
    </div>
  );
}
