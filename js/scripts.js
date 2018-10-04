//create modal functions
var modal = document.getElementById('createModal');

var btn = document.getElementById('createBtn');

var span = document.getElementsByClassName("close")[0];

let parties;

parties = [{
  id: 1,
  creator: 'Zac',
  eventName: 'Halloween',
  address: '700 Van Ness',
  city: 'Fresno',
  state: 'CA',
  zip: '93721',
  ageRestricted: true,
  private: false,
  date: '10/31/2018',
  time: '7:00pm',
  description: 'This is a generic party.'
}]

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
