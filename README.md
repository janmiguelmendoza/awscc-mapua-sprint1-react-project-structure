# React Project Structure

# Explanation of the Folder Structure
1. assets/
- Stores static files like images, fonts, and icons.
- Keeps the project organized by separating media files from code.
- 
2. components/
- Contains reusable UI components.
- Subfolder common/ holds generic components like buttons, inputs, etc.
- Promotes reusability and separation of concerns.
- 
3. pages/
- Contains page-level components (views).
- Each file represents a route or a major section of the app.
- Helps in organizing the app's navigation structure.

4. hooks/
- Stores custom React hooks.
- Encourages reusability of logic across components.

5. context/
- Manages global state using React Context API.
- Useful for sharing state (e.g., authentication) across the app.

6. services/
- Contains API calls and business logic.
- Separates data-fetching logic from UI components.

7. utils/
- Stores utility functions (e.g., date formatting, string manipulation).
- Promotes DRY (Don't Repeat Yourself) principles.

8. styles/
- Contains global and modular CSS files.
- Modular styles (e.g., Home.module.css) ensure scoped styling.

9. App.jsx
- The root component of the application.
- Combines all components and routes.

10. main.jsx
- The entry point of the app.
- Renders the App component into the DOM.

11. routes.jsx
- Defines the routing configuration (if using React Router).
- Keeps routing logic separate from components.

# How to Maintain SOLID Principles

1. Single Responsibility Principle (SRP)
- Each component, hook, or service should have only one responsibility.
- Example: Buttons.jsx handles button rendering, useFetchData.js handles data fetching.

2. Open/Closed Principle (OCP)
- Components should be open for extension but closed for modification.
- Example: Use props to extend component functionality instead of modifying the component itself.

3. Liskov Substitution Principle (LSP)
- Ensure interchangeable components or functions.
- Example: A PrimaryButton component should work wherever a Button component is used.

3. Interface Segregation Principle (ISP)
- Avoid forcing components to depend on unused props or methods.
- Example: Use smaller, focused props instead of a single large props object.

4. Dependency Inversion Principle (DIP)
- High-level modules (e.g., pages) should not depend on low-level modules (e.g., services). Both should depend on abstractions.
- Example: Use dependency injection or context to provide services to components.
