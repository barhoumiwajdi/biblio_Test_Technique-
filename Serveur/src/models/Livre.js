import mongoose from 'mongoose';


const livreSchema = new mongoose.Schema(
  {
    titre: { type: String },
    auteur: { type: String },
    descrition: { type: String },
    contenue: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
);


const LivreModel = mongoose.model('livre', livreSchema);

export default LivreModel;
