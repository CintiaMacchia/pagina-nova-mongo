const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDB = async() => {
    try {
        await mongoose.connect(
            //conexao,
            process.env.MONGO_URI_CONNECTION,
            //configs
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }

        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongoDB;