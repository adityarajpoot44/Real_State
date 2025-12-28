import Property from '../modal/property.modal.js';

export const propertiesList = async (req, res, next) =>{
   const  userId = req.params.id;
    try {
        const properties= await Property.find({userId});
        res.status(200).json(properties);
    } catch (error) {
        next(error);
    }   
}
export const allPropertiesList = async (req, res, next) =>{
    try{
        const data= await Property.find();
        res.status(200).json(data)

    }catch(error){
        next(error);

    }
}