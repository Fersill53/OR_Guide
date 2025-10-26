import { Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/TopNav.jsx";
import Home from "./pages/Home/Home.jsx";
import Specialties from "./pages/Specialties/Specialties.jsx";
import Procedures from "./pages/Procedures/Procedures.jsx";
import ProcedureDetail from "./pages/ProcedureDetail/ProcedureDetail.jsx";
import Ortho from "./pages/Ortho/Ortho.jsx";
import Neuro from "./pages/Neuro/Neuro.jsx";

export default function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/specialteis/ortho" element={<Ortho />} />
        <Route path="/specialties/neuro" element={<Neuro />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/procedures/:id" element={<ProcedureDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}