
const axios = require('axios');


const baseurl = "https://0l3pomurwh.execute-api.us-east-1.amazonaws.com/dev/";
class Api {
    static async getAllDevices(){

        let result = await axios.get(baseurl+"listDevices");
        await new Promise(r => setTimeout(r, 2000));

        return result.data;
    }

  }


export default Api;