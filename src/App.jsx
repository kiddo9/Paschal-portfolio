import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Nav from "./components/NavLink";
import Projects from "./page/Projects";
import Skills from "./page/skills";
import Resume from "./page/Resume";

// Lazy load the page
const Index = lazy(() => import("./page/MainPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Nav>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
