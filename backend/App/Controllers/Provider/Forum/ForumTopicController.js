const ForumTopicService = require('../../../Service/Forum/ForumTopicService')

class ForumTopicController{
    constructor(){
        this.forumtopicService = ForumTopicService
    }
    async createTopic({req,res,next}){
        return await this.forumtopicService.createTopics(req,res)
    }
    async getTopic({req,res,next}){
        return await this.forumtopicService.getTopics(req,res)
    }
    async getOneTopic({req,res,next}){
        return await this.forumtopicService.getOneTopics(req,res)
    }
    async getAllTopic({req,res,next}){
        return await this.forumtopicService.getAllTopics(req,res)
    }
    async increView({req,res,next}){
        return await this.forumtopicService.increViews(req,res)
    }
    async deleteTopic({req,res,next}){
        return await this.forumtopicService.deleteTopics(req,res)
    }
}
module.exports = new ForumTopicController()