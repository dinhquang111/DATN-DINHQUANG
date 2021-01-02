const ForumChillModel = require('../../Models/Forum/ForumChillModel')

class ForumChillService {
    constructor() {
        this.forumchillmodel = ForumChillModel
    }
    async creatChills({ body }, res) {
        try {
            if (!body.username || !body.content || !body.join || !body.id_topic || !body.id_category) {
                return res.status(400).send({ 'msg': 'body is required' })
            }
            const ForumChill = new ForumChillModel({
                id_topic: body.id_topic,
                id_category: body.id_category,
                username: body.username,
                content: body.content,
                join: body.join,
                id_username : body.id_username
            })
            ForumChill.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    msg: 'create success',
                    chill: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getListChills({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.forumchillmodel.find({ id_topic: params.id }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(200).send({
                    msg: "getlist-success",
                    chills: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllChills (req,res){
        try{
            await this.forumchillmodel.find({},(err,docs)=>{
                if(err) return res.status(400).send({'msg': err})
                return res.status(200).send({
                    msg : 'getlist-success',
                    allChill : docs
                })
            })
        }catch(err){
            return res.status(400).send({ 'msg' : err})
        }
    }
}
module.exports = new ForumChillService()