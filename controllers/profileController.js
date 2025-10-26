export const privateProfile = async (req, res) => {
    try {
        res.status(200).json({
            message: "Private profile berhasil di akses",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}