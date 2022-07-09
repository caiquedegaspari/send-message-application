# send-message-application

1. Run yarn command in client and api repos to install the node_modules
2. if you don't have docker-compose you need to install it in your computer (https://docs.docker.com/compose/install/)
3. run docker-compose up
4. To create the connection between the api and the database you need to create a connection in a database
administration tool(DBeaver is the one a choose).
5. you can use the same user/password/host/database name that i use in my api .env file or you can create a custom connetion following the example in
.env.example
6. run yarn prisma migrate dev (if you're having issues to run the migrations change the HOST in api .env DATABASE_URL to localhost,
run the command, and change it again to the previous host name)
