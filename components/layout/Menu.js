import Link from "next/link";
import { convertToSlug } from "lib/utils";

export default function Menu({ locale, page, color }) {
  const navItems = [];

  if (page.blocks.length > 0) {
    page.blocks.map((b) => {
      if (b.label) navItems.push(b.label);
    });
  }

  return (
    <>
      <div className="sticky top-0 z-30">
        {navItems.length > 0 && (
          <div
            className={`${
              color === "light"
                ? "bg-[#f8f2e8] text-black"
                : "bg-[#713121] text-white"
            }  text-xs lg:text-base`}
          >
            <div className="container">
              <div className="overflow-x-scroll xl:overflow-auto">
                <div className="xl:grid xl:grid-cols-12">
                  <div
                    className={`${
                      color === "light"
                        ? "xl:col-span-8 xl:col-start-3"
                        : "xl:col-span-10 xl:col-start-2"
                    } flex gap-6 py-6`}
                  >
                    {navItems.map((n) => (
                      <Link
                        href={`#${convertToSlug(n)}`}
                        className="hover:text-yellow duration-150"
                        key={n.id}
                      >
                        <div className="whitespace-nowrap" key={n.id}>
                          {n}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
