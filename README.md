<img align="right" width="100" height="100" src="/public/assets/images/project-logo.png"><span style="color:#667ce0; text-shadow:5px 2px lightyellow;font-size:3em; font-weight:bold"> ShopHopping </span>  
## Background
ShopHopping is a grocery store planner and item locator that helps customers retrieve items in the store.
## Real World Problem: 
Supermarket giants like Costco and Walmart regularly move items around in the store in an attempt to make customers walk around the store longer. This is to manipulate shoppers into buying and trying new products. 
## Solution: 
Our app offers customers the ability to ignore the sneaky ways supermarkets tricks people into spending more money and spend as little time as possible in the store, and get only what you need.
## UX/UI Demo: 
First of All. All users can sign up here:
![Sign up img here](/public/assets/images/signup.png)
After finishing sign up, users can sign in here:
![Sign in img here](/public/assets/images/signin.png)
Then, users will be directed to the dashboard page. Users may type the grocery items they want to brought
![Dash board page here](/public/assets/images/dashboard.png)

## Directory structure
All the recommended files and directories from the steps above should look like the following structure:
```
.
├── config
│   ├── passport
│   │   └── passport.js
│   └── config.json
│
├── db
│   └── sequelize_passport.sql
│
├── models
│   ├── example.js
│   ├── index.js
│   └── user.js
│
│
├── public
│   ├── assets
│   │   └──images
│   ├── js
│   │   └── index.js
│   └── styles
│       └── styles.js
│
├── routes
│   ├── apiRoutes.js
│   ├── auth.js
│   └── htmlRoutes.js
│
├── test
│   ├── unit.js
│   └── ci.js
│
├── package.json
│
├── server.js
│
└── views
    ├── layouts
    │   └── main.handlebars
    ├── 404.handlebars
    ├── index.handlebars
    ├── signin.handlebars
    └── signup.handlebars
```
## Improvement
1. Database for users' search history
2. Path Finder
<sub> &copy; May 2019: Kathy, Kai-Ann, Brij and Paul </sub>