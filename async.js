const getResult = document
  .getElementById("btn1")
  .addEventListener("click", async function getData() {
    try {
      const data = await fetch("https://swapi.co/api/people/");
      const result = await data.json();
      console.log(result);
    } catch (err) {
      console.log(err, "Request failed: Status Armagedooon");
    }
  });
