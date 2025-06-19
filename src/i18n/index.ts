
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        services: "Services",
        contact: "Contact",
        blog: "Blog"
      },
      hero: {
        title: "WordPress & Web Developer",
        subtitle: "I build modern digital experiences that drive business growth",
        cta1: "Hire Me",
        cta2: "View Projects",
        downloadCV: "Download CV"
      },
      about: {
        title: "About Me",
        description: "Passionate web developer with expertise in WordPress, React, and modern web technologies. I help businesses create powerful online presences."
      },
      projects: {
        title: "Featured Projects",
        viewDemo: "View Demo",
        viewCode: "View Code"
      },
      services: {
        title: "Services",
        wordpress: "WordPress Development",
        custom: "Custom Web Development",
        ecommerce: "E-commerce Solutions",
        maintenance: "Website Maintenance"
      },
      contact: {
        title: "Get In Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        projects: "Projets",
        services: "Services",
        contact: "Contact",
        blog: "Blog"
      },
      hero: {
        title: "Développeur WordPress & Web",
        subtitle: "Je crée des expériences numériques modernes qui stimulent la croissance des entreprises",
        cta1: "Embauchez-moi",
        cta2: "Voir les Projets",
        downloadCV: "Télécharger CV"
      },
      about: {
        title: "À Propos de Moi",
        description: "Développeur web passionné avec une expertise en WordPress, React et technologies web modernes. J'aide les entreprises à créer de puissantes présences en ligne."
      },
      projects: {
        title: "Projets Phares",
        viewDemo: "Voir Démo",
        viewCode: "Voir Code"
      },
      services: {
        title: "Services",
        wordpress: "Développement WordPress",
        custom: "Développement Web Sur Mesure",
        ecommerce: "Solutions E-commerce",
        maintenance: "Maintenance de Sites Web"
      },
      contact: {
        title: "Contactez-moi",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer Message"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "نبذة عني",
        projects: "المشاريع",
        services: "الخدمات",
        contact: "اتصل بي",
        blog: "المدونة"
      },
      hero: {
        title: "مطور ووردبريس وويب",
        subtitle: "أبني تجارب رقمية حديثة تدفع نمو الأعمال",
        cta1: "وظفني",
        cta2: "عرض المشاريع",
        downloadCV: "تحميل السيرة الذاتية"
      },
      about: {
        title: "نبذة عني",
        description: "مطور ويب شغوف بخبرة في ووردبريس وريأكت والتقنيات الحديثة. أساعد الشركات في إنشاء حضور قوي على الإنترنت."
      },
      projects: {
        title: "المشاريع المميزة",
        viewDemo: "عرض التجربة",
        viewCode: "عرض الكود"
      },
      services: {
        title: "الخدمات",
        wordpress: "تطوير ووردبريس",
        custom: "تطوير ويب مخصص",
        ecommerce: "حلول التجارة الإلكترونية",
        maintenance: "صيانة المواقع"
      },
      contact: {
        title: "تواصل معي",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Acerca",
        projects: "Proyectos",
        services: "Servicios",
        contact: "Contacto",
        blog: "Blog"
      },
      hero: {
        title: "Desarrollador WordPress & Web",
        subtitle: "Construyo experiencias digitales modernas que impulsan el crecimiento empresarial",
        cta1: "Contrátame",
        cta2: "Ver Proyectos",
        downloadCV: "Descargar CV"
      },
      about: {
        title: "Acerca de Mí",
        description: "Desarrollador web apasionado con experiencia en WordPress, React y tecnologías web modernas. Ayudo a empresas a crear presencias online poderosas."
      },
      projects: {
        title: "Proyectos Destacados",
        viewDemo: "Ver Demo",
        viewCode: "Ver Código"
      },
      services: {
        title: "Servicios",
        wordpress: "Desarrollo WordPress",
        custom: "Desarrollo Web Personalizado",
        ecommerce: "Soluciones E-commerce",
        maintenance: "Mantenimiento de Sitios Web"
      },
      contact: {
        title: "Ponte en Contacto",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
