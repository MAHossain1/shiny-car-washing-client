import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type Props = {
  className?: string;
  children: ReactNode;
};

const MaximumWidthWrapper = ({ className, children }: Props) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2', className)}>
      {children}
    </div>
  );
};

export default MaximumWidthWrapper;
