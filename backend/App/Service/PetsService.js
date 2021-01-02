const PetsModel = require('../Models/PetsModel')

class PetsService {
    constructor() {
        this.petsmodel = PetsModel
    }
    async createPets(body, res) {
        try {
            if (!body.name) {
                return res.return(400).send({ 'msg': 'name is required' })
            }
            const orgin = await this.petsmodel.find({ name: body.name })
            if (orgin.length) {
                return res.status(400).send({ 'msg': 'name is exist' })
            }
            console.log(body.name)
            const newPet = new PetsModel({
                name: body.name
            })
            newPet.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    'msg': 'created success',
                    pet: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ "msg": err })
        }
    }
    async editPets({ body, params }, res) {
        try {
            if (!params.id || !body.name) {
                return res.status(400).send({ 'msg': 'required' })
            }
            await this.petsmodel.findOneAndUpdate(
                { _id: params.id },
                { ...body },
                { new: true }, (err, docs) => {
                    if (err) return res.status(400).send({ 'msg': err })
                    return res.status(201).send({
                        "msg": "Update success!",
                        pet: docs
                    })
                })
            return res.status(400).send({ 'msg': "ID not exist" })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }

    async deletePets({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID required' })
            }
            const petE = await this.petsmodel.findByIdAndDelete(params.id)
            if (petE) {
                await this.petsmodel.find({}, (err, docs) => {
                    if (err) return res.status(400).send({ 'msg': err })
                    return res.status(201).send({
                        pets: docs,
                        msg: 'Delete success!'
                    })
                })
            }
            return res.status(400).send({ 'msg': "ID not exist" })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllpets(req, res) {
        try {
            await this.petsmodel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    pets: docs,
                    msg: 'getlist-success'
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
    async getOnepets({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'requied' })
            }
            await this.petsmodel.findById(params.id, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    pets: docs,
                    msg: 'getpet-success'
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
}
module.exports = new PetsService()