import plantModel from "../models/plant.js"

export const listPlant = async (req,res) => {
    try {
        const data = await plantModel.find({})

        res.status(200).json({
            tanaman : "Jadwal Tanaman",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            tanaman : error,
            data : null
        })
    }
}

export const createPlant = async (req,res) => {
    try {
        const request = req.body

        const response = await plant .create({
            plantNameame : request.plantName,
            species : request.species,
            lastWatered : request.date
        })

        res.status(201).json({
            tanaman : "Data tanaman berhasil dibuat",
            data : response
        })
        
    } catch (error) {
        res.status(500).json({
            tanaman : error,
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
                tanaman : "Id wajib di isi",
                data : null
            })
        }

         const response = await plantModel.findByIdAndUpdate(id, {
            plantName : request.plantName,
            lastWatered : request.lastWatered
         })

        if(!response){
            return res.status(500).json({
                tanaman : "Data tanaman gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            tanaman : "Data tanaman berhasil diupdate"
        })

    } catch (error) {
        res.status(500).json({
            tanaman : error,
            data : null
        })
    }
}

export const deletePlant = async (req,res) => {
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                tanaman : "Id wajib diisi",
                data : null
            })
        }

        const response = await plantModel.findByIdAndDelete(id)

        if(response){
            return res.status(200).json({
                tanaman : "Data tanaman berhasil dihapus",
                data : null
            })
        }

        return res.status(404).json({
                tanaman : "Data tanaman tidak ditemukan",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            tanaman : error,
            data : null
        })
    }
}