# Next Cart using Page Router and Redux

## Description

Next Cart is a web application developed using Next.js framework, Redux for state management, and Page Router for navigation. It allows users to browse products, add them to their cart, and proceed to checkout seamlessly, offering a smooth shopping experience.

### [Live Preview](https://next-cart-self.vercel.app/)

**Key Features:**

1. **Cart:** Allows users to add items to their cart with persistent local storage, ensuring saved selections across sessions.
2. **Redux Toolkit:** Utilizes Redux Toolkit for efficient state management, including data fetching for the product list and seamless integration with the application's components.
3. **getServerProps** Implements data fetching in product detail pages using getServerProps, enabling efficient server-side rendering and enhancing the user experience.
4. **LivePreview** - Fully responsive
5. **Search Filter** User can search for products

### :electric_plug: Installation

To clone and run this application, you'll need

- [Git](https://git-scm.com) and
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
  installed on your computer. From your command line:

```bash
# Clone this repository using
$ git clone

# Go into the repository
$ cd

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

### 📁 Project Structure

```markdown
    |-- components
        | |-- Cart
        | | |-- CartItemList.js
        | | |-- EmptyCart.js
        | | |-- SingleCartItem.js
        | |-- Drawer
        | | |-- CartDrawer.js
        | |-- Filter
        | | |-- FilterSection.js
        | |-- Header
        | | |-- Header.jsx
        | |-- Layout.jsx
        | |-- Loader
        | | |-- Loader.jsx
        | |-- Products
        | | |-- ProductDetail.js
        | | |-- ProductList.jsx
        | | |-- SingleProductItem.jsx
        | |-- shared
        | | |-- Button.js
    |-- pages
        | |-- 404.js
        | |-- \_app.js
        | |-- \_document.js
        | |-- \_error.js
        | |-- api
        | | |-- hello.js
        | |-- index.js
        | |-- products
        | | |-- [id].js
```

**Endpoints:**

**API:**

- `https://dummyjson.com/`: For API Simulation.

**Usage:**
