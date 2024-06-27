import Card from '@/components/Card';
import { useAPIContext } from '@/context/APIContext';
import Spinner from '@/pages/utils/Spinner';

export default function Employees() {
  const { collaborators } = useAPIContext();

  if (!collaborators) {
    return <Spinner color={"text-morning-glory-500"} />;
  }

  return (
    <div className='flex flex-wrap gap-4 p-6 rounded-lg'>
      {collaborators?.map((collaborator) => (
        <Card key={collaborator.id} collaborator={collaborator} />
      ))}
    </div>
  );
}
