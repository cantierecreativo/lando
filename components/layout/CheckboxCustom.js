export default function CheckboxCustom({ layout = null }) {
  return (
    <div
      className={`${
        layout == "small" ? "h-4 w-4" : "h-6 w-6"
      } mr-2 flex flex-shrink-0 items-center justify-center border-2 border-black bg-white focus-within:border-red focus-visible:border-orange-500 focus-visible:ring`}
    >
      <svg
        className={`${
          layout == "small" ? "h-2 w-2" : "h-3 w-3"
        } pointer-events-none hidden fill-current text-red`}
        version="1.1"
        viewBox="0 0 17 12"
        aria-hidden={true}
        focusable={false}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(-9 -11)" fill="#E5261A" fillRule="nonzero">
            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
          </g>
        </g>
      </svg>
    </div>
  );
}
