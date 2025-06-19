
import 'react-i18next';
import { ReactNode } from 'react';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

// Completely override the react-i18next module's ReactI18NextChildren type
declare module 'react-i18next' {
  type ReactI18NextChildren = ReactNode;
}

// Also override the global namespace to ensure compatibility
declare global {
  namespace ReactI18Next {
    type ReactI18NextChildren = ReactNode;
  }
}
