import Logo from "../assets/Pala-Logo.png";
import Home from "../assets/Home.png";
import Message from "../assets/Message.png";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFCD00] to-[#F5CE5B] flex flex-col overflow-hidden relative">
      {/* Círculos decorativos */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/15 top-[-150px] right-[-100px] backdrop-blur-md" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/15 bottom-[-100px] left-[-100px] backdrop-blur-md" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/15 bottom-[540px] left-[-60px] backdrop-blur-md" />

      {/* Encabezado */}
      <header className="p-4 sm:p-6 md:p-8 flex justify-center md:justify-start items-center max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-full shadow-lg">
          <img
            src={Logo}
            alt="Logo"
            className="h-[80px] sm:h-[100px] md:h-[125px] block"
          />
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex items-center max-w-7xl p-4 mx-auto w-full relative z-10 overflow-x-hidden md:flex-1">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          {/* Vistas Previas de la Aplicación */}
          <div className="order-1 md:order-2 max-w-[600px] relative flex justify-center items-center h-[350px] md:h-[600px] mt-[20px] md:mt-0 md:flex-1">
            {/* Imagen de Chat (debajo) */}
            <div className="absolute w-[180px] md:w-[280px] z-0 translate-x-[-20px] md:translate-x-[-40px] opacity-95">
              <img
                src={Message}
                alt="Vista Previa de Chat"
                className="w-full h-auto rounded-xl"
              />
            </div>
            {/* Imagen de Home (encima) */}
            <div className="absolute w-[180px] md:w-[280px] z-10 translate-x-[40px] md:translate-x-[60px] mb-[40px] md:mb-[130px]">
              <img
                src={Home}
                alt="Vista Previa Principal"
                className="w-full h-auto rounded-xl mt-10"
              />
            </div>
          </div>

          {/* Contenido de Texto */}
          <div className="order-2 md:order-1 flex-1 min-w-[280px] sm:min-w-[300px] max-w-[820px] text-center md:text-left px-4">
            <h1 className="text-[clamp(32px,5vw,50px)] font-extrabold text-soft-white mb-4 md:mb-6 leading-tight">
              Encuentra los servicios que necesitas
            </h1>
            <p className="text-[clamp(14px,2vw,20px)] text-[#4c4c4c] mb-6 md:mb-10 opacity-95 font-medium leading-relaxed">
              Conectamos personas con los mejores profesionales. Una plataforma
              simple y segura para encontrar servicios de calidad.
            </p>
            {/* Botones de Descarga */}
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
          </div>
        </div>
      </main>
    </div>
  );
};