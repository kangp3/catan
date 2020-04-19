export const urlWithParams = (baseUrl: string, params: object = {}): string => {
  let url = new URL(baseUrl);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
  return url.toString();
};

export const fetchBody = <T>(
  url: string,
  opts: RequestInit = {}
): Promise<T> => {
  return fetch(url, { ...opts }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<T>;
  });
};
