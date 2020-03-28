export function helloFn() {
  alert("Hello World");
}

export async function asyncFn() {
  try {
    const data = await fetch("https://swapi.co/api/people/");
    const result = await data.json();
    console.log(result);
    helloFn();
  } catch (err) {
    console.log(err, "Request failed: Status Armagedooon");
  }
}
