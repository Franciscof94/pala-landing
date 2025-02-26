

export const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-[#f3b137] to-[#F5CE5B] flex flex-col overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/15 top-[-150px] right-[-100px] backdrop-blur-md" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/15 bottom-[-100px] left-[-100px] backdrop-blur-md" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/15 bottom-[540px] left-[-60px] backdrop-blur-md" />

      {/* Header */}
      <header className="p-8 md:p-6 flex justify-start items-center max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-white p-1 rounded-full shadow-lg">
          <img
            src="https://i.postimg.cc/6Q0kg7Ss/Pala-Logo.png"
            alt="Logo"
            className="h-[125px] block"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center max-w-7xl p-4 md:p-0 mx-auto w-full relative z-10">
        <div className="flex items-center justify-between gap-12 w-full flex-wrap">
          {/* Text Content */}
          <div className="flex-1 min-w-[300px] max-w-[820px]">
            <h1 className="text-[clamp(40px,5vw,50px)] font-extrabold text-soft-white mb-6 leading-tight">
              Encuentra los servicios que necesitas
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-[#4c4c4c] mb-10 opacity-95 font-medium leading-relaxed">
              Conectamos personas con los mejores profesionales. Una plataforma
              simple y segura para encontrar servicios de calidad.
            </p>
            {/* Download Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="transition-transform duration-200 cursor-pointer">
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                  alt="Download on App Store"
                  className="h-14"
                />
              </a>
              <a href="#" className="transition-transform duration-200 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Play Store"
                  className="h-14 rounded-md"
                />
              </a>
            </div>
          </div>

          {/* App Previews */}
          <div className="flex-1 max-w-[600px] relative flex justify-center items-center h-[600px]">
            {/* Main Preview */}
            <div className="absolute w-[280px] z-10 translate-x-[100px] mb-[130px]">
              <img
                src="https://i.postimg.cc/D0gDJck2/Component-63.png"
                alt="App Preview Main"
                className="w-full h-auto rounded-xl"
              />
            </div>
            {/* Secondary Preview */}
            <div className="absolute w-[280px] z-0 translate-x-[-40px] opacity-95">
              <img
                src="https://i.postimg.cc/s2Qt6SSc/Component-62.png"
                alt="App Preview Chat"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};