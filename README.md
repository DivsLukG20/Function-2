# Function 2

## Overview

This project is a simple Express.js application that connects to a MySQL database and provides an API endpoint to retrieve the most recent log entries. The logs are stored in the `log_queries` database. 

## Features

- Fetches the 100 most recent log entries from the database.
- Uses Express.js for handling HTTP requests.
- Connects to a MySQL database using the `mysql2` package.

## Prerequisites

- Node.js installed on your machine.
- MySQL server running with the necessary database and table.
- `mysql2` and `express` packages installed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DivsLukG20/Function-2.git
   cd Function-2
   ```

2. Install the required packages:

   ```bash
   npm install express mysql2
   ```

3. Set up your MySQL database:

   - Create a database named `log_queries`.
   - Ensure you have a table named `log_info` with the appropriate columns (e.g., `dateTime`, `severity`, `message`, etc.).

     ![Screenshot 2024-09-29 231602](https://github.com/user-attachments/assets/568e08ac-af74-45e9-b319-8f6c60f9c44f)

4. Update the database connection settings in `database.js`:

   ```javascript
   var mysql = require("mysql2");

   var connection = mysql.createConnection({
       host: '', // The hostname of the MySQL server
       port: '',      // The port number on which the MySQL server is listening
       database: 'log_queries', // The name of the database to connect to
       user: '',      // The username for authentication
       password: '' // The password for the user
   });

   module.exports = connection;
   ```

## Usage

1. Start the application:

   ```bash
   node index.js
   ```

2. Access the API endpoint to get the most recent log entries:

   ```
   http://localhost:3000/
   ```

   The response will return a JSON array of the 100 most recent log entries.
   
   ![Screenshot 2024-09-29 230821](https://github.com/user-attachments/assets/f0b320a9-d995-4555-bc81-7136aa64b485)

## Tutorials 

I followed this tutorial on YouTube: https://www.youtube.com/watch?v=tIV90xQ0k6A

## Conclusion

While I initially considered using Azure Functions for its serverless setup, I decided to use a local solution due to cost concerns, especially since I don't qualify for the free subscription. During my research, I found that developing locally offers more flexibility for testing and debugging, allowing me to make changes quickly without the wait for deployments. This approach also gives me full control over the environment, letting me manage resources and make specific tweaks to fit my needs. Additionally, hosting the API locally has provided me with valuable insights into server management and API design while keeping things simple

