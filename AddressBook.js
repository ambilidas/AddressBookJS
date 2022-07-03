console.log("WELCOME TO ADDRESS BOOK");
var Addressbook=new Array();

let FirstName="Ambili";
let LastName="Das";
let Address="chennai";
let City="kozhikode";
let State="kerala";
let Zip=123456;
let PhoneNumber=9446641;
let Email="ambili.kan@gmail.com";
Addressbook=[FirstName,LastName, Address,City,State,Zip,PhoneNumber,Email];
console.log(Addressbook);
//UC2
let regexFirstname=RegExp('^[A-Z]{1}[A-Z a-z]{2,}$');
if(regexFirstname.test(FirstName)){
    console.log("FirstName is valid");
}
else {
    console.log("Invalid");
}
let regexLastname=RegExp('^[A-Z]{1}[A-Z a-z]{2,}$');
if(regexLastname.test(LastName)){
    console.log("LastName is valid");
}
else {
    console.log("Invalid");
}
let regexAddress=RegExp('^[a-z A-Z]{4,}$');
if(regexAddress.test(Address)){
    console.log("Address is valid");
}
else {
    console.log("Invalid");
}
let regexCity=RegExp('^[a-z A-Z]{4,}$');
if(regexCity.test(City)){
    console.log("City is valid");
}
else {
    console.log("Invalid");
}
