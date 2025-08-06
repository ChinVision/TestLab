"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  const lat = 39.142222;
  const lng = 117.186667;
  const zoom = 15;
  const width = 800;
  const height = 400;
  const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&maptype=mapnik&markers=${lat},${lng},red-pushpin`;

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {/* 背景装饰 */}
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:to-[#252A42]"></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
        </div>

        {/* 主容器：两栏布局及等高 */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* 左侧联系信息卡片 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 lg:w-1/3 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg dark:bg-black/50 flex flex-col justify-between"
          >
            <div>
              <h2 className="mb-4 text-4xl font-medium text-black dark:text-white">Find us</h2>
              <div className="mb-2">
                <h3 className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300"><strong>Our Location</strong></h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Institute for Molecular Biology, Room 325<br />
                  94 Weijin Road, Tianjin, China 300071
                </p>
              </div>
              <div className="mb-2">
                <h3 className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300"><strong>Email Address</strong></h3>
                <a href="mailto:huangxinglu@nankai.edu.cn" className="text-blue-600 hover:underline">
                  huangxinglu@nankai.edu.cn
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300"><strong>PI</strong></h3>
              <p className="text-gray-600 dark:text-gray-400">Xinglu Huang</p>
            </div>
          </motion.div>

          {/* 右侧 OSM 静态地图卡片 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 lg:w-2/3 rounded-lg overflow-hidden shadow-lg h-auto md:h-80 flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          >
            <img
              src={'/images/map.png'}
              alt="Lab Location Map"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
