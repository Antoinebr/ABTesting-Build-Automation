module.exports = {



  /*
  *
  *  Init
  *
  */
  init: function(settings){

    if(typeof(settings) !== "undefined"){
      this.bar = settings.bar;
      this.cookieName = settings.cookieName;
    }else{
      this.bar = "#ab-info-bar";
      this.cookieName = "ab-info-bar";
    }
  },


  /*
  *
  *  Ferme la barre
  *
  */
  closeBar: function(){
    var that = this;

    $(this.bar).fadeOut();
    $(this.bar).addClass('ab-info-bar-closed');
    if (isNaN(that.getCookie(this.cookieName))){
      that.setCookie(this.cookieName, '1');
    }else{
      var newCookieValue = that.getCookie(this.cookieName) + 1;
      that.setCookie(this.cookieName, newCookieValue );
    }

  },

  /*
  *
  *  Met un cookie
  *
  */
  setCookie: function(cookieName,cookieValueString){
    console.log('SET COOKIE FIRED !');
    $.cookie(cookieName, cookieValueString, { expires: 7, path: '/' });
  },


  /*
  *
  *  Recupère le nombre de déclenchement
  *
  */
  getCookie: function(cookieName){
    var value = null;
    if($.cookie(cookieName) == "undefined" ){
      value = 0;
    }else{
      value = parseInt($.cookie(cookieName));
    }
    return value;
  }

};
