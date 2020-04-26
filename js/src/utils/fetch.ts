export const urlWithParams = (baseUrl: string, params: object = {}): string => {
  let url = new URL(baseUrl);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
  return url.toString();
};

const camelCaseKeys = (obj: object): object => {
  const toCamelCase = (str: string) =>
    str.replace(/_(\w)/g, m => m[1].toUpperCase());
  return Object.entries(obj)
    .map(([k, v]) => {
      if (v === null) {
        return [toCamelCase(k), v];
      } else if (Array.isArray(v)) {
        return [
          toCamelCase(k),
          v.map(i =>
            typeof i === "object" && i !== null ? camelCaseKeys(i) : i
          ),
        ];
      } else if (typeof v === "object") {
        return [toCamelCase(k), camelCaseKeys(v)];
      }
      return [toCamelCase(k), v];
    })
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
};

export const fetchBody = <T>(
  url: string,
  opts: RequestInit = {}
): Promise<T> => {
  return fetch(url, { ...opts }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json().then(camelCaseKeys) as Promise<T>;
  });
};
