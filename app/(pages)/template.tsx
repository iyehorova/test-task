'use client';


import { FadeUp } from '../_components/Transitions/FadeUp';

export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FadeUp>
      {children}
    </FadeUp>
  );
}
