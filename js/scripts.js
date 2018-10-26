//DUMMY DATA
let parties = [{id: 1,creator: 'Zac',eventName: ' Halloween',address: ' 700 Van Ness',city: ' Fresno',state: ' CA',zip: ' 93721',ageRestricted: true,private: false,date: ' 10/31/2018',time: ' 7:00pm',description: ' This is a generic party.',onScreen: false},{id: 2,creator: ' Phil',eventName: ' Kegger',address: ' 123 Test St.',city: 'Visalia',state: 'CA',zip: ' 93291',ageRestricted: false,private: true,date: '12/25/2018',time: ' 12:00pm',description: 'This is a generic christmas kegger.',onScreen: false},{id: 3,creator: 'John',eventName: ' Runescape LAN',address: ' 999 Johns house',city: ' Tulare',state: ' CA',zip: ' 93724',ageRestricted: true,private: true,date: '10/01/2018',time: ' 9:00am',description: ' This is an extra special LAN party.',onScreen: false}];

//VARIABLES
const createModal = document.getElementById('createModalContent'),
    closeSpan = document.getElementsByClassName('close'),
    infoClose =document.getElementById('endMe'),
    createBtn = document.getElementById('createBtn'),
    createSubmitBtn = document.getElementById('createSubmitBtn'),
    findBtn = document.getElementById('findBtn'),
    partyList = document.getElementById('partyList'),
    getAgeRadios = document.getElementsByName('ageCheck'),
    getPrivateRadios = document.getElementsByName('privateCheck'),
    infoModal = document.getElementById('infoModalContent'),
    displayEventName = document.querySelector('#displayEventName'),
    displayAddress = document.querySelector('#displayStreetAddress'),
    displayCity = document.querySelector('#displayCity'),
    displayState = document.querySelector('#displayState'),
    displayZip = document.querySelector('#displayZip'),
    displayAge = document.querySelector('#displayAge'),
    displayPrivate = document.querySelector('#displayPrivate'),
    displayDate = document.querySelector('#displayDate'),
    displayTime = document.querySelector('#displayTime'),
    displayDescription = document.querySelector('#displayDescription');

//EVENT LISTENERS
window.onload = displayParties();

//Executes the createParty function on click
createSubmitBtn.addEventListener('click', createParty);

//lets the create a party modal accept the enter key as a submit
modal.addEventListener('keyup', e => {
	e.preventDefault();
	if(e.keyCode === 13) {
		createParty();
	}
});

//CREATE MODAL LISTENERS
createBtn.onclick = function() {
	modal.style.display = 'block';
	createModalContent.style.display = 'block';
	infoModalContent.style.display = 'none';
	messageModal.style.display = 'none';
	getAgeRadios[0].checked = false;
	getAgeRadios[1].checked = false;
	getPrivateRadios[0].checked = false;
	getPrivateRadios[1].checked = false;
};

//toggles the modal display when the X is clicked
partyList.addEventListener('click', (e) => {
		modal.style.display = 'block';
		infoModalContent.style.display = 'block';
		createModalContent.style.display = 'none';
		messageModal.style.display = 'none';
    showInfo(e);
});

//targets the close span and hides the modal
for (let i = 0; i < closeSpan.length; i++) {
	closeSpan[i].onclick = function() {
	modal.style.display = 'none';
	infoModalContent.style.display = 'none';
	createModalContent.style.display = 'none';
	messageModal.style.display = 'none';
  clearInfoModal();
	};
};


//closes the info modal and ratifies it's classList
// infoClose.addEventListener('click', e => {
  // infoModal.classList = 'hide notStyle info-modal';
//   clearInfoModal();
// });

//hides the createModal if clicked outside of any entry
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
		infoModalContent.style.display = 'none';
		createModalContent.style.display = 'none';
    clearInfoModal();
	};
};

inviteBtn.onclick = function (){
	messageModal.style.display = 'block';
	infoModalContent.style.display = 'none';
}

loginBtn.onclick = function(){
	loginModal.style.display = 'none';
}

// MAP STUFFS!
var map,
		geocoder;
