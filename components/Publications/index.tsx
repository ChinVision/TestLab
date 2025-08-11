"use client";
import { useMemo, useState } from "react";
import Image from "@/components/CustomImage";
import SectionHeader from "../Common/SectionHeader";
import {
  papers2025,
  papers2024,
  papers2023,
  papers2022,
  papers2021,
  papers2020,
  papers2019,
} from "./PubData";
const allPapers = [
  { year: "2025", papers: papers2025 },
  { year: "2024", papers: papers2024 },
  { year: "2023", papers: papers2023 },
  { year: "2022", papers: papers2022 },
  { year: "2021", papers: papers2021 },
  { year: "2020", papers: papers2020 },
  { year: "2019~before", papers: papers2019 },
];
// 在文件顶部（组件外或组件上方）加入类型定义
type RawPaper = {
  title?: string;
  link?: string;
  image?: string;
  authors?: string;
  journal?: string;
  type?: string | string[] | null;
  [key: string]: any;
};

type FlatPaper = Omit<RawPaper, "type"> & {
  types: string[];
  year: string;
};



export default function Integration() {
  // 明确类型注解
  const [viewMode, setViewMode] = useState<"year" | "type">("year");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // 在组件内部，替换原来的 useMemo 实现为带类型的实现
  const flatPapers = useMemo<FlatPaper[]>(
    () =>
      allPapers.flatMap(({ year, papers }) =>
        papers.map((p: RawPaper) => ({
          ...p,
          year,
          types: p.type
            ? Array.isArray(p.type)
              ? p.type.map((t) => String(t).trim())
              : [String(p.type).trim()]
            : [],
        }))
      ),
    [allPapers]
  );

// 所有去重的类型（按出现顺序）
  const types = useMemo<string[]>(() => {
    const set = new Set<string>();
    flatPapers.forEach((p) => p.types.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [flatPapers]);

  // 年份列表（保留顺序）
  const years = useMemo(() => allPapers.map((g) => g.year), []);

  // 按年份分组（保留输入顺序并标准化 types）
  // 注意这里 papers 的类型也用 FlatPaper[]
  const papersByYear = useMemo<
    { year: string; papers: FlatPaper[] }[]
  >(() => {
    return allPapers.map(({ year, papers }) => ({
      year,
      papers: (papers as RawPaper[]).map((p) => ({
        ...(p as any),
        year,
        types: p.type
          ? Array.isArray(p.type)
            ? p.type.map((t) => String(t).trim())
            : [String(p.type).trim()]
          : [],
      })) as FlatPaper[],
    }));
  }, [allPapers]);

// 按类型分组
  const papersByType = useMemo<Record<string, FlatPaper[]>>(() => {
    const map: Record<string, FlatPaper[]> = {};
    // 先初始化已知类型的 key
    types.forEach((t) => (map[t] = []));
    flatPapers.forEach((p) => {
      if (!p.types || p.types.length === 0) {
        map["Uncategorized"] = map["Uncategorized"] || [];
        map["Uncategorized"].push(p);
      } else {
        p.types.forEach((t) => {
          map[t] = map[t] || [];
          map[t].push(p);
        });
      }
    });
    return map; // { typeName: [papers...] }
  }, [flatPapers, types]);

  // 移动端类型 chips（复用）
  const TypeChips = () => (
    <div className="flex gap-2 overflow-x-auto py-2">
      <button
        onClick={() => setSelectedType(null)}
        className={`px-3 py-1 rounded-full text-sm whitespace-nowrap border transition ${
          selectedType === null
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-200"
        }`}
      >
        All
      </button>

      {types.map((t) => (
        <button
          key={t}
          onClick={() => setSelectedType((s) => (s === t ? null : t))}
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap border transition ${
            selectedType === t
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-200"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );

  // 移动端年份 chips
  const YearChips = () => (
    <div className="flex gap-2 overflow-x-auto py-2">
      <button
        onClick={() => setSelectedYear(null)}
        className={`px-3 py-1 rounded-full text-sm whitespace-nowrap border transition ${
          selectedYear === null
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-200"
        }`}
      >
        All
      </button>

      {years.map((y) => (
        <button
          key={y}
          onClick={() => setSelectedYear((s) => (s === y ? null : y))}
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap border transition ${
            selectedYear === y
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-200"
          }`}
        >
          {y}
        </button>
      ))}
    </div>
  );

  // 单个卡片（复用样式）
  const PaperCard = ({ paper }) => (
    <a
      key={paper.title + (paper.link || "")}
      href={paper.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/80 backdrop-blur-lg rounded-2xl p-4 border border-gray-200 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-full sm:w-36 flex-shrink-0">
          {paper.image ? (
            <div className="relative w-full h-44 sm:h-28 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={paper.image}
                alt={paper.title || "paper image"}
                fill
                sizes="(max-width: 640px) 100vw, 144px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-44 sm:h-28 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-sm text-gray-500">
              No image
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 leading-snug">
            {paper.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2 group-hover:text-gray-700 truncate">
            {paper.authors}
          </p>
          <p className="text-sm italic text-gray-600 mt-2">{paper.journal}</p>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className="text-xs px-2 py-1 rounded-md bg-gray-100 border text-gray-600">
              {paper.year}
            </span>
            {paper.types?.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-white border text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="relative z-10 mx-auto max-w-c-1154 px-4 md:px-8 flex flex-col space-y-8">
        {/* 顶部切换 */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Publications</h2>
            <div className="inline-flex rounded-lg bg-white/60 p-1 border border-gray-200">
              <button
                onClick={() => {
                  setViewMode("year");
                  setSelectedType(null);
                }}
                className={`px-4 py-1 rounded-lg text-sm font-medium transition ${
                  viewMode === "year" ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
              >
                By Year
              </button>
              <button
                onClick={() => {
                  setViewMode("type");
                  setSelectedYear(null);
                }}
                className={`px-4 py-1 rounded-lg text-sm font-medium transition ${
                  viewMode === "type" ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
              >
                By Type
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">All <strong>{flatPapers.length} </strong>Publications</div>
        </div>

        {/* ---------- Year view（大屏有左侧年份侧栏，小屏显示横向年份 chips） ---------- */}
        {viewMode === "year" ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* 左侧年份侧栏（lg 可见） */}
            <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200">
                <h4 className="text-sm font-semibold mb-3">Year</h4>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedYear(null)}
                    className={`text-left px-3 py-2 rounded-md text-sm transition ${
                      selectedYear === null
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border border-gray-100"
                    }`}
                  >
                    All
                  </button>
                  {years.map((y) => {
                    // 计算该年的文章数（如果也同时选择了 type，显示数量可以按 type 过滤或总数）
                    const count = papersByYear.find((g) => g.year === y)?.papers.length || 0;
                    return (
                      <button
                        key={y}
                        onClick={() => setSelectedYear((s) => (s === y ? null : y))}
                        className={`text-left px-3 py-2 rounded-md text-sm transition ${
                          selectedYear === y
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 border border-gray-100"
                        }`}
                      >
                        {y} <span className="ml-2 text-xs text-gray-400">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="flex-1">
              {/* 小屏：年份 chips */}
              <div className="lg:hidden mb-4">
                <YearChips />
              </div>

              <div className="flex flex-col gap-8">
                {papersByYear.map(({ year, papers }) => {
                  // 如果选了 year 且不等则跳过
                  if (selectedYear && selectedYear !== year) return null;

                  // 若选了 type，同时在年份视图也支持按类型筛选（可按需改为不受影响）
                  const visible = selectedType
                    ? papers.filter((p) => {
                      const tarr = p.type
                        ? Array.isArray(p.type)
                          ? p.type.map((t) => String(t).trim())
                          : [String(p.type).trim()]
                        : [];
                      return tarr.includes(selectedType);
                    })
                    : papers;

                  if (!visible || visible.length === 0) return null;

                  return (
                    <div key={year}>
                      <SectionHeader
                        headerInfo={{
                          title: year,
                          subtitle: ` `,
                          // subtitle: `Num ${visible.length}`,
                          description: "",
                        }}
                      />
                      <div className="mt-6 grid grid-cols-1 gap-4">
                        {visible.map((p, idx) => (
                          <PaperCard key={idx} paper={{ ...p, year }} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          // ========== Type view（保留左侧侧栏 + 小屏 chips） ==========
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200">
                <h4 className="text-sm font-semibold mb-3">Type</h4>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedType(null)}
                    className={`text-left px-3 py-2 rounded-md text-sm transition ${
                      selectedType === null
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border border-gray-100"
                    }`}
                  >
                    All
                  </button>
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedType((s) => (s === t ? null : t))}
                      className={`text-left px-3 py-2 rounded-md text-sm transition ${
                        selectedType === t
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 border border-gray-100"
                      }`}
                    >
                      {t} <span className="ml-2 text-xs text-gray-400">({papersByType[t]?.length || 0})</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="lg:hidden mb-4">
                <TypeChips />
              </div>

              <div className="space-y-8">
                {Object.entries(papersByType).map(([typeName, papers]) => {
                  if (selectedType && selectedType !== typeName) return null;
                  if (!papers || papers.length === 0) return null;

                  return (
                    <div key={typeName}>
                      <SectionHeader
                        headerInfo={{
                          title: typeName,
                          // subtitle: `${papers.length} 篇`,
                          subtitle: ` `,
                          description: "",
                        }}
                      />
                      <div className="mt-6 grid grid-cols-1 gap-4">
                        {papers.map((p, idx) => (
                          <PaperCard key={idx} paper={p} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse delay-2000" />
      </div>
    </section>
  );
}
