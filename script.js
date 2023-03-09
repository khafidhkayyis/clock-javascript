function currentTime() {
  let date = new Date();
  //   buat variabel date diisi method date
  // kemudian buat variabel get lah yang diperlukan dari method date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;
  document.getElementById("clock").innerHTML = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
