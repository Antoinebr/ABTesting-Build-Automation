module.exports = {

  // Popin
  pop: function(div) {
    document.getElementById(div).style.display='block';
    return false;
  },

  hide: function(div) {
    document.getElementById(div).style.display='none';
    return false;
  }

};
