//DUMMY DATA
let parties = [{id: 1,creator: 'Zac',eventName: ' Halloween',address: ' 700 Van Ness',city: ' Fresno',state: ' CA',zip: ' 93721',ageRestricted: true,private: false,date: ' 10/31/2018',time: ' 7:00pm',description: ' This is a generic party.',onScreen: false},{id: 2,creator: ' Phil',eventName: ' Kegger',address: ' 123 Test St.',city: 'Visalia',state: 'CA',zip: ' 93291',ageRestricted: false,private: true,date: '12/25/2018',time: ' 12:00pm',description: 'This is a generic christmas kegger.',onScreen: false},{id: 3,creator: 'John',eventName: ' Runescape LAN',address: ' 999 Johns house',city: ' Tulare',state: ' CA',zip: ' 93724',ageRestricted: true,private: true,date: '10/01/2018',time: ' 9:00am',description: ' This is an extra special LAN party.',onScreen: false}];

//VARIABLES
const createModal = document.getElementById('createModal'),
    closeSpan = document.getElementsByClassName('close'),
    infoClose =document.getElementById('endMe');
    createBtn = document.getElementById('createBtn'),
    createSubmitBtn = document.getElementById('createSubmitBtn'),
    findBtn = document.getElementById('findBtn'),
    partyList = document.getElementById('partyList'),
    getAgeRadios = document.getElementsByName('ageCheck'),
    getPrivateRadios = document.getElementsByName('privateCheck');
    infoModal = document.getElementById('infoModal');

//EVENT LISTENERS
window.onload = displayParties();

//Executes the createParty function on click
createSubmitBtn.addEventListener('click', createParty);

//lets the create a party modal accept the enter key as a submit
createModal.addEventListener('keyup', e => {
  e.preventDefault();
  if(e.keyCode === 13) {
    createParty();
  }
});

//CREATE MODAL LISTENERS
createBtn.onclick = function() {
    createModal.style.display = 'block';
    getAgeRadios[0].checked = false;
    getAgeRadios[1].checked = false;
    getPrivateRadios[0].checked = false;
    getPrivateRadios[1].checked = false;
};

//targets the close span and hides the modal
for (var i = 0; i < closeSpan.length; i++) {
  closeSpan[i].onclick = function() {
      createModal.style.display = 'none';
  };
}


//closes the info modal and ratifies it's classList
infoClose.addEventListener('click', e => {
  infoModal.classList = 'hide notStyle info-modal';
});

//hides the createModal if clicked outside of any entry
window.onclick = function(event) {
    if (event.target == createModal) {
        createModal.style.display = 'none';
    };
};

//CREATE MODAL LOGIC
function displayParties(){
    for(let i = 0; i <= (parties.length - 1); i++){
    let eventName = parties[i].eventName;
    let time = parties[i].time;
    let date = parties[i].date;
    let description = parties[i].description;
    let partyDiv = document.createElement('div');
    let partyLi = document.createElement('li');
    partyLi.classList = 'show notStyle';

    //CHECKS IF BEING DISPLAYED, WILL NOT DUPLICATE ONSCREEN
    if(parties[i].onScreen === false) {
        parties[i].onScreen = true;
        partyLi.append(eventName, time, date, description);
        partyDiv.append(partyLi);
        partyList.appendChild(partyLi);

    };
    };
};

//creates the party and puts it into the list parties array
function createParty(){
  //VARIABLES
    let newParty = {},
        getEventName = document.getElementById('getEventName').value,
        getStreetAddress = document.getElementById('getStreetAddress').value,
        getCity = document.getElementById('getCity').value,
        getState = document.getElementById('getState').value,
        getZip = document.getElementById('getZip').value,
        getAgeRadios = document.getElementsByName('ageCheck'),
        getPrivateRadios = document.getElementsByName('privateCheck'),
        getDate = document.getElementById('getDate').value,
        getTime = document.getElementById('getTime').value,
        getDescription = document.getElementById('getDescription').value;

//CHECKS
    checkAgeRadios(getAgeRadios, newParty);
    checkPrivateRadios(getPrivateRadios, newParty);

//sets entries of form to lists
    newParty.id = null;
    newParty.creator = 'INTEGRATE THIS FEATURE PLEASE' //PLACEHOLDER;
    newParty.eventName = getEventName;
    newParty.addres = getStreetAddress;
    newParty.city = getCity;
    newParty.state = getState;
    newParty.zip = getZip;
    newParty.date = getDate;
    newParty.time = getTime;
    newParty.description = getDescription;
    newParty.onScreen = false;

    checkNewParty(newParty);
};

//logic for making the buttons
function checkAgeRadios(getAgeRadios, newParty){
    //CHECKS RADIO BUTTONS
    if (getAgeRadios[0].checked == false && getAgeRadios[1].checked == false){
        newParty.ageRestricted = undefined;
        return;
    }
    else if(getAgeRadios[0].checked){
        newParty.ageRestricted = true;
    }else {
        newParty.ageRestricted = false;
    };

};


function checkPrivateRadios(getPrivateRadios, newParty){
    //CHECKS RADIO BUTTONS
    if (getPrivateRadios[0].checked == false && getPrivateRadios[1].checked == false){
        newParty.private = undefined;
        return;
    }
    else if(getPrivateRadios[0].checked){
        newParty.private = true;
    }else {
        newParty.private = false;
    };
};

function checkNewParty(newParty){
    let values = Object.values(newParty);
    for(let i = 0; i < values.length; i++) {
        if(values[i] === '' || values[i] === undefined){
            //NEED TO THROW ERROR HERE
            alert('Please include all required information');
            return;
        }
        else {continue;}
    };
        parties[parties.length] = newParty;
        clearCreateForm();
        displayParties();
        newPartyId(newParty);
        createModal.style.display = 'none';
};

function clearCreateForm() {
    getEventName.value = '';
    getStreetAddress.value = '';
    getCity.value = '';
    getState.value = '';
    getZip.value = '';
    getDate.value = '';
    getTime.value = '';
    getDescription.value = '';
};

function newPartyId(newParty) {
    if(newParty.id == null) {
      newParty.id = parties.length;
    } else {
      return;
}};

//toggles the modal display when the X is clicked
partyList.addEventListener('click', (e) => {
  infoModal.classList.toggle('show');
});

function showInfo() {
  //match the entered values and append them to the p tags
    const displayEventName = document.querySelector('#displayEventName');
    parties.eventName.append(displayEventName);
};
