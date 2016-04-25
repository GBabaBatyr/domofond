var done;
Session.setDefault('it',5);
Session.setDefault('countF',1);
// Meteor.subscribe('images');
Template.favorites.onCreated(function() {


  var self=this;
 
  Session.set('it',5);
  Session.set('countF',1);
  self.autorun(function(){
    self.subscribe('images');
    self.subscribe('BasesAll');
    self.subscribe('Myfavorite',Meteor.userId());

  });
// Template.favorites.onRendered(function(){})
//   //console.log(globalsubs,' ddd');

 });

Template.favorites.helpers({
  // isnull:function(){
  //   return Myfavorite.find().count==0;
  // },
  databasID:function(){
    return this._id;
  },
  basesID:function(){
    return this.metadata.productId;
  },
  image:function(){
    return productImages.findOne({metadata:{productId:this._id}});
  },
  Bases:function(){ 
   
    return DataBas.find();
  },
  yazgyVar:function(){
    var text=this.yazgy;
    done=false;
    if (text.length>200) {done=true; return text.substring(0,200)+" . . . "; } else return text;
  },
  inner: function(){ 
  //console.log(done);
    return done;
  },
  isfavorite:function(){
    return Myfavorite.findOne({userId:Meteor.userId(), orderId:this._id});
      
  }
});

Template.favorites.events({
  'click #it':function(){

    Session.set('it',Session.get('it')+5);
  },
  'click #myorder':function(){
    //$('#myorder').css({color:red;});
    Meteor.call('Myfavorite',this._id,Meteor.userId(),function(error, result){
      if (error) toastr.error(error);
    })

  }
});