const db = require("../config/database/database");

const SELECT_ALL_LIKES_BY_POST = 'SELECT * FROM likes WHERE id_posts = ?';
const INSERT = `INSERT INTO likes (id_user, id_posts) VALUE (?,?)`;
const DELETE_BY_ID = `DELETE FROM likes WHERE id_user = ? and id_posts = ?`;

async function getByIdPost(id) {
    const co = await db.getConnection();
    try{
        const [likes] = await co.execute(SELECT_ALL_LIKES_BY_POST, [id]);
        return likes;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

async function insert(body){
    const co = await db.getConnection();
    try{
        const result = await co.execute(INSERT, [body.idUser, body.idPost]);
        return result[0].insertId;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

async function deleteLike(like){
    const co = await db.getConnection();
    try{
        await co.execute(DELETE_BY_ID, [like.idUser, like.idPost]);
        return true;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

module.exports = {
    getByIdPost,
    insert,
    deleteLike
}
