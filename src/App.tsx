import { useState } from "react";
import "./Styles/index.scss";
import { Footer, Header } from "./Components/Molecules";

import { ThreeOptions } from "./Components/Molecules/ThreeOptions/ThreeOptions";

function App() {
  return (
    <div className="App">
      <Header />
      <ThreeOptions />
      <Footer />
    </div>
  );
}

export default App;
