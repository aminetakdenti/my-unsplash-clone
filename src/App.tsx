import { useState } from "react";

import { ImageProvider } from "./context/imagesContext";
import Navbar from "./components/navbar";
import AddPopup from "./components/addPopup";
import Gallery from "./components/gallery";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <ImageProvider>
      <div className="container px-6 md:mx-auto py-10 z-1 transition-all duration-300">
        <AddPopup visible={visible} setVisible={setVisible} />
        <Navbar setVisible={setVisible} />
        <Gallery />
      </div>
    </ImageProvider>
  );
}

export default App;
