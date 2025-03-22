import React from 'react'
 

const employees =  [
  {
    "id": 1,
    "name": "John",
    "email": "john@ex.com",
    "password": "123",
    "task_count": 2,
    "task_summary": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "new_task": 1
    },
    "tasks": [
      {
        "title": "Update Security Policies",
        "description": "Revise the security policies for the IT department.",
        "date": "2025-03-20",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Monitor Firewall Logs",
        "description": "Check the firewall logs for unusual activity.",
        "date": "2025-03-18",
        "category": "Monitoring",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Jane",
    "email": "janesmith@example.com",
    "password": "123",
    "task_count": 2,
    "task_summary": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "new_task": 1
    },
    "tasks": [
      {
        "title": "Penetration",
        "description": "Perform security penetration testing on web applications.",
        "date": "2025-03-22",
        "category": "Testing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Patch Vulnerabilities",
        "description": "Apply security patches to servers.",
        "date": "2025-03-15",
        "category": "Maintenance",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Alex",
    "email": "alexjohnson@example.com",
    "password": "123",
    "task_count": 2,
    "task_summary": {
      "active": 1,
      "completed": 0,
      "failed": 1,
      "new_task": 1
    },
    "tasks": [
      {
        "title": "User Access Review",
        "description": "Audit user permissions and remove unauthorized access.",
        "date": "2025-03-21",
        "category": "Audit",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Incident Response Drill",
        "description": "Conduct an incident response drill for security teams.",
        "date": "2025-03-17",
        "category": "Training",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Emily",
    "email": "emilywhite@example.com",
    "password": "123",
    "task_count": 2,
    "task_summary": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "new_task": 1
    },
    "tasks": [
      {
        "title": "Phishing Awareness Training",
        "description": "Educate employees on identifying phishing emails.",
        "date": "2025-03-19",
        "category": "Training",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "SIEM Configuration",
        "description": "Configure SIEM tool to detect real-time threats.",
        "date": "2025-03-23",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Michael",
    "email": "michaelbrown@example.com",
    "password": "123",
    "task_count": 2,
    "task_summary": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "new_task": 1
    },
    "tasks": [
      {
        "title": "Data Backup Verification",
        "description": "Verify the integrity of backup data.",
        "date": "2025-03-16",
        "category": "Backup",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Log Analysis",
        "description": "Analyze system logs for any security anomalies.",
        "date": "2025-03-20",
        "category": "Monitoring",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]

    const admin = [{
        "id":1,
        "name": "Adarsh",
        "email": "admin@ex.com",
        "password": "123"
    }]

    // localStorage.clear()

    export const setLocalStorage =()=>{
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))        
    }
    export const getLocalStorage =()=>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        return {employees, admin}
    }

