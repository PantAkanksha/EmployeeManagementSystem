
 
 const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstname": "Arjun",
        "tasks": [
            {
                "taskTitle": "Prepare Sales Report",
                "description": "Compile sales data for the current quarter.",
                "taskDate": "2024-11-30",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "description": "Discuss project milestones with the client.",
                "taskDate": "2024-12-01",
                "category": "Meeting",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "description": "Review pull requests for the upcoming release.",
                "taskDate": "2024-11-28",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Neha",
        "tasks": [
            {
                "taskTitle": "Marketing Campaign",
                "description": "Draft a new campaign for the holiday season.",
                "taskDate": "2024-12-05",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Inventory Check",
                "description": "Verify stock levels for December.",
                "taskDate": "2024-11-29",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Rohit",
        "tasks": [
            {
                "taskTitle": "Design Review",
                "description": "Evaluate the design changes for the mobile app.",
                "taskDate": "2024-11-28",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "description": "Fix high-priority bugs in the backend system.",
                "taskDate": "2024-11-30",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Training",
                "description": "Conduct a training session on new tools.",
                "taskDate": "2024-12-03",
                "category": "Training",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Ananya",
        "tasks": [
            {
                "taskTitle": "Social Media Update",
                "description": "Post updates on all official social channels.",
                "taskDate": "2024-11-25",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Partner Meeting",
                "description": "Collaborate with partners for an upcoming event.",
                "taskDate": "2024-12-02",
                "category": "Networking",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Vikram",
        "tasks": [
            {
                "taskTitle": "Database Migration",
                "description": "Migrate the database to the new server.",
                "taskDate": "2024-12-04",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Project Presentation",
                "description": "Present project updates to stakeholders.",
                "taskDate": "2024-11-27",
                "category": "Presentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Testing Automation",
                "description": "Automate test cases for the API endpoints.",
                "taskDate": "2024-11-29",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage= ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage= ()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}