import app from './app.js'
import request from 'supertest'

describe("App tests", () => {
    test('Get Home Page', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    // expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe('Barbecue Planner API')
})

describe('Get Participants list', () => {
    let res

    beforeEach(async () => {
        res = await request(app).get('/participants')
        expect(res.status).toBe(200)
    })
    it('Return an array with 6 elements', () => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(6)
    })
    it('it has the correct data-structure', () => {
        res.body.forEach(it => {
            expect(it._id).toBeDefined()
            expect(it.name).toBeDefined()
            expect(it.drink_id).toBeDefined()
            expect(it.meat_eater).toBeDefined()
            expect(it._id.length).toBe(24)
        })
        expect(res.body[0].name).toBe('John')
    })
})

describe('Get Beverages list', () => {
    let res

    beforeEach(async () => {
        res = await request(app).get('/beverages')
        expect(res.status).toBe(200)
    })
    it('Return an array with 4 elements', () => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(4)
    })
    it('it has the correct data-structure', () => {
        res.body.forEach(it => {
            expect(it._id).toBeDefined()
            expect(it.name).toBeDefined()
            expect(it.quantity).toBeDefined()
            expect(it._id.length).toBe(24)
        })
        expect(res.body[0].name).toBe('Beer')
    })
})

describe('Get Foods list', () => {
    let res

    beforeEach(async () => {
        res = await request(app).get('/foods')
        expect(res.status).toBe(200)
    })
    it('Return an array with 4 elements', () => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(4)
    })
    it('it has the correct data-structure', () => {
        res.body.forEach(it => {
            expect(it._id).toBeDefined()
            expect(it.name).toBeDefined()
            expect(it.quantity).toBeDefined()
            expect(it.cont_meat).toBeDefined()
            expect(it._id.length).toBe(24)
        })
        expect(res.body[0].name).toBe('Beef')
    })
})

test('Create new Participant', async () => {
    const res = await request(app).post('/participants').send({
        name: 'Daniel',
        drink_id: '63d32fd81c20cfb6b245eeac',
        meat_eater: 'Yes'
    })
    expect(res.status).toBe(201)
    expect(res.body._id).toBeDefined()
    expect(res.body.name).toBeDefined()
    expect(res.body.drink_id).toBeDefined()
    expect(res.body.meat_eater).toBeDefined()
    expect(res.body.name).toBe('Daniel')
    expect(res.body.drink_id._id).toBe('63d32fd81c20cfb6b245eeac')
    expect(res.body.meat_eater).toBe('Yes')
})

})