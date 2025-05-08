E-Commerce Microservices Architecture

Overview
This project demonstrates a modern microservices architecture for an e-commerce platform with an API Gateway. It features rate limiting, caching, and inter-service communication.

Architecture
Microservices Architecture

The system consists of the following components:

API Gateway: Routes requests, implements rate limiting and caching
User Service: Handles authentication and user management
Product Service: Manages product catalog
Order Service: Processes orders
MongoDB: Database for each service
Redis: For caching and rate limiting



Features
🔒 User authentication with JWT
🔄 API Gateway with rate limiting
⚡ Redis caching for improved performance
📦 Containerized microservices with Docker
📝 API documentation with Swagger
🔌 Inter-service communication
🛒 Complete e-commerce business flow
Technologies Used
Node.js & Express
MongoDB for data persistence
Redis for caching
Docker & Docker Compose for containerization
Swagger for API documentation
JWT for authentication


Project Structure

ecommerce-microservices/
├── api-gateway/           # API Gateway service
├── user-service/          # User management service
├── product-service/       # Product catalog service
├── order-service/         # Order processing service
├── docker-compose.yml     # Docker composition file
└── README.md              # This file

Installation & Setup
Prerequisites
Docker and Docker Compose
Node.js (for local development)
Running the Application
Clone the repository


API Documentation
Each service provides Swagger documentation:

User Service: http://localhost:4001/api-docs
Product Service: http://localhost:4002/api-docs
Order Service: http://localhost:4003/api-docs


Performance Features
Rate Limiting: Prevents API abuse by limiting requests per IP
Caching: Redis cache improves response times for frequently accessed data
Microservices: Independent scaling of services based on demand
License
MIT

