import config from "../config/config.json";


const stationModel = {
    getStations: async function getStations() {
        const response = await fetch(`${config.base_url}/stations`);
        const result = await response.json();

        return result.data;
    },

};


export default stationModel;