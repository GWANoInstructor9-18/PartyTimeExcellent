const createModal = document.querySelector('#createModalContent'),
	closeSpan = document.getElementsByClassName('close'),
	infoClose = document.querySelector('#endMe'),
	createBtn = document.querySelector('#createBtn'),
	createSubmitBtn = document.querySelector('#createSubmitBtn'),
	findBtn = document.querySelector('#findBtn'),
	partyList = document.querySelector('#partyList'),
	getAgeRadios = document.getElementsByName('ageCheck'),
	getPrivateRadios = document.getElementsByName('privateCheck'),
	infoModal = document.querySelector('#infoModalContent'),
	displayEventName = document.querySelector('#displayEventName'),
	displayAddress = document.querySelector('#displayStreetAddress'),
	displayCity = document.querySelector('#displayCity'),
	displayState = document.querySelector('#displayState'),
	displayZip = document.querySelector('#displayZip'),
	displayAge = document.querySelector('#displayAge'),
	displayPrivate = document.querySelector('#displayPrivate'),
	displayDate = document.querySelector('#displayDate'),
	displayTime = document.querySelector('#displayTime'),
	displayDescription = document.querySelector('#displayDescription'),
	registrationForm = document.querySelector('#registrationForm'),
	getDOB = document.querySelector('#getDOB'),
	getSlackURL = document.querySelector('#getSlackURL'),
	getPassword = document.querySelector('#getPassword'),
	getUsername = document.querySelector('#getUsername'),
	registerBtn = document.querySelector('#registerBtn'),
	slackSubmitBtn = document.querySelector('#slackSubmitBtn'),
	launchRegisterBtn = document.querySelector('#launchRegisterBtn'),
	loginModal = document.querySelector('#loginModal'),
	currentUserDisplay = document.querySelector('#currentUserDisplay');


var map,
    geocoder,
    myMapMarkers = {};

let parties = [],
	users = [],
	currentUser,
	currentEvent;

class User {
	constructor(userName, slack, DOB, password){
		this.userName = userName;
		this.slack = slack;
		this.DOB = DOB;
		this.password = password;
		this.parties = [];
	}
}


class Party {
	constructor(id, creator, eventName, streetAddress, city, state, zip, age, isPrivate, date, time, coords, description){
		this.id = id;
		this.creator = creator;
		this.eventName = eventName;
		this.streetAddress = streetAddress;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.age = age;
		this.isPrivate = isPrivate;
		this.date = date;
		this.time = time;
    this.coords = coords;
		this.description = description;
		this.onScreen = false;
	}
}

createSubmitBtn.addEventListener('click', createParty);

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

partyList.addEventListener('click', (e) => {
	showInfo(e);
});

for (let i = 0; i < closeSpan.length; i++) {
	closeSpan[i].onclick = function() {
	modal.style.display = 'none';
	infoModalContent.style.display = 'none';
	createModalContent.style.display = 'none';
	messageModal.style.display = 'none';
  registerModal.style.display = 'none';
  registrationForm.style.display = 'none';
  clearInfoModal();
	};
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
		infoModalContent.style.display = 'none';
		createModalContent.style.display = 'none';
    messageModal.style.display = 'none';
    registerModal.style.display = 'none';
    registrationForm.style.display = 'none';
    clearInfoModal();
	};
};

inviteBtn.onclick = function (){
	messageModal.style.display = 'block';
	infoModalContent.style.display = 'none';
}

launchRegisterBtn.onclick = function() {
	registerModal.style.display = 'block';
	registrationForm.style.display = 'block';
  infoModalContent.style.display = 'none';
	messageModal.style.display = 'none';
}

registerBtn.onclick = function() {
  let getDOB = document.querySelector('#getDOB').value,
  getSlackURL = document.querySelector('#getSlackURL').value,
  getPassword = document.querySelector('#getPassword').value,
  getUsername = document.querySelector('#getUsername').value
	if (getDOB !== '' && getSlackURL !== '', getPassword !== '', getUsername !== '') {
		newUser = new User(getUsername, getSlackURL, getDOB, getPassword);
		users.push(newUser);
		registrationForm.style.display = 'none';
		registerModal.style.display = 'none';
	};

};

