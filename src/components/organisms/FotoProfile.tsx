/* eslint-disable @next/next/no-img-element */
interface InfoCardProps {
  src: string;
}

export default function FotoProfile({ src }: InfoCardProps) {
  return (
    <div className="w-32 h-32">
        <img
        src={src} 
        alt="Profile"
        className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-md"
        />
    </div>
  );
}
