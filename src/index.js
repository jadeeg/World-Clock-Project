function time() {
  let citytime = document.getElementById("select").value;
  if (citytime) {
    let info = document.getElementById("info");

    let date = `${moment().tz(citytime).format("MMMM Do YYYY")}`;
    let timenow = `${moment()
      .tz(citytime)
      .format("h:mm:ss [<small>] a [</small>]")}`;
    let selectCitytime = citytime.split("/")[1];

    info.innerHTML = `${date} ${timenow}  <div id= "city" > ${selectCitytime} </div>`;
  } else if (citytime === "userTime") {
    let info = document.getElementById("info");
    info.innerHTML = moment().tz.guess();
  }
}

document.getElementById("select").addEventListener("change", time);
