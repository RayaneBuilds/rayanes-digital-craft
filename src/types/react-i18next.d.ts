
import 'react-i18next';
import { ReactNode } from 'react';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

declare module 'react-i18next' {
  export type ReactI18NextChildren = ReactNode;
}
