var hasError=false;
Session.setDefault('MyUser','');
Template.UpdateUser.helpers({
  'name':function(){return Meteor.user().profile.name;},
  'telephone':function(){return Meteor.user().profile.telnumber;}
})
Template.UpdateUser.events({
  'submit form':function(e){
    hasError=false;
    e.preventDefault();
    var name= e.target.inputName.value;
    var password= e.target.inputpassword.value;
    var conpassword= e.target.inputconpassword.value;
    var telnumber= e.target.inputtelnumber.value;
    var oldpassword=e.target.inputoldpassword.value;
    var klkconpassword=ConpasswordError(password,conpassword);
    var klkpassword=PasswordError(password);
    var klktelnumber=TelnumberError(telnumber);
    var klkName=NameError(name);
    
    if (klkconpassword) {
      klk=klkconpassword;
      $(e.target).find('[id=conpassword]').removeClass('has-success').addClass('has-error');
      $(e.target).find('[id=conpasswordglyp]').removeClass('glyphicon-ok').addClass('glyphicon-warning-sign');
      hasError=true;
    } else 
    {

      $(e.target).find('[id=conpassword]').removeClass('has-error').addClass('has-success');
      $(e.target).find('[id=conpasswordglyp]').removeClass('glyphicon-warning-sign').addClass('glyphicon-ok');
    };

    if (klkpassword) {
      klk=klkpassword;
      $(e.target).find('[id=password]').removeClass('has-success').addClass('has-error');
      $(e.target).find('[id=passwordglyp]').removeClass('glyphicon-ok').addClass('glyphicon-warning-sign');
      hasError=true;
    } else 
    {

      $(e.target).find('[id=password]').removeClass('has-error').addClass('has-success');
      $(e.target).find('[id=passwordglyp]').removeClass('glyphicon-warning-sign').addClass('glyphicon-ok');
    }; 

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
   Accounts.changePassword(oldpassword,password, function(error, result){
      if (error) console.log(error.reason);else
      {
        Meteor.call('UpdateUser',name,telnumber,Meteor.userId());
      }
    });
   
  },

  'keydown #inputName':function(){
    $('#Name').removeClass('has-error').removeClass('has-success');
    $('#Nameglyp').removeClass('glyphicon-warning-sign').removeClass('glyphicon-ok');
  },

  'keydown #inputpassword':function(){
    $('#password').removeClass('has-error').removeClass('has-success');
    $('#passwordglyp').removeClass('glyphicon-warning-sign').removeClass('glyphicon-ok');
  }
});