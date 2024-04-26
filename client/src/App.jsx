import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Andriod1 from "./pages/Andriod1";
import Andriod2 from "./pages/Andriod2";
import Andriod4 from "./pages/Andriod4";
import Andriod5 from "./pages/Andriod5";
import Andriod6 from "./pages/Andriod6";
import Andriod8 from "./pages/Andriod8";
import Andriod9 from "./pages/Andriod9";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Andriod1 />}></Route>
        <Route path="/" element={<Andriod2 />}></Route>
        <Route path="/" element={<Andriod4 />}></Route>
        <Route path="/" element={<Andriod5 />}></Route>
        <Route path="/" element={<Andriod6 />}></Route>
        <Route path="/" element={<Andriod8 />}></Route>
        <Route path="/" element={<Andriod9 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
