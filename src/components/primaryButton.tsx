interface Props {
  title: string;
  disable?: boolean;
  onClick: () => void;
}

const primaryButton = ({ title, onClick, disable = false }: Props) => {
  return (
    <button
      type="button"
      className="bg-primary text-white px-4 md:px-10 py-3 font-bold rounded-xl hover:drop-shadow-xl transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default primaryButton;
