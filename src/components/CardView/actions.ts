import { fetchGetCarData } from "../../api/getCars";
import { ICarModel } from "./props";

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<ICarModel | null>>) => {
  try {
    const response = await fetchGetCarData(id);
    
    if(response)
      setCarData(response)

  } catch (error) {
    console.log("Erro ao buscar da api", error)
    setCarData(null);
  }
}

export const handlePreviousItem = async (carData: ICarModel | null, setCarData: React.Dispatch<React.SetStateAction<ICarModel | null>>) => {

  let previusCar = 10;

  try {
    let response = null

    if(carData && carData?.id > 1) response = await fetchGetCarData(carData.id - 1);

    if(carData && carData?.id == 1) {
     response = await fetchGetCarData(previusCar);
    }

    if(response) setCarData(response)
    
      
  } catch (error) {
    console.log("Erro ao chamar a api", error)
    setCarData(null);
  }
};

export const handleNextItem = async (carData: ICarModel | null, setCarData: React.Dispatch<React.SetStateAction<ICarModel | null>>) => {
  let previusCar = 1;

  try {
    let response = null

    if(carData && carData?.id < 10) response = await fetchGetCarData(carData.id + 1);

    if(carData && carData?.id == 10) {
     response = await fetchGetCarData(previusCar);
    }

    if(response) setCarData(response)
    
      
  } catch (error) {
    console.log("Erro ao chamar a api", error)
    setCarData(null);
  }
};

