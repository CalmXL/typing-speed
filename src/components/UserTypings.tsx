import Caret from './Caret';

interface IUserTypingsProps {
  userInput: string;
  className?: string;
}

const UserTypings = ({ userInput, className }: IUserTypingsProps) => {
  const typedChars = userInput.split('');

  return (
    <>
      <div className={className}>
        {typedChars.map((char, index) => {
          return (
            <span className="text-primary-500" key={`${char}_${index}`}>
              {char}
            </span>
          );
        })}
        <Caret />
      </div>
    </>
  );
};

export default UserTypings;
