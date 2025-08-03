const apiKey = "8f1a592f9ca91f485fa2185575919baf";

document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city!");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      <p>🌥️ Condition: ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherHtml;
  } catch (err) {
    document.getElementById("weatherInfo").innerHTML = `<p>⚠️ ${err.message}</p>`;
  }
});
