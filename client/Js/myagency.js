Template.myagency.onCreated(function() {
  var self=this;
  self.autorun(function(){
    self.subscribe('Myagency',Meteor.userId());
  })
});

Template.myagency.helpers({
  image:function(){    return productImages.findOne({metadata:{userId:Meteor.userId}});
  },
  agency:function(){
    return Agency.find();
  }
})