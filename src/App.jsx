import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shadcn from "./pages/Shadcn";
import Material from "./pages/Material";
import Github from "./pages/Github";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.SHADCN} element={<Shadcn />} />
        <Route path={ROUTES.MATERIAL} element={<Material />} />
        <Route path={ROUTES.GITHUB} element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;
