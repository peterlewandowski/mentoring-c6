import { db } from "../gateway/connectDB";

const carsCollection = () => {
  return db.collection("cars");
};

//welcome

export const welcomeMessage = (req, res) => {
  res.send("🔥 Hooray, it works! 🔥");
};

//getAll

export const getAllCars = async (req, res) => {
  const cars = await carsCollection.docs.get().map((doc) => {
    return doc.data();
  });
  res.status(200).send(cars);
};
