'use client';

import { useEffect } from 'react';
import { closeMessage, selectMessageData } from '../lib/features/messageSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';

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
    <div className={`alert alert-${type}`} role="alert">
      { info}
    </div>
  );
};
