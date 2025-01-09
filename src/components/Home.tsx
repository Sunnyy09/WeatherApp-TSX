import WeatherTable from "./WeatherTable";
import { HookResult } from "../weather";
import { useRef } from "react";

function Home({ data, loading, error }: HookResult) {
  const weatherTableRef = useRef<HTMLDivElement>(null);

  const scrollToTable = () => {
    if (weatherTableRef.current) {
      weatherTableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (error)
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );

  return (
    <section className="min-h-[100vh] w-[80vw] py-12">
      {loading ? (
        <p className="text-center text-2xl">Loading Weather Data...</p>
      ) : (
        <>
          <h1 className="text-4xl text-center font-bold mb-8">
            Weather for {data?.name}
          </h1>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center min-h-80 md:flex md:flex-wrap">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm lg:min-h-full sm:h-full">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Temperature</h4>
                </div>
                <div className="card-body flex flex-col justify-between items-center">
                  <ul className="list-unstyled mt-6 text-lg">
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Temperature is{" "}
                      <span className="text-blue-700">
                        {data?.main.temp}(°C)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Min Temperature is{" "}
                      <span className="text-red-600">
                        {data?.main.temp_min}(°C)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Max Temperature is{" "}
                      <span className="text-yellow-600">
                        {data?.main.temp_max}(°C)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Clouds PCT is{" "}
                      <span className="text-green-600">
                        {data?.clouds.all}(%)
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                    onClick={scrollToTable}
                  >
                    Check More
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm lg:min-h-full sm:h-full">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Humidity Info</h4>
                </div>
                <div className="card-body flex flex-col justify-between items-center">
                  <ul className="list-unstyled mt-6 text-lg">
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Feels like{" "}
                      <span className="text-red-600">
                        {data?.main.feels_like}(°C)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Humidity is{" "}
                      <span className="text-green-600">
                        {data?.main.humidity}(%)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Pressure is{" "}
                      <span className="text-gray-600">
                        {data?.main.pressure}(hPa)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Sea Level is{" "}
                      <span className="text-slate-500">
                        {data?.main.sea_level}(hPa)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Ground Level is{" "}
                      <span className="text-green-600">
                        {data?.main.grnd_level}(hPa)
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-3 shadow-sm border-primary lg:min-h-full sm:h-full">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Wind Info</h4>
                </div>
                <div className="card-body flex flex-col justify-between items-center">
                  <ul className="list-unstyled mt-6 text-lg">
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Wind Speed is{" "}
                      <span className="text-blue-600">
                        {data?.wind.speed}(m/s)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Wind Degree is{" "}
                      <span className="text-stone-600">
                        {data?.wind.deg}(°)
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Sunrise Time is{" "}
                      <span className="text-indigo-400 underline">
                        {new Date(
                          data?.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </span>
                    </li>
                    <li className="text-gray-800 font-semibold leading-relaxed">
                      Sunset Time is{" "}
                      <span className="text-indigo-400 underline">
                        {new Date(data?.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16" ref={weatherTableRef}>
            <WeatherTable />
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
