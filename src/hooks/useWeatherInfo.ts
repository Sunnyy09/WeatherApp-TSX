import { useEffect, useState } from "react";
import { WeatherData } from "../weather";

export function useWeatherInfo(cityName: string, triggerSearch: boolean) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!triggerSearch || !cityName) {
      return;
    }

    const controller = new AbortController(); // For canceling fetch calls
    const fetchWeatherdata = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result) {
          setData({ city: result.name, ...result });
        } else {
          throw new Error("Data structure is unexpected");
        }
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted.");
          } else {
            console.error("Error fetching data:", err);
            setError(err.message);
          }
        } else {
          console.error("Unknown error:", err);
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherdata();

    // Reset triggerSearch after the request completes
    // return () => {
    //   setData(null);
    //   setLoading(false);
    //   setError(null);
    // };

    return () => {
      controller.abort();
    };
  }, [cityName, triggerSearch]);

  return { data, loading, error };
}
