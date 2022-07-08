const commentsService = require("../services/commentsServices");

const insert = async (req, res, next) => {
    const body = req.body;
    try{
        const comment = await commentsService.insert(body.com);
        res.status(200).send(comment);
    }catch (e) {
        next(e);
    }
}

const deleteById = async (req, res, next) => {
    const id = req.params.id;
    try{
        await commentsService.deleteById(id);
        res.status(200).send({message: "le commentaire a bien été supprimé"});
    }catch (e) {
        next(e);
    }
}

module.exports = {
    insert,
    deleteById
}
