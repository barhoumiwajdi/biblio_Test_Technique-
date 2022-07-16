import { CategorieModel } from '../../models';

export const addCategorie = async (request, response) => {

    const {
        nomcategorie,
        listeDesLivres
        
    } = request.body
    try {
        let categorie = await CategorieModel.findOne({
            nomcategorie
        })

        if (categorie) {
            return response.status(403).json({
                error: 'Categorie exist'
            })
        }
        const newCategorie = new CategorieModel({
            nomcategorie,
        listeDesLivres      
        })
        categorie = await newCategorie.save()
        response.json(categorie)
    } catch (error) {
        console.log(error)
        response.status(500).send('Erreur de serveur')
    }
}


