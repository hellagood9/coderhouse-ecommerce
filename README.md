This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Coderhouse ecommerce

by Maximiliano A. Sussini

## Stack

- React: JS Library
- React Hooks APIs
- React Context
- React-router-dom: Routing
- Sass: Styling
- CSS Modules
- Firebase

### Installation

Requires [Node.js](https://nodejs.org/) v11+ to run.

Install the dependencies

CLIENT PORT: 3000

### Clone repo

```sh
$ git clone https://github.com/hellagood9/coderhouse-ecommerce.git
```

### Client

```sh
$ cd ecommerce-coderhouse
$ yarn
$ mv .env.example .env
$ yarn start
```

##### Important

The .env file has 2 environment variables that needs to be filled in order the project to work
properly with Firebase

- REACT_APP_FIRESTORE_API_KEY
- REACT_APP_FIRESTORE_APP_ID

### URL

http://localhost:3000

### Routes

Instructions on how to use them in your own application are linked below.

| Route         | Info                               |
| ------------- | ---------------------------------- |
| /             | Homepage and product list          |
| /products/:id | Product details                    |
| /category/:id | List of products within a category |
| /cart         | Shopping cart                      |

### Dependencies

### /client

- axios
- firebase
- classnames: Utility for conditionally joining classNames together
- node-sass
- prop-types: Runtime type checking for React props and similar objects
- react-icons:
- react-router-dom
- tiny-skeleton-loader-react: Skeleton loader component (optimistic UI)

### Todo

- Improve the design/layout
- Testings
- Implement Redux
- Auth

### Considerations

- This is a basic final project corresponding to a course of react. No optimizations have been taken into account in general
- Not all existing categories have products. These categories appear as examples and you can create more products that belong to these.
Examples of categories with products:
* DRINKS > Hot Coffees
* FOOD > Bakery
- Use "storage" to keep products in the cart after refreshing or closing the browser tab

## License

MIT

:muscle:
**Free Software, Hell Yeah!**
