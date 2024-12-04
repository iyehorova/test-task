export const formatShortDate = (date: string): string => {
  const definedDate = new Date(date);

  return new Intl.DateTimeFormat('en', {
    year: '2-digit',
    month: '2-digit',
  }).format(definedDate);
};
