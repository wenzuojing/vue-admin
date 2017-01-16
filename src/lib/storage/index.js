import store from 'store' ;

const storage = {
  setAccessToken:function(accessToken){
    store.set("accessToken" , accessToken );
  },
  getAccessToken:function () {
    return store.get("accessToken");
  }

}
export default  storage  ;
