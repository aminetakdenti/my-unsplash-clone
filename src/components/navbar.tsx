import { Dispatch, SetStateAction } from "react";

import Logo from "../assets/my_unsplash_logo.svg";
import PrimaryButton from "./primaryButton";

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const navbar = ({ setVisible }: Props) => {
  return (
    <div className=" flex justify-between mb-10">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-10 md:h-12" />
      </div>
      <PrimaryButton title="Add photo" onClick={() => setVisible(true)} />
    </div>
  );
};

export default navbar;
