export function uppercaseFirstLetterAfterDot(string: string) {
  const newString = string.replace(
    /(^|\. *)([a-z])/gi,
    function (match, separator, char) {
      return separator + char.toUpperCase();
    }
  );

  return newString;
}