function initMap() {
	geocoder = new google.maps.Geocoder();
	// let address = prompt("Gimme an address!");
	// let myCoords = convertAddressToLatLong(address);
	var latLng = new google.maps.LatLng(36.732, -119.785); //bitwise!
	var mapOptions = {
			zoom: 15,
			center: latLng
	}
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// function reDrawMap(address) {
//     var myCoords = [];
//     geocoder = new google.maps.Geocoder();
//     geocoder.geocode({'address': address}, function(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             myCoords[0] = results[0].geometry.location.lat();
//             myCoords[1] = results[0].geometry.location.lng();
//             alert("Request successful.")
//         } else {
//             alert("Request failed.");
//         }
//         map.setCenter(results[0].geometry.location);
//     })

//     var marker = new google.maps.Marker({
//         map: map,
//         position: results[0].geometry.location
//     })
// }

//FUNCTIONS
//CREATE MODAL LOGIC
function displayParties(){
    for(let i = 0; i <= (parties.length - 1); i++){
    let eventName = parties[i].eventName;
    let time = parties[i].time;
    let date = parties[i].date;
    let description = parties[i].description;
    let partyId = parties[i].id;
    let partyDiv = document.createElement('div');
    let partyLi = document.createElement('li');
    let idDiv = document.createElement('div');
    partyLi.classList = 'notStyle';
    //this needs to get the one specific party
    idDiv.append(partyId);
    idDiv.classList.add('hide');
    // sortParties();



    //CHECKS IF BEING DISPLAYED, WILL NOT DUPLICATE ONSCREEN
    if(parties[i].onScreen === false) {
        parties[i].onScreen = true;
        partyLi.append(idDiv, `${eventName} , ${time}, ${date}, ${description}`);
        partyDiv.append(partyLi);
        partyList.appendChild(partyLi);
    };
    sortParties();
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
		newParty.address = getStreetAddress;
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
        newParty.private = false;
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
        newPartyId(newParty);
        displayParties();
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

function showInfo(e) {
  //match the entered values and append them to the p tags
    for(let i = 0; i <= (parties.length -1); i++){
    if(parties[i].id == e.target.children[0].textContent && parties[i].private == false) {
    displayEventName.append(parties[i].eventName);
    displayAddress.append(parties[i].address);
    displayCity.append(parties[i].city);
    displayState.append(parties[i].state);
    displayZip.append(parties[i].zip);
    displayAge.append(parties[i].ageRestricted);
    displayPrivate.append(parties[i].private);
    displayDate.append(parties[i].date);
    displayTime.append(parties[i].time);
    displayDescription.append(parties[i].description);
  } else {
    if(parties[i].id == e.target.children[0].textContent && parties[i].private == true) {
    displayEventName.append(parties[i].eventName);
    displayCity.append(parties[i].city);
    displayState.append(parties[i].state);
    displayZip.append(parties[i].zip);
    displayAge.append(parties[i].ageRestricted);
    displayPrivate.append(parties[i].private);
    displayDate.append(parties[i].date);
    displayTime.append(parties[i].time);
    displayDescription.append(parties[i].description);
    };
  }}};

function clearInfoModal() {
  displayEventName.textContent = '';
  displayAddress.textContent = '';
  displayCity.textContent = '';
  displayState.textContent = '';
  displayZip.textContent = '';
  displayAge.textContent = '';
  displayPrivate.textContent = '';
  displayDate.textContent = '';
  displayTime.textContent = '';
  displayDescription.textContent = '';
};

function sortParties() {
  parties.sort(function(a,b) {
    if (a.date.parties < b.date.parties) return -1;
    else if (a.date.parties > b.date.parties) return 1;
    else return 0;
  });
};

// SLACK STUFF

function sendSlackMessage(URL, message, requestor){
		let xhr = new XMLHttpRequest();

		xhr.open("POST", URL, true);

		xhr.send(JSON.stringify(
			{
				text: `${requestor} has requested an invite to your party!`,
				attachments: [
						{
								text: message,
								fallback: "You are unable to choose a game",
								callback_id: "",
								color: "#3AA3E3",
								attachment_type: "default",
								actions: [
										{
												name: "Invite",
												text: "Invite",
												type: "button",
												value: "Invite",
							confirm: {
														title: "Are you sure?",
														text: `${requestor} will be invited to your party.`,
														ok_text: "Yes",
														dismiss_text: "No"
												}
										},
										{
												name: "Deny",
												text: "Deny",
												style: "danger",
												type: "button",
												value: "Deny",
												confirm: {
														title: "Are you sure?",
														text: `${requestor} will be DENIED`,
														ok_text: "Yes",
														dismiss_text: "No"
												}
										}
								]
						}
				]
		}
		));
}

slackSubmitBtn.onclick = function(){
	let message = document.getElementById('slackMessage'),
	URL = 'https://hooks.slack.com/services/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',
	requestor = 'Zac';
	sendSlackMessage(URL, message.value, requestor)
	message.value = '';
}

// USERS

class Users {
	constructor(){
		this.name = name;
		this.slack = slack;
		this.parties = [];
	}
}
// DTS https://hooks.slack.com/services/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
// JOHN W https://hooks.slack.com/services/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
// ZAC G https://hooks.slack.com/services/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
