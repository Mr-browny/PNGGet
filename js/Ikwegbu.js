// alert(screen.height);
// alert(location.href);
// alert(location.hostname);
// alert(navigator.appName+','+navigator.appCodeName);
// alert(navigator.product);
// alert(navigator.appVersion);
// alert(navigator.userAgent);
// alert(navigator.platform);
// alert(navigator.language);
var currentSlide = 1;
var slider = $('.slides');
var slideCount = slider.children().length;
var slideTime = 5000;
var animationTime = 800;

// This is the intro slide
  setInterval(function(){
  slider.animate({
    marginLeft: "-=900px"
  },animationTime, function(){
    currentSlide++;
    if (currentSlide === slideCount) {
      currentSlide = 1;
      $(this).css('margin-left','0px');
    }
  });
}, slideTime);
// end of the intro slide


// This is for the slides section, ends here

// This is for the intro search input
var search = $('.search-cat');
search.focus();
// ends here

var contactBtn = $('.contactBtn');
var contact = $('#contact');

contactBtn.click(function(){
  $('html, body').animate({scrollTop: 5600},(1500));
});

// This is used to delete an upload png starts here
 var deleteUpload = $('.upload span.glyphicon.glyphicon-trash');

 deleteUpload.click(function(){
   var that = $(this);
   // that.parent().remove();
   var reply = confirm('Delete?');
   if(reply == 1){
     that.parent().fadeOut('slow').remove();
   }else{
     //
   }
 });
// This is used to delete an upload png ends here

// This is for the upload button to preview image starts here
var fileUpload = $(':file.upload-file');
var uploadBox = $('.uploaded-content');
var uploadBtn = $('.upload button.uploadBtn');
var selectedImage = fileUpload.val();
var author = $('.image-author');
var description = $('.image-description');
var category = $('.image-category');
var errMsg = $('.upload-action #errorMessage');

uploadBtn.hide();
fileUpload.change(function(){
  var t = $(this);
  uploadBtn.show();
  var newImage = $('#newImage');
  $('.uploaded-details :text').each(function(){
    var that = $(this);
    if ((that.val() == '') || category.html() == 'Select category') {
      uploadBtn.attr('disabled','disabled');
    }else{
      uploadBtn.removeAttr('disabled','disabled');
    }
  });
  $('.uploaded-details :text').blur(function(){
    var that = $(this);
    if ((that.val().length ==  0) || category.html() == 'Select category') {
      uploadBtn.attr('disabled','disabled');
    }else{
      uploadBtn.removeAttr('disabled','disabled');
    }
  });

uploadBtn.click(function(){

  var data = {
    image: newImage.html(),
    author: author.val(),
    description: description.val(),
    category: category.val()
    // This data is what will be sent to the php file using ajax
  }

  var geo = data.image.slice(5,14);
  alert(geo+','+data.author+','+data.description+','+data.category);
  // $.post('upload.php', data{data.image,data.author, data.description,data.category},function(data,status)).
  // success(function(data){
  //   errMsg.html('File Uploaded.');
  // }).
  // fail(function(data){
  //   errMsg.html('File Not Uploaded.');
  // });
  fileUpload.removeAttr('type').attr('type','file');
  uploadBox.hide();
  uploadBtn.hide();
  author.val('');
  description.val('');
  category.val('select category');
  errMsg.html('File Uploaded.');
  });
});
// This is for the upload button to preview image ends here

// This secion takes care of the userAgent Notification section starts here

var removeNotification = $('#Notification .glyphicon.glyphicon-remove-sign');
removeNotification.click(function(){
  var that = $(this);
  that.parent().parent().fadeOut('slow');
});
// This secion takes care of the userAgent Notification section ends here

// This is section for the modal download starts here
var body = $('body');
var modal = $('.modal-box');
var modalBtn = $('.myModal');
var modalCloseBtn = $('.modal-close');
var modalclosebtn = $('.modal-header .glyphicon-remove-sign');
var modalImage = $('.modal-image .image');
var modalAuthor = $('.modal-side-details :text.author');
var modalDescription = $('.modal-side-details textarea.description');
var modalCat = $('.modal-side-details :text.category');

modalBtn.click(function(){
  modal.show('slow');
  // body.css('filter','hue(5%)');
  var that = $(this);
  var Image = that.attr('src');
  var Author = that.attr('data-author');
  var Description = that.attr('data-description');
  var Category = that.attr('data-category');

// Inserting the selected image into the modal box
  modalImage.attr('src',Image);
  modalAuthor.val(Author);
  modalDescription.val(Description);
  modalCat.val(Category);
  // Inserting the necessary attributes into the modal image
  modalImage.attr('alt',Description);
  modalImage.attr('author',Author);
  modalImage.attr('category',category);

});
// This function loops through the authors other images and uploads them into the modal image while still within the modal.
var authorFiles = $('.modal-author-files ul li img');
authorFiles.click(function(){
  var that = $(this);
  var Image = that.attr('src');
  var Author = that.attr('author');
  var Description = that.attr('description');
  var Category = that.attr('category');
  // Inserting the selected image into the modal box
    modalImage.attr('src',Image);
    modalAuthor.val(Author);
    modalDescription.val(Description);
    modalCat.val(Category);
});
modalCloseBtn.click(function(){
  modal.hide('slow');
  body.css('background-color','white');
});
modalclosebtn.click(function(){
  modal.hide('slow');
  body.css('background-color','white');
});

var boxModal = document.getElementById('modal-box');
// boxModal.style.display = 'block';
window.onclick = function(event) {
    if (event.target == boxModal) {
        boxModal.style.display = "none";
    }
}
// This is section for the modal download ends here

 // This section takes care of the location.assign for the most download and the latest download starts here
var most = $('.mostDownload .action .most');
var latest = $('.action .latest');


most.click(function(){
  location.assign('mostdownload.html');
});
latest.click(function(){
  location.assign('mostdownload.html');
});

  // This section takes care of the location.assign for the most download and the latest download ends here
