// Theme handler
import { ThemeProvider } from "next-themes";

// Auth handler
import { AuthProvider } from "../context/AuthContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
