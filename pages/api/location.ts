// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Geolocation } from "../../api/AppPrices";

const API_KEY = "558233b31a741aa3b0e9babaac84c11b";

export default function handler(req: NextApiRequest, res: NextApiResponse<Geolocation>) {
  const { location } = req.query;
  fetch(`http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${location}`)
    .then((r) => {
      if (r.status === 200) {
        return r.json();
      }
    })
    .then((jsonResponse) => {
      const firstFind = jsonResponse?.data[0];
      if (!firstFind) {
        res.status(200).json(null);
      } else {
        res.status(200).json({
          ...firstFind,
          locationQuery: location as string,
        });
      }
    });
}
