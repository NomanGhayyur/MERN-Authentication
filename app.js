const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//Configure ENV file and require Connection file
dotenv.config({ path: './.env' })
require('./db/conn')

const port = process.env.PORT || 5000

// Require Model
const Users = require('./models/userSchema')

// This method is used to get data and cookies from front-end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

//Registeration
app.post('/register', async (req, res) => {
    try {
        //Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const crateUser = new Users({
            username: username,
            email: email,
            password: password
        })

        // Save method is used to create a user or inser user
        // But before saving or inserting the user,  password will hashed
        // Because of Hashing. After that it will save to database
        const created = await crateUser.save()
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error);
    }
})

// Login
app.post('/login', async (req, res) => {

    try {
        const email = req.body.email;
        const password = req.body.password;


        const user = await Users.findOne({ email: email })
        if (user) {
            //varify password
            const isMatch = await bcryptjs.compare(password, user.password)


            if (isMatch) {
                // Generate token which is definded in user schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    //Expires token in 24 Hours
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send("LoggedIn")
            } else {
                res.status(400).send("Invalid Credentials")
            }
        } else {
            res.status(400).send("Invalid Credentials")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})