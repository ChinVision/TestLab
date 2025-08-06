import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import { FiCalendar, FiAward, FiBriefcase } from "react-icons/fi";
import { Alumni } from "./AlumniData";


export default function AlumniCollections() {
  return (
    <>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Alumni`, subtitle: ` `, description: ` `,
            }}
          />
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-stretch">
            {Alumni.map((alum, idx) => (
              <div key={idx} className="group flex flex-col h-full max-w-xs mx-auto">
            {/* 统一照片高度容器 */}
            <div
              className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg flex items-center justify-center">
              {/* 不用 fill，改成固定尺寸内按比例显示 */}
              <Image
                // src={alum.src}
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${alum.src}`}
                alt={alum.name}
                width={160}
                height={160}
                className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

                <div className="bg-white p-4 text-center rounded-b-lg shadow-inner mt-auto">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {alum.name}
                  </h3>
                  <h2 className="text-md font-bold text-gray-800 mb-2">
                    {alum.cname}
                  </h2>
                  <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
                    <span className="flex items-center gap-1"><FiCalendar />{alum.year}</span>
                    <span className="flex items-center gap-1"><FiAward />{alum.degree}</span>
                    <span className="flex items-center gap-1"><FiBriefcase />{alum.destination}</span>
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
