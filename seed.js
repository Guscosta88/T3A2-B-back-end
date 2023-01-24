import { ParticipantModel, FoodModel, BeverageModel, dbClose } from './db.js'

await ParticipantModel.deleteMany()
console.log('Deleted all participants')

await FoodModel.deleteMany()
console.log('Deleted all foods')

await BeverageModel.deleteMany()
console.log('Deleted all beverages')

const beverages = [
    {name: 'Beer', quantity: 2},
    {name: 'Wine', quantity: 1},
    {name: 'Juice', quantity: 1},
    {name: 'Softdrink', quantity: 2}
]

const bevs = await BeverageModel.insertMany(beverages)
console.log('Inserted Beverages')

const participants = [
    {name: 'John', drink_id: bevs[0], meat_eater: 'Yes'},
    {name: 'Karen', drink_id: bevs[1], meat_eater: 'Yes'},
    {name: 'Angela', drink_id: bevs[2], meat_eater: 'No'},
    {name: 'Don', drink_id: bevs[3], meat_eater: 'No'}
]

await ParticipantModel.insertMany(participants)
console.log('Inserted participants')

const foods = [
    {name: 'Beef', quantity: 0.3, cont_meat: 'Yes'},
    {name: 'Sausage', quantity: 0.3, cont_meat: 'Yes'},
    {name: 'Potato Salad', quantity: 0.3, cont_meat: 'No'},
    {name: 'Veg Sausage', quantity: 0.3, cont_meat: 'No'}
]

await FoodModel.insertMany(foods)
console.log('Inserted foods')

dbClose()

