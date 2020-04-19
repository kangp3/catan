export const fetchBody = <T>(url: string, opts: object = {}): Promise<T> => {
  return fetch(url, { method: "GET", ...opts }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<T>;
  });
};
