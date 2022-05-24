# social-network-api

![jsBadge](https://img.shields.io/github/languages/top/kyliemshinn/social-network-api?style=plastic)
![languages](https://img.shields.io/github/languages/count/kyliemshinnn/social-network-api)
![License](https://img.shields.io/github/license/kyliemshinn/social-network-api)


## **Table Of Contents**
1. [Description](#description)
2. [Acceptance Criteria](#acceptance-criteria)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Authors](#author)
7. [License](#license)

## **Description**

Social Network Api is a fully back-end operating program that is mean to share a users thoughts, react to friends, and create a friends list. The intended user is for a social media startup company where they have an API for their social network that uses a noSQL database so their website can handle large amounts of unstructured data. This web app was used with a noSQL database, Mongodb for this. This information can get updated, deleted, created or just simply read.

## **Acceptance Criteria** 

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## **Installation**

1. Clone down the repo from [this link](https://github.com/kyliemshinn/social-network-api) by `git clone git@github.com:kyliemshinn/social-network-api.git` in your terminal
2. To get all necessary packages, run `npm install` in the command line
3. Mongodb and Express need to be installed on your computer in order to run
 
 Please note Node.js is required for the application to run

## **Usage**

For full usage of the Social Network API, please reference the [video tutorial](https://youtu.be/HnYwk0QEamM).


![social network api gif](./assets/images/socialnetworkapi.gif)



## **Technologies Used**

* Javascript
* Node.js
* Mongoose
* Express.js
* Mongodb


## **Author**

* [Kylie Shinn](https://github.com/kyliemshinn)

## **License**


MIT License

Copyright (c) [2022] [Kylie Shinn]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.