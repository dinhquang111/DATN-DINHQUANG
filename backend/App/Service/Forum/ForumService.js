const ForumModel = require('../../Models/Forum/ForumModel')
const ForumTopic = require('../../Models/Forum/ForumTopicModel')
const ForumChillModel = require('../../Models/Forum/ForumChillModel')
class ForumService {
    constructor() {
        this.forumModel = ForumModel
        this.forumTopic = ForumTopic
        this.forumChillModel = ForumChillModel
    }
    async createForums({ body }, res) {
        try {
            if (!body) {
                return res.status(400).send({ 'msg': 'req is required' })
            }
            const forum = await this.forumModel.find({ name: body.name })
            if (forum.length) {
                return res.status(400).send({ 'msg': 'name is exist' })
            }
            const newForum = new ForumModel({
                name: body.name,
                id_parents: body.id_parents
            })
            newForum.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    'msg': 'create success',
                    forum: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllForums(req, res) {
        try {
            await this.forumModel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    forum: docs,
                    msg: "getlist-success"
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getForums({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.forumModel.findById(params.id, (err, docs) => {
                if (err) res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    forum: docs,
                    msg: "getforums-success"
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async editForums({ params, body }, res) {
        try {
            if (!params.id || !body.name) {
                return res.status(400).send({ 'msg': 'req is required' })
            }
            // await this.forumModel.find({}, (err, docs) => {
            //     for (let i in docs) {
            //         if (docs[i].name === body.name) {
            //             return res.status(400).send({ 'msg': 'name is exist' })
            //         }
            //     }
            // })
            await this.forumModel.findByIdAndUpdate(params.id, { ...body }, { new: true }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(200).send({
                    'msg': 'Update success',
                    forum: docs
                })
            })
            return res.status(400).send({ 'msg': 'ID not exist' })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async DeleteForums({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            const Forum = await this.forumModel.findByIdAndDelete(params.id)
            const dele = await this.forumModel.deleteMany({ id_parents: params.id })
            
            if (Forum && dele ) {
                await this.forumModel.find({}, (err, docs) => {
                    if (err) return res.status(400).send({ 'msg': err })
                    return res.status(201).send({
                        msg: 'Delete success!',
                        forum: docs
                    })
                })
            }
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
}
module.exports = new ForumService()