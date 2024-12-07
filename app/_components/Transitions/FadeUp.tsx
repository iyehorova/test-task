import { motion } from 'framer-motion';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const FadeUp = ({ className = '', children, ...rest }: Props) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
