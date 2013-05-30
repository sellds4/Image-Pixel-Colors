var baseURL = 'http://127.0.0.1:8080';

var sendImage = function(object, callback) {
  $.ajax({
    type: 'POST',
    url: baseURL,
    error: function() {
      console.log('Post Error');
    },
    data: JSON.stringify(object)
  }).done(callback);
};

$(function() {

  $('.images').submit(function(e) {
    e.preventDefault();

    var imageURL = $('.imageurl').val();
    console.log(imageURL);

    sendImage(imageURL, function() {
      console.log(data);
      console.log('Success!');
    });

    $('input.imageurl').val('');

  //   var img = new Image(),
  //       src = $('.imageurl').val();

  //   img.src = src;
  //   // if ( img.complete || img.complete === undefined ) {
  //   //   img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  //   //   img.src = src;
  //   // }

  //   var imageWidth = img.width,
  //       imageHeight = img.height;

  //   $('.main').append(
  //     '<canvas id="imgcanvas" width=' + imageWidth + ' height=' + imageHeight + '>'
  //     );

  //   

  //   img.onload = function() {
  //     var canvas = document.getElementById('imgcanvas'),
  //         context = canvas.getContext("2d"),
  //         imageX = 0,
  //         imageY = 0;

  //     context.drawImage(img, imageX, imageY);
  //     // localStorage.setItem("savedImageData", canvas.toDataURL("images"));

  //     var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
  //     console.log(imageData.data);
  //   };

  });

});
