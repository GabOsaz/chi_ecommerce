# Chi Mart

An e-commerce demo application heavy on the use of local storage for application-level state cart management.

## Installation

##

Install my-project with yarn

```bash
  git clone https://github.com/GabOsaz/chi_ecommerce.git
  cd chi_ecommerce
  yarn
  yarn run dev
```
Install my-project with npm

```bash
  git clone https://github.com/GabOsaz/chi_ecommerce.git
  cd chi_ecommerce
  npm install
  npm run dev
```


## Features

- View products list
- View product details
- Add product to cart
- Increase/decrease product quantity in product details page or in cart
- Clear cart
- View product summary page
- Finally checkout


## Running Tests

To run tests, run the following command

```bash
  yarn run cy:open
  OR
  npm run cy:open
  Runs on local host's port 3000, remember to make it available.
```


## Tech Stack

**Client:** Nextjs, MaterialUI, TailwindCSS, Cypress, Axios



## Possible Optimizations

Obviously, this app is but a quick setup for a demo, so some optimizations are in order

- Better caching of product data, used around the app, would recommend Tanstack's React Query, does excellent job!
- Better responsiveness
- Better accessibility
- SEO optimizations, since it's an e-commerce web app
