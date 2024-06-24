// src/hooks/useIsMobile.js
import { useContext } from 'react';
import { IsMobileContext } from '../App';

export const useIsMobile = () => {
  return useContext(IsMobileContext);
};