export const maskDate = (createdAt: Date): string => {
  createdAt.setHours(createdAt.getHours() - 3);
  const [date, time] = createdAt.toISOString().split('T');

  const formattedDate = date.split('-').reverse().join('/');
  const formattedTime = time.split('.')[0];

  return `${formattedDate} às ${formattedTime}`;
};
