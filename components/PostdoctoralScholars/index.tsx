import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { PsData } from './PsData'
const PostdoctoralScholars = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Postdoctoral Scholars`,
              subtitle: ``,
              description: ``,
            }}
          />
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-x-3 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

            {/* 单个学者卡片 */}
            {PsData.map((person, idx) => (
              <div key={idx} className="group max-w-xs mx-auto">
                <a
                  // href={person.link}
                  className="relative mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <Image
                    // src={person.src}
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${person.src}`}
                    alt={person.name}
                    width={260}
                    height={260}
                    className="h-auto transition-transform duration-200 group-hover:scale-110"
                  />
                </a>

                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a
                      className="text-lg font-bold text-gray-800 transition-colors duration-100 hover:text-gray-500 lg:text-xl"
                    >
                      {person.name}
                    </a>
                    <a
                      className="text-md font-bold text-gray-800 transition-colors duration-100 hover:text-gray-500 lg:text-xl"
                    >
                      {person.cname}
                    </a>

                    {/*<span className="text-gray-500">Postdoctoral Scholar</span>*/}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="absolute -bottom-15 -z-1 h-full w-full">
          <Image
            fill
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default PostdoctoralScholars;