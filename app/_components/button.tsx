"use client";

interface Props {
  buttonClass?: string;
  iconClass?: string;
  iconDivClass?: string;
  textClass?: string;
  Icon: any;
  text: string;
  action: Function;
}

const button = ({
  Icon,
  action,
  text,
  buttonClass,
  iconClass,
  iconDivClass,
  textClass,
}: Props) => {
  return (
    <button
      onClick={() => action()}
      className={` flex gap-2 text-lg  hover:bg-blue-600 rounded-lg bg-mainBlue w-fit text-white m-auto  ${buttonClass}`}
    >
      <span className={textClass}>{text}</span>
      <div className={`m-auto border p-[1px] rounded ${iconDivClass}`}>
        <Icon className={`m-auto ${iconClass}`} />
      </div>
    </button>
  );
};

export default button;
