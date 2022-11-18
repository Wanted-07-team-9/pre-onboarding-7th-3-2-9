import { useState, useEffect } from 'react';

// React 18
// Uncaught Error: Minified React error #425;
// Uncaught Error: Minified React error #418;
// Uncaught Error: Minified React error #423;
// 에러 대체하기 위한 hook (new Date 관련)
// https://github.com/vercel/next.js/discussions/39425
// https://velog.io/@real-bird/Next.js-SSR-Error-React18-error-423-418-425

export const useFormattedDate = (date: string) => {
  const [formattedDate, setFormattedDate] = useState<string>(date);
  useEffect(() => {
    if (date) {
      setFormattedDate(new Date(date).toISOString());
    }
  }, [date]);
  return formattedDate;
};

export const useFormattedNowDate = () => {
  const [formattedDate, setFormattedDate] = useState<string>(null);
  useEffect(() => {
    setFormattedDate(new Date().toISOString());
  }, []);
  return formattedDate;
};

export const useFormatLocaleDate = (date: string) => {
  const [formattedDate, setFormattedDate] = useState<string>(date);
  useEffect(() => {
    if (date) {
      setFormattedDate(new Date(date).toLocaleString());
    }
  }, [date]);

  return formattedDate;
};
