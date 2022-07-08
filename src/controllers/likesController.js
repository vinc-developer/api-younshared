const likesService = require("../services/likesServices");

const insert = async (req, res, next) => {
    const body = req.body;
    try{
        let message = '';
        const like = await likesService.insert(body.like);
        like === 0 ? message = 'like enregistré' : message = 'like non sauvegardé';
        res.status(200).send({message});
    }catch (e) {
        next(e);
    }
}

const deleteById = async (req, res, next) => {
    const id = req.params.id;
    try{
        await likesService.deleteById(id);
        res.status(200).send({message: "le like a bien été supprimé"});
    }catch (e) {
        next(e);
    }
}

module.exports = {
    insert,
    deleteById
}
