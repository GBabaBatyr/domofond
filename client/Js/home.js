Template.home.onRendered(function(){
  $('.bildirisHome').css({"height":"80px"});
  $('.bildirisHome').animate({"height":420},600);


});

Template.home.onCreated(function(){
  
  var self=this;
  self.autorun(function(){
  self.subscribe('images',function(error,result){
    if (error) toastr.error(error.reason); 
        });
  self.subscribe('Bases',Session.get('it'));
  })

});


Template.home.helpers({
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
    if (text.length>60) {done=true; return text.substring(0,60)+" . . . "; } else return text;
  },
  inner: function(){ 
  //console.log(done);
    return done;
  },
  dowamy: function(){
      return DataBas.find({}).count()>=Session.get('it');
  }
});
