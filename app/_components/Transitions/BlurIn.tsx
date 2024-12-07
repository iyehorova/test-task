import { motion } from 'framer-motion';

type Props = {
  className?: string;
  role?: string;
  duration?: number;
  children: React.ReactNode;
};

export const BlurIn = ({
  className = '',
  role = '',
  duration = 0.75,
  children,
  ...rest
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(3px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ ease: 'easeInOut', duration: `${duration}` }}
      className={className}
      role={role}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
