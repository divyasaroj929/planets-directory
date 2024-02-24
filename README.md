Planets Directory
This project is a React application that displays a directory of planets from the Star Wars universe. It allows users to navigate through the list of planets, view details of each planet, and see information about residents of each planet.

Components

1. App
   Description: The main component of the application. It sets up the routing for different pages.
   Location: App.js
   Usage: Renders the PlanetList component as the home page and sets up routing for individual planet details.
2. PlanetList
   Description: Displays a list of planets fetched from the Star Wars API (swapi.dev). It also provides pagination for navigating through the list of planets.
   Location: PlanetList.js
   Usage: Renders a list of planets with basic information like name, climate, population, and terrain. Provides navigation links to view residents of each planet.
3. PlanetCard
   Description: Displays detailed information about a specific planet, including its name and a list of residents.
   Location: PlanetCard.js
   Usage: Renders detailed information about a planet fetched from the Star Wars API. Utilizes motion animations for a smoother user experience.
4. ResidentDetails
   Description: Displays detailed information about a resident of a planet, including name, height, mass, and gender.
   Location: ResidentDetails.js
   Usage: Not explicitly used in the provided code. However, it's likely intended to display detailed information about an individual resident, but currently, the resident's details are directly displayed within the PlanetCard component.
   Styling
   Styling for the application is done using CSS. The styles are applied globally and for individual components using class selectors. The styling includes animations for smoother transitions and enhances the visual appeal of the application.

How to Run
To run this application locally:

Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.
Start the development server with npm start.
Open your browser and navigate to http://localhost:3000 to view the application.
Dependencies
React: A JavaScript library for building user interfaces.
react-router-dom: Provides routing capabilities for React applications.
framer-motion: A library for adding fluid animations to React components.
CSS: Styling for the application is done using Cascading Style Sheets.
Credits
This project utilizes the Star Wars API (SWAPI) to fetch data about planets and residents.
The design and implementation of this project are inspired by tutorials and documentation available online for React and related libraries.
