import mongoose from 'mongoose';
const {
    ObjectId
} = mongoose.Schema;

const categorieSchema = new mongoose.Schema(
  {
    nomcategorie: { type: String },
    listeDesLivres: [{ type: {
        type: ObjectId,
        ref: 'Livre',

      } }],
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
);


const CategorieModel = mongoose.model('categorie', categorieSchema);

export default CategorieModel;
