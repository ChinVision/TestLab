import SectionHeader from "@/components/Common/SectionHeader";
import Image from "@/components/CustomImage";
import { FiCalendar, FiAward, FiBriefcase } from "react-icons/fi";
import { Alumni } from "./AlumniData";

export default function AlumniCollections() {
  return (
    <>
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Alumni`,
              subtitle: ` `,
              description: ` `,
            }}
          />
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {Alumni.map((alum, idx) => (
              <div
                key={idx}
                className="group mx-auto flex h-full w-full max-w-xs flex-col"
              >
                {/* 统一照片高度容器 */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                  {/* 不用 fill，改成固定尺寸内按比例显示 */}
                  <Image
                    src={alum.src}
                    alt={alum.name}
                    width={320}
                    height={427}
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                <div className="mt-auto rounded-b-lg bg-white p-4 text-center shadow-inner">
                  <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {alum.name}
                  </h3>
                  <h2 className="text-md mb-2 font-bold text-gray-800">
                    {alum.cname}
                  </h2>
                  <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FiCalendar />
                      {alum.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiAward />
                      {alum.degree}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiBriefcase />
                      {alum.destination}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
