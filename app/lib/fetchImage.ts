import React, { useEffect, useState } from "react";

const API_BASE_URL =
  "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
const API_KEY =
  "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";

interface ComicImage {
  url: string | null;
  loading: boolean;
  error: unknown;
}

const useGenerateComicImage = (text: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    generateComicImage();
  }, [text]);

  return { url, loading, error };
};

export default useGenerateComicImage;
