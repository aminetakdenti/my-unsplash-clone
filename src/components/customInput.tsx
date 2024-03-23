interface Props {
  lable?: string;
  type?: string;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
}

const customInput = ({ type, lable, placeholder, value, setValue }: Props) => {
  const date = (Math.random() * Date.now()).toString();
  return (
    <div>
      {lable && <label htmlFor={date}>{lable}</label>}
      <input
        className={`pl-4 h-[55px] border-2 rounded-xl text-lg w-full`}
        id={date}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default customInput;
