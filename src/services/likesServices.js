const Likes = require("../models/Likes");
const likesRepository = require("../repository/likesRepository");

async function getByIdPost(id){
    try{
        let listLike = [];
        const likes = await likesRepository.getByIdPost(id);
        likes.forEach(el => {
            listLike.push(new Likes(el.id_user, el.id_posts))
        });
        return listLike;
    }catch (e) {
        throw e;
    }
}

async function insert(body){
    try {
        return await likesRepository.insert(body);
    }catch (e) {
        throw e;
    }
}

async function deleteLike(like) {
    try{
       return await likesRepository.deleteLike(like);
    }catch (e) {
        throw e;
    }
}

module.exports = {
    getByIdPost,
    deleteLike,
    insert,
}
