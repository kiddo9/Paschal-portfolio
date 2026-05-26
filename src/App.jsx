import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Projects from "./page/Projects";
import Skills from "./page/skills";
import Resume from "./page/Resume";
import ProgressBar from "./components/ProgressBar";
import SEO from "./components/SEO";

// Lazy load the page
const Index = lazy(() => import("./page/MainPage"));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SEO />
        <Suspense fallback={<Loader />}>
          <Layout>
            <ProgressBar />
            <Routes>
              <Route index element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
