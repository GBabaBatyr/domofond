var done;
Session.setDefault('it',5);
// Meteor.subscribe('images');
Template.orders.onCreated(function() {


  var self=this;
 
  Session.set('it',5);
  self.autorun(function(){
    self.subscribe('images');
    self.subscribe('Bases',Session.get('it'));
    self.subscribe('Myfavorite',Meteor.userId());
  })
  

  //console.log(globalsubs,' ddd');

 });

Template.orders.helpers({
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
  dowamy: function(){
      return DataBas.find({}).count()>=Session.get('it');
  },
  isfavorite:function(){
    return Myfavorite.findOne({userId:Meteor.userId(), orderId:this._id});
  }
});

Template.orders.events({
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