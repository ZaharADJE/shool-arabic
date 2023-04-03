const form = document.getElementById('form');
const button = document.getElementById('register');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg1NjgsImV4cCI6MTY3OTQ3ODYyOH0.zPTj8ypFsL0UMfppU00lCIrV_1neTW-2ghEe4jtZ_9c"

function form_verify(){
   
  if(username.value.length < 3 && password.value === "" && email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/) && password.value === password2.value ){
      alert("l'un ou plusieurs des champs sont vides ou incomplet")
      
  
  } 
  

};

button.addEventListener('click', e=>{
  


    
fetch('https://afpatraining.snage.tech/signup', {
  method: "POST", // or 'PUT' or 'get'
  headers: {
    "Content-Type": "application/json",
    "x-api-key": key
  },
  body: JSON.stringify(
    {username : username.value, email : email.value, password : password.value}
  )
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    // document.location.href="se connecter.html";
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  e.preventDefault();
}
);


