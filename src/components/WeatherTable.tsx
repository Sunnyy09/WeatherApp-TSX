import { useWeatherInfo } from "../hooks/useWeatherInfo";
import { useState, useEffect } from "react";
import { HookResult } from "../weather";

function WeatherTable() {
  const cities: string[] = [
    "Fatehgarh Sahib",
    "Boston",
    "Lucknow",
    "Kolkata",
    "Chandigarh",
    "Shanghai",
  ];

  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  // Here Call the custom hook for each city and store the results
  const weatherData: HookResult[] = cities.map((city) =>
    useWeatherInfo(city, triggerSearch)
  );

  useEffect(() => {
    // setTriggerSearch((prev) => !prev);
    setTriggerSearch(true);
  }, []);

  return (
    <div>
      <h2 className="display-6 text-center mt-6 mb-4">
        Weather of other common places
      </h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "18%" }}>City</th>
              <th style={{ width: "12%" }}>Temp (°C)</th>
              <th style={{ width: "12%" }}>Max Temp (°C)</th>
              <th style={{ width: "12%" }}>Min Temp (°C)</th>
              <th style={{ width: "12%" }}>Feels Like (°C)</th>
              <th style={{ width: "12%" }}>Pressure (hPa)</th>
              <th style={{ width: "12%" }}>Sea Level (hPa)</th>
              <th style={{ width: "22%" }}>Ground Level (hPa)</th>
              <th style={{ width: "22%" }}>Humidity (%)</th>
              <th style={{ width: "22%" }}>Wind (m/s)</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((dataObj: any, idx) => {
              const { data, loading, error } = dataObj;

              if (loading) {
                return (
                  <tr key={idx}>
                    <td colSpan={10}>
                      Loading Weather data for {cities[idx]}...
                    </td>
                  </tr>
                );
              }

              if (error) {
                return (
                  <tr key={idx}>
                    <td colSpan={10}>
                      Error fetchong data for {cities[idx]} |: {error}
                    </td>
                  </tr>
                );
              }

              return data ? (
                <tr key={idx}>
                  <th scope="row">{data.city}</th>
                  <td>{data.main.temp}</td>
                  <td>{data.main.temp_max}</td>
                  <td>{data.main.temp_min}</td>
                  <td>{data.main.feels_like}</td>
                  <td>{data.main.pressure}</td>
                  <td>{data.main.sea_level || "N/A"}</td>
                  <td>{data.main.grnd_level || "N/A"}</td>
                  <td>{data.main.humidity}</td>
                  <td>{data.wind.speed}</td>
                </tr>
              ) : (
                <tr key={idx}>
                  <td colSpan={10}>No data available for {cities[idx]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherTable;
