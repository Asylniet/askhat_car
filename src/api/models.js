import { axiosInstance } from ".";

class CarAPI {
    axios = axiosInstance('');

    async search(params) {
        const response = await this.axios.get('', {
            params
        });
        return response;
    }
}

export const carAPI = new CarAPI();