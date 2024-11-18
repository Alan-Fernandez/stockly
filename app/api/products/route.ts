import { NextApiRequest, NextApiResponse } from "next";

const dogs = [
  { id: 1, name: "Bulldog", age: 5 },
  { id: 2, name: "Beagle", age: 3 },
  { id: 3, name: "Labrador", age: 4 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(dogs);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
