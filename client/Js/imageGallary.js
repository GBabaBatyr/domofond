var count;
Template.imageGallery.onCreated(function(){
  //alert(Template.currentData().imageid);
  count=Template.currentData().imageid;
  //console.log(globalsubs);
  // if (globalsubs) globalsubs.stop();
  // if (subs) subs.stop();
  var self=this;
  self.autorun(function(){
  var subs=self.subscribe('image',Template.currentData().imageid);
});
});

Template.imageGallery.helpers({
  image:function(){
    //console.log(this._id);
    // count=productImages.find({metadata:{productId:this._id}}).count();
    
    return productImages.find({metadata:{productId:count}});
  },
  one:function(){return productImages.find({metadata:{productId:count}}).count()>1},
  two:function(){return productImages.find({metadata:{productId:count}}).count()>2},
  thre:function(){return productImages.find({metadata:{productId:count}}).count()>3},
  four:function(){return productImages.find({metadata:{productId:count}}).count()>4}
});