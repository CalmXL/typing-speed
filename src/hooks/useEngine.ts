import { useCallback, useEffect, useState } from 'react';
import useWords from './useWord';
import useCountdownTimer from './useCountdownTimer';
import useTypings from './useTypings';
import { countErrors } from '@/utils/helper';

export type State = 'start' | 'run' | 'finish';

const useEngine = () => {
  const [state, setState] = useState<State>('start');
  const { timeLeft, resetCountDown, startCountDown } = useCountdownTimer(20);
  const { typed, resetTotalTyped, total, clearTyped, cursor } = useTypings(
    state != 'finish'
  );
  const [errors, setErrors] = useState(0);
  const { words, updateWords } = useWords(10);

  const areWordFinish = words.length === cursor;

  const restart = () => {
    resetCountDown();
    resetTotalTyped();
    setState('start');
    updateWords();
    clearTyped();
    setErrors(0);
  };

  // 计算错误数
  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(words.length, cursor));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [words, typed, cursor]);

  // 开始敲击 计时器开始
  useEffect(() => {
    if (state === 'start' && cursor > 0) {
      setState('run');
      startCountDown();
    }
  }, [state, startCountDown, cursor, sumErrors]);

  // 当计时器结束
  useEffect(() => {
    if (timeLeft === 0 && state === 'run') {
      setState('finish');
      sumErrors();
    }
  }, [timeLeft, state, sumErrors]);

  // 当第一组单词敲完, 要产生一些新的单词
  useEffect(() => {
    if (areWordFinish) {
      updateWords();
      clearTyped();

      // 计算错误数
      sumErrors();
    }
  });

  return {
    state,
    words,
    updateWords,
    timeLeft,
    resetCountDown,
    startCountDown,
    typed,
    errors,
    total,
    restart,
  };
};

export default useEngine;
