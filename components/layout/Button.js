import Icon from "components/layout/Icon";

export default function Button({ label, color, icon }) {
  const colorBgClasses = {
    yellow: "bg-yellow text-black group-hover:bg-white",
    white: "bg-white text-black group-hover:bg-yellow",
  };
  const colorIconClasses = {
    yellow: "fill-black",
    white: "fill-black",
  };
  const classButton = "inline-block px-3 py-1 xl:px-5 xl:py-2";
  return (
    <>
      <div
        className={`${colorBgClasses[color]} rounded-3xl px-4 py-2 duration-150`}
      >
        <div className="flex flex-none items-center gap-2">
          {icon && (
            <Icon
              name={icon}
              className={`${colorIconClasses[color]}`}
              size="20"
            />
          )}
          <div className="font-medium font-sans uppercase text-sm duration-200">
            {label}
          </div>
        </div>
      </div>
    </>
  );
}
