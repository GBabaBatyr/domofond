Template.view.onCreated(function(){
  var self=this;
  var id=FlowRouter.getParam('id');
  //alert(id);
 //console.log(this);
    self.autorun(function(){
    self.subscribe('databas',id);
    self.subscribe('users',id); 
    //self.subscribe('image',id);
    });
  });

Template.view.helpers({
  user:function(){
    //console.log(this._id);
    // var user=this._id;
    
   // console.log(user,'  ',Maglumat.findOne({home_id:user}));
    return Maglumat.findOne({});
  },
  bahasy:function(){
    return DataBas.findOne({}).bahasy;
  },
  bahasytip:function(){
    return DataBas.findOne({}).bahasytip;
  },
  yazgy:function(){
    return DataBas.findOne({}).yazgy;
  },
  bildgornus:function(){
    return DataBas.findOne({}).bildgornus;
  },
  bolum:function(){
    return DataBas.findOne({}).bolum;
  },
  dowamlylygy:function(){
    return DataBas.findOne({}).dowamlylygy;
  },
  id:function(){
    return DataBas.findOne({})._id;
  }
});