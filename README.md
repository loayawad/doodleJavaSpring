

# Doodle chat app using Java Spring

Real-time chat application using Reactjs, sprintBoot, WebFlux and MongoDB

## How to Run

* Clone the repository to your local machine.
* Ensure that Docker is installed on your computer.
* Open a terminal and navigate to the project's root directory.
* Run the following command to build and start the application:
    * ```docker-compose up -d --build```
    * or:
        * Run mongodb in docker: ```docker compose up mongodb```
        * Run server local: ```./gradlew bootRun```
        * Run client local: ```yarn start```

* Once the containers are up and running, you can access the application at http://localhost:3000/

## Q: Tell us what motivated your technology choices.
- I chose React.js again for simplicity and comfortability for the client side. 
- JavaSpring for the project requirements as a server side.
- SSE (Server-Sent Events) as a communication protocol for simplicity and time efficiency
- MongoDB since it doesn't require much to do running it locally, and the integration with JavaSpring very simple on this project scale.

## Q: How did you tackle the task?

- **Initial Exploration:** I began by exploring how to implement real-time communication between the client and server sides using Java Spring Boot.

- **Technology Choice:** I spent time evaluating the trade-offs between WebSockets and Server-Sent Events (SSE) and decided that implementing SSE would be a more a better idea for the simplicity and time management during the project implementation

- **Project Initialization:** I started with the initialization of the Java Spring project.

- **Data Model and Controller:** I implemented the ChatMessage model and its corresponding Data Transfer Object (DTO) to define the required properties. I then created the ChatMessageController, which included two endpoints: a POST request for sending messages and a GET request for retrieving all messages for a specific channel.

- **Testing:** I thoroughly tested the API endpoints using Postman and refined the implementation until it worked as expected.

- **Database Integration:** I integrated MongoDB into the project, initially working locally to avoid any .env configuration issues. I used MongoDB Compass for easier debugging.

- **Unit Testing:** To ensure reliability, I provided unit tests for the API endpoints, in test/java/com.ssechat.controller/ChatMessageControllerTest

- **UI Implementation:** I implemented a basic UI to showcase real-time chat communication. As I had already demonstrated a better UI in the previous project, this UI was relatively simple.

- **Dockerization:** To containerize the client, backend, and MongoDB services, I Dockerized each component and created a docker-compose.xml file.




## Q: What would you do differently if you were given more time?

- Revisit the work I initially completed on the client side on the first Doodle chat project, but due to the time constraints caused by integrating Java Spring with the client, MongoDB, and containerization using Docker, I couldn't address it in this project

- Implement error handling on the client side, including handling errors from EventSource (e.g., onError events) and checking HTTP status codes for better error management.

- Implement WebSockets over SSE. Although they both used for real-time communication between a client and a server, but SSE is used if we need simple server-to-client real-time updates and we want an easy-to-implement solution, it's a good choice for scenarios like news feeds or notifications. But, WebSockets are used for bidirectional communication like the chat which is our use case

- Set up monitoring for the Spring Boot application using Spring Boot Actuator to track its health and performance.

- Configure a two-stage build process for building the Spring Docker image to optimize image size and build efficiency.

- Enhance security measures for the chat application, as it is currently open and lacks any sort of security mechanisms.

- Integrate Swagger documentation for the backend API to provide clear and interactive API documentation.

## API Usage

get messages from specific channel

[GET]

    http://localhost:8080/chats/stream?channelId=1

add a new chat entry

[POST]

    http://localhost:8080/chats

Content-Type application/json

    {
        "message":"hello world!",
        "channelId":1,
        "sender": "send name"
    }


