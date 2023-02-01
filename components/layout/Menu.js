import Link from "next/link";
import { convertToSlug } from "lib/utils";

export default function Menu({ locale, page }) {
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
          <div className="text-white text-xs lg:text-base bg-[#713121]">
            <div className="container">
              <div className="overflow-x-scroll xl:overflow-auto">
                <div className="xl:grid xl:grid-cols-12">
                  <div className="flex gap-6 py-6 xl:col-span-11 xl:col-start-2">
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
