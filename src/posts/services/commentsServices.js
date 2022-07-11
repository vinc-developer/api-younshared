const Comments = require("../models/Comments");
const commentsRepository = require("../repository/commentsRepository");
const userService = require("../../user/services/usersServices");

async function getByIdPost(id){
    try{
        let listComments = [];
        const comments = await commentsRepository.getByIdPost(id);
        for (const el of comments) {
            const user = await userService.getById(el.id_user);
            listComments.push(new Comments(el.id, el.id_post, el.text, user))
        }
        return listComments;
    }catch (e) {
        throw e;
    }

}

async function deleteById(id) {
    try{
        await commentsRepository.deleteById(id);
    }catch (e) {
        throw e;
    }
}

async function getById(id){
    try {
        const [comment] = await commentsRepository.getById(id);
        const user = await userService.getById(comment.id_user);
        return new Comments(comment.id, comment.id_post, comment.text, user);
    }catch (e) {
        throw e;
    }
}

async function insert(body){
    try {
        const id = await commentsRepository.insert(body);
        return await getById(id);
    }catch (e) {
        throw e;
    }
}

module.exports = {
    getByIdPost,
    deleteById,
    insert,
    getById
}
