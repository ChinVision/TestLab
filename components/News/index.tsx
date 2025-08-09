/*
@author chen
@data 2025--2025/8/9-11:53
*/
import { newsData } from './NewsData'

// 輔助：格式化日期（顯示友好格式）
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function index() {

  return (
    <>
      <section id="news" className="px-4 md:px-8 2xl:px-0">

        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">

          <div className="mx-auto max-w-6xl px-4 md:px-8">
            {/* result header */}
            <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
              <div>
                All
                <span className="font-medium text-gray-800">{newsData.length}</span>
                News
              </div>
              <div className="text-xs text-gray-400"></div>
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 overflow-hidden"
                >
                  <a href={item.link} className="block">
                    <div className="relative h-44 sm:h-40 w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-gray-500 line-clamp-3">{item.excerpt}</p>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-xs text-gray-400">{formatDate(item.date)}</div>
                          <div className="mt-2">
                        <span className="inline-block px-2 py-1 rounded-md bg-gray-100 border text-gray-600 text-xs">
                          {item.category}
                        </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags?.map((t) => (
                          <a
                            key={t}
                            href={`/news?category=${encodeURIComponent(t)}`}
                            className="text-xs px-2 py-1 rounded-full bg-white border text-gray-600"
                          >
                            {t}
                          </a>
                        ))}
                      </div>

                      <div className="mt-4">
                    <span className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                      Read more →
                    </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}