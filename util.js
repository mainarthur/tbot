const camelCase = (obj) => {
  if (typeof obj === "string") {
    return obj.replace(/([_][a-z])/g, (group) =>
      group.toUpperCase().replace("_", "")
    );
  }

  if (Array.isArray(obj)) {
    return obj.map(camelCase);
  }

  if (obj?.constructor === Object) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
      result[camelCase(key)] =
        Array.isArray(value) || value?.constructor === Object
          ? camelCase(value)
          : value;
    });
    return result;
  }

  return obj;
};
const snakeCase = (obj) => {
  if (typeof obj === "string") {
    return obj.replace(/([A-Z])/g, (group) => `_${group.toLowerCase()}`);
  }

  if (Array.isArray(obj)) {
    return obj.map(snakeCase);
  }

  if (obj?.constructor === Object) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
      result[snakeCase(key)] =
        Array.isArray(value) || value?.constructor === Object
          ? snakeCase(value)
          : value;
    });
    return result;
  }

  return obj;
};

const stringifyQuery = (obj) =>
  Object.entries(obj).reduce(
    (result, [key, value], i) => `${result}${i != 0 ? "&" : ""}${key}=${value}`,
    ""
  );

module.exports = { camelCase, snakeCase, stringifyQuery };
