// components/Image.tsx
import Image from "next/image";

export function CusImage(props) {
  const { src, ...rest } = props;

  return <Image src={src} {...rest} />;
}

export default CusImage;
