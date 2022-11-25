function urlToMap(format: string, url: string) {
  const res: { [a: string]: string } = {};
  const formatArray = getVariablesArray(format.substring(1));

  const [uri, param] = url.substring(1).split("?");

  const firstArray = uri.split("/");
  formatArray.map((i) => (res[i[1]] = firstArray[i[0]]));
  param.split("&").map((i) => {
    const pair = i.split("=");
    res[pair[0]] = pair[1];
  });

  return res;
}

function getVariablesArray(format: string): [number, string][] {
  return format
    .split("/")
    .filter((i) => i[0] === ":")
    .map((i, ix) => {
      return [ix, i.substring(1)];
    });
}

console.log(
  urlToMap(
    "/:version/api/:collection/:id",
    "/6/api/listings/3?sort=desc&limit=11"
  )
);
