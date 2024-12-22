import { useRef } from 'react';
import { MdRefresh } from 'react-icons/md';

interface RestartProps {
  onRestart: () => void;
  className?: string;
}

const RestartButton = ({
  onRestart: handlerRestart,
  className,
}: RestartProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlerClick = () => {
    buttonRef.current?.blur();
    handlerRestart();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handlerClick}
      className={`block rounded px-8 py-2 dark:hover:bg-slate-700/50 hover:bg-slate-100  ${className}`}>
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
