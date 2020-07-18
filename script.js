/* var form = document.getElementById("form"),
  bdate = document.getElementById("date"),
  bmonth = document.getElementById("month"),
  byear = document.getElementById("year"),
  date = document.getElementById("date2"),
  month = document.getElementById("month2"),
  year = document.getElementById("year2"),
  age = document.getElementById("age"),
  days = document.getElementById("days"),
  mons = document.getElementById("months"),
  today = new Date();

year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

form.addEventListener("submit", function (event) */

let sumbit = document.querySelector("form");
let text = document.querySelector(".result");

function play() {
  var audio = document.getElementById("audio");
}

sumbit.addEventListener("submit", function calculate_age(dob) {
  event.preventDefault();
  text.style.transition = "all 1s";

  //date of birth:
  let birthDate = document.getElementById("birth").value;
  let d = new Date(birthDate);
  console.log(d);
  let mdate = birthDate.toString();
  console.log(mdate);
  let by = parseInt(mdate.substring(0, 4), 10);
  console.log(by);
  let bm = parseInt(mdate.substring(5, 7), 10);
  let bd = parseInt(mdate.substring(8, 10), 10);

  //today date:
  let todayDate = document.getElementById("today").value;
  let t = new Date(todayDate);
  console.log(t);
  let tdate = todayDate.toString();
  console.log(tdate);
  let ty = parseInt(tdate.substring(0, 4), 10);
  console.log(ty);
  let tm = parseInt(tdate.substring(5, 7), 10);
  let td = parseInt(tdate.substring(8, 10), 10);

  //birthday:
  let birthday = new Date(by, bm - 1, bd);

  //show birthday in html
  if (
    t.getMonth() == birthday.getMonth() &&
    t.getDate() == birthday.getDate()
  ) {
    text.classList.add("active");
    text.style.transition = "opacity .7s ease-out";
    text.style.backgroundColor = "";
    text.innerHTML =
      "<h3>HAPPY BIRTHDAY!!!</h3> <p> TODAY YOU BECOME " +
      "<span>" +
      (ty - by) +
      "</span>" +
      " YEARS OLD </p>";
    audio.play();
  } //invalid seceltion:
  else if (isNaN(ty - by) || isNaN(tm - bm) || isNaN(td - bd)) {
    text.style.transition = "all 1.3s";
    text.innerHTML = "Invalid birthday - Please try again!";
    text.style.backgroundColor = "#a91d1d";
    text.classList.remove("active");
    audio.pause();
    audio.currentTime = 0;
  } else {
    text.style.transition = "all 2s";
    text.style.backgroundColor = "#163a38";
    text.classList.remove("active");
    audio.pause();
    audio.currentTime = 0;

    if (td < bd) {
      text.innerHTML = "DAYS " + (td - bd + 30) + " ";
      tm = tm - 1;
    } else {
      if (td - bd == 1) {
        text.innerHTML = "DAY " + (td - bd) + " ";
      } else {
        text.innerHTML = "DAYS " + (td - bd) + " ";
      }
    }
    if (tm < bm) {
      text.innerHTML += " MONTHS " + (tm - bm + 12) + " ";
      ty = ty - 1;
    } else {
      if (tm - bm == 1) {
        text.innerHTML += " MONTH " + (tm - bm) + " ";
      } else {
        text.innerHTML += " MONTHS " + (tm - bm) + " ";
      }
    }

    if (ty - by == 0) {
      text.innerHTML = text.innerHTML + " : AGE";
    } else {
      if (ty - by == 1) {
        text.innerHTML += " YEAR " + (ty - by) + " " + " : AGE";
      } else {
        text.innerHTML += " YEARS " + (ty - by) + " " + " : AGE";
      }
    }
    let a = text.innerHTML;
    console.log(a);

    let b = a.split(" ");
    console.log(b);

    function reverseString(str) {
      return str.reverse().join(" ");
    }
    text.innerHTML = reverseString(b);
  }
});
