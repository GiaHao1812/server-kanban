export const generatorRadomText = (num: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (let i = 0; i < characters.length; i++) {
    if (text.length <= (num ? num : 10)) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  return text.toLocaleLowerCase();
};
