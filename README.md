# Employee Management System

This project is a simple Employee Management System built using React, react-router-dom for routing, and axios for making HTTP requests. The system allows you to add, view, update, and delete employee information.

## Features

- **Dashboard**: Main navigation area with links to the Home page, Add Employee page, and View All Employees page.
- **Home**: A welcoming landing page for the application.
- **Add Employee**: A form to add new employee details (name, email, and password) to the system.
- **View All Employees**: Displays a list of all employees with options to view, update, or delete each employee.
- **Single Employee**: View detailed information about a single employee.
- **Update Employee**: A form to update existing employee details.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Shivamchauhan21/employee-management-system.git
    cd employee-management-system
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

4. **Backend Setup**:

    Ensure you have a backend running on [http://localhost:4000/](http://localhost:4000/) that handles the required API endpoints (/employees, /employees/:id). Use JSON Server or any other suitable backend for testing purposes.

## Project Structure

```
├── src
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── Home.js
│   │   ├── AddEmployee.js
│   │   ├── ViewAll.js
│   │   ├── SingleEmployee.js
│   │   └── UpdateEmployee.js
│   ├── assets
│   │   └── QSpiders_image.png
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── README.md
└── package.json

```


## Usage

- **Add Employee**: Navigate to "Add Employee" from the Dashboard to add a new employee.
- **View All Employees**: Navigate to "View All" to see the list of employees. You can view more details, update, or delete any employee.
- **Update Employee**: On the "View All" page, select "Update" to modify an employee's details.

## Dependencies

- `react`: ^18.x.x
- `react-router-dom`: ^6.x.x
- `axios`: ^1.x.x

## Contributing
Contributions are welcome! If you have suggestions for improving this project or would like to report an issue, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
**[Shivam Chauhan](https://www.linkedin.com/in/chauhan21shivam)**
