/*
@author chen
@data 2025--2025/8/5-8:48
*/

import Link from "next/link";
import * as process from "node:process";

export default function BreadHero({
  imgSrc,
  links,
  title
                                  }) {

  // 1. rawBase 可能是 ''（开发）或 'TestLab'（生产）
  const rawBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // 2. 去掉前后斜杠，再补一个前置斜杠 → '' or '/TestLab'
  const prefix = rawBase ? `/${rawBase.replace(/^\/|\/$/g, "")}` : "";
  // 3. 只有生产环境才用前缀
  const isProd = process.env.NODE_ENV === "production";
  const urlBase = isProd ? prefix : "";
  // 4. 去掉 imgSrc 首尾斜杠，保证拼出来不会有双斜杠
  const trimmedImg = imgSrc.replace(/^\/|\/$/g, "");
  const style = {
    backgroundImage: `url(${urlBase}/${trimmedImg})`,
  };

  return (
    <>
      <div
        className="bg-cover bg-center relative"
        style={style}
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