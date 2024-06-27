import SVGWrapper from '@/components/UI/SVGWrapper';
import People from '@/assets/people.svg';

export default function Header() {
  return (
    <div className={'flex gap-2 bg-morning-glory-300 h-14 p-4 items-center'}>
      <SVGWrapper className={'fill-morning-glory-800 w-6'}>
        <People />
      </SVGWrapper>
      <p className={'font-semibold text-xl text-morning-glory-800'}>
        Gestão de Colaboradores
      </p>
    </div>
  );
}
