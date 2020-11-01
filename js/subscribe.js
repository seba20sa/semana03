
// Variables
var fullName = document.getElementById('fullname');
var errorName = document.getElementById('error-name');
var email = document.getElementById('email');
var errorEmail = document.getElementById('error-email');
var firstPassword = document.getElementById('first-password');
var errorFirstPassword = document.getElementById('error-first-password');
var secondPassword = document.getElementById('second-password');
var errorSecondPassword = document.getElementById('error-second-password');
var age = document.getElementById('age');
var errorAge = document.getElementById('error-age');
var phoneNumber = document.getElementById('phone-number');
var errorPhoneNumber = document.getElementById('error-phone-number');
var adress = document.getElementById('adress');
var errorAdress = document.getElementById('error-adress');
var city = document.getElementById('city');
var errorCity = document.getElementById('error-city');
var zipCode = document.getElementById('zip-code');
var errorZipCode = document.getElementById('error-zip-code');
var dniNumber = document.getElementById('dni-number');
var errorDniNumber = document.getElementById('error-dni-number');

//Events listeners
fullName.addEventListener ('blur', checkName);
fullName.addEventListener ('focus', hideErrorName);
email.addEventListener ('blur', checkMail);
email.addEventListener ('focus', hideErrorEmail);
firstPassword.addEventListener('blur', checkFirstPassword);
firstPassword.addEventListener('focus',hideErrorFirstPassword);
secondPassword.addEventListener('blur', checkSecondPassword);
secondPassword.addEventListener('focus', hideErrorSecondPassword);
age.addEventListener('blur', checkAge);
age.addEventListener('focus', hideErrorAge);
phoneNumber.addEventListener('blur', checkPhoneNumber);
phoneNumber.addEventListener('focus', hideErrorPhoneNumber);
adress.addEventListener('blur', checkAdress);
adress.addEventListener('focus', hideErrorAdress);
city.addEventListener('blur', checkCity);
city.addEventListener('focus', hideErrorCity);
zipCode.addEventListener('blur', checkZipCode);
zipCode.addEventListener('focus', hideErrorZipCode);
dniNumber.addEventListener('blur', checkDniNumber);
dniNumber.addEventListener('focus', hideErrorDniNumber);
//Actions
function hideErrorName(e) {
    errorName.className = 'error-message-hidden';
}
function checkName(e) {    
         if(fullName.value.length >= '6' && fullName.value.includes(' ')) { 
            console.log(fullName.value);            
        } else {
            console.log('ERROR!');
            errorName.className = 'error-message-shown';
        }
}
function hideErrorEmail(e) {
    errorEmail.className = 'error-message-hidden'
}
function checkMail(e) {    
         if(email.value.includes('@') && email.value.includes('.com')) { 
            console.log(email.value);            
        } else {
            console.log('ERROR!');
            errorEmail.className = 'error-message-shown';
        }
}

function hideErrorFirstPassword(e) { 
    errorFirstPassword.className = 'error-message-hidden';
}
function checkFirstPassword(e) {
    arrayLetters = [];
    arrayNumbers = [];
    for (i = 0; i < firstPassword.value.length;i++) {
        if(!isNaN(firstPassword.value[i])) {
            arrayNumbers.push(firstPassword.value[i]);
        } else {
            arrayLetters.push(firstPassword.value[i]);
        }
    }    
    if (arrayLetters.length == 0 || arrayNumbers.length == 0) {
        errorFirstPassword.className = 'error-message-shown';
    } else{
        console.log(arrayLetters);
        console.log(arrayNumbers);
        console.log(firstPassword.value);
        }
}
function hideErrorSecondPassword(e) {
    errorSecondPassword.className = 'error-message-hidden';
}
function checkSecondPassword(e) {
    if (secondPassword.value != firstPassword.value) {
        console.log('Error!');
        errorSecondPassword.className = 'error-message-shown';
    } else {
        console.log(secondPassword.value);
    }
}

function hideErrorAge(e) {
    errorAge.className = 'error-message-hidden';
}
function checkAge(e) {
    if (age.value >= 18 && Math.round(age.value) == age.value) {
        console.log(age.value);
    } else { 
        console.log('ERROR!');
        errorAge.className = 'error-message-shown';
    }
}
function hideErrorPhoneNumber(e) { 
    errorPhoneNumber.className = 'error-message-hidden';
}
function checkPhoneNumber (e) {
    if (isNaN(phoneNumber.value) || phoneNumber.value.length < 7) {
        console.log('Error!')
        errorPhoneNumber.className = 'error-message-shown';
    } else {
        console.log(phoneNumber.value);
    }
}
function hideErrorAdress (e) {
    errorAdress.className = 'error-message-hidden';
}
function checkAdress(e) {
    arrayLetters = [];
    arrayNumbers = [];
    for (i = 0; i < adress.value.length; i++) {
        if(!isNaN(adress.value[i])) {
            arrayNumbers.push(adress.value[i]);
        } else {
            arrayLetters.push(adress.value[i]);
        }
    }
    if (!adress.value.includes(' ')  || arrayLetters.length == 0 || arrayNumbers.length == 0 || 
    adress.value[adress.value.length-1] === ' ') {
        errorAdress.className = 'error-message-shown';
         
    } else {
        console.log (adress.value);        
    }
}
function hideErrorCity(e) {
    errorCity.className = 'error-message-hidden';
}
function checkCity(e) {
    if (city.value.length >=3) {
        console.log(city.value);        
    } else {
        console.log('Error');
        errorCity.className = 'error-message-shown'
    }
}
function hideErrorZipCode(e) {
    errorZipCode.className = 'error-message-hidden';
}
function checkZipCode(e) { 
    if(zipCode.value.length < 3 || zipCode.value.includes('.') ||
    zipCode.value.includes('-')) {
        console.log('Error!');
        errorZipCode.className = 'error-message-shown';
    } else {
        console.log(zipCode.value);
    }
}
function hideErrorDniNumber(e) {
    errorDniNumber.className = 'error-message-hidden';
}
function checkDniNumber(e) {
    if(dniNumber.value.length < 7 || dniNumber.value.length > 8 || dniNumber.value.includes('.') ||
    dniNumber.value.includes('-')) {
        console.log('Error!');
        errorDniNumber.className = 'error-message-shown';
    } else {
        console.log(dniNumber.value);
    }
}