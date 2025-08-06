/*
@author chen
@data 2025--2025/8/6-19:53
@file_name custom-image-loader
*/

// custom-image-loader.js
import { basePath } from './next.config';

export default function myImageLoader({ src, width, quality }) {
  // 仅对以 '/' 开头的本地图片路径添加前缀
  if (basePath && src.startsWith('/')) {
    const q = quality ? `&q=${quality}` : '';
    return `${basePath}${src}?w=${width}${q}`;
  }
  // 外部 URL 保持不变
  return src;
}
