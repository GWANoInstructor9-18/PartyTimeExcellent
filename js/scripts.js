//create modal functions
let modal = document.getElementById('createModal');

let createBtn = document.getElementById('createBtn');

let span = document.getElementsByClassName("close")[0];

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



createBtn.onclick = function() {
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
