import { createContext, useState, ReactNode } from "react";

interface IImages {
  name: string;
  url: string;
}

interface ImageContextProps {
  images: IImages[] | null;
  addImage: (image: IImages) => void;
  deleteImage: (index: number) => void;
}

const defaultImageContextValue: ImageContextProps = {
  images: null,
  addImage: () => {},
  deleteImage: () => {},
};

const ImagesContext = createContext<ImageContextProps>(
  defaultImageContextValue
);

const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<IImages[]>([
    {
      name: "wallpaper",
      url: "https://images.unsplash.com/photo-1711008376686-a6c67e873272?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "bird",
      url: "https://images.unsplash.com/photo-1710122854755-badecac48ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "wallpaper",
      url: "https://images.unsplash.com/photo-1706216281063-cb619f25ec49?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "bird",
      url: "https://images.unsplash.com/photo-1711008376589-7a3df6d8dac1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "wallpaper",
      url: "https://images.unsplash.com/photo-1710920853582-43ddf2b18443?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "bird",
      url: "https://images.unsplash.com/photo-1710743385110-23d273762d14?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "wallpaper",
      url: "https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  const addImage = (image: IImages) => {
    setImages([image, ...images]);
  };

  const deleteImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <ImagesContext.Provider value={{ images, addImage, deleteImage }}>
      {children}
    </ImagesContext.Provider>
  );
};

export { ImageProvider };
export default ImagesContext;
