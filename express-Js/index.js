// Plain express module

// import express from 'express';
// const app = express();


// app.get("", (req, res) => {
//     res.send("<h1>Welcome to ExpressJs learning</h1>");
// });

// app.listen(4800);


// Render HTML code from another path

// import express from 'express';
// import home from './pages/home.js';
// import about, { contact } from './pages/about.js';

// const app = express();


// app.get("/", (req, res) => {
//     res.send(home()); 
// });

// app.get("/about", (req, res) => {
//     res.send(about()); 
// });

// app.get("/contact", (req, res) => {
//     res.send(contact());
// });

// app.listen(4800, () => {
//     console.log("Server is running on http://localhost:4800");
// });

// Render HTML file from another path

// import express from 'express';
// import path from 'path';
// const arg = process.argv;

// const app = express();
// const viewsPath = path.resolve('views');
// const stylePath = path.resolve('style');

// app.use(express.static(stylePath));


// app.get('/', (req, res) => {
//   res.sendFile(viewsPath + '/home.html');
// });

// app.get('/dashboard', (req, res) => {
//   res.sendFile(viewsPath + '/dashboard.html');
// });

// // load 404 page

// app.use((req, res) => {
//   res.sendFile(viewsPath + '/error-page.html');
// });


// app.listen(arg[2]);

// Middleware details with Node & ExpressJs

// import express from "express";
// import path from 'path';
// const arg = process.argv;

// const app = express();


// app.use((req, res, next)=>{
//  console.log(req.url);
//     next();
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/home', (req, res) => {
//     res.send('Home World!');
// });

// app.get('/dashboard', (req, res) => {
//     res.send('Dashboard World!');
// });



// app.listen(arg[2]);

// Route Middleware with Code Examples

// import express from "express";
// const arg = process.argv;

// const app = express();

// function checkAgeRouteMiddleware(req, res, next) {
//     if(!req.query.age || req.query.age < 18 ){
//         res.send(`<p>You can't access this application</p>`);
//     }
//     else{
//         next();
//     }
// }

// app.get('', (req, res)=>{
//     res.send(`<h1>Home Page</h1>`);
// } );

// app.get('/login',  (req, res)=>{
//     res.send(`<h1>Login Page</h1>`);
// } );

// app.get('/dashboard', checkAgeRouteMiddleware, (req, res)=>{
//     res.send(`<h1>Dashboard Page</h1>`);
// } );

// app.listen(arg[2]);

// Built-In Middleware with Code Examples

// import express from "express";
// import path from 'path';
// const arg = process.argv;

// const app = express();

// app.use(express.urlencoded({extended:false})); // builtin middleware
// const viewsPath = path.resolve('views');
// const stylePath = path.resolve('style');

// app.use(express.static(stylePath));

// app.get('', (req, res) => {
//     res.send(`<h1>Home Page</h1>`);
// });


// app.get('/login', (req, res) => {
//     res.send(`
//         <form action="/dashboard" method="post" >
//             <input placeholder="Enter name" type="text" name="name" />
//             <br/>
//             <br />
//             <input placeholder="Enter password" type="password" name="password" />
//              <br/>
//             <br />
//             <button> Submit </button>
//         </form>
//         `);
// });

// app.post('/dashboard', (req, res) => {
//   res.sendFile(viewsPath + '/dashboard.html');
// });


// app.listen(arg[2]);

// 34 External Middleware in Express.js 

// import express from "express";
// import path from 'path';
// import morgan from "morgan";
// const arg = process.argv;

// const app = express();


// app.use(morgan('dev'));

// app.get("/", (req, res) => {
//     res.send(`<p>Hello world!</p>`)
// });

// app.get("/dashboard", (req, res) => {
//     res.send(`<p>Welcome budy</p>`)
// });

// app.listen(arg[2]);

// 35 Error Handling Middleware in Express.js

// import express from "express";
// import path from "path";
// const arg = process.argv;

// const app = express();

// app.get("/", (req, res) => {
//     res.send(`<h1>Home Page</h1>`);
// });

// app.get("/dashboard", (req, res) => {
//     res.send(`<h1>Dashboard Page</h1>`);
// });

// app.use((req, res, next) => {
//   const error = new Error("Page Not Found");
//   error.status = 404;
//   next(error);
// });

