import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/Pala-Logo.png";

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFCD00] to-[#F5CE5B]">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-4 sm:p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto w-full relative z-10"
      >
        <Link to="/" className="bg-white rounded-full shadow-lg">
          <img
            src={Logo}
            alt="Logo"
            className="h-[60px] sm:h-[80px] md:h-[100px] block"
          />
        </Link>
        <Link
          to="/"
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 pb-16"
      >
        <div className="rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-medium-gray space-y-6">
            <p className="text-lg mb-6">
              Esta política de privacidad se aplica a la aplicación Pala (en adelante denominada "Aplicación") para dispositivos móviles que fue creada por Pala App (en adelante denominada "Proveedor de Servicios") como un servicio gratuito. Este servicio está destinado para uso "TAL COMO ESTÁ".
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Recopilación y Uso de Información
            </h2>
            <p className="mb-4">
              La Aplicación recopila información cuando la descargas y la usas. Esta información puede incluir:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La dirección de Protocolo de Internet de tu dispositivo (por ejemplo, dirección IP)</li>
              <li>Las páginas de la Aplicación que visitas, la hora y fecha de tu visita, el tiempo pasado en esas páginas</li>
              <li>El tiempo pasado en la Aplicación</li>
              <li>El sistema operativo que usas en tu dispositivo móvil</li>
            </ul>

            <p className="mb-4">
              La Aplicación no recopila información precisa sobre la ubicación de tu dispositivo móvil.
            </p>

            <p className="mb-4">
              La Aplicación recopila la ubicación de tu dispositivo, lo que ayuda al Proveedor de Servicios a determinar tu ubicación geográfica aproximada y hacer uso de las siguientes maneras:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Servicios de Geolocalización:</strong> El Proveedor de Servicios utiliza datos de ubicación para proporcionar características como contenido personalizado, recomendaciones relevantes y servicios basados en ubicación.</li>
              <li><strong>Análisis y Mejoras:</strong> Los datos de ubicación agregados y anonimizados ayudan al Proveedor de Servicios a analizar el comportamiento del usuario, identificar tendencias y mejorar el rendimiento general y la funcionalidad de la Aplicación.</li>
              <li><strong>Servicios de Terceros:</strong> Periódicamente, el Proveedor de Servicios puede transmitir datos de ubicación anonimizados a servicios externos. Estos servicios les ayudan a mejorar la Aplicación y optimizar sus ofertas.</li>
            </ul>

            <p className="mb-6">
              El Proveedor de Servicios puede usar la información que proporcionaste para contactarte de vez en cuando para brindarte información importante, avisos requeridos y promociones de marketing.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Acceso de Terceros
            </h2>
            <p className="mb-4">
              Solo se transmiten periódicamente datos agregados y anonimizados a servicios externos para ayudar al Proveedor de Servicios a mejorar la Aplicación y su servicio. El Proveedor de Servicios puede compartir tu información con terceros de las maneras que se describen en esta declaración de privacidad.
            </p>
            <p className="mb-4">
              Ten en cuenta que la Aplicación utiliza servicios de terceros que tienen su propia Política de Privacidad sobre el manejo de datos. A continuación se encuentran los enlaces a la Política de Privacidad de los proveedores de servicios de terceros utilizados por la Aplicación:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><a href="https://www.google.com/policies/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google</a></li>
              <li><a href="https://expo.io/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Expo</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Derechos de Exclusión
            </h2>
            <p className="mb-6">
              Puedes detener toda recopilación de información por parte de la Aplicación fácilmente desinstalándola. Puedes usar los procesos de desinstalación estándar que pueden estar disponibles como parte de tu dispositivo móvil o a través del mercado de aplicaciones móviles o red.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Política de Retención de Datos
            </h2>
            <p className="mb-6">
              El Proveedor de Servicios retendrá los datos proporcionados por el usuario mientras uses la Aplicación y por un tiempo razonable después. Si deseas que eliminen los datos proporcionados por el usuario que has proporcionado a través de la Aplicación, contáctalos en soporte@pala-app.com y responderán en un tiempo razonable.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Menores de Edad
            </h2>
            <p className="mb-6">
              El Proveedor de Servicios no usa la Aplicación para solicitar datos conscientemente o comercializar a menores de 13 años. La Aplicación no se dirige a personas menores de 13 años. El Proveedor de Servicios no recopila conscientemente información personal identificable de niños menores de 13 años de edad. En el caso de que el Proveedor de Servicios descubra que un niño menor de 13 años ha proporcionado información personal, la eliminará inmediatamente de sus servidores.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Seguridad
            </h2>
            <p className="mb-6">
              El Proveedor de Servicios está preocupado por salvaguardar la confidencialidad de tu información. El Proveedor de Servicios proporciona salvaguardas físicas, electrónicas y de procedimiento para proteger la información que el Proveedor de Servicios procesa y mantiene.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Cambios
            </h2>
            <p className="mb-6">
              Esta Política de Privacidad puede actualizarse de vez en cuando por cualquier motivo. El Proveedor de Servicios te notificará de cualquier cambio a la Política de Privacidad actualizando esta página con la nueva Política de Privacidad. Se te aconseja consultar esta Política de Privacidad regularmente para cualquier cambio, ya que el uso continuado se considera aprobación de todos los cambios.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Tu Consentimiento
            </h2>
            <p className="mb-6">
              Al usar la Aplicación, estás consintiendo al procesamiento de tu información como se establece en esta Política de Privacidad ahora y como sea enmendada por nosotros.
            </p>

            <h2 className="text-2xl font-bold text-dark-gray mt-8 mb-4">
              Contáctanos
            </h2>
            <p className="mb-6">
              Si tienes alguna pregunta sobre la privacidad mientras usas la Aplicación, o tienes preguntas sobre las prácticas, contacta al Proveedor de Servicios por correo electrónico en <a href="mailto:soporte@pala-app.com" className="text-primary hover:underline">soporte@pala-app.com</a>.
            </p>

            <p className="text-sm text-medium-gray mt-8 text-center border-t pt-6">
              Esta política de privacidad es efectiva a partir del 18 de junio de 2025<br/>
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};