var commentID;

Template.addcomment.onCreated(function(){
  var self=this;
  commentID=Template.currentData().commentID;
  self.autorun(function(){
    self.subscribe('comments',commentID);
  });
})

Template.addcomment.helpers({
  nameuser:function(){
    var user = Meteor.user();
    return user.profile.name;
  },

  comments:function()
  {
    //Meteor.subscribe('comments',this._id);

    return Comment.find({},{sort:{data:-1}});
  },

  name:function()
  {
    var user=this.comment_user;
    //console.log(user,' ','fff','  ',Meteor.users.findOne({_id:user}).username);
    return user;
  }

});
Template.addcomment.events({
  'submit form':function(e)
  {
    e.preventDefault();
    //Meteor.Error(500, 'Internal server error');
    var target=e.target;
    massage=$(target).find('[name=bellik]').val();
    $("#bellik")[0].value="";

    Meteor.call('bellikInsert',massage,commentID);
  }
})