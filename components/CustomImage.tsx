// components/Image.tsx
import Image from "next/image";


const rawBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
// 确保前置斜杠、且去掉多余的尾斜杠
const basePath = rawBase ? `/${rawBase.replace(/^\/|\/$/g, "")}` : "";

export function CusImage(props) {
  const { src, ...rest } = props;
  let finalSrc = src;

  if (typeof src === 'string' && src.startsWith('/')) {
    // 去掉初始斜杠后与 basePath 拼接
    const trimmed = src.slice(1);
    finalSrc = `${basePath}/${trimmed}`;
  }

  return <Image src={finalSrc} {...rest} />;
}

export default CusImage;
