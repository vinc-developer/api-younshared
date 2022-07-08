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

async function deleteById(id) {
    try{
        await likesRepository.deleteById(id);
    }catch (e) {
        throw e;
    }
}

module.exports = {
    getByIdPost,
    deleteById,
    insert,
}
