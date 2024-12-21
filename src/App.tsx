import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import React from 'react';
import useEngine from './hooks/useEngine';

const GenerateWords = ({ words }: { words: string }) => {
  return <div>{words}</div>;
};

function App() {
  const { state } = useEngine();

  return (
    <>
      <CountdownTimer timeLeft={20} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings
          userInput={'Hello world'}
          className="absolute inset-0"
        />'{' '}
      </WordsContainer>
      <RestartButton
        className={'mx-auto mt-10 text-slate-500'}
        onRestart={() => null}
      />
      <Results
        errors={10}
        accuracyPercentage={65}
        total={200}
        className="mt-10"
      />
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl ma-w-xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <h2 className="text-primary-400 font-medium mb-3">Time: {timeLeft}</h2>
  );
};

export default App;
