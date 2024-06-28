//Dornbirn
function updateTime() {
  let dornbirnElement = document.querySelector("#dornbirn");
  if (dornbirnElement) {
    let dornbirnDateElement = dornbirnElement.querySelector(".date");
    let dornbirnTimeElement = dornbirnElement.querySelector(".time");
    let dornbirnTime = moment().tz("Europe/Vienna");

    dornbirnDateElement.innerHTML = dornbirnTime.format("dddd, MMMM Do YYYY");
    dornbirnTimeElement.innerHTML = dornbirnTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //New York
  let newyorkElement = document.querySelector("#newyork");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("dddd, MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("dddd, MMMM Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
      </div>
        <div class="time">${cityTime.format(
          "h:mm:ss "
        )} <small>${cityTime.format("A")}</small></div>
      </div> <a href="/"> All cities</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
