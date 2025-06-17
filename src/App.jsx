import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shadcn from "./pages/Shadcn";
import Material from "./pages/Material";
import Github from "./pages/Github";
import Journey from "./pages/Journey";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.SHADCN} element={<Shadcn />} />
        <Route path={ROUTES.MATERIAL} element={<Material />} />
        <Route path={ROUTES.GITHUB} element={<Github />} />
        <Route path={ROUTES.JOURNEY} element={<Journey />} />
      </Routes>
    </div>
  );
}

export default App;
