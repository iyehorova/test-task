import { motion } from 'framer-motion';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const BlurFadeInOutRL = ({
  className = '',
  children,
  ...rest
}: Props) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0, filter: 'blur(0px)' }}
      animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
      exit={{
        x: 10,
        opacity: 0,
        filter: 'blur(0px)',
        transition: { ease: 'easeIn', duration: 0.3 },
      }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
