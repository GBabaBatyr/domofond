//var count=0;
Session.set('count',0);
Session.set('welayat','Aşgabat');
Template.addorder.onRendered(function(){
  Meteor.subscribe('adress');
})
Template.addorder.events({
  'click #input8':function() {
    Session.set('count',Session.get('count')+1);
   // console.log(count);
    return ;
  },
  'change #input9': function()
  {
  Session.set('welayat',document.getElementById('input9') .value);
  },
  'submit form': function(e)
  {
    e.preventDefault();
    var target=e.target;
    var obj={
    input0:$(target).find('[id=input0]').val(),
    input1:$(target).find('[id=input1]').val(),
    input2:$(target).find('[id=input2]').val(),
    input3:$(target).find('[id=input3]').val(),
    input4:$(target).find('[id=input4]').val(),
    input5:$(target).find('[id=input5]').val(),
    input6:$(target).find('[id=input6]').val(),
    input8:$(target).find('[id=input8]').val(),
    input9:$(target).find('[id=input9]').val(),
    input10:$(target).find('[id=input10]').val(),
    input11:$(target).find('[id=input11]').val(),
    input12:$(target).find('[id=input12]').val(),
    input13:$(target).find('[id=input13]').val()
    };
    
    if (obj.input0 && obj.input3 && obj.input5 && obj.input12 && obj.input13)
    Meteor.call('insertOrder',obj,function(error, result){
      if (error) alert(error.reason);else{
        if ($('#psevdoFileValue')[0].value){
          var file = $('#file').get(0).files[0],
          fsFile = new FS.File(file);
          fsFile.metadata = {productId:result};
          console.log(typeof fsFile);
          productImages.insert(fsFile,function(err,result){
            if(!err){
                console.log("New images inserted")
            }
          });
          // Meteor.call('insertImage',fsFile,function(error, result){
          //   if (error) alert(error.reason);
          // });
        };
                //console.log($('#psevdoFileValue1')[0],' hello');
        if ($('#psevdoFileValue1')[0] && $('#psevdoFileValue1')[0].value){
          var file = $('#file1').get(0).files[0],
          fsFile = new FS.File(file);
          fsFile.metadata = {productId:result};
          productImages.insert(fsFile,function(err,result){
            if(!err){
                console.log("New images inserted")
            }
          });
        };
        if ($('#psevdoFileValue2')[0] && $('#psevdoFileValue2')[0].value){
          var file = $('#file2').get(0).files[0],
          fsFile = new FS.File(file);
          fsFile.metadata = {productId:result};
           productImages.insert(fsFile,function(err,result){
            if(!err){
                console.log("New images inserted")
            }
          });
        }; 
        if ($('#psevdoFileValue3')[0] && $('#psevdoFileValue3')[0].value){
          var file = $('#file3').get(0).files[0],
          fsFile = new FS.File(file);
          fsFile.metadata = {productId:result};
           productImages.insert(fsFile,function(err,result){
            if(!err){
                console.log("New images inserted")
            }
          });
        } ; 
        if ($('#psevdoFileValue4')[0] && $('#psevdoFileValue4')[0].value){
          var file = $('#file4').get(0).files[0],
          fsFile = new FS.File(file);
          fsFile.metadata = {productId:result};
          productImages.insert(fsFile,function(err,result){
            if(!err){
                //console.log("New images inserted")
            }
          });
        } ; 
        Session.set('count',0);
        FlowRouter.go("/orders/"+result);
        
      }
    });
  }
});

Template.addorder.helpers({
  disabled:function(){if (Session.get('count')>=4) return 'disabled';else return;},
  one:function(){return Session.get('count')>0},
  two:function(){return Session.get('count')>1},
  thre:function(){return Session.get('count')>2},
  four:function(){return Session.get('count')>3},
  // five:function(){return Session.get('count')>4},
  // six:function(){return Session.get('count')>5},
  countVar:function(){return 6-Session.get('count');},
  welayat:function(){ return Welayat.find();},
  adress:function(){ return Adress.find({welayat: Session.get('welayat') });}
})