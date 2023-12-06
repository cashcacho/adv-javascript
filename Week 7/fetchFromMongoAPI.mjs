const api_endpoint = "https://us-west-2.aws.data.mongodb-api.com/app/data-muvrr/endpoint/data/v1/action/findOne";
const myBody = {
  "collection": "listingsAndReviews",
  "database": "sample_airbnb",
  "dataSource": "Cluster0",
  "filter": {
    "beds": 2,
    "property_type": "House"
  },
  "projection": {
    "_id": 1,
    "beds": 1,
    "name": 1,
    "bedrooms": 1
  }
};

console.log("Fetching document from:", {
  dataSource: myBody.dataSource,
  database: myBody.database,
  collection: myBody.collection
});

const response = await fetch(api_endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'WasXvNOgXLQ3yocnHqZBMD5kdP6cFEqiNDdBu8klMveeECphpRFtKK5EacrNSEBF',
  },
  body: JSON.stringify(myBody)
});

const json_response = await response.json();
console.log(json_response);