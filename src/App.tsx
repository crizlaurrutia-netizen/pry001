import { motion } from "motion/react";
import { 
  Monitor, 
  Shield, 
  Cloud, 
  Code2, 
  Database, 
  Smartphone,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Server,
  Cpu,
  Globe
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              CU
            </div>
            <span className="text-xl font-display font-bold tracking-tight">Crizla Urrutia</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Inicio</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Servicios</a>
            <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Portafolio</a>
            <a href="#team" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Equipo</a>
            <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-primary/10 rounded-full">
              Innovación Tecnológica
            </span>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Soluciones IT de <span className="text-primary">Vanguardia</span> para tu Empresa
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Transformamos tu visión en realidad digital. Especialistas en servicios informáticos integrales, desde desarrollo de software hasta ciberseguridad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                Empezar Proyecto <ChevronRight size={20} />
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                Ver Servicios
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                alt="IT Team Working" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-primary" size={32} />,
      title: "Desarrollo de Software",
      description: "Creamos aplicaciones web y móviles personalizadas utilizando las últimas tecnologías."
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      title: "Ciberseguridad",
      description: "Protegemos tus activos digitales con auditorías, pentesting y sistemas de defensa avanzados."
    },
    {
      icon: <Cloud className="text-primary" size={32} />,
      title: "Cloud Computing",
      description: "Migración y gestión de infraestructura en la nube para mayor escalabilidad y eficiencia."
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: "Gestión de Datos",
      description: "Soluciones de Big Data y bases de datos optimizadas para la toma de decisiones."
    },
    {
      icon: <Monitor className="text-primary" size={32} />,
      title: "Soporte Técnico",
      description: "Asistencia técnica especializada 24/7 para garantizar la continuidad de tu negocio."
    },
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: "Apps Móviles",
      description: "Diseño y desarrollo de experiencias móviles nativas e híbridas de alto impacto."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-slate-600">Ofrecemos un abanico completo de soluciones tecnológicas diseñadas para impulsar el crecimiento de tu empresa.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="mb-6 p-3 bg-primary/5 rounded-xl inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Security Audit",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-slate-600">Una muestra de los desafíos que hemos superado y las soluciones que hemos entregado.</p>
          </div>
          <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todo el portafolio <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary-light text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Liderazgo</h2>
          <p className="text-slate-400">El equipo detrás de la excelencia tecnológica.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6 border-4 border-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                alt="Crizla Urrutia" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">Crizla Urrutia</h3>
            <p className="text-primary font-medium mb-4">Fundadora & Directora de Tecnología</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary transition-colors"><Github size={20} /></a>
            </div>
          </div>
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6 border-4 border-secondary/20">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" 
                alt="Julio Sepulveda" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">Julio Sepulveda</h3>
            <p className="text-secondary font-medium mb-4">CEO & Estrategia de Negocios</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-secondary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-secondary transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">¿Listo para innovar?</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Estamos aquí para responder tus dudas y ayudarte a llevar tu infraestructura tecnológica al siguiente nivel.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-slate-600">contacto@crizlaurrutia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p className="text-slate-600">+56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Ubicación</h4>
                  <p className="text-slate-600">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Asunto</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              CU
            </div>
            <span className="text-xl font-display font-bold tracking-tight">Crizla Urrutia</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Crizla Urrutia IT Services. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Globe size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
