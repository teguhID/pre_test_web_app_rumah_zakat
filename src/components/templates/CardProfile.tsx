interface InfoCardProps {
  label: string;
  value: string;
}

export default function CardProfile({ label, value }: InfoCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
        <p className="text-lg font-semibold text-gray-800">{label}</p>
        <p className="text-gray-600">{value}</p>
    </div>
  );
}
