
## Authors

- Developed by [Gabrielle Poletti Ferreira](https://github.com/gabrielleeee)

# Veterinary Franchise

Management system for internal clients and appointments for a veterinary clinic.

In the system it is possible to create, return, update and delete a customer and create, update and delete a pet of a customer.

## Technologies 

The following technologies were used for the development of the project:

- Node.js
- Express
- Typescript

## Running locally

Make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your machine. 


First, copy the repository link and run the command in Command Prompt in a folder of your choice:

```
git clone {link}
```
Open the folder in an editor and run the command below to install the project's dependencies.

```
npm install
```

Rename the .env-example file to .env and fill in your preferred port where the project runs. 
Remember, if you put a port other than 3000, change it in Postman routes.

Then, run the command below to run the project.

```
npm start
```

## API and Routes

For this project, the Postman platform was used. To import the collection and test the route, follow these steps:

- Open the `rotas.json` file inside the Postman folder
- Click the *Raw* button
- Copy the URL of your browser that is displaying the file
- Open Postman
- Click the *Import* button
- Paste the copied content and hit Enter

The collection will be imported with the routes and the body filled with data for the test.

## Functionalities

- [x] Return all registered customers
- [x] Register new customer
- [x] Update clients
- [x] Delete customers
- [x] Register a pet and add it to a client
- [x] Upgrade a pet
- [x] Delete a pet from a customer


