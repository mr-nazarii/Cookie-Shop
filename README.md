# cookie-shop

## _All sweets in one place_

[Link](https://cookie-shop.vercel.app/)

The Cookie-shop website is a React build website using best practices of component development, and Redux technology.

## What is included

- The main page which fetches data from the server and sets it in the Redux Store for further usage.
- Creating unique Items from stored data
- Ability to add the item to the favorite list or to the cart
- The app tracks/stores your chosen items
- Modal which shows when clicked on the "Add to Cart" or "Remove from Cart"

## Tech

The Cookie-shop makes use of a variety of cutting-edge technology to make its job convenient:

- React
- React-router
- JavaScript
- Redux
- Redux-thunk
- SCSS

## Project in detail:

Components:

- # Modal component:

  - Is a template is filled when the redux stored is filled with needed information:
    - Title
    - Body text
    - Is the cross button enabled
    - Header and button color
    - Body color
    - Buttons

- # App component:

  - Has all the routes and renders:
    - Cart element
    - Main element
    - Favorite element

- # Cart, Main, Favorite component:

  - Receives data from the storage and renders Item Components with setted data

- # Item component:

  - Checks the store and sets items according to their status and sub statuses
  - Renders passed data from parent component
  - Uses Button component
  - passes functions setters to buttons

- # Button component:
  - Receives passed styles parameters:
    - Color
    - Width
    - Height
    - Name
    - Border radius
  - And functions for onClick
