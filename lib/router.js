FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/signIn', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "SignIn"});
  }
});

FlowRouter.route('/favorites', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "favorites"});
  }
});

FlowRouter.route('/SignUp', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "SignUp"});
  }
});

FlowRouter.route('/orders', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "orders"});
  }
});

FlowRouter.route('/addorder', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "addorder"});
  }
});

FlowRouter.route('/UpdateUser', {
   triggersEnter: [checkLoggedIn],
  action: function() {
    BlazeLayout.render("mainLayout", {content: "UpdateUser"});
  }
});

FlowRouter.route('/addagency', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "addagency"});
  }
});

FlowRouter.route('/orders/:id', {
   action: function(params) {
    // console.log(params.id);
    BlazeLayout.render("mainLayout", {content: "view"});
  }
});

FlowRouter.route('/orders', {
   action: function(params) {
    // console.log(params.id);
    BlazeLayout.render("mainLayout", {content: "orders"});
  }
});

FlowRouter.route('/myagency', {
   action: function(params) {
    // console.log(params.id);
    BlazeLayout.render("mainLayout", {content: "myagency"});
  }
});

function checkLoggedIn (ctx, redirect) {  
  if (!Meteor.userId()) {
    redirect('/')
  }
}



// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   //waitOn: function() { return Meteor.subscribe('posts'); }
// });


// Router.map(function() {  
//   this.route('orders',  {path: '/orders',  waitOn: function () {
//       return [
//         Meteor.subscribe('images',function(error,result){
//           if (error) toastr.error(error.reason); 
//         })
//       ];
//     }});
//   // this.route('/orders', {
//   //   name: 'orders',
//   //   action: function () {
//   //     this.render('orders');
//   //   },
//   //   waitOn: function () {
//   //     return [
//   //       Meteor.subscribe('images',function(error,result){
//   //         if (error) toastr.error(error.reason); 
//   //       })
//   //     ];
//   //   }
//   // });

//   this.route('addorder',{path: '/addorder'});
//   this.route('userIn',  {path: '/signIn'  });
//   this.route('home',  {path: '/'  });
//   this.route('view',    {path:'/orders/:_id',
//   data:function(){ 
//     return DataBas.findOne(this.params._id);},
//   // waitOn: function () {
//   //   return [
//   //     Meteor.subscribe('images',function(error,result){
//   //     if (error) toastr.error(error.reason); 
//   //       })
//   //     ];
//   //   }
//   })

// });

// //Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
