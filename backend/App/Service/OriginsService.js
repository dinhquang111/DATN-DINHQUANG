const OriginsModel = require('../Models/OriginsModel')

class OriginsService {
    constructor() {
        this.originsmodel = OriginsModel
    }
    async createOrigins(body, res) {

        try {
            if (!body.name) {
                return res.status(400).send({ 'msg': 'name is required' })
            }
            const orgin = await this.originsmodel.find({ name: body.name })
            if (orgin.length) {
                return res.status(400).send({ 'msg': 'name is exist' })
            }
            const newOrigin = new OriginsModel({
                name: body.name
            })
            newOrigin.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    'msg': 'created success',
                    origin: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ "msg": err })
        }
    }
    async editOrigins({ body, params }, res) {
        try {
            if (!params.id || !body.name) {
                return res.status(400).send({ 'msg': 'required' })
            }
            await this.originsmodel.findByIdAndUpdate(params.id, { ...body }, { new: true }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    "msg": "Update success!",
                    origin : docs
                })
            })
            return res.status(400).send({ 'msg': "ID not exist" })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }

    async deleteOrigins({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID required' })
            }
            const orginE = await this.originsmodel.findByIdAndDelete(params.id)
            if (orginE) {
                await this.originsmodel.find({}, (err, docs) => {
                    if (err) return res.status(400).send({ 'msg': err })
                    return res.status(201).send({
                        origins: docs,
                        msg: 'Delete success!'
                    })
                })
            }
            return res.status(400).send({ 'msg': "ID not exist" })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllorigins(req, res) {
        try {

            await this.originsmodel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    origins: docs,
                    msg: 'getlist-success'
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
    async getOneorigins({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'requied' })
            }
            console.log(params.id)
            await this.originsmodel.findById(params.id, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    origins: docs,
                    msg: 'getorigin-success'
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
}

module.exports = new OriginsService();