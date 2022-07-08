const db = require("../config/database/database");

SELECT_USER_BY_ID = `SELECT * FROM users WHERE id = ?`;

async function getById(id){
    const co = await db.getConnection();
    try{
        const [user] = await co.execute(SELECT_USER_BY_ID, [id]);
        return user;
    }catch (e) {
        throw new Error("Internal Error: server doesn't work");
    }finally {
        if (co !== null) {
            co.end();
        }
    }
}

async function updateById(id){

}

async function register(id){

}

module.exports = {
    getById,
    updateById,
    register
}
