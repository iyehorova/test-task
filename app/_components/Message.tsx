'use client';

import { useEffect } from 'react';
import { closeMessage, selectMessageData } from '../lib/features/messageSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { BlurIn } from './Transitions/BlurIn';

export const Message = () => {
  const dispatch = useAppDispatch();
  const { isDisplay, type, info } = useAppSelector(selectMessageData);

  useEffect(() => {
    const timer = window.setTimeout(() => dispatch(closeMessage()), 1000);

    return () => clearTimeout(timer);
  });

  if (!isDisplay) {
    return null;
  }

  return (
    <BlurIn className={`alert alert-${type}`} role="alert" duration={0.3}>
      {info}
    </BlurIn>
  );
};
