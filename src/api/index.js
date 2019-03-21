export const getWeather = async (city, country) => {
  const API_KEY = '159eb6aae46fda042f529598b2ee6774';
  try {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    return {
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    };
  } catch (error) {
    return null;
  }
};
