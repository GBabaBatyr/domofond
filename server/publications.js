Meteor.publish('favorites',function(userId){
  check(userId,String);
  return Myfavorite.findOne({userId:userId});
});

Meteor.publish('Myagency',function(userId){
  check(userId,String);
  return Agency.find({createdby:userId});
}
);


Meteor.publish('Bases',function(limit){ 
  check(limit,Number);
  
  return DataBas.find({},{limit:limit,sort:{data:-1}});
  
});
Meteor.publish('BasesAll',function(){
  return DataBas.find({});
})

Meteor.publish('databas',function(id){
  check(id,String);
  //console.log(id,'  taze');
  return DataBas.find({_id:id});
})

Meteor.publish('image',function(id){
  check(id,String);
  //console.log(productImages.find({}));
  return productImages.find({metadata:{productId:id}});
});


Meteor.publish('images',function(){
  // check(id,String);
  //console.log(productImages.find({}));
  return productImages.find({});
});

Meteor.publish('view',function(ID) {
  check(ID,String); 
  return DataBas.find(ID); 
});

Meteor.publish('users',function(user) {
  //toastr.success(user);
  check(user,String); 
  //console.log('sssssssssssss');
  return Maglumat.find({home_id:user}); 
});

Meteor.publish('adress',function() {
  return [Adress.find(),Welayat.find()]; 
});

Meteor.publish('comments',function(ID){
  check(ID,String);
  //console.log(ID,' ',"cheched");
  return Comment.find({comment_id:ID},{sort:{data:-1}});
});

Meteor.publish('Myfavorite',function(userId){
  check(userId,String);
  return Myfavorite.find({userId:userId});
})