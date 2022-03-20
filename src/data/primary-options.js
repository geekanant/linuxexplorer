const options = [
  { value: "list", label: "list" },
  { value: "create", label: "create" },
  { value: "remove", label: "remove" },
  { value: "move", label: "move" },
  { value: "navigate", label: "navigate" },
  { value: "change", label: "change" },
  { value: "view", label: "view" },
  { value: "copy", label: "copy" },
  { value: "find", label: "find" },
  { value: "execute", label: "execute" },
  { value: "sort", label: "sort" },
  { value: "count", label: "count" },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
