
export const formatProductDate = (date: string) => { 
  const definedDate = new Date(date);
  return new Intl.DateTimeFormat('en', {
    year: "numeric",
    month: '2-digit',
    day: "2-digit",
  }).format(definedDate);
}