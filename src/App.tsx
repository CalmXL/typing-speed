import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import React from 'react';
import useEngine from './hooks/useEngine';
import DarkModeToggle from './components/DarkModetoggle';
import { calculateAccuracy } from './utils/helper';

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="dark:text-slate-500 text-black">{words}</div>;
};

function App() {
  const { state, words, restart, typed, timeLeft, errors, total } = useEngine();

  return (
    <>
      <DarkModeToggle />
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings
          userInput={typed}
          className="absolute inset-0"
          words={words}
        />
      </WordsContainer>
      <RestartButton
        className={'mx-auto mt-10 text-slate-500'}
        onRestart={restart}
      />
      <Results
        errors={errors}
        accuracyPercentage={calculateAccuracy(total, errors)}
        total={total}
        className="mt-10"
        state={state}
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
    <h2 className="dark:text-primary-400 text-green-500 font-medium mb-3">
      Time: {timeLeft}
    </h2>
  );
};

export default App;
