const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/users.model');
const connectDB = require('../config/db');

dotenv.config({ path: './.env' }); // Adjust path if needed

const createDummyData = async () => {
    try {
        await connectDB();

        const studentData = {
            name: "Test Student",
            email: "student@test.com",
            studentId: "STU1001",
            gender: "Male",
            birthdate: new Date("2000-01-01"),
            role: "student",
            password: "password123"
        };

        // Check if user exists
        const userExists = await User.findOne({ email: studentData.email });
        if (userExists) {
            console.log('Dummy student already exists');
            process.exit();
        }

        await User.create(studentData);
        console.log('Dummy student created successfully');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

createDummyData();
