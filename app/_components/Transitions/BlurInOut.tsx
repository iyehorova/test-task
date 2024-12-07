import { motion } from 'framer-motion';

type Props = {
  className?: string;
  role?: string;
  duration?: number;
  children: React.ReactNode;
};

export const BlurInOut = ({
  className = '',
  role = '',
  duration = 0.75,
  children,
  ...rest
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(0px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{
        opacity: 0,
        filter: 'blur(3px)',
        transition: { ease: 'easeIn', duration: `${duration}` },
      }}
      transition={{ ease: 'easeInOut', duration: `${duration}` }}
      className={className}
      role={role}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
