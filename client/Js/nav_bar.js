Template.nav_bar.onCreated(function(){
  var self=this;
   self.autorun(function(){
    self.subscribe('Myfavorite',Meteor.userId());
    self.subscribe('Myagency',Meteor.userId());
  })
})

Template.nav_bar.helpers({
  MyUser:function(){return Meteor.user().profile.name;},
  count:function(){return Myfavorite.find({}).count();},
  agency:function(){return Agency.find({}).count();}
});

Template.nav_bar.events({
  'click #exit':function(){Meteor.logout(function(err) {
      if (err) toastr.error(err.reason); else
      FlowRouter.go("/SignIn");
    });
  }
})
