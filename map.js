var frame = document.getElementById("iframe-map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("do it again in right way");
  }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    frame.src='https://maps.google.com/maps?q=' + lat +','+ long +'&t=&z=10&ie=UTF8&iwloc=&output=embed'
}

getLocation();
