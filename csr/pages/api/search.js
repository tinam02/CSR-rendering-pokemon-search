// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import pokemon from "../../pokemon.json";
// export default function handler(req, res) {
//   const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/; //the i means case insensitive
//   res
//     .status(200)
//     .json(
//       pokemon
//         .filter(({ name: { english } }) => english.match(filter))
//         .slice(0, 10)
//     );
// }

import pokemon from "../../pokemon.json";

export default (req, res) => {
  const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify(
      pokemon
        .filter(({ name: { english } }) => english.match(filter))
        .slice(0, 10)
    )
  );
};

// import pokemon from "../../pokemon.json";
// export default function handler(req, res) {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ hi: "asd" }));
// }
