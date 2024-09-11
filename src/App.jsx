
import { BrowserRouter, Routes, Route } from "react-router-dom";
import More from "./components/More";
import Index from "./page/MainPage";
//import Loader from "./components/Loader";
//import { useEffect, useState } from "react";
import About from "./page/About";


function App() {
  // const [load, setload] = useState(true)

  // useEffect(() => {
  //   const load = setTimeout(() => {
  //     setload(false)
  //   }, 19000)

  //   return () => clearTimeout(load)
  // }, [])

  return (
    <div>
      {/* {load ?<Loader /> : ''} */}
      
      <BrowserRouter>
      <Routes>
        <Route index element={  <Index />} />
        <Route path="/more" element={<More />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
