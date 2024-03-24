import "./App.css";
import Books from "./components/Books/Books";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
    </Routes>
  );
}
