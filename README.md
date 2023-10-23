<!--  -->
<!-- write README.md -->

# Todo Application

## demo

```
https://todo-amirmaghami.netlify.app
```

This is a simple "Todo" application built using Quasar, Vue.js, and Pinia. It allows users to create and manage a list of tasks. The application provides basic functionality to add and delete tasks, and it uses local storage to persist task data.

## Getting Started

Before you start, make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install the project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Usage

To run the development server, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application in your web browser at `http://localhost:8080`.

### Build

To build the application for production, use the following command:

```bash
npm run build
```

To build the application as a Progressive Web App (PWA), use:

```bash
npm run build:pwa
```

To build the application as an Electron desktop app, use:

```bash
npm run build:electron
# or
yarn build:electron
```

## Features

- Add new tasks.
- Delete tasks.
- Data persistence using local storage.

## Project Structure

The project structure is as follows:

- `src/` - Contains the application source code.
  - `model/` - Contains the data model (`ITask`).
  - `store/` - Contains the Pinia store for managing the todo list.
  - `views/` - Contains Vue components for the application.
- `package.json` - Project configuration file.
- `quasar.config.js` - Quasar configuration file.

## Dependencies

This project uses the following main dependencies:

- [Quasar](https://quasar.dev/) - A Vue.js framework for building responsive web applications and PWAs.
- [Vue.js](https://vuejs.org/) - A JavaScript framework for building user interfaces.
- [Pinia](https://pinia.esm.dev/) - A state management library for Vue 3.
- [axios](https://axios-http.com/) - A promise-based HTTP client for making requests to a REST API.

For more details on dependencies, please refer to the `package.json` file.

## Author

- Amir Maghami

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
