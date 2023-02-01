import Icon from "components/layout/Icon";

export default function Button({ label, color, icon, arrow }) {
  const colorBgClasses = {
    yellow: "bg-yellow text-black group-hover:bg-white px-3 xl:px-5",
    white: "bg-white text-black group-hover:bg-yellow px-3 xl:px-5",
    transparent: "",
    border:
      "border border-white/20 px-6 xl:px-5 group-hover:bg-yellow group-hover:text-black",
  };
  const colorIconClasses = {
    yellow: "fill-black",
    white: "fill-black",
    border: "fill-white",
    transparentInv: "fill-white",
  };
  const classButton = "inline-block py-1 xl:py-2";
  return (
    <>
      <div
        className={`${colorBgClasses[color]} rounded-3xl py-2 duration-150 inline-block`}
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
          {arrow == true && (
            <div
              className={`${
                color === "border"
                  ? "ml-3 mr-2"
                  : color === "transparentInv"
                  ? "bg-black w-8 h-6 rounded-[50%] group-hover:w-10"
                  : "bg-white w-8 h-6 rounded-[50%] group-hover:w-10"
              } duration-300 relative`}
            >
              <Icon
                name="arrow"
                className={`${colorIconClasses[color]} absolute centered`}
                size="22"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}