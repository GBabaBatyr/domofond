Template.SignIn.events({
  'submit form':function(e){
    e.preventDefault();
    var password= e.target.inputpassword.value;
    var login= e.target.inputlogin.value;
    
     Meteor.loginWithPassword({username:login}, password, function(error,result){
          if (error) toastr.error(error.reason);else
          toastr.success('Loggined');
        })
    // function(error,result){
    //   if (error || !result) toastr.error('Login ýa-da parolyňyz nädogry'); else
    //   {
    //     Session.set('MyUser',result);
    //     Session.set('MyUser_password',password);
    //   } 
    // })  
     FlowRouter.go('/orders');
  }

});