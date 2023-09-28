const results = [];
function updateResultsArray(cityname, data) {
  results.push({
    cityname,
    date: data.list[5].dt_txt,
    temp: data.list[5].main.temp,
    wind: data.list[5].wind.speed,
    humidity: data.list[5].main.humidity,
  });
  if (results.length > 5) { // limit the array length to 5
    results.shift(); // remove the oldest result
    results.push(); // pushes out first
  }
  updateButtonsAndLocalStorage();
}
function updateButtonsAndLocalStorage() {
  results.forEach((result, index) => {
    localStorage.setItem(`result${index + 1}`, result.cityname);
    document.querySelector(`#result${index + 1}`).textContent = result.cityname;
  });
}
document.querySelector("#fetch-button").addEventListener("click", function () {
  const citynameInput = document.querySelector("#cityname");
  const cityname = citynameInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=1e27d7859898089c77e02a338285d98b&units=imperial`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    updateResultsArray(cityname, data);
    document.querySelector("#date1").textContent = "Date: " + data.list[5].dt_txt;
    document.querySelector("#temp1").textContent = "Temp: " + data.list[5].main.temp  + " \u00B0F";
    document.querySelector("#wind1").textContent = "Wind: " + data.list[5].wind.speed + " mph";
    document.querySelector("#humid1").textContent = "Humidity: " + data.list[5].main.humidity + " %";
    document.querySelector("#descript1").textContent = "Description: " + data.list[5].weather[0].description;
    
    document.querySelector("#date2").textContent = "Date: " + data.list[13].dt_txt;
    document.querySelector("#temp2").textContent = "Temp: " + data.list[13].main.temp  + " \u00B0F";
    document.querySelector("#wind2").textContent = "Wind: " + data.list[13].wind.speed + " mph";
    document.querySelector("#humid2").textContent= "Humidity: " + data.list[13].main.humidity + " %";
    document.querySelector("#descript2").textContent = "Description: " + data.list[13].weather[0].description;
    
    document.querySelector("#date3").textContent = "Date: " + data.list[21].dt_txt;
    document.querySelector("#temp3").textContent = "Temp: " + data.list[21].main.temp + " \u00B0F";
    document.querySelector("#wind3").textContent = "Wind: " + data.list[21].wind.speed + " mph";
    document.querySelector("#humid3").textContent= "Humidity: " + data.list[21].main.humidity + " %";
    document.querySelector("#descript3").textContent = "Description: " + data.list[21].weather[0].description;

    document.querySelector("#date4").textContent = "Date: " + data.list[29].dt_txt;
    document.querySelector("#temp4").textContent = "Temp: " + data.list[29].main.temp + " \u00B0F";
    document.querySelector("#wind4").textContent = "Wind: " + data.list[29].wind.speed + " mph";
    document.querySelector("#humid4").textContent= "Humidity: " + data.list[29].main.humidity + " %";
    document.querySelector("#descript4").textContent = "Description: " + data.list[29].weather[0].description;

    document.querySelector("#date5").textContent = "Date: " + data.list[37].dt_txt;
    document.querySelector("#temp5").textContent = "Temp: " + data.list[37].main.temp + " \u00B0F";
    document.querySelector("#wind5").textContent = "Wind: " + data.list[37].wind.speed + " mph";
    document.querySelector("#humid5").textContent= "Humidity: " + data.list[37].main.humidity + " %";
    document.querySelector("#descript5").textContent = "Description: " + data.list[37].weather[0].description;

    console.log(data)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=1e27d7859898089c77e02a338285d98b&units=imperial`, {
      method: 'GET',
      credentials: 'same-origin',
      redirect: 'follow',
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#temp").textContent = "Temp: " + data.main.temp + " \u00B0F";
      document.querySelector("#wind").textContent = "Wind: " + data.wind.speed + " mph";
      document.querySelector("#humid").textContent = "Humidity: " + data.main.humidity + " %";
    });
    citynameInput.value = '';
  });
});

for (let i = 1; i <= 5; i++) {
  const resultButton = document.querySelector(`#result${i}`);
  resultButton.addEventListener("click", function () {
    const cityname = localStorage.getItem(`result${i}`);
    if (cityname) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=1e27d7859898089c77e02a338285d98b&units=imperial`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          updateResultsArray(cityname, data);
          document.querySelector("#date1").textContent = "Date: " + data.list[5].dt_txt;
          document.querySelector("#temp1").textContent = "Temp: " + data.list[5].main.temp;
          document.querySelector("#wind1").textContent = "Wind: " + data.list[5].wind.speed;
          document.querySelector("#humid1").textContent = "Humidity: " + data.list[5].main.humidity;
          document.querySelector("#date2").textContent = "Date: " + data.list[13].dt_txt;
          document.querySelector("#temp2").textContent = "Temp: " + data.list[13].main.temp;
          document.querySelector("#wind2").textContent = "Wind: " + data.list[13].wind.speed;
          document.querySelector("#humid2").textContent= "Humidity: " + data.list[13].main.humidity;
    
          document.querySelector("#date3").textContent = "Date: " + data.list[21].dt_txt;
          document.querySelector("#temp3").textContent = "Temp: " + data.list[21].main.temp;
          document.querySelector("#wind3").textContent = "Wind: " + data.list[21].wind.speed;
          document.querySelector("#humid3").textContent= "Humidity: " + data.list[21].main.humidity;

          document.querySelector("#date4").textContent = "Date: " + data.list[29].dt_txt;
          document.querySelector("#temp4").textContent = "Temp: " + data.list[29].main.temp;
          document.querySelector("#wind4").textContent = "Wind: " + data.list[29].wind.speed;
          document.querySelector("#humid4").textContent= "Humidity: " + data.list[29].main.humidity;

          document.querySelector("#date5").textContent = "Date: " + data.list[37].dt_txt;
          document.querySelector("#temp5").textContent = "Temp: " + data.list[37].main.temp;
          document.querySelector("#wind5").textContent = "Wind: " + data.list[37].wind.speed;
          document.querySelector("#humid5").textContent= "Humidity: " + data.list[37].main.humidity;

          document.querySelector("#cityname").value = cityname;
        });
    }
  });
}