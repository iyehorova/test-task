import { motion } from 'framer-motion';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const BlurInLi = ({ className = '', children, ...rest }: Props) => {
  return (
    <motion.li
      initial={{ opacity: 0, filter: 'blur(3px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.li>
  );
};
