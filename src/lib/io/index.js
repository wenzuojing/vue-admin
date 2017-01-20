
import Storage from '../storage'

const io = {


  configUrls: function () {
    var  BASE_ADMIN_API = '';
    if('development' == process.env.NODE_ENV ){
      BASE_ADMIN_API = 'http://localhost:8080'
    }else if('production' == process.env.NODE_ENV){
      BASE_ADMIN_API = 'http://localhost:8080'
    }
    this.saveUser = BASE_ADMIN_API + '/api?method=saveUser'
    this.getUser = BASE_ADMIN_API + '/api?method=getUser'
    this.userList = BASE_ADMIN_API + '/api?method=userList'
  },
  getHeaders : function(){
    const accessToken = Storage.getAccessToken() || '' ;
    return {
      accessToken
    }

  },
  get: function (url, data, success, fail) {
    $.ajax({
      url: url,
      type: 'GET',
      data: data,
      dataType: 'json',
      cache: true,
      timeout : 30000,
      headers:this.getHeaders(),
      success: function (data) {
        if (success) {
          success(data);
        }
      },
      error: function (xhr, status, error) {
        if (fail) {
          fail(xhr, status, error);
        } else {
          alert("服务端出错");
        }
      }
    });
  },
  post: function (url, data, success, fail) {
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      dataType: 'json',
      timeout : 30000,
      headers:this.getHeaders(),
      success: function (data) {
        if (success) {
          success(data);
        }
      },
      error: function (xhr, status, error) {
        if (fail) {
          fail(xhr, status, error);
        } else {
          alert("服务端出错");
        }
      }
    });
  },
  postPlayload: function (url, data, success, fail) {
    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(data),
      dataType: 'json',
      processData: false,
      timeout : 30000,
      headers:this.getHeaders(),
      success: function (data) {
        if (success) {
          success(data);
        }
      },
      error: function (xhr, status, error) {
        if (fail) {
          fail(xhr, status, error);
        }else {
          alert("服务端出错");
        }
      }
    });
  }
};

io.configUrls()

export default io ;
