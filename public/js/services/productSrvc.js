myApp.service('productSrvc',function($http){
  this.getProductList = function(category,subcategory){
    // console.log('/api/products/'+subcategory);
    return $http({
      method: 'GET',
      url: `/api/products/${subcategory}`
    }).then(function(res){
      console.log('productSrvc',res.status,'\n\nData',res.data);
      return splitDollar(res.data);
    });
  }
});//closing
let splitDollar = function(arr){
  console.log('fn fired');
  let arrNew = [];
  let arrKey = ['features','details','specs','color'];
  arr.forEach((object,index)=>{
    arrKey.forEach((key,i)=>{
      console.log(object[key]);
      if(object[key] === null){
        object[key] === null;
      }else{
        if(object[key].match(/\\\$/gi)){
          object[key] = object[key].split(/\\\$/gi);
          console.log(`${object[key]}`,object[key]);
        }else{
          arrNew = [];
          object[key] = arrNew.push(object[key]);
          console.log(`${object[key]}`,key);
        }
      }
    })
  });
  console.log(arr);
  return arr;
};

  // arr.forEach((object,index)=>{
  //   //features
  //   if(object.features.match(/\\\$/gi)){
  //     object.features = object.features.split(/\\\$/gi);
  //     console.log('features',object.features);
  //   }else{
  //     arrNew = [];
  //     object.features = arrNew.push(object.features);
  //     console.log('features',object.features);
  //   }
  //   //details
  //   if(object.details.match(/\\\$/gi)){
  //     object.details = object.details.split(/\\\$/gi);
  //     console.log('details',object.details);
  //   }else{
  //     arrNew = [];
  //     object.details = arrNew.push(object.details);
  //     console.log('features',object.details);
  //   }
  //   //color
  //   if(object.color.match(/\\\$/gi)){
  //     object.color = object.color.split(/\\\$/gi);
  //     console.log('color',object.color);
  //   }else{
  //     object.color = arrNew.push(object.color);
  //     console.log('color',object.color);
  //   }
  //   //specs
  //   // if(object.specs.match(/\\\$/gi)){
  //   //   object.specs = object.specs.split(/\\\$/gi);
  //   //   console.log('specs',object.specs);
  //   // }else{
  //   //   arrNew = [];
  //   //   object.specs = arrNew.push(object.specs);
  //   //   console.log('features',object.specs);
  //   // }
  //   // if(object.specs.match(/\\\$/gi) === null){
  //   //   object.specs = object.specs.split(/\\\$/gi);
  //   //   console.log('specs',object.specs);
  //   // }else{
  //   //   arrNew = [];
  //   //   object.specs = arrNew.push(object.specs);
  //   //   console.log('features',object.specs);
  //   // }
  // });
  // console.log(arr);
  // return arr;
// }//closing
