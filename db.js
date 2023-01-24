import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', true)

async function dbClose() {
    await mongoose.connection.close()
    console.log("Db Disconnected")
}

try {
    const a = await mongoose.connect(process.env.ATLAS_DB_URL)
    console.log(a.connection.readyState === 1 ? 'Mongoose Connected' : 'Mongoose failed not connected')
}
catch (err) {
    console.log(err)
}

const participantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    drink_id: {type: mongoose.ObjectId, ref: 'Beverage'},
    meat_eater: {type: String, required: true}
})

const ParticipantModel = mongoose.model('Participant', participantSchema)

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: mongoose.Decimal128, required: true},
    cont_meat: {type: String, required: true}
})

const FoodModel = mongoose.model('Food', foodSchema)

const beverageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true}
})

const BeverageModel = mongoose.model('Beverage', beverageSchema)

export { ParticipantModel, FoodModel, BeverageModel, dbClose }