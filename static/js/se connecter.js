const email = document.querySelector('uemail');
const passeword = document.querySelector('passeword');
const button= document.getElementById('button');
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg1NjgsImV4cCI6MTY3OTQ3ODYyOH0.zPTj8ypFsL0UMfppU00lCIrV_1neTW-2ghEe4jtZ_9c"

function form_verify(){
   
    if(password.value === "" && email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/) ){
        alert("l'un ou plusieurs des champs sont vides ou incomplet")
        
    
    } 
    
  
  };
  
  button.addEventListener('click', e=>{
    fetch('https://afpatraining.snage.tech/login', {
  method: "POST", // or 'PUT' or 'get'
  headers: {
    "Content-Type": "application/json",
    "x-api-key": key
  },
  body: JSON.stringify(
    {email : email.value, password : password.value}
  )
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
   
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  e.preventDefault();
}
);


    
  