// function handleErrorPage(error, req, res, next) {
//     res.status(error.status || 500).send('Something went wrong or try later');
// }

// app.use(handleErrorPage);

// app.listen(arg[2]);

// 36 EJS | Template engine in express JS

// import express from "express";
// import  path from 'path'
// const arg = process.argv;

// const app = express();


// app.set('view engine', 'ejs' );
// app.get("/", (req, res)=>{
//     res.render('home', { name: 'Rajeev Kumar', course: 'NodeJs' });
// } );

// app.get("/dashboard", (req, res)=>{
//     res.send(`<h1>Dashboard Page</h1>`)
// } );

// app.listen(arg[2]);


// 37 submit form data and display on ejs template engine page

// import express from "express";
// import path from 'path';
// const arg = process.argv;

// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));


// app.get("/", (req, res) => {
//     res.render('add-user');
// });


// app.post("/submit-user", (req, res) => {
//     res.render('submit-user');
// });

// app.listen(arg[2]);

// 38 Loops and Conditions in EJS Template Files

// import express from "express";
// const arg = process.argv;

// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));

// app.get("", (req, res) => {
//     res.render('add-user');
// });

// app.get("/users", (req, res) => {
//     const users = [
//         { name: " Brown", email: "alice@example.com" },
//         { name: "Alice ", email: "alice@example.com" },
//         { name: "Alice Brown", email: "alice@example.com" },
//         { name: "John Doe", email: "john@example.com" },
//         { name: "Jane Smith", email: "jane@example.com" },
//         { name: "Alice Brown", email: "alice@example.com" }
//     ];
//     res.render('users', {users:users} );
// });

// app.listen(arg[2]);


// 39 MVC Architecture Example with Node.js

// import eexpress from "express";
// const arg = process.argv;
// import {handleUsersController} from './controller/user-controller.js';

// const app = eexpress();


// app.set('view engine', 'ejs');
// app.use(eexpress.urlencoded({extended:false}));


// app.get("", handleUsersController );


// app.listen(arg[2]);


// 40 Dynamic Routes with Example


// import express from "express";
// const arg = process.argv;

// const app = express();

// app.get("", (req, res) => {
//     const users = ['anil', 'rajeev', 'harsh'];
//     let data = '';
//     for (let i = 0; i < users.length; i++) {
//         let name = users[i];
//         let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
//         data += `<li> <a href='user/${users[i]}' >${capitalized}</a> </li>`

//     }
//     res.send(data)
// });


// app.get("/user/:name", (req, res) => {
//     const name = req.params.name;
//     const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
//     res.send(`<p>This is ${capitalized} profile page</p>`);

// })

// app.listen(arg[2]);

// 41 API Example with Dynamic Routes

// import express from "express";
// import userData from './constant/users.json' with {type: 'json'}
// const arg = process.argv;


// const app = express();

// app.get("", (req, res) => {
//     res.send(userData)
// });

// app.get("/user/:id", (req, res) => {
//     const id = req.params.id;
//     let filteredData = userData.filter((user) => user.id == id);
//     res.send(filteredData);
// })

// app.get("/username/:name", (req, res) => {
//     const name = req.params.name;
//     let filteredData = userData.filter((user) => user.name.toLowerCase().trim() == name.toLowerCase().trim());
//     res.send(filteredData);
// })

// app.listen(arg[2]);



// ------------------------------------
// ------------------------------------
// 45 Connect node with mongodb | mongodb npm
// ------------------------------------
// ------------------------------------

// import express from "express";
// import { MongoClient } from "mongodb";

// const dbName = "school";
// const url = "mongodb://localhost:27017"

// const client = new MongoClient(url);

// async function dbConnection() {
//     await client.connect()
//     const db = client.db(dbName);
//     const collection = db.collection('students');

//     const result = await collection.find().toArray();
//     console.log(result);

// }

// dbConnection();

// const app = express();

// 46 Display MongoDB Data on UI using Node.js

// import express from "express";
// import { MongoClient } from "mongodb";

// const dbName = "school";
// const url = "mongodb://localhost:27017"

// const client = new MongoClient(url);
// const app = express();
// app.set("view engine", "ejs");


