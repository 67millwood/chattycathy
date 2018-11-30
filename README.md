# Chatty App

Amedus is a simple restaurant app.

Users are provided a menu of items to add to a shopping cart.  They may remove items from the cart as well as increase the quanity of a particular item.  Pricing totals will update dynamically.  Once the user confirms their order they provide their telephone number and payment information (payment info for placeholding purposes only).  The user is sent an SMS confirming their order while the restaurant is sent an SMS indicating an order has been placed (the user name, telephone number and a link to review the user order is provided).  The restaurant owner has the option to click the link in the SMS and choose to edit the time for order pickup, cancel the order and add an optional custom message.  The contents of the message are sent via SMS to the user.

## Dependencies

  - body-parser 1.15.2
  - card 2.4.0
  - cookie-session 2.0.0-beta.3
  - dotenv 2.0.0
  - ejs 2.4.1
  - express 4.13.4
  - knex 0.11.7
  - knex-logger 0.1.0
  - morgan 1.7.0
  - node-sass-middleware 0.9.8
  - pg 6.0.2
  - twilio 3.23.2

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
5. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
6. Run the  server: `node server.js`
7. Visit `http://localhost:8080/`
8. Enjoy!

## Functionality

Main menu page (/)...customer can:
- add an item to cart
- cart changes dynamically
- click cart to go to cart page

Cart page (/checkout)...customer can:
- view all items in cart
- add or reduce quantity of a particular item in cart
- remove an item from cart
- return to menu to add more items

SMS: upon confirmation of an order:
- SMS sent to customer thanking them and telling them a pickup time will be sent
- SMS sent to restuarant with link to order to view order, set pickup time, cancel order and set an optional custom message

Order and time for pickup page (/orderdisplay/uniqueordernumber)...restaurant owner can:
- view username, phone number of customer who ordered
- see all items and total cost of order
- select 5, 15, 30 minutes OR cancel order
- provide an optional custom message

SMS: upon restaurant owner selecting a time or cancelling order
- customer is informed of pickup time OR order has been cancelled
- customer recieves any custom message created by restuarant


## File Structure

Important folders and files are indicated in the tree diagram below:

<ul>
  <li>/Amedus</li>
  <ul>
    <li>/build: contains images</li>
    <li>/chatty_server</li>
    <ul>
      <li>server.js: runs the express server and websocket functionality on port 3001</li>
    </ul>
    <li>/src</li>
    <ul>
      <li>App.jsx: the Parent component that communicates with the websocket server</li>
      <li>ChatBar.jsx: child component to App which takes user content for username and messages</li>
      <li>Message.jsx: child component to MessageList which renders styling on messages</li>
      <li>MessageList.jsx: Parent to Messages, child to App is the container for the message log</li>
    </ul>
    <li>/styles</li>
    <ul>
      <li>application.scss </li>
      <li>home.scss: main css file for styling</li>
    </ul>
    <li>index.html: shell for the dynamically created HTML via React components</li>
    <li>package.json</li>
    <li>README.md</li>
    <li>server.js: simple server that runs the app on port 3000 </li>
    <li>webpack.config.js: webpack setup files</li>
  </ul>
</ul>
```


## Screenshots

#### Message Log:

![alt text](build/messagedetails.png)

#### Multi User Chat:
![alt text](build/3userchat.png)

#### New Users and User Count:
![alt text](build/4users.png)



