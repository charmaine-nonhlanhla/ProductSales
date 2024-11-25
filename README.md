Product Sales Application

*Product Sales Application* is a full-stack project for managing products, tracking product sales, and handling user authentication. It is built with ASP.NET Core on the backend and React with TypeScript on the frontend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup and Running the Application](#setup-and-running-the-application)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

## Overview

This project consists of two main components:

1. *Backend*: ASP.NET Core API split into several projects for modularity, including API, Application, Domain, and Persistence.
2. *Frontend*: A React application built with Vite and TypeScript, using MobX for state management.

The backend manages product data, sales records, and user authentication, while the frontend provides an interface for interacting with the API.

## Features

- *User Authentication*: Register and login functionality.
- *Product Management*: Create, delete, and view products.
- *Sales Tracking*: Track individual product sales and list all sales.
- *Responsive Frontend*: Built with React, styled for desktop use.
  
## Project Structure

The project is divided into the following backend and frontend components:

### Backend (ASP.NET Core)
- *API*: Contains controllers for accounts, products, and product sales.
- *Application*: Contains business logic and uses MediatR for CQRS and AutoMapper for DTO mapping.
- *Domain*: Defines models like Products, ProductSales, Users, and RefreshTokens.
- *Persistence*: Handles data access via DataContext and seed data.

### Frontend (React)
- *Source Folder (src)*: Houses all frontend code.
  - *App Folder*: Contains API logic (Axios), routing, layout, and MobX stores.
  - *Features Folder*: Contains React components for different pages of the application.
  - *Models Folder*: Contains TypeScript models.

## Prerequisites

Make sure you have the following tools installed:

- *.NET Core SDK*: For running the backend.
- *Node.js*: For running the frontend.
- *SQL Server*: The backend uses SQL Server for database storage.
- *Postman* (optional): For testing API endpoints.

## Setup and Running the Application

### Backend Setup

1. *Clone the Repository*:  
   Clone the repository to your local machine using the command:
   git clone https://github.com/your-repository-url](https://github.com/charmaine-nonhlanhla/ProductSales.git
   

2. *Configure SQL Connection String*:  
   In the appsettings.json file located in the API project, add your SQL connection string:
   json
   "ConnectionStrings": {
     "DefaultConnection": "Server=your_server_name;Database=ProductSalesDb;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   

3. *Run Migrations*:  
   Generate and apply the database migrations by running:
   dotnet ef migrations add -p Persistence -s API (root project)
   dotnet ef database update (API project )
   

4. *Run the Backend*:  
   Start the API by running the following command in the API folder:
   dotnet watch run
   Ctrl c
   dotnet run
   
   This will start the backend on https://localhost:5000.

### Frontend Setup

1. *Navigate to the Frontend Folder*:  
   Open a terminal and navigate to the client-app folder.

2. *Install Dependencies*:  
   Run the following command to install the required Node.js packages:
   npm install
   

3. *Run the Frontend*:  
   Start the frontend using the following command:
   npm start or npm run dev
   
   The frontend will be available at https://localhost:3000.
   
Upon successfully loading the application. Please use these credentials to log in **(ruth@test.com | Pa$$w0rd)**
Kindly note, in order to uplaod an image the image needs to have an **https** link or it will not display.
   

## Testing

The API endpoints were tested using *Postman*. To verify that the API is functioning correctly:

- Open Postman and make requests to the following API endpoints:
  - https://localhost:5000/api/accounts: For user registration and login.
  - https://localhost:5000/api/products: For product-related operations.
  - https://localhost:5000/api/productsales: For sales-related operations.

Use the following HTTP methods to test:
- *POST*: For creating products or users.
- *GET*: For fetching product or sales data.
- *DELETE*: For deleting products.

## Technologies Used

- *Backend*: 
  - ASP.NET Core
  - Entity Framework Core
  - MediatR
  - AutoMapper
  - SQL Server

- *Frontend*:
  - React with Vite
  - TypeScript
  - MobX for state management
  - Axios for HTTP requests

- *Tools*:
  - *Postman*: For API testing.
  - *Node.js and npm*: For managing frontend dependencies.
  - 

This *README* file provides a clear and concise guide for anyone who wants to set up and run the *ProductSales Application*. It covers everything from the project structure, setup instructions, testing with Postman, and the technologies used.

For assistance running the project kindly contact: mogotlanecn@gmail.com
