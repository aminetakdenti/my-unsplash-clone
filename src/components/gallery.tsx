import { useContext, useLayoutEffect } from "react";
import ImagesContext from "../context/imagesContext";
import Image from "./image";

const Gallery = () => {
  const { images } = useContext(ImagesContext);

  useLayoutEffect(() => {
    document.title = "Gallery";
    console.log(document.body.clientWidth);
  }, []);

  return (
    <div className="anime md:columns-2 lg:columns-3 gap-8 space-y-8 ">
      {images?.map((image, index) => (
        <div key={index} className="flex justify-center ">
          <Image url={image.url} name={image.name} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
