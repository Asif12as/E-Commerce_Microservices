# E-Commerce Microservices Architecture

## Overview
This project demonstrates a modern microservices architecture for an e-commerce platform with an API Gateway. It features rate limiting, caching, and inter-service communication, showcasing best practices in building scalable distributed systems.

## Architecture
The system consists of the following components:
- **API Gateway**: Routes requests, implements rate limiting and caching
- **User Service**: Handles authentication and user management
- **Product Service**: Manages product catalog
- **Order Service**: Processes orders
- **MongoDB**: Database for each service
- **Redis**: For caching and rate limiting

## Features
- 🔒 User authentication with JWT
- 🔄 API Gateway with rate limiting
- ⚡ Redis caching for improved performance
- 📦 Containerized microservices with Docker
- 📝 API documentation with Swagger
- 🔌 Inter-service communication
- 🛒 Complete e-commerce business flow

## Technologies Used
- Node.js & Express
- MongoDB for data persistence
- Redis for caching
- Docker & Docker Compose for containerization
- Swagger for API documentation
- JWT for authentication


## Installation & Setup

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)

### Running the Application
1. Clone the repository
git clone (https://github.com/Asif12as/E-Commerce_Microservices.git)
cd ecommerce-microservices
