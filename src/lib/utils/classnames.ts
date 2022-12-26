export function classnames(
  componentName,
  classesObject = {},
  classString = ""
) {
  const res = Object.keys(classesObject).map((key) => {
    switch (typeof classesObject[key]) {
      case "boolean":
        return classesObject[key] ? componentName + "-" + key : "";
      case "string":
      case "number":
        return componentName + "-" + key + "-" + classesObject[key];
    }
  });
  return (componentName + " " + res.join(" ") + " " + classString).trim();
}
