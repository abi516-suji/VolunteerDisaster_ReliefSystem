# Problem Statement

## 1. Title

Volunteer Disaster Relief Coordination System

## 2. Domain

Disaster Management and Volunteer Coordination

## 3. Who is the user? (2-3 user types, with roles)

1. **Admin** – Manages disaster events, affected areas, volunteers, relief tasks, resources, and monitors the overall relief operation.

2. **Volunteer** – Registers with skills, location, availability, and experience, accepts suitable relief tasks, updates task progress, and submits completion reports.

3. **Relief Coordinator** – Monitors affected areas, verifies relief requirements, coordinates volunteers and resources, and ensures high-priority areas receive timely assistance.

## 4. What problem are we solving? (3-5 sentences, real-life example)

During disasters such as floods, cyclones, and earthquakes, manually managing volunteers, relief tasks, and resources can cause delays and inefficient coordination. Volunteers may be assigned without considering their skills, location, availability, and experience, while critical areas may not receive timely assistance. Relief resources may also be distributed inefficiently due to poor coordination. Therefore, a centralized system is needed to prioritize affected areas, assign suitable volunteers, manage resources, and track relief activities efficiently. For example, medical volunteers can be assigned to high-priority areas requiring medical assistance based on their skills and location.

## 5. Proposed Solution (what the application will do, feature-wise)

The proposed system is a web-based **Volunteer Disaster Relief Coordination System** that provides a centralized platform for managing disaster relief activities, volunteers, tasks, resources, and affected areas.

### Core Features

1. **User Registration and Role-Based Login**
   - Provides separate access for Admin, Volunteer, and Relief Coordinator.
   - Volunteers can maintain their skills, location, availability, and experience.

2. **Disaster and Affected Area Management**
   - Admin can manage disasters, affected locations, population, and priority levels.

3. **Relief Task Management**
   - Admin or Relief Coordinator can create and assign tasks.
   - Volunteers can accept tasks and update their progress.

4. **Task Tracking**
   - Task status: Assigned → Accepted → In Progress → Completed → Verified.

5. **Resource Management**
   - Tracks required and available relief resources and identifies shortages.

### Additional Features

6. **Smart Volunteer-Task Matching**
   - Suggests suitable volunteers based on skills, location, availability, and experience.

7. **Disaster Priority Scoring**
   - Classifies affected areas as Critical, High, Medium, or Low based on severity, urgency, and affected population.

8. **Resource Matching**
   - Matches required resources with available resources.

9. **Duplicate Request Detection**
   - Detects possible duplicate relief requests for the same area and requirement.

10. **Emergency SOS Alert**
    - Allows volunteers to send emergency alerts with their location.

11. **Volunteer Verification**
    - Admin can verify volunteer details, skills, and experience.

12. **Map and Location Integration**
    - Displays disaster areas, affected locations, volunteers, and relief locations.

13. **Notifications and Alerts**
    - Sends task assignments, emergency alerts, critical requests, and important updates.

14. **Volunteer Contribution Tracking**
    - Tracks completed tasks and volunteer service hours.

15. **Dashboard and Reports**
    - Provides an overview of disasters, volunteers, tasks, resources, SOS alerts, and relief progress.

## 6. Core Entities / Database Tables (list all, minimum 5)

1. **Users**
   - user_id
   - name
   - email
   - password
   - role

2. **Volunteers**
   - volunteer_id
   - user_id
   - skills
   - location
   - availability
   - experience
   - verification_status

3. **Disasters**
   - disaster_id
   - disaster_type
   - disaster_name
   - start_date
   - description
   - status

4. **Affected_Areas**
   - area_id
   - disaster_id
   - location
   - population_affected
   - priority_level
   - severity

5. **Relief_Tasks**
   - task_id
   - area_id
   - task_name
   - required_skill
   - priority
   - status

6. **Task_Assignments**
   - assignment_id
   - task_id
   - volunteer_id
   - assigned_date
   - accepted_date
   - completion_date

7. **Resources**
   - resource_id
   - resource_name
   - quantity_available
   - resource_type
   - storage_location

8. **Resource_Requests**
   - request_id
   - area_id
   - resource_id
   - quantity_required
   - request_status

9. **SOS_Alerts**
   - alert_id
   - volunteer_id
   - location
   - alert_time
   - alert_status

10. **Relief_Reports**
    - report_id
    - task_id
    - volunteer_id
    - description
    - submitted_date
    - verification_status

11. **Notifications**
    - notification_id
    - user_id
    - message
    - notification_type
    - created_at
    - read_status

12. **Volunteer_Contributions**
    - contribution_id
    - volunteer_id
    - task_id
    - hours_served
    - contribution_date

## 7. User Roles & Permissions (minimum 2 distinct roles)

### Admin

- Manage disasters and affected areas.
- Manage and verify volunteers.
- Create and assign relief tasks.
- Manage resources.
- Monitor SOS alerts and task progress.
- View dashboard and reports.

### Volunteer

- Register and manage profile.
- Add skills, location, availability, and experience.
- View and accept suitable tasks.
- Update task progress and submit reports.
- Send SOS alerts.
- Receive notifications and view contribution history.

### Relief Coordinator

- Monitor affected areas and priority levels.
- Verify relief requirements.
- Coordinate volunteers, tasks, and resources.
- Monitor high-priority operations.
- Verify completed relief activities.

## 8. Success Criteria (clearly state what you will NOT build)

1. Admin should be able to manage disaster events and affected areas.

2. Volunteers should be able to register and maintain their skills, location, availability, and experience.

3. The system should suggest suitable volunteers for relief tasks based on skills, location, availability, and experience.

4. The system should prioritize critical affected areas.

5. Volunteers should be able to accept tasks and update their progress.

6. Admin and Relief Coordinators should be able to monitor tasks from assignment to completion.

7. The system should identify required and available resource shortages.

8. The system should detect possible duplicate relief requests.

9. Volunteers should be able to send SOS alerts and Admin/Relief Coordinators should be able to monitor them.

10. The system should provide map-based location information and notifications.

11. The system should provide role-based access for Admin, Volunteer, and Relief Coordinator.

12. The system should store major information using a relational database and provide a dashboard for monitoring relief operations.

13. The system should track volunteer contributions such as completed tasks and service hours.

14. The project will **not** provide direct medical treatment, physical rescue operations, or emergency transportation services.

15. The project will **not** replace official government emergency response systems.

## 9. Choice of Tech Stack

- **Backend:** Java Spring Boot
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MySQL
- **Authentication:** JWT
- **API:** REST API
- **Version Control:** Git and GitHub
- **Cloud Deployment:** AWS / Render
- **Maps & Location:** OpenStreetMap / Google Maps API
- **Notifications:** Email API
- **Testing:** Postman
- **AI/ML (Future Enhancement):** Volunteer-task matching and relief resource demand prediction