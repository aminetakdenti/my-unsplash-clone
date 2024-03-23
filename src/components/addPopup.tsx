import { useContext, useState } from "react";

import CustomInput from "./customInput";
import PrimaryButton from "./primaryButton";
import SecondryButton from "./secondryButton";
import ImagesContext from "../context/imagesContext";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const isValidURL = (url: string): boolean => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(url);
};

const addPopup = ({ setVisible, visible = true }: Props) => {
  const { addImage } = useContext(ImagesContext);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  if (!visible) {
    return null;
  }

  const handleAdd = () => {
    if (name !== "" && url !== "" && isValidURL(url)) {
      addImage({ name, url });
    }
    setVisible(false);
  };

  const handleCancle = () => {
    setVisible(false);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-[600px] p-10 rounded-xl space-y-10 border-2">
          <h1 className="text-4xl ">Hello World</h1>
          <CustomInput
            lable="Label"
            type="text"
            placeholder="image title"
            value={name}
            setValue={setName}
          />
          <CustomInput
            lable="Image URL"
            type="text"
            placeholder="image url"
            value={url}
            setValue={setUrl}
          />
          <div className="flex justify-end gap-3">
            <SecondryButton title="Cancle" onClick={handleCancle} />
            <PrimaryButton
              title="Add"
              onClick={handleAdd}
              disable={name === "" || isValidURL(url) === false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default addPopup;
