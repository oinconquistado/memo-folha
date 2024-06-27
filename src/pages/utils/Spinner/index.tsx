import './Spinner.css';

const Spinner = ({ color }: { color: string }) => {
  const basicSpinnerClasses =
    'animate-spin absolute block border-8 border-b-transparent border-current border-r-transparent border-solid border-t-transparent box-border h-16 m-2 rounded-full w-16';

  const delayArray = ['delay-150', 'delay-100', 'delay-75', 'delay-50'];

  return (
    <div className='grid h-screen w-screen place-items-center'>
      <div className={`relative inline-block h-20 w-20 ${color}`}>
        {delayArray.map((delay) => (
          <div key={delay} className={`${basicSpinnerClasses} ${delay}`} />
        ))}
      </div>
    </div>
  );
};

export default Spinner;
