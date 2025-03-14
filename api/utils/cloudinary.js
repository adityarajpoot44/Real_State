import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        }).then(()=> console.log("file upload on cloudinary",uploadResult.url))
        .catch(err=> console.log('cloudinary err=>',err))

        return uploadResult;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}
export default uploadOnCloudinary;
