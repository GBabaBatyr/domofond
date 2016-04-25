var hasError=false;
Template.addagency.onCreated(function(){

  var self=this;
  self.autorun(function(){
    self.subscribe('adress');
  });
})
Session.setDefault('MyUser','');
Template.addagency.events({
  'change #input9': function()
  {
  Session.set('welayat',document.getElementById('input9') .value);
  },
  'submit form':function(e){
    hasError=false;
    e.preventDefault();
    var name= e.target.inputName.value;
    var telnumber= e.target.inputtelnumber.value;
    var welayat=e.target.input9.value;
    var adress=e.target.inputadress.value;
    var etrap=e.target.input10.value;
    var klktelnumber=TelnumberError(telnumber);
    var klkName=NameError(name);
     

    if (klktelnumber) {
      klk=klktelnumber;
      $(e.target).find('[id=telnumber]').removeClass('has-success').addClass('has-error');
      $(e.target).find('[id=telnumberglyp]').removeClass('glyphicon-ok').addClass('glyphicon-warning-sign');
      hasError=true;
    } else 
    {

      $(e.target).find('[id=telnumber]').removeClass('has-error').addClass('has-success');
      $(e.target).find('[id=telnumberglyp]').removeClass('glyphicon-warning-sign').addClass('glyphicon-ok');
    };

    if (klkName) {
      klk=klkName;
      $(e.target).find('[id=Name]').removeClass('has-success').addClass('has-error');
      $(e.target).find('[id=Nameglyp]').removeClass('glyphicon-ok').addClass('glyphicon-warning-sign');
      hasError=true;
    } else 
    {

      $(e.target).find('[id=Name]').removeClass('has-error').addClass('has-success');
      $(e.target).find('[id=Nameglyp]').removeClass('glyphicon-warning-sign').addClass('glyphicon-ok');
    };

   if (hasError) toastr.error(klk); else
    Meteor.call('addagency',Meteor.userId(),name,telnumber,welayat,etrap,adress,function(error, result){
      if (error) toastr.error(error.reason);else
      {

        toastr.success(result);
          if ($('#psevdoFileValue')[0].value){
          var file = $('#file').get(0).files[0],
          fsFile = new FS.File(file);
          fsFile.metadata = {productId:result,userId:Meteor.userId};
            productImages.insert(fsFile,function(err,result){
            if(!err){
                console.log("New images inserted")
            }
          });
          // Meteor.call('insertImage',fsFile,function(error, result){
          //   if (error) alert(error.reason);
          // });
        };
       
      }
    });
  },

  'keydown #inputName':function(){
    $('#Name').removeClass('has-error').removeClass('has-success');
    $('#Nameglyp').removeClass('glyphicon-warning-sign').removeClass('glyphicon-ok');
  },
  'change #image-upload':function(){

  $.uploadPreview({
    input_field: "#image-upload",
    preview_box: "#image-preview",
    label_field: "#image-label"
  });
  },



});

Template.addagency.helpers({
  welayat:function(){ return Welayat.find();},
  adress:function(){ return Adress.find({welayat: Session.get('welayat') });},
  picture:function(){return Session.get('picture');}
})
