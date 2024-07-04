async function broadcast() {
  let url =
    "https://api.open-meteo.com/v1/forecast?latitude=84.72&longitude=-28.46&hourly=temperature_2m,apparent_temperature,precipitation,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto";
  let request = new Request(url);
  const response = await fetch(request);
  const foo = await response.text();

  const fee = JSON.parse(foo);
  widget(fee);
  console.log(fee);
}

function widget(obj) {
  console.log(obj);
  var temP = document.createElement("p");
  var city = document.createElement("p");
  city.textContent = "Trent Lakes";
  temP.textContent = `${obj["current_weather"]["temperature"]} ${obj["hourly_units"]["apparent_temperature"]}`;
  document.getElementById("weatherCore").appendChild(city);
  document.getElementById("weatherCore").appendChild(temP);

  var cloudCoverP = document.createElement("p");
  cloudCoverP.textContent = `Cloud Cover: ${obj["hourly"]["cloudcover"][0]}%`;

  document.getElementById("weatherCore").appendChild(cloudCoverP);

  var precipitationP = document.createElement("p");
  precipitationP.textContent = `precipitation: ${obj["hourly"]["precipitation"][0]} ${obj["hourly_units"]["precipitation"]}`;

  document.getElementById("weatherCore").appendChild(precipitationP);
}

broadcast();
