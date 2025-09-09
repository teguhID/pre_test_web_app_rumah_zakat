import FotoProfile from '../organisms/FotoProfile'
import NameProfile from '../organisms/NameProfile'

interface InfoCardProps {
  src: string;
  name: string;
  role: string;
}

export default function HeaderProfile({ src, name, role }: InfoCardProps) {
  return (
    <>
        <FotoProfile src={src} />
        <NameProfile name={name} role={role} />
    </>
  );
}
