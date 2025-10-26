import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema(
    {
        plantName: {
            type: String,
            required: [true, "Nama tanaman wajib di isi"],
            trim: true
        },
        species: {
            type: String,
            required: false
        },
        lastWatered: {
            type: Date,
            default: Date.now
        }
    },

    {
        timestamps: true
    }
)

const plantModel = mongoose.model("plant", PlantSchema)

export default plantModel