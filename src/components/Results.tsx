import { motion } from 'framer-motion';
import { formatPercentage } from '@/utils/helper.ts';

interface IResultProps {
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}

const Results = ({
  errors,
  accuracyPercentage,
  total,
  className,
}: IResultProps) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <motion.ul
      className={`${className} flex flex-col items-center text-primary-400 space-y-3`}>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}>
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}>
        Accuracy: {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        className="text-red-500"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}>
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.5 }}>
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
};

export default Results;
