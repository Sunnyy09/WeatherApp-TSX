import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className="px-4 py-4 my-5 text-center">
        <img
          className="d-block mx-auto mb-4 rounded-3xl"
          src="https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
          alt=""
          width="150"
          height="57"
        />
        <h1 className="display-6 fw-bold text-body-emphasis">
          Welcome to SunnySide!
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Our weather app is designed to provide accurate and up-to-the-minute
            weather information, helping you stay prepared for whatever the day
            brings. Whether you're heading out for your morning commute,
            planning errands, or keeping an eye on changing weather conditions,
            we've got you covered with real-time data.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to={"/"} className="btn btn-primary btn-lg px-4 gap-3">
              Check Out
            </Link>
            {/* <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button> */}
          </div>
        </div>
      </div>
      <div className="w-3/4 py-8">
        <ul className="list-group shadow-sm">
          <li className="list-group-item active" aria-current="true">
            <span className="text-xl font-bold">Key Features:</span>{" "}
          </li>
          <li className="list-group-item" aria-current="true">
            <span className="text-md font-semibold">
              Real-Time Weather Updates:
            </span>{" "}
            Get the current weather conditions instantly for your location.
          </li>
          <li className="list-group-item" aria-current="true">
            <span className="text-md font-semibold">
              Live Temperature, Humidity, and More:
            </span>{" "}
            Stay informed with essential details like temperature, humidity
            levels, wind speed, and atmospheric pressure.
          </li>
          <li className="list-group-item" aria-current="true">
            <span className="text-md font-semibold">
              Location-Based Updates:
            </span>{" "}
            Automatically detects your location to provide the most relevant
            weather information.
          </li>
          <li className="list-group-item" aria-current="true">
            <span className="text-md font-semibold">Minimalist Design:</span> A
            clean, easy-to-use interface for quick access to the weather data
            you need.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
