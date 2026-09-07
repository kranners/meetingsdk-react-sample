import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [process.env.VITE_ALLOWED_HOST!],
  },
  plugins: [react()],
});
