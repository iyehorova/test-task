export const formatTime = (currentDate: Date): string[] => {
  const formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const [hours, mins] = formattedTime.replace(':', " ").split(' ');
  return [hours, mins];
};
