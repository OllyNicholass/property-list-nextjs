# Product List Next.js

## About the application

![Property Listings Card](/listing-cards.png "Property Listings Card")

This app was build utilising [Next.js](https://nextjs.org/), to make use of SSG & SSR with [Vercel](https://vercel.com/) as the plan for deployment. This is because Vercel requires zero to minimal configuration. Vercel is also from the creators of Next.js. There are a large number of optimisation and deployment benefits, including CI/CD pipeline which intergrates with Git repos. Vercel also includes out of the box automatic performance monitoring in the form of [Next.js Analytics](https://vercel.com/analytics).

For hosting the data, I used [JSON Server](https://www.npmjs.com/package/json-server) and [Faker.js](https://github.com/faker-js/faker). I did this because I was able to programatically generate dummy data and it caches the data while the server is running. This is not a production solution. A number of routes get generated and makes it really easy to edit the mock data from the dev application to test functionality without the need to setting up a full DB infrastructure.

## Data handling

For the purposes of this challenge use what you prefer for tactically storing the information (session storage, file storage, database). However, please state your preferred solution if you were to implement a full solution.

We recommend you use a tool like [JSON Server](https://github.com/typicode/json-server) to mock the data, rather than build out any APIs. If you use JSON Server, please ensure it installed as a local dependency and not globally, as recommended in the installation instructions. The project should build and run successfully after installing the project's local dependencies.

## Running the application

1. Install the dependancies
`npm install`

2. Start the client
`npm run dev`

> Depening whether you installed JSON Server globally will decide which command to use to start the API Server

3. Start the server:
`node node_modules/json-server/lib/cli/bin --watch db.js`

OR
`json-server --watch db.js` (if you've installed json-server globally)

This application runs on two ports; 

- Application: `3000` (Default)
- DB/API Server `3001` (Default: `3000` - Changed in `json-server.json`)

### Changing the ports

If you wish to use different ports, or these ports are already in use, just update the commands with the new port. And edit the `API_ENDPOINT` environment variable in the `next.config.js` file with the updated API endpoint.

```json
{
  "env": {
    "API_ENDPOINT": "http://localhost:3001"
  }
}
```

The ports can be overridden using the following commands to compile.

`npm run dev -- -p 3005`

Depening whether you installed JSON Server globally will decide which command to use to start the API Server

`node node_modules/json-server/lib/cli/bin --watch db.js --port 3006`
OR
`json-server --watch db.js --port 3006`

## Todo

- [ ] Tests
- [ ] Dockerize

---

## Spec Example

An agent should be able to do the following:

* View all listings
* Mark an individual listing as expired
* Easily distinguish between active and expired listings

A listing contains the following information:

* Image
* Number of bedrooms
* Address
* Postcode
* Description
* Asking price
* Status - `active` or `expired`

Taking advantage of the advances in technology and industry standards, create a simple application that can perform the tasks outlined above. 

Below is visual design of the listings card to illustrate what an individual listing could look like. This image is only there to give a flavour of what it should look like and not a specific design to implement. Anything not present in the specification does not need to be implemented and, where there is any ambiguity, the specification above takes precedence.

![Property Listings Card](/listing-card-example.png "Property Listings Card")