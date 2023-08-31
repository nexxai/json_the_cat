const request = require("request");
const query = process.argv[2];

request(
  `https://dsfasdfapi.thecatapi.com/v1/breeds/search?q=${query}`,
  (err, response, body) => {
    if (err) {
      console.log(`Error: ${err}`);
      process.exit();
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed not found`);
    } else {
      console.log(data[0].description);
    }
  }
);
