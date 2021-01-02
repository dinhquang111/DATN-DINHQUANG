const ForumService = require('../../../Service/Forum/ForumService')

class ForumController {
    constructor() {
        this.forumService = ForumService
    }
    async createForum({ req, res, next }) {
        return await this.forumService.createForums(req, res)
    }
    async getAllForum({ req, res, next }) {
        return await this.forumService.getAllForums(req, res)
    }
    async editForum({ req, res, next }) {
        return await this.forumService.editForums(req, res)
    }
    async DeleteForum({ req, res, next }) {
        return await this.forumService.DeleteForums(req, res)
    }
    async getForum({ req, res, next }) {
        return await this.forumService.getForums(req, res)
    }


}
module.exports = new ForumController()