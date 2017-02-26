

jQuery(document).ready(function($) {

  let setButtons = () => {
    $('button').click(function(){
      if ($(this).hasClass('packageById')){
        getData('getPackageById');
      } else {
        getData('allPackages');
      }
    });
  }

  setButtons();

  let getData = (clas) => {

      let id = $('#grab').val();
      if(clas === "allPackages"){$('.container').load('./api/packages/ .container')};
      if(clas === "getPackageById"){$('.container').load('./api/packages/'+id+' .container')};
      window.setTimeout(late, 1000);
  };


});

///////  REFERENCE -----
///// https://stackoverflow.com/questions/2076642/difference-between-id-load-and-ajax
