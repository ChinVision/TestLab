"use client";
import SectionHeader from "../Common/SectionHeader";
import { papers2025, papers2024, papers2023, papers2022, papers2021, papers2020, papers2019 } from "./PubData";

const allPapers = [
  { year: "2025", papers: papers2025 },
  { year: "2024", papers: papers2024 },
  { year: "2023", papers: papers2023 },
  { year: "2022", papers: papers2022 },
  { year: "2021", papers: papers2021 },
  { year: "2020", papers: papers2020 },
  { year: "2019~before", papers: papers2019 },
];

const Integration = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16">
      {/* 主体内容，z-index 确保在背景之上 */}
      <div className="relative z-10 mx-auto max-w-c-1154 px-4 md:px-8 flex flex-col space-y-24">
        {allPapers.map(({ year, papers }) => (
          <div key={year}>
            <SectionHeader
              headerInfo={{
                title: year,
                subtitle: "",
                description: "",
              }}
            />

            {/* Cards 容器：响应式网格布局 */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {papers.map((paper, idx) => (
                <a
                  key={idx}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <p className="text-sm text-gray-500 mb-2 group-hover:text-gray-700">
                    {paper.authors}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-sm italic text-gray-600 mt-2">
                    {paper.journal}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 可选背景装饰：淡色圆形 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse delay-2000" />
      </div>
    </section>
  );
};

export default Integration;
