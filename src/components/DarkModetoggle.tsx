import { MdDarkMode } from 'react-icons/md';
import useDarkMode from '../hooks/useDarkMode';
import { CiLight } from 'react-icons/ci';
import { useRef } from 'react';

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleToggleClick = () => {
    // 修复切换焦点问题
    toggleRef.current?.blur();
    setIsDark(!isDark);
  };

  return (
    <button
      ref={toggleRef}
      className="w-4 h-5 absolute top-20 right-20 dark:text-slate-400 text-3xl"
      onClick={handleToggleClick}>
      {isDark ? <MdDarkMode /> : <CiLight />}
    </button>
  );
};

export default DarkModeToggle;