loginBtn.onclick = function(){
	let getLoginUsername = document.querySelector('#getLoginUsername').value,
	getLoginPassword = document.querySelector('#getLoginPassword').value;
	if (getLoginUsername === '' || getLoginPassword === '') {
		alert('Please fill out all requiered fields!');
	}		
	else if (getLoginUsername === '' && getLoginPassword === '') {
		alert('Please fill out all requiered fields!');
	}
	else { login(getLoginUsername, getLoginPassword)
		}
};

function login(getLoginUsername, getLoginPassword){
	for (let i = 0; i < users.length; i++) {
		if(users[i].userName === getLoginUsername && users[i].password === getLoginPassword){
			
			loginModal.style.display = 'none';
			currentUser = users[i];
			currentUserDisplay.textContent = currentUser.userName
			return true;
		};
	};
};


// MAP RELATED FUNCTIONS
// how to's:
// draw a map from lat/lng: map = drawMap([array with lat & lng]);
// convert address to lat/lng: myCoords = geocodeAddress("string address");
//
// TODO'S
// create function for placing all public party markers on the map
// create logic to geocode addresses when a new party is created
//
// WORKFLOW
// When the parties are iterated within "displayParties()",
// the array of Google Map Marker objects is cleared out and recreated.


function initMap() {
    var mapOptions = {
        zoom: 15,
        center: {lat: 36.732, lng: -119.785},
        map: map
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    for (let i = 0; i <= myMapMarkers.length-1; i++) {
        var loc = myMapMarkers[i];
        var marker = new google.maps.Marker({
            position: loc,
            map: map,
        });
}

function drawMap(myCoordinateObject) {

}

function showAllMarkersOnMap(mapOptions) {
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

        console.log("Map Marker!");
    }
}

// function geocodeAddress(address) {
//     //geocode address to lat/lng
//     var myCoords = [];
//     geocoder.geocode({'address': address}, function(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             myCoords[0] = results[0].geometry.location.lat();
//             myCoords[1] = results[0].geometry.location.lng();
//             alert("Request successful.")
//         } else {
//             alert("Request failed.");
//         }
//         // map.setCenter(results[0].geometry.location);
//     });
//     //return the coords in an array or an object?
//     return myCoords;
// }

function createMapMarkerObject(coords, name) {
    var newMarkerObject = (new google.maps.Marker({
        position: coords,
        title: name,
        map: map
    }));
    return newMarkerObject;
}

// map = showAllMarkersOnMap();

function displayParties(){
	for(let i = 0; i < parties.length; i++){
		let eventName = parties[i].eventName;
		let time = parties[i].time;
		let date = parties[i].date;
		let description = parties[i].description;
		let partyId = parties[i].id;
		let partyDiv = document.createElement('div');
		let partyLi = document.createElement('li');
		let idDiv = document.createElement('div');
		partyLi.classList = 'notStyle';
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
	// sortParties();
	};
};

function createParty(){
	let getEventName = document.getElementById('getEventName').value,
		getStreetAddress = document.getElementById('getStreetAddress').value,
		getCity = document.getElementById('getCity').value,
		getState = document.getElementById('getState').value,
		getZip = document.getElementById('getZip').value,
		getAgeRadios = document.getElementsByName('ageCheck'),
		getPrivateRadios = document.getElementsByName('privateCheck'),
		getDate = document.getElementById('getDate').value,
		getTime = document.getElementById('getTime').value,
		getcoords = {lat: 36.732, lng: -119.785}
		getDescription = document.getElementById('getDescription').value,
		newParty = new Party((parties.length + 1), currentUser, getEventName, getStreetAddress, getCity, getState, getZip, checkAgeRadios(getAgeRadios), checkPrivateRadios(getPrivateRadios), getDate, getTime, getcoords, getDescription)


	checkNewParty(newParty);
};

function checkAgeRadios(getAgeRadios, age){
	//CHECKS RADIO BUTTONS
	if(getAgeRadios[0].checked){
		return true;
	}else if(getAgeRadios[1].cheked){
		return false
	}
	else {
		return;
	};
};


function checkPrivateRadios(getPrivateRadios, isPrivate){
	//CHECKS RADIO BUTTONS
	if(getPrivateRadios[0].checked){
		return true;

	}else if(getPrivateRadios[1].checked){
		return false;
	}
	else {
		return;
	};
};

function checkNewParty(newParty){
	let values = Object.values(newParty);
	for(let i = 0; i < values.length; i++) {
		if(values[i] === '' || values[i] === undefined){
		alert('Please include all required information');
		return;
		}
		else {continue;}
	};
	parties.push(newParty);
	clearCreateForm();
	displayParties();
	modal.style.display = 'none';
	createModalContent.style.display = 'none';
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
		modal.style.display = 'none';

};

function styleInfoModal(){
	modal.style.display = 'block';
	infoModalContent.style.display = 'block';
	createModalContent.style.display = 'none';
	messageModal.style.display = 'none';
}

function showInfo(e) {
	for(let i = 0; i <= (parties.length -1); i++){
	if(parties[i].id == e.target.children[0].textContent) {
		currentEvent = parties[i];
		displayEventName.append(parties[i].eventName);
		displayCity.append(parties[i].city);
		displayState.append(parties[i].state);
		displayZip.append(parties[i].zip);
		displayAge.append(parties[i].age);
		displayPrivate.append(parties[i].isPrivate);
		displayDate.append(parties[i].date);
		displayTime.append(parties[i].time);
		displayDescription.append(parties[i].description);
		if(parties[i].isPrivate === true){
			displayAddress.append('');
			styleInfoModal()
			} else {
				displayAddress.append(parties[i].streetAddress)
				styleInfoModal();
			}	return	
	} else { continue};

}};

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

// function sortParties() {
//   parties.sort(function(a,b) {
//     if (a.date.parties < b.date.parties) return -1;
//     else if (a.date.parties > b.date.parties) return 1;
//     else return 0;
//   });
// };

function sendSlackMessage(URL, message, requestor, eventName, eventDate, eventTime){
	let xhr = new XMLHttpRequest();

	xhr.open("POST", URL, true);

	xhr.send(JSON.stringify(
		{
			text: `${requestor} has requested an invite to:\n
			${eventName} 
			On: ${eventDate} 
			At: ${eventTime}\n`,
			attachments: [
			{
				text: message,
				fallback: "Hello! I'd like to join yur event!",
				callback_id: "event_request",
				color: "#3AA3E3",
				attachment_type: "default",
				actions: [
				{
					name: "Invite",
					text: "Invite",
					type: "button",
					value: "Invite",
					confirm:
					{
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



slackSubmitBtn.onclick = function(e){
	let message = document.getElementById('slackMessage'),
	URL = currentEvent.creator.slack,
	eventName = currentEvent.eventName,
	eventDate = currentEvent.date,
	eventTime = currentEvent.time;

	sendSlackMessage(URL, message.value, currentUser.userName, eventName, eventDate, eventTime);
	message.value = '';
	messageModal.style.display = 'none';
	modal.style.display = 'none';
}

function genericUsers() {
	let User1 = new User('Zac', 'https://hooks.slack.com/services/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', '05-21-1994', '1234')
	let User2 = new User('John', 'https://hooks.slack.com/services/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', '05-19-1994', '1234')
	let User3 = new User('Robert', 'https://hooks.slack.com/services/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', '01-01-1990', '1234')
	users.push(User1, User2, User3)
}

function genericParties(){
	let party1 = new Party(1, users[0],' Halloween',' 700 Van Ness',' Fresno',' CA',' 93721',true,false,' 10/31/2018',' 7:00pm', {lat: 36.732, lng: -119.785},' This is a generic party.', )
	let party2 = new Party(2,users[2],' Kegger',' 123 Test St.','Visalia','CA',' 93291',false,true,'12/25/2018',' 12:00pm', {lat: 36.370526, lng: -119.394231},'This is a generic christmas kegger.', )
	let party3 = new Party(3, users[1],' Runescape LAN',' 999 Johns house',' Tulare',' CA',' 93724',true,true,'10/01/2018',' 9:0am', {lat: 36.741261, lng: -119.781456},' This is an extra special LAN party.', )
	parties.push(party1, party2, party3)
}


genericUsers();
genericParties();

//EVENT LISTENERS
window.onload = displayParties();

// DTS https://hooks.slack.com/services/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
// JOHN W https://hooks.slack.com/services/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
// ZAC G https://hooks.slack.com/services/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
//ROBERT H https://hooks.slack.com/services/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
