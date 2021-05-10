function RusToLatin(str) {
  const ru = new Map([
    ["f", "а"],
    ["d", "в"],
    ["u", "г"],
    ["l", "д"],
    ["t", "е"],
    ["p", "з"],
    ["b", "и"],
    ["q", "й"],
    ["r", "к"],
    ["k", "л"],
    ["v", "м"],
    ["y", "н"],
    ["j", "о"],
    ["g", "п"],
    ["h", "р"],
    ["c", "с"],
    ["n", "т"],
    ["e", "у"],
    ["a", "ф"],
    ["w", "ц"],
    ["x", "ч"],
    ["i", "ш"],
    ["o", "щ"],
    ["z", "я"],
    ["s", "ы"],
    ["m", "ь"],
    ["[", "х"],
    ["]", "ъ"],
    ["'", "э"],
    [".", "ю"],
    ["`", "ё"],
    [";", "ж"],
    [",", "б"],
  ]);

  str = str.replace(/[ъь]+/g, "");

  return Array.from(str).reduce(
    (s, l) =>
      s +
      (ru.get(l) ||
        (ru.get(l.toLowerCase()) === undefined && l) ||
        ru.get(l.toLowerCase()).toUpperCase()),
    ""
  );
}
export default RusToLatin;
