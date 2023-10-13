## What are APIs?
APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

## What does API stand for?
API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses. Their API documentation contains information on how developers are to structure those requests and responses.

## How do APIs work?
API architecture is usually explained in terms of client and server. The application sending the request is called the client, and the application sending the response is called the server. So in the weather example, the bureau’s weather database is the server, and the mobile app is the client. 

There are four different ways that APIs can work depending on when and why they were created.

### `SOAP APIs` 
These APIs use Simple Object Access Protocol. Client and server exchange messages using XML. This is a less flexible API that was more popular in the past.

### `RPC APIs`
These APIs are called Remote Procedure Calls. The client completes a function (or procedure) on the server, and the server sends the output back to the client.

### `Websocket APIs`
Websocket API is another modern web API development that uses JSON objects to pass data. A WebSocket API supports two-way communication between client apps and the server. The server can send callback messages to connected clients, making it more efficient than REST API.

### `REST APIs`
These are the most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client. Let’s look at REST APIs in more detail below.

### What are REST APIs?
REST stands for Representational State Transfer. REST defines a set of functions like GET, PUT, DELETE, etc. that clients can use to access server data. Clients and servers exchange data using HTTP.
## `GET`: (retrieve a record)
## `PUT`: (update a record)
## `POST`: (create a record)
## `DELETE`: (delete the record)

The main feature of REST API is statelessness. Statelessness means that servers do not save client data between requests. Client requests to the server are similar to URLs you type in your browser to visit a website. The response from the server is plain data, without the typical graphical rendering of a web page.

### What is web API?
A Web API or Web Service API is an application processing interface between a web server and web browser. All web services are APIs but not all APIs are web services. REST API is a special type of Web API that uses the standard architectural style explained above.

The different terms around APIs, like Java API or service APIs, exist because historically, APIs were created before the world wide web. Modern web APIs are REST APIs and the terms can be used interchangeably.






## What are the different types of APIs?
APIs are classified both according to their architecture and scope of use. We have already explored the main types of API architectures so let’s take a look at the scope of use.

**Private APIs**
These are internal to an enterprise and only used for connecting systems and data within the business.

**Public APIs** 
These are open to the public and may be used by anyone. There may or not be some authorization and cost associated with these types of APIs.

**Partner APIs** 
These are only accessible by authorized external developers to aid business-to-business partnerships.

**Composite APIs** 
These combine two or more different APIs to address complex system requirements or behaviors. 

## What is an API endpoint and why is it important?
API endpoints are the final touchpoints in the API communication system. These include server URLs, services, and other specific digital locations from where information is sent and received between systems. API endpoints are critical to enterprises for two main reasons: 

**1. Security**
API endpoints make the system vulnerable to attack. API monitoring is crucial for preventing misuse.

**2. Performance**
API endpoints, especially high traffic ones, can cause bottlenecks and affect system performance.

## How to secure a REST API?

All APIs must be secured through proper authentication and monitoring. The two main ways to secure REST APIs include:

**1. Authentication tokens** 
These are used to authorize users to make the API call. Authentication tokens check that the users are who they claim to be and that they have access rights for that particular API call. For example, when you log in to your email server, your email client uses authentication tokens for secure access.

**2. API keys** 
API keys verify the program or application making the API call. They identify the application and ensure it has the access rights required to make the particular API call. API keys are not as secure as tokens but they allow API monitoring in order to gather data on usage. You may have noticed a long string of characters and numbers in your browser URL when you visit different websites. This string is an API key the website uses to make internal API calls.


# Documenting and testing APIs

Postman provides several features beyond basic request configuration. Here's an extended guide that includes additional details, such as adding images to requests and exploring unique features:

## Step 1: Install Postman
If you haven't already installed Postman, download it from the Postman website.

## Step 2: Open Postman
Once installed, open the Postman application.

## Step 3: Create a New Request
- Create a New Request:
- Click on the "New" button in the top-left corner.
- Select "Request."
- Enter Request Details:
- Give your request a name.
- Optionally, create or select a collection to organize your requests.

## Step 4: Configure Request Settings
- Select HTTP Method:
- Choose the HTTP method (GET, POST, PUT, DELETE, etc.) for your request.
- Enter Request URL:
- In the URL bar, enter the endpoint URL you want to test.
- Add Request Parameters:
- In the "Params" tab, add query parameters for your request.
- Add Request Headers:
- In the "Headers" tab, add headers if required (e.g., Content-Type).
- Add Request Body (if applicable):
- In the "Body" tab, add request payload for methods like POST or PUT.
- Add Image to the Request 
- In the "Body" tab, select the "form-data" option.
    Add a key-value pair where the key is a file parameter, and the value is an image file you want to upload.

## Step 5: Send the Request
Click the "Send" button to execute the request. You'll see the response below, including headers, status code, and response body.

## Step 6: Inspect the Response
- View Response Details:
- Check the status code to ensure the request was successful (2xx) or to identify issues (4xx or    5xx).
- Inspect the response headers and body for further details.
- Format and Beautify:
- Use the "Pretty" button to format the response body for better readability.

## Step 7: Save and Organize Requests
- Save Request:
- Click the "Save" button to save your request.
- Choose a collection or create a new one.
- Organize in Collections:
- Use collections to organize and group related requests.

## Step 8: Use Variables and Environments (Optional)
### Variables:

- Use variables to store and reuse values across requests.

### Environments:

- Create environments to manage different sets of variables.

## Step 9: Test Automation (Optional)
### Write Tests:

- In the "Tests" tab, write JavaScript tests to validate the response.
### Run Collection Runner:

- Use the Collection Runner to run multiple requests and tests in sequence.

## Step 10: Share and Collaborate (Optional)
### Share Requests:

- Share individual requests or entire collections by clicking the "Share" button.

### Collaborate in Workspaces:

 - Use Postman Workspaces for collaboration with team members.

## Step 11: Explore Advanced Features

Postman includes many advanced features:

### API Documentation:

  - Generate documentation for your APIs.
  
### Mock Servers:

-  Mock APIs to simulate responses for testing.

### Monitors:

-  Schedule and automate API requests.

### Testing with Pre-request Scripts:

- Use pre-request scripts to dynamically modify requests.

### Dynamic Variables:

- Explore dynamic variables like {{$guid}} or {{$timestamp}} for testing dynamic scenarios.

### Assertions and Chaining:

- Use assertions to verify the correctness of the response.
- Learn about response chaining for extracting values from responses.
