
  import { createRoot } from "react-dom/client";
  import { HashRouter } from "react-router";
  import App from "./app/App.tsx";
  import { ErrorBoundary } from "./components/ErrorBoundary.tsx";
  import "./styles/index.css";

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  );
  