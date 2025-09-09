interface InfoCardProps {
  name: string;
  role: string;
}

export default function NameProfile({ name, role }: InfoCardProps) {
  return (
    <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500">{role}</p>
    </div>
  );
}
