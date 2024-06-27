import Card from '@/components/Card';
import { useAPIContext } from '@/context/APIContext';
import Spinner from '@/pages/utils/Spinner';
import './Employees.css';

export default function Employees() {
  const { collaborators } = useAPIContext();

  if (!collaborators) {
    return <Spinner color={'text-morning-glory-500'} />;
  }

  return (
    <section className='flex justify-center'>
      <div className='gap-y-8 grid justify-items-center overflow-x-hidden py-4 h-full responsive-card-container w-full'>
        {collaborators?.map((collaborator) => (
          <Card key={collaborator.id} collaborator={collaborator} />
        ))}
      </div>
    </section>
  );
}
