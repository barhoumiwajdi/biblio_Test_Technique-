import { CategorieModel } from '../../models';

export const fetchCategorie = async (request, response) => {
    try {
        let data = await CategorieModel.find({}).populate('listeDesLivres')
        response.json(data)
    } catch (error) {
        console.log(error)
        response.status(500).send('Server error')
    }
};