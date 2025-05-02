import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

// Lazy load the page
const Index = lazy(() => import("./page/MainPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
