module.exports = (req, res, next) => {
    let sauce = JSON.parse(req.body.sauce);
    if (sauce !== undefined) {
        if (sauce.name.length < 3 || sauce.manufacturer.length < 3) {
            throw new Error('Les champs "name" et "manufacturer" doivent comporter au moins 3 caractères');
        } else if (sauce.description.length < 15 || sauce.mainPepper.length < 15) {
            throw new Error('Les champs "description" et "ingrédients" doivent comporter au moins 15 caractères');
        } else {
            next();
        }
    }
}