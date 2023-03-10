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


router.put('/:id', async (req, res) => {
    const {name, drink_id, meat_eater} = req.body
    const newParticipant = { name, drink_id, meat_eater }
    try {
        const participant =  await ParticipantModel.findByIdAndUpdate(req.params.id, newParticipant, { returnDocument: 'after'})
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


router.delete('/:id', async (req, res) => {
    try {
        const participant =  await ParticipantModel.findByIdAndDelete(req.params.id)
        if(participant) {
            res.sendStatus(204)
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
        const {name, drink_id, meat_eater} = req.body

        const newParticipant = { name: name, drink_id: drink_id, meat_eater: meat_eater}

        const insertedParticipant = await ParticipantModel.create(newParticipant)

        res.status(201).send(await insertedParticipant.populate({ path: 'drink_id', select: '_id'}))
    }
    catch(err) {
        res.status(500).send({error: err.message})
    }
})

export default router


