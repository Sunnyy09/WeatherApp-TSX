import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useWeatherInfo } from "./hooks/useWeatherInfo";
import { useEffect, useState } from "react";
import WeatherTable from "./components/WeatherTable";

function App() {
  const [searchCity, setSearchCity] = useState<string>("New York");
  const [triggerCity, setTriggerCity] = useState<boolean>(false);

  const { data, error, loading } = useWeatherInfo(searchCity, triggerCity);
  // console.log(data);

  const handleSearch = () => {
    if (searchCity.trim()) {
      setTriggerCity(true);
    } else {
      alert("Please enter a city name.");
    }
  };

  useEffect(() => {
    setTriggerCity(true);
  }, []);

  const handleNameChange = (value: string): void => {
    setSearchCity(value);
    setTriggerCity(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center">
        <Header
          onSearch={handleSearch}
          nameSearch={searchCity}
          onNameChange={handleNameChange}
        />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} loading={loading} error={error} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/weather-table" element={<WeatherTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
