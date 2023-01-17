import Icon from "components/layout/Icon";

export default function Button({ label, color, icon }) {
  const colorBgClasses = {
    yellow: "bg-yellow",
  };
  const colorIconClasses = {
    yellow: "fill-black",
  };
  const classButton = "inline-block px-3 py-1 xl:px-5 xl:py-2";
  return (
    <>
      <div className={`${colorBgClasses[color]} rounded-3xl px-4 py-2`}>
        <div className="flex flex-none items-center gap-2">
          <Icon
            name={icon}
            className={`${colorIconClasses[color]} duration-300 group-hover:translate-x-1`}
            size="20"
          />
          <div className="group-hover:mr-1 font-sans uppercase text-sm font-bold duration-200 xl:hover:text-green-light xl:group-hover:text-green-light">
            {label}
          </div>
        </div>
      </div>
    </>
  );
}
