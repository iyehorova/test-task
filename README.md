

## Orders & Products SPA

#### Demo: https://test-task-weld.vercel.app/
This is a Single Page Application (SPA) developed using Next.js 15 (SSR) with TypeScript, Redux, and various other modern technologies to manage the state and enhance user experience.

### Features
- **Real-time Date and Time**: Displayed at the top right corner of the application.
- **Orders & Products Pages**: Two main sections where users can view and manage orders and products.
- **Product Filtering**: Products can be filtered by type.
- **Order Details**: On clicking an order, users can view all products within that order. They can also delete individual products from the order.
- **Real-time Updates**: Product and order data is managed and updated in real time via Redux.
- **Animated Transition**s: Page transitions and filtered product displays have animations.
- **Multilingual Support**: The app supports English and Ukrainian languages, switching between them via URL paths (/en/orders, /uk/orders).
- **Search Parameters in UR**L: URL parameters are used to reflect search criteria and allow users to bookmark filtered views or specific orders.
  
### Technologies Used
- **Next.js 15** with SSR (Server-Side Rendering)
- **TypeScript**
- **Redux Toolkit** for global state management
- **Axios for HTTP** get requests
- **Framer Motion** for animations
- **Bootstrap** for styling
- **Jest & React Testing Library** for unit testing
- **Prettier** and **ESLin**t for code formatting and linting
- **i18n** for multilingual support
  
### Installation git
1. Clone the repository:

```bash

git clone https://github.com/iyehorova/test-task.git
cd test-task
```

2. Install dependencies:

```bash

npm install --legacy-peer-deps
```
3. Run the development server:

```bash

npm run dev
```
The app will be available at http://localhost:3000.

### Features Details

#### Navigation
- The app has a navigation menu with links to the Orders and Products pages.
- It supports routing with parameters like search filters and order details using Next.js app routing.
  
#### Orders Page
- Displays a list of orders with details such as order name, number of products, and total order value in two currencies.
- Users can click on an order to view its products and delete orders or products.
- Order deletion is handled via Redux.
 
#### Products Page
- Displays a list of all products, along with a filter dropdown to sort products by type.
- Each product shows details such as name, type, warranty dates, prices in different currencies, and the related order name.
 
#### Real-Time Time & Date
- The app displays the current time and date in real-time in the top-right corner.
  
#### Localization
- The app supports two languages: English and Ukrainian. The language can be switched by changing the URL (/en or /uk).

#### Filtering & Search Parameters
- Products can be filtered by type. When a filter is applied, the URL updates with search parameters, and these can be used for sharing or bookmarking the filtered view.
 
### Running Tests
To run the unit tests, use the following command:

```bash

npm run test
```
<hr/>

### Downloading and Running the Docker Image
#### Prerequisites
Ensure Docker is installed on your system. You can download it from [Docker's official site](https://www.docker.com/)


#### Pull the Docker Image
To download the prebuilt Docker image from Docker Hub, use the following command:

```bash

docker pull dairinka/test:latest
```

#### Running the Docker Container
Once the image is downloaded, you can run it using the command below:

```bash

docker run -d -p 3000:3000 dairinka/test
```

This command:

- Runs the container in detached mode (-d).
- Maps port 3000 on your local machine to port 3000 in the container (-p 3000:3000).
  
 After running this command, application will be available at:

```

http://localhost:3000
```
