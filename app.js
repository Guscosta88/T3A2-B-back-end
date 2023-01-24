import express from 'express'
import { ParticipantModel, FoodModel, BeverageModel } from './db.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Barbecue Planner API' }))

app.get('/participants', async (req, res) => res.send(await ParticipantModel.find()))

app.get('/foods', async (req, res) => res.send(await FoodModel.find()))

app.get('/beverages', async (req, res) => res.send(await BeverageModel.find()))

export default app

