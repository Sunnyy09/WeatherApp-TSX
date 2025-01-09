export interface WeatherData {
  city: string;
  [key: string]: any;
}

export interface WeatherMain {
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
}

export interface WeatherWind {
  speed: number;
}

export interface WeatherTableData {
  city: string;
  main: WeatherMain;
  wind: WeatherWind;
}

export interface HookResult {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}
interface ImportMetaEnv {
  readonly VITE_WEATHER_KEY: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
