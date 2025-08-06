import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import { GradData } from './gradData'

export default function GraduateCards() {
  // 按 grade 分组
  const grouped = GradData.reduce((acc, grad) => {
    acc[grad.grade] = acc[grad.grade] || [];
    acc[grad.grade].push(grad);
    return acc;
  }, {});

  const sortedGrades = Object.keys(grouped)
    .map(year => parseInt(year, 10))
    .sort((a, b) => a - b);
  return (
    <>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Graduate Students`,
              subtitle: ` `, description: ` `,
            }}
          />
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 space-y-12">
          {sortedGrades.map(year => (
            <section key={year} className="space-y-4">
              {/*<h2 className="text-2xl font-semibold text-gray-800 text-center">*/}
              {/*  Class of {year}*/}
              {/*</h2>*/}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
                {grouped[year].map((grad, idx) => (
                  <div key={idx} className="group">
                    <div className="relative w-60 h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                      <Image
                        src={grad.src}
                        alt={grad.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                      {grad.isPhD && (
                        <span
                          className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          Ph.D.
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-lg font-bold text-gray-800 lg:text-xl">{grad.name}</span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-lg font-bold text-gray-800 lg:text-xl">{grad.cname}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}