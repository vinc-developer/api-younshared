const db = require("../config/database/database");

const SELECT_ALL_BY_ID_POST = `SELECT * FROM comments WHERE id_post = ?`;
const INSERT = `INSERT INTO comments (id_post, text, id_user) VALUE (?,?,?) `;
const DELETE_BY_ID = `DELETE FROM comments WHERE id = ?`;
const SELECT_BY_ID = `SELECT * FROM comments WHERE id = ?`;

async function getByIdPost(id){
    const co = await db.getConnection();
    try{
        const [comments] = await co.execute(SELECT_ALL_BY_ID_POST, [id]);
        return comments;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

async function getById(id) {
    const co = await db.getConnection();
    try{
        const [result] = await co.execute(SELECT_BY_ID, [id]);
        return result;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

async function insert(body){
    const co = await db.getConnection();
    try{
        const result = await co.execute(INSERT, [body.idPost, body.text, body.user.id]);
        return result[0].insertId;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

async function deleteById(id){
    const co = await db.getConnection();
    try{
        await co.execute(DELETE_BY_ID, [id]);
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }
}

module.exports = {
    getByIdPost,
    insert,
    deleteById,
    getById
}
