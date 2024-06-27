//Dornbirn
function updateTime() {
  let dornbirnElement = document.querySelector("#dornbirn");
  let dornbirnDateElement = dornbirnElement.querySelector(".date");
  let dornbirnTimeElement = dornbirnElement.querySelector(".time");
  let dornbirnTime = moment().tz("Europe/Vienna");

  dornbirnDateElement.innerHTML = dornbirnTime.format("dddd, MMMM Do YYYY");
  dornbirnTimeElement.innerHTML = dornbirnTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("dddd, MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Osaka
  let osakaElement = document.querySelector("#osaka");
  let osakaDateElement = osakaElement.querySelector(".date");
  let osakaTimeElement = osakaElement.querySelector(".time");
  let osakaTime = moment().tz("Asia/Tokyo");

  osakaDateElement.innerHTML = osakaTime.format("dddd, MMMM Do YYYY");
  osakaTimeElement.innerHTML = osakaTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
