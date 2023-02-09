import Icon from "components/layout/Icon";
import { connectPagination } from "react-instantsearch-dom";

function reload() {
  try {
    location.reload();
  } catch (error) {}
}

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
  const disabledPrev = currentRefinement > 1 ? "" : "cursor-auto opacity-10";
  const disabledNext =
    currentRefinement != nbPages ? "" : "cursor-auto opacity-10";

  const prev1 = currentRefinement - 1;
  const prev2 = currentRefinement - 2;
  const next1 = currentRefinement + 1;
  const next2 = currentRefinement + 2;

  const classNav =
    nbPages === 0
      ? "hidden"
      : "relative z-0 flex justify-center items-center space-x-6 py-12 lg:col-start-2 lg:col-span-2";

  return (
    <div className="grid lg:grid-cols-3">
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
          className={`${disabledPrev}`}
        >
          <span className="sr-only">Previous</span>
          <Icon size="40" name="arrow" className="fill-white rotate-180" />
        </a>
        <div className="items-end md:-mt-px flex gap-2">
          {new Array(nbPages).fill(null).map((_, index) => {
            const page = index + 1;
            const style =
              currentRefinement === page
                ? "text-black centered"
                : "text-white centered";
            const styleButton =
              currentRefinement === page
                ? "bg-white relative w-6 h-6 rounded-full inline-block text-black"
                : "bg-white/10 relative w-6 h-6 rounded-full inline-block text-black";

            if (page == 1) {
              return (
                <span className={styleButton} key={index}>
                  <a
                    href={createURL(page)}
                    className={style}
                    onClick={(event) => {
                      event.preventDefault();
                      refine(page);
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
                <span key={index} className={styleButton}>
                  <a
                    href={createURL(page)}
                    className={style}
                    onClick={(event) => {
                      event.preventDefault();
                      refine(page);
                    }}
                  >
                    {page}
                  </a>
                </span>
              );
            }
            if (page == prev2) {
              return (
                <span key={index} className={styleButton}>
                  <a
                    href={createURL(page)}
                    className={style}
                    onClick={(event) => {
                      event.preventDefault();
                      refine(page);
                    }}
                  >
                    {page}
                  </a>
                </span>
              );
            }
            if (page == currentRefinement) {
              return (
                <span key={index} className={styleButton}>
                  <a
                    href={createURL(page)}
                    className={style}
                    onClick={(event) => {
                      event.preventDefault();
                      refine(page);
                    }}
                  >
                    {page}
                  </a>
                </span>
              );
            }
            if (page == next1) {
              return (
                <span key={index} className={styleButton}>
                  <a
                    href={createURL(page)}
                    className={style}
                    onClick={(event) => {
                      event.preventDefault();
                      refine(page);
                    }}
                  >
                    {page}
                  </a>
                </span>
              );
            }
            if (page == next2) {
              return (
                <span key={index} className={styleButton}>
                  <a
                    href={createURL(page)}
                    className={style}
                    onClick={(event) => {
                      event.preventDefault();
                      refine(page);
                    }}
                  >
                    {page}
                  </a>
                </span>
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
            className={`${disabledNext}`}
          >
            <span className="sr-only">Previous</span>
            <Icon size="40" name="arrow" className="fill-white" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default connectPagination(Pagination);
