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
        wateringSchedule: {
            type: Number, // Interval hari (misalnya: 7 hari)
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Referensi ke model User
            required: true
        }
    },

    {
        timestamps: true
    }
)

const Plant = mongoose.model("plant", PlantSchema)

export default Plant