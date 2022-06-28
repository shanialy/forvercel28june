import { Client } from "@elastic/elasticsearch";
const client = new Client({
  node: "http://43.251.253.107:2500",
});
client.ping();

export default async function search(req, res) {
  if (req.body == "aggregationOnproducttype") {
    const body = await client.search({
      index: "pricechoice_v3",
      aggs: {
        langs: {
          terms: {
            field: "product_type",
            size: 500,
          },
        },
      },
    });
    let searchResults = body.aggregations;
    res.status(200).json({ searchResults });
  }
  if (req.body == "domainwiseProductcount") {
    const body = await client.search({
      index: "pricechoice_v3",
      aggs: {
        langs: {
          terms: {
            field: "domain.keyword",
            size: 500,
          },
        },
      },
    });
    let searchResults = body.aggregations;
    res.status(200).json({ searchResults });
  }
  if (req.body == "top4discounted") {
    const body = await client.search({
      index: "pricechoice_v3",
      sort: [
        {
          discount: {
            order: "desc",
          },
        },
      ],
      size: 4,
    });
    let searchResults = body.hits.hits;
    res.status(200).json({ searchResults });
  }
  if (req.body == "top4rating") {
    const body = await client.search({
      index: "pricechoice_v3",
      sort: [
        {
          rating: {
            order: "desc",
          },
        },
      ],
      size: 4,
    });
    let searchResults = body.hits.hits;
    res.status(200).json({ searchResults });
  }
}
