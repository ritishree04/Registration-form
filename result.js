window.addEventListener('load' , () =>{

const params = (new URL(document.location)).searchParams;
const name = params.get('name');
const surname = params.get('surname');
const address = params.get('address');
const email = params.get('email');
const number = params.get('number');
const country = params.get('country');
const gender = params.get('gender');
const education = params.get('education');
const image = params.get('image');



document.getElementById('result-name').innerHTML=name;
document.getElementById('result-surname').innerHTML=surname;
document.getElementById('result-address').innerHTML=address;
document.getElementById('result-email').innerHTML=email;
document.getElementById('result-number').innerHTML=number;
document.getElementById('result-country').innerHTML=country;
document.getElementById('result-gender').innerHTML=gender;
document.getElementById('result-education').innerHTML=education;
document.getElementById('myImg').innerHTML=image;


})




