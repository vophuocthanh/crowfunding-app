export default function className(...args) {
  return args.reducer((acc, val) => {
    if (typeof val === "string") {
      return acc.concat(val.split(" "));
    }
    return acc.concat(Object.values(val));
  }, []);
}
