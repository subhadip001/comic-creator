import React, { useEffect, useState } from "react";


// Given API_BASE_URL and API_KEY, But this is not working due to CORS issues

const API_BASE_URL =
  "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
const API_KEY =
  "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";


// So I have added stabilityai/stable-diffusion-xl-base-1.0 inference API to generate comic image from text


/**
 * 
 * @param text 
 * @description This function will generate a comic image from the text provided
 * Due to CORS issues, error may occur.
 * @returns 
 */

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
          "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
          {
            headers: {
              
              Authorization:
                "Bearer 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",
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
        setError(error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    };

    generateComicImage();
  }, [text]);

  return { url, loading, error };
};

export default useGenerateComicImage;
