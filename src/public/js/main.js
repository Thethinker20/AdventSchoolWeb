// jQuery counterUp
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  $("#emailSend").on('submit', function(){
 var nameEmail = document.getElementById("name").value;
 var telEmail = document.getElementById("telefon").value;
 var emailEmail = document.getElementById("email").value;
 var messageE = document.getElementById("question").value;

 let data = {
  nombre: nameEmail,
  tel: telEmail,
  email: emailEmail,
  message : messageE
};
let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(data),
};
const promise = fetch("/preguntaEmail", options)
  .then((res) => res.json());
  Swal.fire({
    icon: "success",
    text: "E pregunta a wordu manda",
  });
  return false;
});
