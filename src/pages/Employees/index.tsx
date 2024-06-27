import Card from '@/components/Card';
import { useAPIContext } from '@/context/APIContext';

export default function Employees() {
  const { collaborators } = useAPIContext();

  if (!collaborators) {
    return <>Carregando...</>;
  }

  return (
    <div className='flex flex-wrap gap-4 p-6 rounded-lg'>
      {collaborators?.map((collaborator) => (
        <Card key={collaborator.id} collaborator={collaborator} />
      ))}
    </div>
  );
}
