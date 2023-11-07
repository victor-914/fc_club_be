// @ts-ignore
import favicon from "./extensions/rangers.png";
// @ts-ignore
import logo from "./extensions/rangers.png";
// @ts-ignore
import AuthLogo from "./extensions/rangers.png";
const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dasboard",
      "Auth.form.welcome.title": "Welcome",
      "Auth.form.welcome.subtitle": "Log in to your Dashboard",
    },
  },
  menu: {
    logo,
  },
  head: {
    favicon,
  },
  auth: {
    logo: AuthLogo,
  },
  // Disable video tutorials
  tutorials: true,
  // Disable notifications about new Strapi releases
  notifications: { releases: true },
  theme: {
    light: {
      colors: {
        primary100: "#ec9394",
        primary200: "#000",
        primary500: "#dd3c3e",
        primary600: "#000",
        primary700: "#000",
        danger700: "#821718",
        buttonPrimary500: "#c32224",
        buttonPrimary600: "#d92628",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
