let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "94f4ba9e89bcc3d590de8337762beae0";

let kelvinDiff = 273.15;
let ciudad = "Córdoba";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  console.log(data);
  const datosClima = document.getElementById("datosClima");
  datosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const viento = data.wind.speed;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `Temperatura: ${Math.round(temperatura - kelvinDiff)}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `Humedad: ${humedad}%`;

  const vientoInfo = document.createElement("p");
  vientoInfo.textContent = `Viento: ${(viento * 3.6).toFixed(2)} k/h`;

  const iconoImagen = document.createElement("img");
  iconoImagen.src = `https://openweathermap.org/img/wn/${icono}.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `Descripción: ${descripcion}`;

  datosClima.appendChild(ciudadTitulo);
  datosClima.appendChild(iconoImagen);
  datosClima.appendChild(temperaturaInfo);
  datosClima.appendChild(humedadInfo);
  datosClima.appendChild(vientoInfo);
  datosClima.appendChild(descripcionInfo);
}
