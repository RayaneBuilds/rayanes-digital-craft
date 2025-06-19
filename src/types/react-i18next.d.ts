
import 'react-i18next';
import { ReactNode } from 'react';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
  
  export type ReactI18NextChildren = ReactNode;
}
