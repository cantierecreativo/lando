import { connectPagination } from "react-instantsearch-dom";

function reload() {
  try {
    location.reload();
  } catch (error) {}
}

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
  const disabledPrev =
    currentRefinement > 1
      ? "duration-300 hover:border-gray hover:bg-gray-50"
      : "cursor-auto opacity-30";
  const disabledNext =
    currentRefinement != nbPages
      ? "duration-300 hover:border-gray hover:bg-gray-50"
      : "cursor-auto opacity-30";

  const prev1 = currentRefinement - 1;
  const prev2 = currentRefinement - 2;
  const next1 = currentRefinement + 1;
  const next2 = currentRefinement + 2;

  const classNav =
    nbPages === 0 ? "hidden" : "relative z-0 flex justify-between space-x-2";

  return (
    <nav className={classNav} aria-label="Pagination">
      <a
        href={createURL(currentRefinement - 1)}
        onClick={
          currentRefinement > 1
            ? (event) => {
                event.preventDefault();
                refine(currentRefinement - 1);
              }
            : null
        }
        className={`${disabledPrev} relative inline-flex items-center rounded-full border border-gray-light px-4 text-xs font-medium text-black`}
      >
        <span className="sr-only">Previous</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden={true}
          focusable={false}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </a>
      <div className="items-end md:-mt-px md:flex">
        {new Array(nbPages).fill(null).map((_, index) => {
          const page = index + 1;
          const style =
            currentRefinement === page
              ? "text-gold relative inline-flex items-center lg:px-4 px-3 py-2 font-serif text-sm md:text-xl font-medium"
              : "text-black hover:text-red relative inline-flex items-center px-3 lg:px-4 py-2 font-serif text-sm md:text-xl font-medium";

          // {
          //   console.log("page:", page);
          // }

          if (page == 1) {
            return (
              <span key={index}>
                <a
                  href={createURL(page)}
                  className={style}
                  onClick={(event) => {
                    event.preventDefault();
                    refine(page);
                    // reload();
                  }}
                >
                  {page}
                </a>
                {currentRefinement > 4 && <span>...</span>}
              </span>
            );
          }

          if (page == prev1) {
            return (
              <a
                key={index}
                href={createURL(page)}
                className={style}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  // reload();
                }}
              >
                {page}
              </a>
            );
          }
          if (page == prev2) {
            return (
              <a
                key={index}
                href={createURL(page)}
                className={style}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  // reload();
                }}
              >
                {page}
              </a>
            );
          }
          if (page == currentRefinement) {
            return (
              <a
                key={index}
                href={createURL(page)}
                className={style}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  // reload();
                }}
              >
                {page}
              </a>
            );
          }
          if (page == next1) {
            return (
              <a
                key={index}
                href={createURL(page)}
                className={style}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  // reload();
                }}
              >
                {page}
              </a>
            );
          }
          if (page == next2) {
            return (
              <a
                key={index}
                href={createURL(page)}
                className={style}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  // reload();
                }}
              >
                {page}
              </a>
            );
          }
          if (page == nbPages) {
            return (
              <span key={index}>
                {currentRefinement < nbPages - 3 && <span>...</span>}
                <a
                  href={createURL(page)}
                  className={style}
                  onClick={(event) => {
                    event.preventDefault();
                    refine(page);
                    // reload();
                  }}
                >
                  {page}
                </a>
              </span>
            );
          }
        })}
      </div>
      <div className="">
        <a
          href={createURL(currentRefinement + 1)}
          onClick={
            currentRefinement != nbPages
              ? (event) => {
                  event.preventDefault();
                  refine(currentRefinement + 1);
                }
              : null
          }
          className={`${disabledNext} relative inline-flex items-center rounded-full border border-gray-light px-4 text-xs font-medium text-black`}
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden={true}
            focusable={false}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default connectPagination(Pagination);
