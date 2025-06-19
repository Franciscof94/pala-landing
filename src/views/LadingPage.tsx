import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import Logo from "../assets/Pala-Logo.png";
import Home from "../assets/Home.png";
import Message from "../assets/Message.png";

// Componente para las características con animación
const FeatureItem = ({ icon, title, description, delay = 0 }: any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:items-start text-center md:text-left"
    >
      <div className="bg-primary/10 p-3 rounded-full mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-dark-gray mb-2">{title}</h3>
      <p className="text-medium-gray">{description}</p>
    </motion.div>
  );
};

// Componente para las secciones con animación al hacer scroll
const ScrollSection = ({ children, className = "" }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className={`py-16 md:py-24 w-full ${className}`}
    >
      {children}
    </motion.section>
  );
};

// Componente para testimonios
const Testimonial = ({ name, role, text, image, delay = 0 }: any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } },
      }}
      className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full"
    >
      <p className="text-medium-gray mb-6 flex-grow italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <p className="font-bold text-dark-gray">{name}</p>
          <p className="text-sm text-medium-gray">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Componente para el botón de navegación
const NavButton = ({ children, onClick, active = false }: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
        active
          ? "bg-primary text-white"
          : "bg-white/20 text-white hover:bg-white/30"
      }`}
    >
      {children}
    </button>
  );
};

// Componente principal de la landing page
export const LandingPage = () => {
  // Referencia para el scroll
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Animaciones para el parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-gradient-to-br from-[#FFCD00] to-[#F5CE5B] overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col overflow-hidden relative"
        ref={targetRef}
      >
        {/* Círculos decorativos con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute w-[500px] h-[500px] rounded-full bg-white/15 top-[-150px] right-[-100px] backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute w-[400px] h-[400px] rounded-full bg-white/15 bottom-[-100px] left-[-100px] backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute w-[400px] h-[400px] rounded-full bg-white/15 bottom-[540px] left-[-60px] backdrop-blur-md"
        />

        {/* Encabezado con animación */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-4 sm:p-6 md:p-8 flex justify-center md:justify-start items-center max-w-7xl mx-auto w-full relative z-10"
        >
          <div className="bg-white rounded-full shadow-lg">
            <img
              src={Logo}
              alt="Logo"
              className="h-[80px] sm:h-[100px] md:h-[125px] block"
            />
          </div>
        </motion.header>

        {/* Contenido Principal con animación */}
        <main className="flex items-center max-w-7xl p-4 mx-auto w-full relative z-10 overflow-x-hidden md:flex-1">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
            {/* Vistas Previas de la Aplicación con animación */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 md:order-2 max-w-[600px] relative flex justify-center items-center h-[350px] md:h-[600px] mt-[20px] md:mt-0 md:flex-1"
            >
              {/* Imagen de Chat (debajo) con animación */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 0.95 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute w-[180px] md:w-[280px] z-0 translate-x-[-20px] md:translate-x-[-40px]"
              >
                <img
                  src={Message}
                  alt="Vista Previa de Chat"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
              {/* Imagen de Home (encima) con animación */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute w-[180px] md:w-[280px] z-10 translate-x-[40px] md:translate-x-[60px] mb-[40px] md:mb-[130px]"
              >
                <img
                  src={Home}
                  alt="Vista Previa Principal"
                  className="w-full h-auto rounded-xl mt-10 shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Contenido de Texto con animación */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 md:order-1 flex-1 min-w-[280px] sm:min-w-[300px] max-w-[820px] text-center md:text-left px-4"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[clamp(32px,5vw,50px)] font-extrabold text-soft-white mb-4 md:mb-6 leading-tight"
              >
                Encuentra los servicios que necesitas
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-[clamp(14px,2vw,20px)] text-[#4c4c4c] mb-6 md:mb-10 opacity-95 font-medium leading-relaxed"
              >
                Conectamos personas con los mejores profesionales. Una
                plataforma simple y segura para encontrar servicios de calidad.
              </motion.p>
              {/* Botones de Descarga con animación */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex gap-4 flex-wrap justify-center md:justify-start"
              >
                <a
                  href="#"
                  className="transition-transform duration-200 cursor-pointer hover:scale-105"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                    alt="Descargar en App Store"
                    className="h-14"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform duration-200 cursor-pointer hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Obtener en Play Store"
                    className="h-14 rounded-md"
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Flecha indicadora de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-white mb-2 font-medium">
            Desliza para descubrir más
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Sección de Características */}
      <ScrollSection className="bg-soft-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-gray mb-4">
              Descubre todo lo que puedes hacer
            </h2>
            <p className="text-medium-gray text-xl max-w-3xl mx-auto">
              Nuestra aplicación te ofrece todas las herramientas que necesitas
              para encontrar el servicio perfecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem
              icon="🔍"
              title="Búsqueda avanzada"
              description="Filtra resultados por tipo de servicio, provincia y ciudad para encontrar exactamente lo que necesitas."
              delay={0.1}
            />
            <FeatureItem
              icon="📅"
              title="Disponibilidad en tiempo real"
              description="Ve la disponibilidad de los profesionales y agenda servicios cuando más te convenga."
              delay={0.2}
            />
            <FeatureItem
              icon="⭐"
              title="Guarda tus favoritos"
              description="Marca tus profesionales preferidos para acceder rápidamente a sus servicios en el futuro."
              delay={0.3}
            />
            <FeatureItem
              icon="👍"
              title="Calificaciones y opiniones"
              description="Consulta la calificación y opiniones de otros usuarios para tomar la mejor decisión."
              delay={0.4}
            />
            <FeatureItem
              icon="💬"
              title="Chat integrado"
              description="Una vez aceptada la solicitud, coordina todos los detalles directamente con el profesional."
              delay={0.5}
            />
            <FeatureItem
              icon="💰"
              title="Presupuestos personalizados"
              description="Recibe presupuestos adaptados específicamente a tus necesidades."
              delay={0.6}
            />
          </div>
        </div>
      </ScrollSection>

      {/* Sección de Cómo Funciona */}
      <ScrollSection className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              En simples pasos, conectamos tus necesidades con los mejores
              profesionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center"
              >
                <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Busca el servicio</h3>
                <p className="opacity-90">
                  Explora entre diferentes categorías y filtra por ubicación
                  para encontrar el servicio que necesitas.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="hidden md:block absolute top-1/2 right-[-30px] transform translate-x-1/2 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center"
              >
                <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Envía tu solicitud</h3>
                <p className="opacity-90">
                  Selecciona al profesional que prefieras y envía una solicitud
                  detallando lo que necesitas.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="hidden md:block absolute top-1/2 right-[-30px] transform translate-x-1/2 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center"
            >
              <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Coordina y disfruta</h3>
              <p className="opacity-90">
                Una vez aceptada la solicitud, coordina los detalles por chat y
                recibe el servicio que necesitas.
              </p>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* Sección de Características Detalladas */}
      <ScrollSection className="bg-soft-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-dark-gray mb-4">
                Características destacadas
              </h2>
              <p className="text-medium-gray text-xl max-w-3xl mx-auto">
                Descubre por qué nuestra aplicación es la mejor opción para
                encontrar servicios profesionales
              </p>
            </motion.div>

            {/* Característica 1: Búsqueda avanzada */}
            <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold text-dark-gray mb-4">
                  Búsqueda avanzada y filtrado inteligente
                </h3>
                <p className="text-medium-gray mb-6">
                  Encuentra exactamente lo que necesitas con nuestro sistema de
                  filtrado avanzado. Busca por:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Tipo de servicio (plomería, electricidad, limpieza, etc.)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Provincia y ciudad para servicios cercanos a ti
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Disponibilidad y horarios de atención
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Calificación y reputación de los profesionales
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/2 order-1 md:order-2 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="bg-soft-gray rounded-lg p-4 h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔍</div>
                    <p className="text-medium-gray">
                      Ilustración de la interfaz de búsqueda
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Característica 2: Chat y coordinación */}
            <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/2 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="bg-soft-gray rounded-lg p-4 h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💬</div>
                    <p className="text-medium-gray">
                      Ilustración de la interfaz de chat
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-bold text-dark-gray mb-4">
                  Comunicación directa y presupuestos personalizados
                </h3>
                <p className="text-medium-gray mb-6">
                  Una vez que el profesional acepta tu solicitud, disfruta de
                  estas ventajas:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Chat integrado para coordinar todos los detalles
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Recibe presupuestos personalizados según tus necesidades
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Notificaciones instantáneas cuando recibas respuestas
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Comparte fotos y detalles específicos de tu proyecto
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Característica 3: Favoritos y calificaciones */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold text-dark-gray mb-4">
                  Sistema de favoritos y calificaciones
                </h3>
                <p className="text-medium-gray mb-6">
                  Toma decisiones informadas y guarda tus profesionales
                  preferidos:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Guarda tus profesionales favoritos con un solo toque
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Consulta calificaciones detalladas de otros usuarios
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Lee opiniones y experiencias de clientes anteriores
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFBE00"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark-gray">
                      Califica tú mismo después de recibir el servicio
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/2 order-1 md:order-2 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="bg-soft-gray rounded-lg p-4 h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">⭐</div>
                    <p className="text-medium-gray">
                      Ilustración del sistema de calificaciones
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Sección de Testimonios */}
      <ScrollSection className="bg-gradient-to-br from-[#FFCD00] to-[#F5CE5B] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Miles de personas ya encontraron el servicio que necesitaban
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              name="Laura Martínez"
              image={""}
              role="Cliente"
              text="Encontré un electricista excelente en minutos. La comunicación fue muy fluida y el trabajo quedó perfecto. ¡Totalmente recomendable!"
              delay={0.1}
            />
            <Testimonial
              image={""}
              name="Carlos Rodríguez"
              role="Cliente"
              text="Me encanta poder ver las calificaciones antes de contratar. Me da mucha confianza y hasta ahora todos los servicios han sido de primera calidad."
              delay={0.3}
            />
            <Testimonial
              image={""}
              name="Marta González"
              role="Cliente"
              text="El chat integrado hace que sea muy fácil coordinar los detalles. Además, los presupuestos personalizados me ayudan a planificar mejor mis gastos."
              delay={0.5}
            />
          </div>
        </div>
      </ScrollSection>

      {/* Sección de Descarga */}
      <ScrollSection className="bg-soft-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-2/3 text-center md:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡Descarga la app y comienza ahora!
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Encuentra los mejores profesionales para cualquier servicio
                  que necesites, en cualquier momento y lugar.
                </p>
                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                  <a
                    href="#"
                    className="transition-transform duration-200 cursor-pointer hover:scale-105"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                      alt="Descargar en App Store"
                      className="h-14"
                    />
                  </a>
                  <a
                    href="#"
                    className="transition-transform duration-200 cursor-pointer hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Obtener en Play Store"
                      className="h-14 rounded-md"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/3 flex justify-center"
              >
                <div className="relative w-[200px] h-[400px]">
                  <div className="absolute w-[180px] z-0 translate-x-[-20px] opacity-95">
                    <img
                      src={Message}
                      alt="Vista Previa de Chat"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="absolute w-[180px] z-10 translate-x-[20px] translate-y-[40px]">
                    <img
                      src={Home}
                      alt="Vista Previa Principal"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="bg-dark-gray py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img src={Logo} alt="Logo" className="h-[80px] block" />
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="/privacidad"
                className="text-white hover:text-primary transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-white/70">
              © {new Date().getFullYear()} Pala. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
