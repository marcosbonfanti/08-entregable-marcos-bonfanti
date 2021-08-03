class Products {
    constructor (){
        this.products = [];
    }
    getProducts() {
        if(!this.products.length){
            return {"error": "No hay productos"};     
        }
        else{
            return this.products; 
        } 
    }
    addProduct(productAdd) {
        productAdd['id'] = this.products.length + 1;
        console.log(productAdd);
        this.products.push(productAdd);
        return this.products;
    }
    getProductsById(id) {
        if(this.products.find(o => o.id ==  id) == undefined){
            return {"error": "Producto no encontrado"};
        }    
        else {
            return (this.products.find(o => o.id ==  id));
        }
    }

}

export default Products;