// app.get("/", async (req, res) => {

//     await client.connect()
//     const db = client.db(dbName);
//     const collection = db.collection('students');

//     const result = await collection.find().toArray();
//     // console.log(result);

//     res.render('table-data', { studentsData: result });
// });



// app.listen(4800);


// ------------------------------------------
// 47 REST API with Node.js & MongoDB

// import express from "express";
// import { MongoClient } from "mongodb";

// const dbName = 'school';
// const url = "mongodb://localhost:27017"

// const client = new MongoClient(url);
// const app = express();

// app.set('view engine', 'ejs');

// client.connect().then((connection) => {
//     connection.db(dbName);

//     app.get("/api", async(req, res) => {
//         const db = client.db(dbName);
//         const collection =  db.collection('students');
//         const result = await collection.find().toArray();

//         res.send(result);
//     });

//     app.get("/app", async(req, res) => {
//         const db = client.db(dbName);
//         const collection =  db.collection('students');
//         const result = await collection.find().toArray();

//         res.render('table-data' , {studentsData:result});
//     })

// });

// app.listen(4800);


// ------------------------------------------
// 48 | REST API with Node.js & MongoDB | Save Form Data in MongoDB

// import express from "express";
// import { MongoClient } from "mongodb";

// const dbName = 'school';
// const url = 'mongodb://localhost:27017/';

// const client = new MongoClient(url);
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// client.connect().then((connection) => {
//     connection.db(dbName);
//     let db = client.db(dbName);

//     app.get('/', async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.find().toArray();

//         res.send(result);
//     });

//     app.get("/dashboard", async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.find().toArray();

//         res.render('table-data', { studentsData: result });
//     });

//     app.get('/student-form', async (req, res) => {
//         res.render('add-students');
//     });

//     app.post("/view", async (req, res) => {
//         let userData = req.body;

//         const collection = db.collection('students');
//         const result =  await collection.insertOne(userData);
//         res.render('view-details', {studentDetails:userData});
//     });

// })

// app.listen(4800);

// -------------------------------------------------------------------
// 49 Make POST Method REST API with Node.js & MongoDB

// import express from "express";
// import { MongoClient, ObjectId } from "mongodb";

// const dbName = 'school';
// const url = 'mongodb://localhost:27017/';

// const client = new MongoClient(url);
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.set('view engine', 'ejs');

// client.connect().then((connection) => {
//     connection.db(dbName);
//     let db = client.db(dbName);

//     app.get('/', async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.find().toArray();

//         res.send(result);
//     });

//     app.get("/dashboard", async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.find().toArray();

//         res.render('table-data', { studentsData: result });
//     });

//     app.get('/student-form', async (req, res) => {
//         res.render('add-students');
//     });

//     app.post("/view", async (req, res) => {
//         let userData = req.body;

//         const collection = db.collection('students');
//         const result = await collection.insertOne(userData);
//         res.render('view-details', { studentDetails: userData });
//     });

//     app.post("/student-form-api", async (req, res) => {
//         let userData = req.body;
//         let { name, email, age } = userData;
//         if (!name || !email || !age) {
//             res.send({ message: "operation failed", success: false });
//             return false;
//         }

//         const collection = db.collection('students');
//         const result = await collection.insertOne(userData);
//         res.send({ "message": "success", success: true });

//     });

//     // ------------------------------------------------------------------
//     // #50 | Make DELETE Method REST API with Node.js & MongoDB

//     app.delete("/delete/:id", async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
//         if (result) {
//             res.send({ "message": "success", success: true });
//         } else {
//             res.send({ "message": "failed", success: false });
//         }
//     });

//     // Make DELETE Features Express UI with Node.js & MongoDB

//     app.get("/dashboard/delete/:id", async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
//         if (result) {
//             res.send(`<h1>Student data deleted</h1>`);
//         } else {
//             res.send(`<h1>Something went wrong, Try again</h1>`);
//         }
//     });

//     // ---------------------------------------------------
//     // #Populate Form with API Data using ID | Get API with Params & MongoDB

//     app.get("/dashboard/edit/:id", async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.findOne({ _id: new ObjectId(req.params.id) });

//         res.render('add-students', { result })
//     })

//     // #Get particular student data from API 

