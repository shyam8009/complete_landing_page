import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";
import { SmoothScrollProvider } from "./components/SmoothScroll.tsx";
import "./styles/index.css";

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </BrowserRouter>
  </ErrorBoundary>
);