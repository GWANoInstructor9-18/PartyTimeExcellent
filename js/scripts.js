//create modal functions
const modal = document.getElementById('createModal');
const closeSpan = document.getElementsByClassName("close")[0];
const createBtn = document.getElementById('createBtn');
const createSubmitBtn = document.getElementById('createSubmitBtn');
const findBtn = document.getElementById('findBtn');
const partyList = document.getElementById('partyList');

let parties;



createBtn.onclick = function() {
    modal.style.display = "block";
}

closeSpan.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function(){
    for(let i = 0; i <= parties.length; i++){
        let eventName = parties[i].eventName;
        let time = parties[i].time;
        let date = parties[i].date;
        let description = parties[i].description;

        newParty(eventName, time, date, description);
    
    }
    

}

function newParty(eventName, time, date, description){
    let partyDiv = document.createElement('div');
    let partyLi = document.createElement('li');

    //APPENDABLES
    partyLi.append(eventName, time, date, description);
    partyDiv.append(partyLi);
    partyList.appendChild(partyLi);
    
}


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
}, 
{
    id: 2,
    creator: 'Phil',
    eventName: 'Kegger',
    address: '123 Test St.',
    city: 'Visalia',
    state: 'CA',
    zip: '93291',
    ageRestricted: false,
    private: true,
    date: '12/25/2018',
    time: '12:00pm',
    description: 'This is a generic christmas kegger.'
},
{
    id: 3,
    creator: 'John',
    eventName: 'Runescape LAN',
    address: '999 Johns house',
    city: 'Tulare',
    state: 'CA',
    zip: '93724',
    ageRestricted: true,
    private: true,
    date: '10/01/2018',
    time: '9:00am',
    description: 'This is an extra special LAN party.'
}]



function createParty(){
    let newParty = {};
    let getEventName = document.getElementById('getEventName').value;
    let getStreetAddress = document.getElementById('getStreetAddress').value;
    let getCity = document.getElementById('getCity').value;
    let getState = document.getElementById('getState').value;
    let getZip = document.getElementById('getZip').value;
    let getAge = document.getElementById('getAge').value;
    let getPrivate = document.getElementById('getPrivate').value;
    let getDate = document.getElementById('getDate').value;
    let getTime = document.getElementById('getTime').value;
    let getDescription = document.getElementById('getDescription').value;
   
    let i = parties.length; // THIS NEEDS TO BE A FOR LOOP

    newParty.id = "INTEGRATE THIS FEATURE PLEASE" //PLACEHOLDER
    newParty.creator = "INTEGRATE THIS FEATURE PLEASE" //PLACEHOLDER
    newParty.eventName = getEventName
    newParty.addres = getStreetAddress
    newParty.city = getCity
    newParty.state = getState
    newParty.zip = getZip
    newParty.ageRestricted = getAge
    newParty.private = getPrivate
    newParty.date = getDate
    newParty.time = getTime
    newParty.description = getDescription

    parties[i] = newParty;
    console.log(parties)
     clearForm();

}

function clearForm(){
    getEventName.value = ""
    getStreetAddress.value = ""
    getCity.value = ""
    getState.value = ""
    getZip.value = ""
    getAge.value = ""
    getPrivate.value = ""
    getDate.value = ""
    getTime.value = ""
    getDescription.value = ""

}

    createSubmitBtn.addEventListener('click', createParty)