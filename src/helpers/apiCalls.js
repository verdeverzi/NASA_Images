import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
export const getNasaHeroImage = async () => {
  console.log("API Key: ", process.env.REACT_APP_API_KEY);
  try {
    const { data } = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key,
      },
    });
    console.log(api_key)

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getNasaImages = async () => {
  console.log("API Key: ", process.env.REACT_APP_API_KEY);
  try {
    const { data } = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key,
        count: 6,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
