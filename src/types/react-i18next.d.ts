import 'react-i18next';
import es from '../locales/es.json'; // 👈 usa tu archivo real aquí

declare module 'react-i18next' {
  type DefaultResources = typeof es;

  interface Resources {
    translation: DefaultResources;
  }
}
