import Image from "@/components/CustomImage"
import SectionHeader from "../Common/SectionHeader";
import { PsData } from './PsData'
import { FiAward, FiCalendar, FiMail } from "react-icons/fi";


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
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {PsData.map((grad, idx) => (
              <div
                key={idx}
                className="group flex flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* 左侧图片（固定宽高） */}
                <div className="relative w-60 h-100 overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={grad.src}
                    alt={grad.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                </div>

                {/* 右侧文字信息 */}
                <div className="flex flex-col p-4 flex-1 h-100 overflow-hidden">
                  <h3 className="text-lg font-bold text-gray-800">
                    {grad.name}
                  </h3>
                  <h2 className="text-md font-bold text-gray-800 mb-4">
                    {grad.cname}
                  </h2>

                  {/* 研究方向 */}
                  <div className="mb-1">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <FiCalendar className="text-blue-500" />
                      Research
                    </div>
                    <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                      {grad.research}
                    </p>
                  </div>

                  <div className="mb-1">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <FiMail className="text-blue-500" />
                      Email
                    </div>
                    <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                      {grad.email}
                    </p>
                  </div>
                  {/* 学习经历（数组，空时显示默认提示） */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <FiAward className="text-yellow-500" />
                      Experiences
                    </div>
                    {grad.experiences && grad.experiences.length > 0 ? (
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
                        {grad.experiences.map((exp, i) => (
                          <li key={i}>{exp}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 mt-1 italic">No experiences provided.</p>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default PostdoctoralScholars;