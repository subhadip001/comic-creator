import React, { useEffect, useState } from "react";

const API_BASE_URL =
  "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
const API_KEY =
  "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";

const useGenerateComicImage = (text: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!text) {
      return;
    }
    const generateComicImage = async () => {
      setLoading(true);
      setError(null);
      console.log(text);
      try {
        const response = await fetch(
          "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
          {
            headers: {
              Accept: "image/png",
              Authorization:
                "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              inputs: text,
            }),
          }
        );
        const result = await response.blob();
        const url = window.URL.createObjectURL(result);
        setUrl(url);
        console.log(url);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    };

    generateComicImage();
  }, [text]);

  return { url, loading, error };
};

export default useGenerateComicImage;
