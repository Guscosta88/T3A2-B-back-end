import express from 'express'
import { ParticipantModel, FoodModel, BeverageModel } from './db.js'
import participantRoutes from './routes/participant_routes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Barbecue Planner API' }))

app.get('/participants', async (req, res) => res.send(await ParticipantModel.find()))

app.get('/foods', async (req, res) => res.send(await FoodModel.find()))

app.get('/beverages', async (req, res) => {
    const name = req.query.name;
    if (name) {
        const beverage = await BeverageModel.findOne({ name });
        if (beverage) {
            res.send(beverage);
        } else {
            res.status(404).send({ error: 'Beverage Not Found' });
        }
    } else {
        res.send(await BeverageModel.find());
    }
});

app.use('/participants', participantRoutes)

export default app

