const ForumTopic = require('../../Models/Forum/ForumTopicModel')
const ForumChillModel = require('../../Models/Forum/ForumChillModel')


class ForumService {
    constructor() {
        this.forumTopic = ForumTopic
        this.forumChillModel = ForumChillModel
    }
    async createTopics({ body }, res) {
        try {
            if (!body.username || !body.title || !body.content || !body.id_category || !body.join) {
                return res.status(400).send({ 'msg': "req is required" })
            }
            const topic = await this.forumTopic.find({ title: body.title })
            if (topic.length) {
                return res.status(400).send({ 'msg': 'title is exist' })
            }
            const newTopic = new ForumTopic({
                username: body.username,
                title: body.title,
                content: body.content,
                id_category: body.id_category,
                id_username: body.id_username,
                join: body.join
            })
            newTopic.save((err) => {
                if (err) res.status(400).send({ 'msg': err })
                else {
                    this.forumTopic.find({ title: body.title }, (err, docs) => {
                        if (err) res.status(400).send({ 'msg': err })
                        return res.status(201).send({
                            msg: 'create success',
                            topic: docs
                        })
                    })
                }
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getTopics({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.forumTopic.find({ id_category: params.id }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                res.status(200).send({
                    msg: "getlist-success",
                    topics: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getOneTopics({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.forumTopic.findById(params.id, (err, docs) => {
                if (err) return res.status(400).send({ "msg": err })
                return res.status(200).send({
                    msg: "gettopic-success",
                    topic: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllTopics(req, res) {
        try {
            await this.forumTopic.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(200).send({
                    msg: 'getlist-success',
                    alltopics: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async increViews({ params }, res) {

        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.forumTopic.findOneAndUpdate({ _id: params.id }, { $inc: { views: 0.5 } }, (err, respond) => {
                if (err) return res.status(400).send({ "msg": err })
                return res.status(200).send({
                    msg: "success"
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async deleteTopics({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.forumTopic.findByIdAndDelete(params.id, (err, docs) => {
                if (err) { return res.status(400).send({ 'msg': err }) }
                else {
                    this.forumChillModel.deleteMany({ id_topic: params.id }, (err, docs) => {
                        if (err) return res.status(400).send({ 'msg': err })
                        return res.status(200).send({ 'msg': 'Delete success!' })
                    })
                }
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
}
module.exports = new ForumService()