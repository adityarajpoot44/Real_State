import Property from "../modal/property.modal.js";

export const properties_details = async (req, res, next) => {
  try {
    const {
      userId,
      name,
      description,
      address,
      type,
      condition,
      price,
      beds,
      baths
    } = req.body;

    const files = req.files;
    console.log(userId);
    const propImage = files.map(file => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    const property_data = new Property({
      userId,
      name,
      description,
      address,
      type,
      condition,
      price,
      beds,
      baths,
      propImage
    });

    await property_data.save();

    res.status(201).json({ message: 'Property created successfully', flag: true });
  } catch (error) {
    next(error);
  }
};

export const myProperty = async (req, res, next) => {
  res.send(200)
  const userId = req.body;
  console.log(userId)
  const properties = await Property.find(userId);
  console.log(properties)


  res.send(properties)
}
