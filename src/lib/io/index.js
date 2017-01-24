
import conf from '../conf'

import Storage from '../storage'


jQuery.cachedScript = function( url, options ) {
  options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
  return jQuery.ajax( options );
};

const io = {


  configUrls: function () {
    this.saveUser = conf.baseApiPath + '/api?method=saveUser'
    this.getUser = conf.baseApiPath + '/api?method=getUser'
    this.userList = conf.baseApiPath + '/api?method=userList'
    this.login = conf.baseApiPath + '/api?method=login'
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
  },
  getScripts:function(urls,done){
    var $scripts = $.map( urls , function(url) {
      return $.cachedScript(url)
    });
    $scripts.push($.Deferred(function( deferred ){
      $( deferred.resolve );
    }));
    $.when.apply($, $scripts).done(done)
  }
};

io.configUrls()

export default io ;
