import plantModel from "../models/plantModel.js"

export const listPlant = async (req,res) => {
    try {
        const data = await plantModel.find({})

        res.status(200).json({
            message : "Jadwal Pelacak Tanaman berhasil diambil",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const createPlant = async (req,res) => {
    try {
        const { plantName, species, lastWatered } = req.body;

        const response = await plantModel.create({
            plantName,
            species,
            lastWatered
        })

        res.status(201).json({
            message : "Data tanaman berhasil dibuat",
            data : response
        })
        
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}

export const updatePlant = async (req,res) => {
    try {
        const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                message : "Id wajib di isi",
                data : null
            })
        }

         const response = await plantModel.findByIdAndUpdate(id, {
            plantName : request.plantName,
            lastWatered : request.lastWatered
         })

        if(!response){
            return res.status(500).json({
                message : "Data tanaman gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message : "Data tanaman berhasil diupdate"
        })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}

export const deletePlant = async (req,res) => {
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

        const response = await plantModel.findByIdAndDelete(id)

        if(response){
            return res.status(200).json({
                message : "Data tanaman berhasil dihapus",
                data : null
            })
        }

        return res.status(404).json({
                message : "Data tanaman tidak ditemukan",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}