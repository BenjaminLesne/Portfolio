export function convertMarkdownLinkToHtml(string: string) {
  const newString = string.replace(
    /\[(.*?)\]\(([^)]+)\)/g,
    function (match, linkText, url) {
      return `<a href=${url}>${linkText}</a>`;
    }
  );

  return newString;
}