//     app.get("/student/:id", async (req, res) => {
//         const collection = db.collection('students');
//         const result = await collection.findOne({ _id: new ObjectId(req.params.id) });

//         if (result) {
//             res.send({
//                 "message": 'Data fetched',
//                 success: true,
//                 result: result
//             });
//         } else {
//             res.send({
//                 "message": 'Something went wrong, Try again',
//                 success: false,
//                 return: false
//             });
//         }
//     })

//     // #52 Update Data with Form and REST API in MongoDB

//     app.post("/dashboard/edit/:id", async (req, res) => {

//         const collection = db.collection('students');
//         const filter = { _id: new ObjectId(req.params.id) };
//         const update = { $set: req.body };
//         const result = collection.updateOne(filter, update);
//         res.send(`Data Updated`);
//     });

//     app.put("/student/edit/:id", async (req, res) => {

//         const collection = db.collection('students');
//         const filter = { _id: new ObjectId(req.params.id) };
//         const update = { $set: req.body };
//         const result = collection.updateOne(filter, update);

//         if (result) {
//             res.send({
//                 "message": 'Data updated',
//                 success: true,
//                 result: req.body
//             });
//         } else {
//             res.send({
//                 "message": 'Something went wrong, Try again',
//                 success: false,
//                 result: null
//             });
//         }
//     });

// })

// app.listen(4800);


// -----------------------------------------------------------
// #53 Connect Node.js with MongoDB Using Mongoose
// -----------------------------------------------------------

// import mongoose from "mongoose";

// async function dbConection() {
//     await mongoose.connect('mongodb://localhost:27017/school');
//     const schema = mongoose.Schema({
//         name: String,
//         age: Number,
//         email: String,
//         course: String,
//         dob: String,
//         gender: String,
//         phone: String
//     });
//     const studentsModel = mongoose.model('students', schema);
//     console.log(await studentsModel.find());
// }

// dbConection();

/*
 & CRUD API With Mongoose
 */

// #54 | GET REST API with Mongoose to Fetch Data from MongoDB

// import mongoose from "mongoose";
// import express from "express";
// import studentModel from "./models/student-model.js";

// const app = express();
// app.use(express.json());

// await mongoose.connect('mongodb://localhost:27017/school').then(() => {
//     console.log('___________Connected_______________');

// });

// app.get('/', async (req, res) => {
//     const studentModelData = await studentModel.find();
//     res.send(studentModelData);
// });

// // #55 | Make Post method REST API with Mongoose to insert data

// app.post("/save", async (req, res) => {
//     try {
//         const studentModelData = await studentModel.create(req.body);
//         res.send({
//             message: 'Data Stored',
//             success: true,
//             data: studentModelData
//         });
//     } catch (error) {
//         res.status(500).send({
//             message: 'Server Error',
//             success: false,
//             error: error.message
//         });
//     }
// });

// // #56 Make PUT & DELETE REST API with Mongoose

// app.put("/update/:id", async (req, res) => {
//     let userId = req.params.id;

//     try {
//         const studentModelData = await studentModel.findByIdAndUpdate(userId, req.body);
//         res.send({
//             message: 'Data Updated',
//             success: true,
//             data: studentModelData
//         });
//     } catch (error) {
//         res.status(500).send({
//             message: 'Server Error',
//             success: false,
//             error: error.message
//         });
//     }
// })

// app.delete("/delete/:id", async (req, res) => {
//     let userId = req.params.id;

//     try {
//         const studentModelData = await studentModel.findByIdAndDelete(userId);
//         res.send({
//             message: 'Data Deleted',
//             success: true,
//             data: studentModelData
//         });
//     } catch (error) {
//         res.status(500).send({
//             message: 'Server Error',
//             success: false,
//             error: error.message
//         });
//     }
// })


// app.listen(4800);

/*
 & 57 Fix CORS Issues in Node.js APIs (Cross-Origin Resource Sharing)
 */

import express from "express";
import cors from 'cors';
const arg = process.argv;


const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send({
        "name": 'Rajeev Kumar',
        "age": 25,
        "email": 'rk@test.com'
    });
})

app.listen(arg[2], () => {
    console.log(`Server is runing on ${arg[2]}`);

})