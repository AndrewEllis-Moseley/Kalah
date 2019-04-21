# Kalah
6 Stone Kalah Game using Spring, WebSockets, Angular2 and TypeScript

# Tech Stack
* Java 8
* Spring Boot
* Lombok
* JUnit + Spring Boot Test
* Angular 2
* TypeScript
* WebSockets

# Installation

Maven Dependencies from the kalah/ directory
```bash
mvn clean install
```
Angular Dependencies from the frontend/ directory
```bash
npm intall
```

# Starting the application
As the application uses Spring it already has an embedded Tomcat:

java -jar web/target/web-0.0.1-SNAPSHOT.jar or mvnw spring-boot:run

# The Game
Two players are required to start the game, there is no AI

To start game:
1. Navigate to http://localhost:8080
2. Enter the player name and click Let's Player 
3. In another browser window (or from another machine) repeat step 1-2
4. Once two players have joined the game begins, the status will display which player's turn it is
5. Play until the application notifies you that a player has won

# Unit Tests 
To Be Updated

# JavaDocs
All classes have detailed descriptions of what they do and how they should function
