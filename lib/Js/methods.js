Meteor.methods({
  'bellikInsert':function (argument,id) {
    check(argument,String);
    check(id, String);
    var user=Meteor.users.findOne({_id:this.userId}).profile.name, done=false;
    //console.log(";",argument,';   ',id);

    for (var i = 0; i < argument.length; i++) 
      if (argument[i]!=' ' && argument[i]!='\n') done=true; 
    
    if (argument && done)
    Comment.insert({comment_id:id,comment:argument,comment_user:user,data: new Date()});
  },

  'insertOrder':function(obj)
    {
    console.log("sdsd salam");
    check(obj,Object);
    var home_id=DataBas.insert({
    sozbashy:obj.input0,
    bildgornus:obj.input1,
    bolum:obj.input2,
    bahasy:obj.input3,
    bahasytip:obj.input4,
    yazgy:obj.input5,
    dowamlylygy:obj.input6,
    data:new Date()
    });
    Maglumat.insert({
      home_id:home_id,
      welayat:obj.input9,
      etrap:obj.input10,
      email:obj.input11,
      adynyz:obj.input12,
      tel:obj.input13
    });
    return home_id;
    },
  'insertImage':function(fsFile)
  {
   //console.log(typeof fsFile,'  ',fsFile);
    check(fsFile, Object);
   // console.log("checked");
    productImages.insert(fsFile,function(err,result){
      if(!err){
        console.log("New images inserted")
      }else alert(err.reason);
    });
  },
  'addUser':function(name,telnumber,login,password,conpassword){
    check(name,String);
    check(telnumber,String);
    check(login,String);
    check(password,String);
    check(conpassword,String);
   Accounts.createUser({
        password: password,
        username:login,
        createdAt: new Date(),
        profile: {
            telnumber:telnumber,
            name: name
        }
    });
  },
  'UpdateUser':function(name,telnumber,id) {
    check(name,String);
    check(telnumber,String);
    check(id,String);
   
    
     
        Meteor.users.update({_id:id}, { $set:{profile:{name:name,telnumber:telnumber}}} )
      
    

    ///test

  },
  Myfavorite:function(thisId,userId){
    check(thisId,String);
    check(userId,String);
    if (Myfavorite.findOne({userId:userId, orderId:thisId})) 
      {Myfavorite.remove({userId:userId, orderId:thisId});return "removed"; }else
      {Myfavorite.insert({userId:userId, orderId:thisId});return "inserted";}
  },
    'addagency':function(createdby,name,telnumber,welayat,etrap,adress){
    check(createdby,String);
    check(name,String);
    check(telnumber,String);
    check(welayat,String);
    check(etrap,String);
    check(adress,String);
  return  Agency.insert({
        createdAt: new Date(),
        createdby:createdby,
        telnumber:telnumber,
        name: name,
        welayat:welayat,
        etrap:etrap,
        adress:adress
       });
  }
})

