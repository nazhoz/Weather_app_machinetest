# Weather App using React and Tailwind CSS

This project is a simple weather application built with React.js and styled using Tailwind CSS. It retrieves current weather data from the OpenWeatherMap API based on user input for a city.

## Features

- Fetches current weather data including temperature, humidity, wind speed, feels like temperature, sunset time, and weather condition.
- Displays weather icons based on weather conditions using Tailwind CSS classes.
- Responsive design for different screen sizes using Tailwind CSS media queries.
- Error handling for invalid city inputs and API errors.

## Components

### Weather Component (`Weather.js`)

The Weather component fetches weather data from the OpenWeatherMap API and displays it on the UI.

#### Methods and Features:
- **API Call**: Uses the `fetch` API to retrieve weather data based on the user-provided city name and forecast api also.
- **Error Handling**: Handles errors such as invalid city names or API failures.
- **Dynamic Icon Rendering**: Displays weather icons based on the weather condition retrieved from the API.
- **Responsive Design**: Utilizes Tailwind CSS for responsive layout and styling.

### Days Component (`Days.js`)

The Days component displays a simple weather forecast for different times of the day.

#### Features:
- **Static Content**: Displays weather condition icons and random text.
- **Responsive Design**: Uses Tailwind CSS for responsive layout adjustments.

## Using Tailwind CSS Media Queries

Tailwind CSS utilities were used to create responsive layouts in both components:
- `flex-col` and `lg:flex-row` classes were used to switch between column and row layouts based on screen size.
- `h-screen` and `lg:h-auto` were used to adjust component heights responsively.

## Installation and Setup

To run this project locally:

1. Clone the repository:
