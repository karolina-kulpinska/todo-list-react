# Task List 

![Zrzut ekranu](public/Image/readme.demo.png.png)
![Zrzut ekranu](public/Image/readme.demo.1.png.png)


## [LIVE DEMO](https://karolina-kulpinska.github.io/todo-list-react/)


# To-Do List App: Get Stuff Done! 🚀

Hey there! Welcome to my simple but powerful **To-Do List app**. It's built using modern React principles to help you quickly set and crush your daily goals.

## ✨ Key Features You'll Love

* **Quick Add:** Easily throw new tasks onto the list via the input field.
* **Mark Complete:** Toggle tasks as done with a quick click.
* **Bulk Actions:** Finish up your day by marking everything as complete!
* **Filtering:** Hide completed tasks to focus on what’s left.
* **Data Fetching:** Load example tasks using asynchronous operations.
* **Task Page:** Dedicated view for detailed task information.

***

## ⚙️ Core Technology Stack

This project is a React application powered by modern state management and robust data storage solutions. It's built to be fast and scalable.

| Technology | Why We Used It |
| :--- | :--- |
| **React.js** | For building a snappy, component-based user interface. |
| **Redux Toolkit (RTK)** | The engine for state management. It simplifies Redux logic using **Slices** for predictable state updates. |
| **Redux Saga** | Dedicated middleware for handling all **side effects** (asynchronous operations, data fetching, and localStorage persistence) in a non-blocking way. |
| **Styled Components** | For writing clean, modular, and dynamic CSS directly within our JavaScript components. |

***

## 🏛️ Architecture and Data Flow

### 1. Data Persistence

All tasks are stored locally in the browser’s memory (**LocalStorage**). This means your tasks will remain saved even after you close the browser and reopen the application.

### 2. Styling Conventions

Styling is implemented using **Styled Components** and a theme provider, ensuring:

* **Theme Management:** Central definitions for colors and breakpoints.
* **Typografy:** Consistent use of **Roboto** as the main typeface.
* **Accessibility:** Use of CSS pseudoclasses (`:hover`, `:focus`) for improved keyboard navigation and user feedback.

***

## 📚 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open `http://localhost:3000` to view it in your browser. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder. Your app is ready to be deployed!

### `npm run eject`

**Note:** This is a one-way operation. We don't recommend this for most people, but the option is there if you need full, low-level control over the configuration.