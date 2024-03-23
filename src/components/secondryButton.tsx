interface Props {
  title: string;
  onClick: () => void;
}

const primaryButton = ({ title, onClick }: Props) => {
  return (
    <button
      type="button"
      className=" bg-white px-10 font-bold rounded-xl hover:drop-shadow-xl transition-all duration-200 border-2"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default primaryButton;
