// Recovered in the 2017-10-04 archive

//~Sublime Studios~ 2017
//Epic's Chat Bot. (Now renamed to Crystal)
//This chat bot was created by Epictree160.
//Do not pretend you made this piece of code.

clientWebsite = 'multiplayerpiano.com';
clientWebsitePort = '8080';
clientWebsocket = 'ws://' + clientWebsite + ':' + clientWebsitePort;
cstartroom = 'lolwutsecretlobbybackdoor';
MPP.chat.send('Starting Crystal... (Connection Information: Website: ' + clientWebsite + ' | Port: ' + clientWebsitePort + ' |: ' + clientWebsocket + ')');
crystal = new Client(clientWebsocket);
crystal.setChannel(cstartroom);
crystal.start();
csend = function(message) {crystal.sendArray([{m:"a", message: message}]);}
setTimeout(function() {
csend('Greetings everyone, I am Crystal. I\'m a chat bot created with javascript by SublimeHawk6. You can type ' + c_prefix + 'help to view my command list.');
}, 3000);


//Variable Defines.
commandsEnabled = true;
c_prefix = '^';
banned = [];
Cchat_buffer = [];
botname = 'Crystal';
History = [];
banMSG = true;
//Variable Defines.

//Object Defines.
//Object Defines.

//Interval Defines.
chatInt = setInterval(function() { var msg = Cchat_buffer.shift(); if (msg) crystal.sendArray([{m: "a", message: 'System: ' + msg }]); }, 1900);
autoUpdateName = setInterval(function() {updateName('~' + botname + ' (' + c_prefix + 'Help)~')}, 5000);
//Interval Defines.

//Function Defines.
var googleCommand = true;
	var googleCommandDelay = 3;
	
	var div = document.createElement("div"); 
	div.id = "Div1";
	div.style.display= "none";
	document.body.appendChild(div);
		

	(function() {
		var cx = '010021570394457971158:qajzusztxwo';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
			'//www.google.com/cse/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	})();
	
	function gcseCallback(query) {
		lastsearch = query;
		History.push(query);
		if (document.readyState != 'complete')
			return google.setOnLoadCallback(gcseCallback, true);
		google.search.cse.element.render({gname:'gsearch', div:'Div1', tag:'searchresults-only', attributes:{webSearchResultSize:1}});
		var element = google.search.cse.element.getElement('gsearch');
		element.execute(query);
		returnResults();
	};
	function getTitle(index){
		var title = document.getElementsByClassName("gsc-thumbnail-inside")[index].textContent;
		return title;
	}
	
		function getLink(index){
		if (typeof document.getElementsByClassName("gsc-webResult gsc-result")[0].getElementsByClassName("gs-spelling gs-result")[0] != "undefined")
			index++;
		if (typeof document.getElementsByClassName("gsc-webResult gsc-result")[0].getElementsByClassName("gs-spelling")[0] != "undefined")
			index++;
		if (typeof document.getElementsByClassName("gsc-webResult gsc-result")[0].getElementsByClassName("gs-spelling gs-spelling-original")[0] != "undefined")
			index++;
		var title = document.getElementsByClassName("gsc-webResult gsc-result")[index];
		var firstdiv = title.getElementsByClassName("gsc-thumbnail-inside")[0];
		var firstatag = firstdiv.getElementsByTagName("a")[0];
		var link = firstatag.getAttribute("data-ctorig");
		return link;
	}
	
	function getText(index){
		var txt = document.getElementsByClassName("gs-bidi-start-align gs-snippet")[index].textContent;
		return txt;
	}
	
	function checkLoaded(index){
		if (typeof document.getElementsByClassName("gs-bidi-start-align gs-snippet")[index] != "undefined" && 
		typeof document.getElementsByClassName("gsc-thumbnail-inside")[index] != "undefined" && 
		typeof document.getElementsByClassName("gsc-webResult gsc-result")[index] != "undefined"){
			return true;
		}
		else {
			return false;
		}
	}
	
	function checkNoResult(){
		if (typeof document.getElementsByClassName("gs-webResult gs-result gs-no-results-result")[0] != "undefined"){
			return true;
		}
		else{
			return false;
		}
	}
	function returnResults(){
		var intervalId = setInterval(function(){
			if (checkNoResult() == true){
				div.innerHTML = "";
				csend('I could not understand your search, sorry about that.');
				clearInterval(intervalId);
			}
			if (checkLoaded(0) == true && checkLoaded(1) == true && checkLoaded(2) == true){
				csend(getTitle(0));
				csend(getText(0));							
				div.innerHTML = "";
				clearInterval(intervalId);
			}
		},25);
	}

function CsendChat(msg) {
msg.match(/.{0,511}/g).forEach(function(x, i) { if(x == "") return; 
if (i !== 0) x = "..." + x; Cchat_buffer.push(x); }); };
function updateName(name) {
crystal.sendArray([{ m: "userset", 
set: { name: name} }]);};
csend = CsendChat;
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
//Function Defines.
// crystal.on('a', function(msg) { var msgArr = msg.a.split(' '); if (msgArr[0] == c_prefix+'js' && msg.p._id == MPP.client.getOwnParticipant()._id) { try { csend('> '+JSON.stringify(eval(msg.a.substr(msgArr[0].length).trim()))); } catch (error) { E.chat.send('> (Error detected in code!)'+error); } } }); }, 1000);

crystal.on("a", function(msg) {
data = msg;
if(msg.a.toLowerCase().substring(0,1) == c_prefix) {
if(banned.includes(msg.p._id)) {
if(banMSG) {csend('I cannot serve you at this time.');banMSG = false;}} else {
if(commandsEnabled){
banMSG = true;
command1 = data.a.toLowerCase().split(c_prefix)[1];

command2 = command1.split(' ')[0];

input = command1.split(command2)[1].trim();
if(command2 == 'help') {csend('Commands [1]: ' + c_prefix + 'help, ' + c_prefix + 'search, ' + c_prefix + 'myinfo, ' + c_prefix + 'reverse.')}
if(command2 == 'search') { if(input=='') { csend('You are using this command incorrectly. Usage: ' + c_prefix + 'search <Whatever you want to search for>') } else { gcseCallback(input);  } }
if(command2 == 'myinfo') {if(input=='') {csend('[|MYINFO|]: You are ' + data.p.name + '. | Your _id is: ' + data.p._id + '. | Your id is: ' + data.p.id + '. | Your color, in hex, is: ' + data.p.color + '. | Your name is: ' + msg.p.name.length + ' characters long.'); } else {csend('[|MYINFO|]: They are ' + info(input).name + '.')}} 
if(command2 == 'reverse') { if(input=='') {csend('You are using this command incorrectly. Usage: ' + c_prefix + 'reverse text here');} else {csend('[|REVERSE|]: ' + reverse(input));}} 
}
else {
csend('I\'m sorry, ' + data.p.name + ', I can\'t do that right now.');}
}}});