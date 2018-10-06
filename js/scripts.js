//DUMMY DATA
let parties = [{id: 1,creator: 'Zac',eventName: 'Halloween',address: '700 Van Ness',city: 'Fresno',state: 'CA',zip: '93721',ageRestricted: true,private: false,date: '10/31/2018',time: '7:00pm',description: 'This is a generic party.',onScreen: false},{id: 2,creator: 'Phil',eventName: 'Kegger',address: '123 Test St.',city: 'Visalia',state: 'CA',zip: '93291',ageRestricted: false,private: true,date: '12/25/2018',time: '12:00pm',description: 'This is a generic christmas kegger.',onScreen: false},{id: 3,creator: 'John',eventName: 'Runescape LAN',address: '999 Johns house',city: 'Tulare',state: 'CA',zip: '93724',ageRestricted: true,private: true,date: '10/01/2018',time: '9:00am',description: 'This is an extra special LAN party.',onScreen: false}];

//VARIABLES 

const modal = document.getElementById('createModal'),
    closeSpan = document.getElementsByClassName('close')[0],
    createBtn = document.getElementById('createBtn'),
    createSubmitBtn = document.getElementById('createSubmitBtn'),
    findBtn = document.getElementById('findBtn'),
    partyList = document.getElementById('partyList');

window.onload = displayParties();

//EVENT LISTENERS

//CREATE MODAL LISTENERS
createBtn.onclick = function() {
    modal.style.display = 'block';
}

closeSpan.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

//FUNCTIONS 

//CREATE MODAL LOGIC
function displayParties(){
    for(let i = 0; i <= (parties.length - 1); i++){
    let eventName = parties[i].eventName;
    let time = parties[i].time;
    let date = parties[i].date;
    let description = parties[i].description;
    let partyDiv = document.createElement('div');
    let partyLi = document.createElement('li');
    
    //CHECKS IF BEING DISPLAYED, WILL NOT DUPLICATE ONSCREEN
    if(parties[i].onScreen === false){
        parties[i].onScreen = true;
        partyLi.append(eventName, time, date, description);
        partyDiv.append(partyLi);
        partyList.appendChild(partyLi);

    };
    };
}


function createParty(){
    let newParty = {};
    let getEventName = document.getElementById('getEventName').value;
    let getStreetAddress = document.getElementById('getStreetAddress').value;
    let getCity = document.getElementById('getCity').value;
    let getState = document.getElementById('getState').value;
    let getZip = document.getElementById('getZip').value;
    let getAgeRadios = document.getElementsByName('ageCheck')
    let getAge;
    let getPrivateRadios = document.getElementsByName('privateCheck')
    let getPrivate;
    let getDate = document.getElementById('getDate').value;
    let getTime = document.getElementById('getTime').value;
    let getDescription = document.getElementById('getDescription').value;
   
    let i = parties.length; // THIS NEEDS TO BE A FOR LOOP;

    for(let x = 0; x < getAgeRadios.length; x++){
        if(getAgeRadios[0].checked){
            getAge = true;
            getAgeRadios[x].checked = false;
            break;
        }else {
            getAge = false;
            getAgeRadios[x].checked = false;
        }
    }

    for(let x = 0; x < getAgeRadios.length; x++){
        if(getPrivateRadios[0].checked){
            getPrivate = true;
            getPrivateRadios[x].checked = false;
            break;
        }else {
            getPrivate = false;
            getPrivateRadios[x].checked = false;
        }
    } 

    newParty.id = 'INTEGRATE THIS FEATURE PLEASE' //PLACEHOLDER;
    newParty.creator = 'INTEGRATE THIS FEATURE PLEASE' //PLACEHOLDER;
    newParty.eventName = getEventName;
    newParty.addres = getStreetAddress;
    newParty.city = getCity;
    newParty.state = getState;
    newParty.zip = getZip;
    newParty.ageRestricted = getAge;
    newParty.private = getPrivate;
    newParty.date = getDate;
    newParty.time = getTime;
    newParty.description = getDescription;
    newParty.onScreen = false;

    parties[i] = newParty;
    console.log(parties)
    clearCreateForm();
    displayParties();
    modal.style.display = 'none'

}

function clearCreateForm(){
    getEventName.value = '';
    getStreetAddress.value = '';
    getCity.value = '';
    getState.value = '';
    getZip.value = '';
    getDate.value = '';
    getTime.value = '';
    getDescription.value = '';

}

createSubmitBtn.addEventListener('click', createParty);