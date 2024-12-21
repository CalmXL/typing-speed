import { faker } from '@faker-js/faker';
import { useState } from 'react';

const useWords = (count: number) => {
  const words: string = faker.word.words(count);

  const [words, setWords] = useState();

  return { words };
};

export default useWords;
