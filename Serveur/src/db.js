import mongoose from 'mongoose';

const connectDB = async () => {
    const connection = await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`)
}

module.exports = connectDB