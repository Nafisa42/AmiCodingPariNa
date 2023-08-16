# AmiCodingPariNa
### Instructions to run this code:
a. The LoginPage.html should to be opened in a live server <br>
b. Email ID field needs input in email format, then give an input in the password field; the Submit button will be accesible after the fields are filled up <br>
c. If someone wishes to register, they can click on the Register button and fill up the required fields; the register button will be accesible after the fields are filled up <br>
d. After clicking the Submit button it will take you to the next page, Khoj The Search Page. You will insert comma-seperated integers in the Input Values field and a single integer in the Search field, then click on Khoj to get the desired output <br>

### Requirements:
a. I created an ESM Javascript file(.mjs) to build the connection between database and frontend, as well as to create the API endpoint. So, the express and mysql2 packages need to be installed using the following command-
npm install express mysql2 <br>
b. I used VScode to create my project and installed an extension called MySQL to create a database. My credentials to create the connection were- <br> 
  host: 'localhost', <br>
  user: 'Nafisa', <br>
  password: '201812t', <br>
  database: 'khojthesearch', <br>
  port: 3306 <br>
  So, these are also the credentials you should use, if you do not wish to change any information inside the SQLconn.mjs file. <br>
  c. In the 'khojthesearch' database, you need to create a table named 'users' and add columns 'user_id', 'created_at' and 'input_values'
  d. You need run the khojthesearch_query.sql file to see the output in the database
