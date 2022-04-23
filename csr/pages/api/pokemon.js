import pokemon from "../../pokemon.json";

export default (req, res) => {
  if (!req.query.name) {
    res.statusCode = 400;
    res.end("Please provide a name");
  } else {
    // const found = pokemon.filter(
    //   ({ name: { english } }) => english === req.query.name
    // );
    const found2 = pokemon.find((element) => {
      return element.name.english === req.query.name;
    });

    if (found2.length === 0) {
      res.statusCode = 404;
      res.end("Pokemon not found");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(found2));
    }
  }
};
