import { useEffect, useState } from "react";
import "./App.css";
import Books from "./components/Books/Books";
import { BandRepo } from "./Classes/BandRepo";
import { Routes, Route } from "react-router-dom";
import { fetchBandData } from "./utils/apicalls";

export default function App() {
  const [bandRepo, setBandRepo] = useState(undefined);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (!bandRepo) {
      getBandData();
    }
  }, [bandRepo]);

  const getBandData = async () => {
    try {
      const data = await fetchBandData();
      if (data && data.bands) {
        setBandRepo(new BandRepo(data));
      }
    } catch {
      setApiError(
        "An error occurred while fetching your band data, please refresh the page."
      );
    }
  };

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
      {apiError ? (
        <div className="api-error-div">
          <p>{apiError}</p>
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<Books bandRepo={bandRepo} />} />
      </Routes>
    </>
  );
}
