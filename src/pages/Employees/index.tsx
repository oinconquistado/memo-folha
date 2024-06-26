import Card from '@/components/Card';

export default function Employees() {
  const collaborators = [
    {
      id: 1,
      name: 'John Doe',
      position: { description: 'Subordinado' },
      hireDate: '01/01/2020',
      monetaryValue: '$1000',
      CPF: '123.456.789-00',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: { description: 'Gerente' },
      hireDate: '02/02/2021',
      monetaryValue: '$2000',
      CPF: '987.654.321-00',
    },
    {
      id: 3,
      name: 'Jane Smith',
      position: { description: 'Gerente' },
      hireDate: '02/02/2021',
      monetaryValue: '$2000',
      CPF: '987.654.321-00',
    },
    {
      id: 4,
      name: 'Jane Smith',
      position: { description: 'Gerente' },
      hireDate: '02/02/2021',
      monetaryValue: '$2000',
      CPF: '987.654.321-00',
    },
  ];

  return (
    <div className='flex flex-wrap gap-4 bg-white p-6 rounded-lg'>
      {collaborators.map((collaborator) => (
        <Card key={collaborator.id} collaborator={collaborator} />
      ))}
    </div>
  );
}
