import { useState, useRef, useEffect } from 'react';

const useCountdownTimer = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCountDown = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  };

  const resetCountDown = () => {
    // 清除之前的计时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(initialTime);
  };

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  return { timeLeft, startCountDown, resetCountDown };
};

export default useCountdownTimer;
