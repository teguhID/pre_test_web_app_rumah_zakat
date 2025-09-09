/* eslint-disable @next/next/no-img-element */

interface InfoCardProps {
    title: string;
    additionalTitle: string;
    desc: string;
    additionalDesc: any;
}

export default function InfoDetailList({ title, additionalTitle, desc, additionalDesc }: InfoCardProps) {
  return (
    <>
        <h1 className="text-3xl font-bold mb-2 text-zinc-700">{title}</h1>
        <p className="text-gray-600 italic mb-4">{additionalTitle}</p>
        <p className="text-gray-700 mb-4">{desc}</p>

        <div className="text-sm text-gray-500 space-y-1 mb-6">
        {additionalDesc.length > 0 && (
            <>
                {additionalDesc.map((item, index) => (
                    <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: String(item.label) + " " + String(item.value) }}
                    />
                ))}
            </>
        )}
        </div>
    </>
  );
}
