import SVGWrapper from 'components/UI/SVGWrapper';
import User from '@/assets/user.svg';
import type {Collaborator} from "@/types/APIContextTypes.ts"

const Card = ({ collaborator }: { collaborator: Collaborator }) => {
  return (
    <div
      className='flex flex-col items-center max-w-96 min-w-96 h-60 rounded-xl shadow-lg'
      id={collaborator.id.toString()}
    >
      <div className='bg-white flex h-16 items-center justify-between px-4 rounded-t-xl w-full'>
        <div className='flex gap-3 items-center'>
          <div
            className={`grid h-8 place-items-center rounded-full w-8 ${collaborator.position.description === 'Subordinado' ? 'bg-jade-100' : 'bg-sail-100'}`}
          >
            <div className='grid h-6 place-items-center w-6'>
              <SVGWrapper
                width={24}
                height={24}
                className={`${collaborator.position.description === 'Subordinado' ? 'fill-morning-glory-600' : 'fill-sail-600'}`}
              >
                <User />
              </SVGWrapper>
            </div>
          </div>
          <p className='font-bold h-7 text-lg text-gray-700'>
            {collaborator.name}
          </p>
        </div>
        <div
          className={`rounded ${collaborator.position.description === 'Subordinado' ? 'bg-jade-100' : 'bg-sail-100'}`}
        >
          <p
            className={`font-bold px-2 py-1 text-xs ${collaborator.position.description === 'Subordinado' ? 'text-jade-500' : 'text-sail-500'}`}
          >
            {collaborator.position.description}
          </p>
        </div>
      </div>

      <div className='bg-white flex justify-center pb-6 pt-2 w-full'>
        <div className='bg-white gap-2 grid grid-cols-2 grid-rows-2 w-10/12'>
          <div>
            <p className='text-gray-400 text-xs'>Data de Admissão</p>
            <p className='font-bold text-gray-600'>{collaborator.hireDate}</p>
          </div>
          <div>
            <p className='text-gray-400 text-xs'>Remuneração</p>
            <p className='font-bold text-gray-600'>
              {collaborator.monetaryValue}
            </p>
          </div>
          <div>
            <p className='text-gray-400 text-xs'>CPF</p>
            <p className='font-bold text-gray-600'>{collaborator.CPF}</p>
          </div>
        </div>
      </div>

      <div className='w-full rounded-b-xl'>
        <div className='bg-white flex rounded-b-xl w-full'>
          <button
            type='button'
            aria-label='Deletar Colaborador'
            className='active:bg-sea-pink-500 active:text-sail-50 cursor-pointer font-bold h-14 hover:bg-sea-pink-100 rounded-bl-xl text-sea-pink-500 w-1/2'
            onClick={() => {}}
          >
            Deletar
          </button>
          <button
            type='button'
            aria-label='Editar Colaborador'
            className='active:bg-jade-500 active:text-jade-50 cursor-pointer font-bold h-14 hover:bg-jade-100 rounded-br-xl text-jade-500 w-1/2'
            onClick={() => {}}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
