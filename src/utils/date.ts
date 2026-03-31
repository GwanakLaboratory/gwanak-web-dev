const formatDateString = (inputString: string) => {
  const dateObject = new Date(inputString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};

const formatDateStringByPoint = (inputString: Date) => {
  const dateObject = new Date(inputString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
export { formatDateString, formatDateStringByPoint };
