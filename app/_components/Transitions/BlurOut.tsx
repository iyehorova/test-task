import { motion } from 'framer-motion';

type Props = {
  className?: string;
  role?: string;
  duration?: number;
  children: React.ReactNode;
};

export const BlurOut = ({
  className = '',
  role = '',
  duration = 0.75,
  children,
  ...rest
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(0px)' }}
      exit={{
        x: 10,
        opacity: 0,
        filter: 'blur(3px)',
        transition: { ease: 'easeIn', duration: `${duration}` },
      }}
      className={className}
      role={role}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
