/* eslint-disable @next/next/no-img-element */
interface InfoCardProps {
  src: string;
  alt: string;
}

export default function ImageDetailList({ src, alt }: InfoCardProps) {
  return (
    <img
        src={src}
        alt={alt}
        className="w-64 rounded-lg shadow-md"
    />
  );
}
