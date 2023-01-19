import Icon from "components/layout/Icon";

export default function Button({ label, color, icon, arrow }) {
  const colorBgClasses = {
    yellow: "bg-yellow text-black group-hover:bg-white px-3 xl:px-5",
    white: "bg-white text-black group-hover:bg-yellow px-3 xl:px-5",
    transparent: "",
  };
  const colorIconClasses = {
    yellow: "fill-black",
    white: "fill-black",
  };
  const classButton = "inline-block py-1 xl:py-2";
  return (
    <>
      <div className={`${colorBgClasses[color]} rounded-3xl py-2 duration-150`}>
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
          {arrow == true && (
            <div className="w-8 h-6 rounded-[50%] bg-white relative">
              <Icon
                name="arrow"
                className={`${colorIconClasses[color]} absolute centered`}
                size="20"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
