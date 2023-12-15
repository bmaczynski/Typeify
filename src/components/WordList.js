export const generateRandomWords = async (count) => {
  const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
  const words = await response.json();
  return words;
};