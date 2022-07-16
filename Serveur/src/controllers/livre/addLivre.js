import { LivreModel } from '../../models';

export const addLivre = async (request, response) => {

    const {
        titre,
        auteur,
        descrition,
        contenue,
        
    } = request.body
    try {
        let livre = await LivreModel.findOne({
            titre
        })

        if (livre) {
            return response.status(403).json({
                error: 'Livre exist'
            })
        }
        const newLivre = new LivreModel({
            titre,
            auteur,
            descrition,
            contenue,      
        })
        livre = await newLivre.save()
        response.json(livre)
    } catch (error) {
        console.log(error)
        response.status(500).send('Erreur de serveur')
    }
}


