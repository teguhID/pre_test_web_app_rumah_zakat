interface InfoCardProps {
  value: string;
}

export default function DescProfile({ value }: InfoCardProps) {
  return (
    <div className="text-center text-gray-600 max-w-md">
        <p>{value}</p>
    </div>
  );
}
