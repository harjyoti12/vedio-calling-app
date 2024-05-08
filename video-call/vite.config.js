import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import  react  from '@vitejs/plugin-react';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  // Your Vite configuration
  plugins: [react()],
});




