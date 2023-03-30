const form =document.getElementById('form');
const button = document.getElementById('register');

//evenement

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg1NjgsImV4cCI6MTY3OTQ3ODYyOH0.zPTj8ypFsL0UMfppU00lCIrV_1neTW2ghEe4jtZ_9c"

button.addEventListener('click', e=>{
    const username = document.getElementById('username').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    form_verify(username, password, email);

    e.preventDefault();
})
//funstions
function form_verify(username, password, email){
   
    if(username.length < 3 && password === "" && email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/) && password.value >=password2.value ){
        alert("l'un ou plusieurs des champs sont vides ou incomplet")
        
    
    } 
    const data = { username, password, email};

fetch('https://afpatraining.snage.tech/signup/', {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
    "x-api-key": key
  },
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
