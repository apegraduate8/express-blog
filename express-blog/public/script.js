document.addEventListener('DOMContentLoaded', () => {

const packages = $('<div>', {id:'packages'});
$('body').append(packages);


$('button').click(function(){
  if ($(this).hasClass('packageById')){
    getData('getPackageById');
  } else {
    getData('allPackages');
  }
})

const getData = (string) => {
  let inputVal = $('input').val();
  if(string === 'getPackageById'){
    fetch(`/api/packages/${inputVal}`)
    .then(r => r.json())
    .then(data => {
      packages.text(data.name)
    })
  } else {
    fetch('/api/packages')
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }
}

});
