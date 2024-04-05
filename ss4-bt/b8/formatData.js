const formatDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10&& month<10) {
    const validatedDate = `0${day}/0${month}/${year}`;
    return console.log(validatedDate);
  } else {
    const validatedDate = `${day}/${month}/${year}`;
    return console.log(validatedDate);
  }
};
export {formatDate}