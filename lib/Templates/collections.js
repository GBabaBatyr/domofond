DataBas  = new Mongo.Collection('databas');
Maglumat = new Mongo.Collection('maglumat');
Comment  = new Mongo.Collection('comment');
Adress   = new Mongo.Collection('adress');
Welayat  = new Mongo.Collection('welayat');
Myfavorite=new Mongo.Collection('myfavorite');
Agency    =new Mongo.Collection('agency');
var productImagesStore = new FS.Store.FileSystem('productImages', {
            path: '~/uploads/full'
        });

productImages = new FS.Collection('productImages', {
            stores: [productImagesStore]
        });

productImages.allow({
  insert: function() { return true; },
  update: function() { return true; },
  download: function() { return true; }
});