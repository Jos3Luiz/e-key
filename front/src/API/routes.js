
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

      return logList;
    }

    static alterPermission(uid,status){
      let data ={"uid":uid,"status":status}
      const header = {
        headers: {'content-type': 'text/json'}
      }
      axios.post(baseurl+"setStatus",data,header);
      
  }

  static deleteUser(uid){
    let data ={"uid":uid}
    const header = {
      headers: {'content-type': 'text/json'}
    }
    axios.post(baseurl+"remove",data,header);
    
}

}


export default Api;