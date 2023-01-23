import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', true)

async function dbClose() {
    await mongoose.connection.close()
    console.log("Db Disconnected")
}

try {
    const a = await mongoose.connect(process.env.Atlas_DB_URL)
    console.log(a.connection.readyState === 1 ? 'Mongoose Connected' : 'Mongoose failed not connected')
}
catch (err) {
    console.log(err)
}

const participantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    drink_id: {type: mongoose.ObjectId, ref: 'beverage'}
})