import "./App.css";
import Books from "./components/Books/Books";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav className="gigboss-nav">
        <div className="gigboss-logo">
          <img
            src="//images.squarespace-cdn.com/content/v1/5b9952a7e7494023089aea6b/32beac78-6099-459e-9725-4f812358216a/Gig+Boss_Logo_Nov22_Logotype_White.png?format=1500w"
            alt="Gig Boss logo"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </>
  );
}
