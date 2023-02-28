export const getDecimal = (num) => {
  if (Number.isInteger(num)) {
    return 0;
  }

  const decimalStr = num?.toString().split(".")[1];
  return Number(decimalStr);
};

export const getCategories = (filters = []) => {
  const categories = filters?.find(({ id }) => id === "category")?.values[0]
    ?.path_from_root;

  if (categories) {
    return categories.map(({ name }) => name);
  }
  return [];
};
