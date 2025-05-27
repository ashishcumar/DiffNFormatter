import { useState } from "react";

const baseUrl = "http://127.0.0.1:8000/api";
const endpoints = {
  diff: "/diff/",
  format: "/format/",
};

const useApiCallHooks = () => {
  const [loading, setLoading] = useState(false);

  const getDiff = async (textLeft: string, textRight: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}${endpoints.diff}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          left_text: textLeft,
          right_text: textRight,
        }),
      });
      const res = await response.json();
      if (res?.diff_html?.length) {
        return res.diff_html;
      }
    } catch (error) {
      console.error("Error fetching diff:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFormatted = async (jsonData: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}${endpoints.format}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonData,
        }),
      });
      const res = await response.json();
      if (res?.formattedJSON?.length) {
        return res.formattedJSON;
      }
    } catch (err) {
      console.error("Error fetching diff:", err);
    } finally {
      setLoading(false);
    }
  };

  return { getDiff, loading, getFormatted };
};

export default useApiCallHooks