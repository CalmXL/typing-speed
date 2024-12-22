import Caret from './Caret';

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
          const isCorrect = char === expected;
          const isWhiteSpace = expected === ' ';
          return (
            <span
              className={cn({
                'text-green-500': isCorrect && !isWhiteSpace,
                'text-red-500': !isCorrect && !isWhiteSpace,
                'bg-red-500/50': isWhiteSpace && !isCorrect,
                'dark:text-red-500': !isCorrect && !isWhiteSpace,
                'dark:text-primary-500': isCorrect && !isWhiteSpace,
                'dark:bg-red-500/50': isWhiteSpace && !isCorrect,
              })}
              key={`${char}_${index}`}>
              {expected}
            </span>
          );
        })}
        <Caret />
      </div>
    </>
  );
};

function cn(classes: { [key: string]: boolean }) {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
}

export default UserTypings;
