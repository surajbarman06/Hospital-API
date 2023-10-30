# Hospital-API 

## [Hosted Link!](https://hospital-api-0ooi.onrender.com/)

This is an easy-to-use API designed for hospitals to manage health records of COVID-19 patients. It allows doctors and hospital staff to register, log in, register patients, and create reports for each visit. The API also provides features to retrieve a patient's records and filter reports by status.

The API is built using Node.js and MongoDB, which are popular technologies for building web applications. It uses JSON Web Tokens (JWT) for secure authentication. The project is organized into different folders to make it easier to understand and maintain the code.

Overall, this API simplifies the process of managing COVID-19 patient records for hospital staff, ensuring security and scalability.

## Installation

To install and run the application, follow the steps below:
1. Clone the repository - `git clone https://github.com/surajbarman06/Hospital-API`
2. Navigate to the project directory
3. Install the dependencies - `npm install` or `npm i`
4. Start the server: `npm start`
5. Open the app in your web browser at `http://localhost:7200`

## Dependencies

CN Hospital API requires the following dependencies:

-   `express` - Web framework for Node.js
-   `jsonwebtoken` - Generates and verifies JSON web tokens (JWTs)
-   `mongoose` - ODM (Object-Document Mapping) library for MongoDB and Node.js
-   `express-session` - for managing user sessions in Express.js applications.
-   `passport` - Authentication middleware for Node.js
-   `passport-jwt` - Passport strategy for authenticating with a JSON Web Token (JWT)
-   `nodemon` - IT automatically restarts node application when it detects any changes.
## API Routes

### Doctor

-   **POST** `https://hospital-api-0ooi.onrender.com/doctors/register` - Register a new doctor with a username and password.
```javascript
{
    "name":"doctor_1",
    "username":"doctor_1",
    "password":"1"
}
```
-   **POST** `https://hospital-api-0ooi.onrender.com/doctors/login` - Login with a username and password to receive a JWT.
```javascript
{
     "username":"doctor_1",
     "password":"1"
}
```

    > Note: All routes except for `/doctors/register` and `/doctors/login` require a valid JWT to be included in the Authorization header of the request. The JWT should have the format `Bearer <token>`.

### Patients

-   **POST** `https://hospital-api-0ooi.onrender.com/patients/register` - Register a new patient with a phone number. If the patient already exists, the existing patient info is returned.

```javascript
{
 "phone" : "123456789",
  "name" : "patient_1",
   "age" : "21",
"gender" : "M"
}
```
-   **POST** `https://hospital-api-0ooi.onrender.com/patients/:id/create_report` - Create a new report for the patient with the given id, which includes the status and the date. The report is created by the doctor who is currently authenticated.

```javascript
 {
 "doctor" : "6479b22e07def9521c1526d3",
     "id" : "6479be2f04770c1d8fd14fd7", 
 "status" : "Travelled-Quarantine"
}
```

-   **GET** `https://hospital-api-0ooi.onrender.com/patients/:id/all_reports` - List all the reports for the patient with the given id, sorted from oldest to newest.

>   **example :** localhost:7200/patients/6479be2f04770c1d8fd14fd7/all_reports

### Reports

-   **GET** `https://hospital-api-0ooi.onrender.com/reports/:status` - List all the reports for all patients with the given status. The reports are sorted from oldest to newest.
>   **example :** localhost:7200/reports/Travelled-Quarantine 


## Schemas
- Doctor Schema
```javascript
({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
)
```
- Patient Schema

```javascript
({
    phone: {
        type: Number,
        required: true
    },
    name: {
        type: String  
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
},
    {
        timestamps: true
    }
)
```
- Report Schema

```javascript
({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    status: {
        type: String,
        enum: [
            'Negative',
            'Travelled-Quarantine',
            'Symptoms-Quarantine',
            'Positive-Admit',
        ],
        default: 'Negative'
    },
    date: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true,
    }
)
```

## Directory structure

-   `config`
    - `mongoose.js`
    -  `passport-jwt-strategy`
-   `controllers`
    -   `doctor_controller.js`
    -   `patients_controller.js`
    -   `reports_controller.js`
-   `models`
    -   `doctor.js`
    -   `patient.js`
    -   `report.js`
-   `routes`
-   -   `index.js`
    -   `doctors.js`
    -   `patients.js`
    -   `reports.js`
-   `index.js`

Feel free to use and contribute! :)

