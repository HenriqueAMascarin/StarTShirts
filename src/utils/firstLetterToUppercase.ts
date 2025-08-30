export function firstLetterToUppercase(textToFormat: string) {
  const newText = textToFormat.charAt(0).toUpperCase() + textToFormat.slice(1);

  return newText;
}
