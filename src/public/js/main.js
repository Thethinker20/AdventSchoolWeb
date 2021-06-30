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

function download(file, text) {
              
  //creating an invisible element
  var element = document.createElement('a');
  element.setAttribute('href', 
  'data:text/plain;charset=utf-8, '
  + encodeURIComponent(text));
  element.setAttribute('download', file);

  // Above code is equivalent to
  // <a href="path of file" download="file name">

  document.body.appendChild(element);

  //onClick property
  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("btnDownload").addEventListener("click", function() {
  // Generate download of hello.txt 
  // file with some content
  //var text = document.getElementById("text").value;
  var filename = "media/Documents/covidProtocol.doc";

  download(filename);
}, false);

