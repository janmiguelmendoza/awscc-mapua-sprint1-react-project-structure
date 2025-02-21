# React Project Structure Proposal

# Folder Structure Explanation
1. assets/
- Holds static files such as images, fonts, and icons.
- Organizes the project by keeping media files separate from code.

2. components/
- Holds reusable UI components.
- Subdirectory common/ contains generic components such as buttons, inputs, etc.
- Encourages reusability and separation of concerns.

3. pages/
- Holds page-level components (views).
- Each file is a route or a significant section of the app.
- Assists with structuring app navigation.

4. hooks/
- Holds custom React hooks.
- Favors reusing logic between components.

5. context/
- Handled global state with React Context API.
- Good for global state sharing (e.g., authentication) through the app.

6. services/
- Has API calls and business logic here.
- Introduces the separation of fetching data logic and UI components.

7. utils/
- Has utility functions here (e.g., date formating, strings manipulation).
- Favors the DRY (Don't Repeat Yourself) approaches.

8. styles/
- Has global and modular CSS files.
- Modular styles provide scoped styling.

9. App.jsx
- Application root component.
- Merges all components and routes.

10. main.jsx
- Application entry point.
- Renders the App component into the DOM.

11. routes.jsx
- Specifies the routing configuration (if using React Router).
- Splits routing logic from components.

# How to Keep SOLID Principles

1. Single Responsibility Principle (SRP)
- Each hook, component, or service must have a single responsibility.
- Example: Buttons.jsx is responsible for button rendering, useFetchData.js is responsible for data fetching.

2. Open/Closed Principle (OCP)
- Components must be open for extension but closed for modification.
- Example: Use props to add functionality to a component rather than editing the component.

3. Liskov Substitution Principle (LSP)
- Provide interchangeable components or functions.
- Example: A PrimaryButton component must be usable wherever a Button component is needed.

3. Interface Segregation Principle (ISP)
- Don't make components rely on unused props or methods.
- Example: Prefer small, specialized props over one large props object.

4. Dependency Inversion Principle (DIP)
- High-level modules (e.g., pages) must not rely on low-level modules (e.g., services). Both should rely on abstractions.
- Example: Use dependency injection or context to pass services to components.
