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
  const temperatura = data.main.temp;
  const descripcion = data.weather[0].description;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = ciudadNombre;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `Temperatura: ${temperatura - kelvinDiff}°C`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `Descripción: ${descripcion}`;

  datosClima.appendChild(ciudadTitulo);
  datosClima.appendChild(temperaturaInfo);
  datosClima.appendChild(descripcionInfo);
}
