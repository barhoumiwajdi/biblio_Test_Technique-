import { LivreModel } from '../../models';

export const fetchLivre = async (request, response) => {
    try {
        let data = await LivreModel.find({})
        response.json(data)
    } catch (error) {
        console.log(error)
        response.status(500).send('Erreur de serveur')
    }
}