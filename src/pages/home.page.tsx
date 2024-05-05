import useSWR from 'swr';
import { motion } from 'framer-motion';
import { fetcher } from '@/lib/fetcher';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { IconRefreshDot } from '@tabler/icons-react';
import clickTone from '@/assets/sounds/click-tone.wav';
import bellTone from '@/assets/sounds/hotel-bell-ding.mp3';
// @ts-ignore
import useSound from 'use-sound';

const HomePage = () => {
  const { data, isLoading } = useSWR(
    'https://api.quotable.io/quotes/random?maxLength=50',
    fetcher,
  );

  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [sessionType, setSessionType] = useState('focus');
  const [isActive, setIsActive] = useState(false);

  const [playClickTone] = useSound(clickTone);
  const [playBellTone] = useSound(bellTone);

  useEffect(() => {
    let interval: any = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      playBellTone();
      if (sessionType === 'focus') {
        setSeconds(300);
        setSessionType('break');
      } else {
        setSeconds(1500);
        setSessionType('focus');
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  const handleStart = () => {
    playClickTone();
    setIsActive(true);
  };

  const handlePause = () => {
    playClickTone();
    setIsActive(false);
  };

  const handleReset = () => {
    playClickTone();
    setSeconds(1500);
    setIsActive(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="h-[calc(100dvh-50px)] flex flex-col items-center place-content-center">
      <p className="text-2xl font-semibold text-[#FF6500] mb-4">
        {sessionType.toUpperCase()}
      </p>
      <h1 className="text-6xl font-bold">{formatTime(seconds)}</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center mt-4">{!isLoading && data[0].content}</p>
      </motion.div>

      <div className="flex gap-2 place-items-center mt-6">
        <Button
          variant="outline"
          className="rounded-full px-8"
          onClick={isActive ? handlePause : handleStart}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button variant="ghost" size="icon" onClick={handleReset}>
          <IconRefreshDot />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
