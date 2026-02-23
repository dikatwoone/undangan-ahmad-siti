function openInvite(){
    document.getElementById("cover").style.display="none";
    document.getElementById("music").play();
}

var countDownDate = new Date("Dec 12, 2026 10:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
  days + " Hari " + hours + " Jam " + minutes + " Menit ";

}, 1000);