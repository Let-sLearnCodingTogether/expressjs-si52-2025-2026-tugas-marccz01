import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        species: {
            type: String,
            required: false
        },
        lastWatered: {
            type: Date,
            default: Date.now
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