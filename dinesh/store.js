const form = document.getElementById("user-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 


  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const disease = document.getElementById("Disease").value;


  const user = {
    name: name,
    age: age,
    disease: disease,
  };

console.log(user)
//   localStorage.setItem("user", JSON.stringify(user));
});