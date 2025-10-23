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
            default: Date
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },

    {
        timestamps: true
    }
)

const Plant = mongoose.model("plant", PlantSchema)

export default Plant