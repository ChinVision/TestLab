/*
@author chen
@data 2025--2025/8/5-8:48
*/

import Link from "next/link";

export default function BreadHero({
  imgSrc,
  links,
  title
                                  }) {


  return (
    <>
      <div
        className="bg-cover bg-center relative"
        // style={{ backgroundImage: "url('/images/hero/00.jpg')" }}
        style={{ backgroundImage: `url(${imgSrc})` }}

      >
        {/* Optional overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-8 lg:py-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center text-md text-white">
            <Link
              href="/"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{links}</span>
          </nav>

          {/* Heading */}
          <h2 className="mb-4 text-center text-5xl font-bold text-white md:mb-6 lg:text-5xl">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}