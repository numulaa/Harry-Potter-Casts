document
  .queerySelector("button")
  .addEventListener("click", harryPotterAPIRequest);
async function harryPotterAPIRequest() {
  const harryPotterCastName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://harry-potter-casts-api.herokuapp.com/api/${harryPotterCastName}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("#birthName").innerText = data.birthName;
  } catch (error) {
    console.log(error);
  }
}
