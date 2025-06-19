
import 'react-i18next';
import { ReactNode } from 'react';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
  
  // Override the ReactI18NextChildren type completely
  type ReactI18NextChildren = ReactNode;
}
