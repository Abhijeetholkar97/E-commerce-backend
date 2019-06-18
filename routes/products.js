module.exports =function(products,knex) {

//to get the list of all the products
products.get('/', (request,response,next)=>{
 var query = knex.select("*").from('product').then((productList)=>{
    return response.json(productList)
 });
});
  
//get product by search



//get product by Id
products.get('/:product_id',(request,response,next)=>{
    var product_id = request.params.product_id;
    var query = knex.select("*").from('product').where('product_id',product_id).then((product)=>{
        return response.json(product[0]);
    })
})






















};