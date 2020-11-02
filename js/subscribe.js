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
var address = document.getElementById('address');
var errorAddress = document.getElementById('error-address');
var city = document.getElementById('city');
var errorCity = document.getElementById('error-city');
var zipCode = document.getElementById('zip-code');
var errorZipCode = document.getElementById('error-zip-code');
var dniNumber = document.getElementById('dni-number');
var errorDniNumber = document.getElementById('error-dni-number');
var submitButton = document.getElementById('submit-button');
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
address.addEventListener('blur', checkAddress);
address.addEventListener('focus', hideErrorAddress);
city.addEventListener('blur', checkCity);
city.addEventListener('focus', hideErrorCity);
zipCode.addEventListener('blur', checkZipCode);
zipCode.addEventListener('focus', hideErrorZipCode);
dniNumber.addEventListener('blur', checkDniNumber);
dniNumber.addEventListener('focus', hideErrorDniNumber);
submitButton.addEventListener('click', infoAlert);
//Actions
function hideErrorName(e) {
    errorName.className = 'error-message-hidden';
}
function checkName(e) {
    if (fullName.value.length >= '6' && fullName.value.includes(' ')) { 
    console.log(fullName.value);
    } else if (fullName.value == '') {
        errorName.className = 'error-message-shown';
    } else {
        errorName.className = 'error-message-shown';
    }
}
function hideErrorEmail(e) {
    errorEmail.className = 'error-message-hidden';
}
function checkMail(e) {
    if(email.value.includes('@') && email.value.includes('.com')) {
    console.log(email.value);
    } else if (email.value == '') {
        errorEmail.className = 'error-message-shown';
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
    } else if (firstPassword.value == '') {
        errorFirstPassword.className = 'error-message-shown';
    } else {
        console.log(arrayLetters);
        console.log(arrayNumbers);
        console.log(firstPassword.value);
        }
}
function hideErrorSecondPassword(e) {
    errorSecondPassword.className = 'error-message-hidden';
}
function checkSecondPassword(e) {
    if (secondPassword.value != firstPassword.value || secondPassword.value =='') {
        errorSecondPassword.className = 'error-message-shown';
    } else {
        console.log(secondPassword.value);
    }
}
function hideErrorAge(e) {
    errorAge.className = 'error-message-hidden';
}
function checkAge(e) {
    if ((age.value >= 18 && age.value <=100) && Math.round(age.value) == age.value) {
        console.log(age.value);
    } else { 
        errorAge.className = 'error-message-shown';
    }
}
function hideErrorPhoneNumber(e) {
    errorPhoneNumber.className = 'error-message-hidden';
}
function checkPhoneNumber(e) {
    if (isNaN(phoneNumber.value) || phoneNumber.value.length < 7) {
        console.log('Error!')
        errorPhoneNumber.className = 'error-message-shown';
    } else {
        console.log(phoneNumber.value);
    }
}
function hideErrorAddress(e) {
    errorAddress.className = 'error-message-hidden';
}
function checkAddress(e) {
    arrayLetters = [];
    arrayNumbers = [];
    for (i = 0; i < address.value.length; i++) {
        if(!isNaN(address.value[i])) {
            arrayNumbers.push(address.value[i]);
        } else {
            arrayLetters.push(address.value[i]);
        }
    }
    if (!address.value.includes(' ')  || arrayLetters.length == 0 || arrayNumbers.length == 0 || 
    address.value[address.value.length-1] === ' ') {
        errorAddress.className = 'error-message-shown';
         
    } else {
        console.log (address.value);
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
        errorCity.className = 'error-message-shown';
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
//Alert with the form info or the errors report
function infoAlert(e) {
    labelArray = ['Name: ', 'Email: ', 'Password: ', 'Password verification: ',
    'Age: ', 'Contact number: ', 'Address: ', 'city: ', 'zip code: ', 'DNI: '];
    dataArray = [];
    errorArray=[];
    if(errorName.className === 'error-message-shown'){
       errorArray.push('Error in Name');
       dataArray.push(' ');
    } else {
        dataArray.push(String(fullName.value));
        errorArray.push(' ');    
    }
    if(errorEmail.className === 'error-message-shown'){
        errorArray.push('is too short or have no spaces');
        dataArray.push(' ');
    } else {
         dataArray.push(String(email.value));
         errorArray.push(' ');
    }
    if(errorFirstPassword.className === 'error-message-shown'){
        errorArray.push('is invalid');
        dataArray.push(' ');
    } else {
         dataArray.push(String(firstPassword.value));
         errorArray.push(' ');    
    }
    if(errorSecondPassword.className === 'error-message-shown'){
        errorArray.push('Passwords don'+"'"+'t match');
        dataArray.push(' ');
    } else {
         dataArray.push(String(secondPassword.value));
         errorArray.push(' ');    
    }
    if(errorAge.className === 'error-message-shown'){
        errorArray.push('is lower than 18');
        dataArray.push(' ');
    } else {
         dataArray.push(String(age.value));
         errorArray.push(' ');
    }
    if(errorPhoneNumber.className === 'error-message-shown'){
        errorArray.push('too short or doesn'+"'"+'t exist');
        dataArray.push(' ');
    } else {
         dataArray.push(String(phoneNumber.value));
         errorArray.push(' ');
    }
    if(errorAddress.className === 'error-message-shown'){
        errorArray.push('is invalid');
        dataArray.push(' ');
    } else {
         dataArray.push(String(address.value));
         errorArray.push(' ');
    }
    if(errorCity.className === 'error-message-shown'){
        errorArray.push('does'+"'"+'t exist');
        dataArray.push(' ');
    } else {
         dataArray.push(String(city.value));
         errorArray.push(' ');
    }
    if(errorZipCode.className === 'error-message-shown'){
        errorArray.push('is too short');
        dataArray.push(' ');
    } else {
         dataArray.push(String(zipCode.value));
         errorArray.push(' ');
    }
    if(errorDniNumber.className === 'error-message-shown'){
        errorArray.push('hast to be 6-7 numbers long');
        dataArray.push(' ');
    } else {
         dataArray.push(String(dniNumber.value));
         errorArray.push(' ');
    }
    if (dataArray.includes('')){
        alert('missing fields');
        e.preventDefault();
    }else {
        alertArray=[];
        for(x = 0; x < labelArray.length; x++) {
            const y = (labelArray[x] + ' ' + dataArray[x] + ' ' + errorArray[x] + ' ');
            alertArray.push( y );
            alertArray.push('\n');
        }
        var alertString = '';
        for (i =0; i < alertArray.length; i++){
            alertString=alertString+(String(alertArray[i]));
        }
        alert(alertString);
    }
}