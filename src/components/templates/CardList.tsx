/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface AdditionalData {
  label?: string;
  value: string | number;
}

interface InfoCardProps {
  key: String; 
  href: String; 
  src: String; 
  alt: String; 
  title: String; 
  additionalData?: AdditionalData[];
}

export default function CardProfile({ keyId, href, src, alt, title, additionalData }: InfoCardProps) {
  return (
    <Link key={keyId} href={`${href}`}>
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
            <img
                src={src}
                alt={alt}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <h2 className="text-lg font-semibold line-clamp-2 text-zinc-600">
                {title}
            </h2>

            {additionalData.length > 0 && (
                <>
                    {additionalData.map((item, index) => (
                        <p
                            key={index}
                            className="text-sm text-gray-500"
                            dangerouslySetInnerHTML={{ __html: String(item.value) }}
                        />
                    ))}
                </>
            )}

            </div>
        </div>
    </Link>
  );
}
