const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Reeverb158:Reeverb158@mernapp.3clbs.mongodb.net/test')

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }   catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB