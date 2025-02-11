import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import WhatsHere from "./components/pages/WhatsHere";
import WhatsOn from "./components/pages/WhatsOn";
import WhatsNearby from "./components/pages/WhatsNearby";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-background">
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whats-here" element={<WhatsHere />} />
          <Route path="/whats-on" element={<WhatsOn />} />
          <Route path="/whats-nearby" element={<WhatsNearby />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
