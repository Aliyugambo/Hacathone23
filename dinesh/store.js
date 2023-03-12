let formData = [];


function submitForm() {

  const name = document.getElementById("name").value;
  const Disease = document.getElementById("Disease").value;
  const age = document.getElementById("age").value;
  const phnno = document.getElementById("phn-no").value;
  const gender = document.getElementById("gender").value;
  const priority = document.getElementById("priority").value;
  const impact = document.getElementById("impact").value;
  const data = { name,Disease, age,phnno,gender,priority,impact };
  

  formData.push(data);
  

  document.getElementById("name").value = "";
  document.getElementById("Disease").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phn-no").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("impact").value = "";

  console.log(formData);
}