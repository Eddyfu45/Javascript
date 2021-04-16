function checkInstagram(username) {
    // write code and test
    console.log(`Welcome back ${username}. You have no new followers since you last checked`);
}
function makePhoneCall(contact) {
    // write code and test
    console.log(`You have reached the voicemail of ${contact}, please leave a message or call again later...BEEP!`);
}
function playSpotify(song) {
    // write code and test 
    console.log(`You are now playing: ${song}`);
}
function checkEmail(emailProvider) {
    // write code and test
    console.log(`You have no new emails on ${emailProvider}.com`);
}
function sendEmail(message) {
    // write code and test
    console.log(`Hi! How are you? ${message}`);
}
function sendTextMessage(contact) {
    console.log(`Yo, what's the word ${contact}`);
}
function takePicture(filter) {
    console.log(`Take picture with ${filter} filter`);
}
function faceTime(friend) {
    console.log(`Facetiming my friend ${friend}...`);
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
console.log('---');
useMobileDevice('Android', faceTime, 'Jake');
console.log('---');
useMobileDevice('iPhone', takePicture, 'portrait');

useMobileDevice('Android', checkInstagram, 'Eddyfu');
console.log('---');
useMobileDevice('iPhone', makePhoneCall, "Rome");
console.log('---');
useMobileDevice('Android', playSpotify, "That's Okay");
console.log('---');
useMobileDevice('Android', checkEmail, 'gmail');
console.log('---');
useMobileDevice('iPhone', sendEmail, 'You were absent from class today...');
console.log('---');