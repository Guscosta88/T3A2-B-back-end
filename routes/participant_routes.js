import express from 'express'
import { ParticipantModel, FoodModel, BeverageModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => res.send(await ParticipantModel.find().populate({ path: 'drink_id', select: '_id'})))

router.get('/:id', async (req, res) => {
    try {
        const participant =  await ParticipantModel.findById(req.params.id).populate({ path: 'drink_id', select: '_id' })
        if(participant) {
            res.send(participant)
        } else {
            res.status(404).send({ error: 'Not Found' })
        }
    }
    catch(err) {
        res.status(500).send({ error: err.message })
    }
})



router.post('/', async (req, res) => {
    try{
        const {name, beverage, meat_eater} = req.body
        const beverageObject = await BeverageModel.findOne({ name: beverage })
        const newParticipant = { name: name, beverage: beverageObject._id, meat_eater: meat_eater}

        const insertedParticipant = await ParticipantModel.create(newParticipant)

        res.status(201).send(await insertedParticipant.populate({ path: 'beverage', select: '_id'}))
    }
    catch(err) {
        res.status(500).send({error: err.message})
    }
})

export default router


