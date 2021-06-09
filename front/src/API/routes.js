
const axios = require('axios');


const baseurl = "https://0l3pomurwh.execute-api.us-east-1.amazonaws.com/dev/";
class Api {
    static async getAllDevices(){

        let result = await axios.get(baseurl+"listDevices");
        await new Promise(r => setTimeout(r, 100));

        return result.data;
    }

    static async getLogsByDate(){
      let logList=[];
      let allUsers= await Api.getAllDevices();
      let user;
      for (let i=0;i < allUsers.length ; i++){
        user=allUsers[i]
        for(let j=0;j<user.accesses.length; j++){
          logList.push({name:user.name,uid:user.uid,date:user.accesses[j],device:0});
        }
      }
      logList=[];
      logList.push({name:"esoj2",uid:0,date:1506585250,device:0});
      logList.push({name:"esoj2",uid:10,date:1506585250,device:0});
      logList.push({name:"esoj",uid:10,date:1506585251,device:0});

      return logList;


      
  }

}


export default Api;