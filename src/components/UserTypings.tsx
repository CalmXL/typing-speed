import useSound from 'use-sound';
import Caret from './Caret';
import { useEffect } from 'react';

interface IUserTypingsProps {
  userInput: string;
  className?: string;
  words: string;
}

const UserTypings = ({ userInput, className, words }: IUserTypingsProps) => {
  const typedChars = userInput.split('');

  return (
    <>
      <div className={className}>
        {typedChars.map((char, index) => {
          const expected = words[index];

          return (
            <Character
              actual={char}
              expected={expected}
              key={`${char}-${index}`}
            />
          );
        })}
        <Caret />
      </div>
    </>
  );
};

interface ICharacter {
  actual: string;
  expected: string;
}

const Character = ({ actual, expected }: ICharacter) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === ' ';

  const [playStroke] = useSound('/sounds/lighton.mp3', { volume: 0.5 });
  const [playError] = useSound('/sounds/typing-error.wav', { volume: 0.5 });

  useEffect(() => {
    if (isCorrect) {
      playStroke();
    } else {
      playError();
    }
  }, [isCorrect, playStroke, playError]);

  return (
    <span
      className={cn({
        'text-green-500': isCorrect && !isWhiteSpace,
        'text-red-500': !isCorrect && !isWhiteSpace,
        'bg-red-500/50': isWhiteSpace && !isCorrect,
        'dark:text-red-500': !isCorrect && !isWhiteSpace,
        'dark:text-primary-500': isCorrect && !isWhiteSpace,
        'dark:bg-red-500/50': isWhiteSpace && !isCorrect,
      })}>
      {expected}
    </span>
  );
};

function cn(classes: { [key: string]: boolean }) {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
}

export default UserTypings;
