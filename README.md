# Weather Application

This is a simple Node.js application that uses the OpenWeatherMap API to display the current weather for a chosen city.

## Getting Started

To get started with this application, ensure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.

### Configuration

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to a `.env` file in the root of the project:
OPENWEATHER_API_KEY=your_api_key


### Usage

To run the application, use the following command, replacing `"City"` with the name of the city you want to get the weather for:
```bash
node weather.js "City"
