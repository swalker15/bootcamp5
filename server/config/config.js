//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://swalker:b0otcamp@ds031257.mlab.com:31257/bootcamp_sarah', //place the URI of your mongo database here.
  },
  port: process.env.PORT || 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */