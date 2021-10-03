import { useCallback } from "react";

const useFetch = (method: string) => {
  const postFetch = useCallback(
    async (url: string, payload: Record<string, any>, token = "") => {
      console.log(token);
      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },

        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.log(res);
        throw Error("could not fetch");
      } else {
        const resData = await res.json();
        return resData;
      }
    },
    [method]
  );

  const getFetch = async (url: string, token: string) => {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw Error("could not fetch");
    } else {
      const resData = await res.json();
      return resData;
    }
  };

  return { getFetch, postFetch };
};

export default useFetch;
