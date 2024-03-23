import { useContext } from "react";
import ImagesContext from "../context/imagesContext";

interface Props {
  name: string;
  url: string;
  index: number;
}

const image = ({ url, name, index }: Props) => {
    const {deleteImage} = useContext(ImagesContext);
    const handleClick = () => {
        deleteImage(index);
    }
  return (
    <div className={`relative group rounded-2xl overflow-hidden w-full`}>
      <img src={url} alt={url} className="w-full" />
      <button type="button" className="absolute -top-10 right-10 z-10 group-hover:block group-hover:top-10 transition-all duration-300 border-2 px-4 rounded-full border-secondry "
      onClick={handleClick}
      >
        <h2 className="text-secondry text-xl font-bold max-w-lg">{name}</h2>
      </button>
      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent via-opacity-60 transition-opacity duration-300" />
      <div className="absolute -bottom-10 left-10 z-10 group-hover:block group-hover:bottom-10 transition-all duration-300 ">
        <h2 className="text-white text-2xl font-bold max-w-lg">{name}</h2>
      </div>
    </div>
  );
};

export default image;
