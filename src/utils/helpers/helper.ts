function isEmpty(x: any) {
  return (
    typeof x === "undefined" ||
    x === null ||
    x === "null" ||
    x === "undefined" ||
    x === false ||
    x.length === 0 ||
    x === ""
  );
}

function isNotEmpty(x: any) {
  return !isEmpty(x);
}

function firstLetterCapitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function stringToBoolean(string: string) {
  switch (string) {
    case "true":
    case "yes":
    case "1":
      return true;
    case "false":
    case "no":
    case "0":
    case null:
      return false;
    default:
      return Boolean(string);
  }
}

export const HELPER = {
  stringToBoolean,
  firstLetterCapitalize,
  isEmpty,
  isNotEmpty,
};
