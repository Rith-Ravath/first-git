import { Link } from "react-router-dom"
 const ProductCard = (props)=>{
    const {title,description,images,price,id}=props.product
    return(
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="card h-100 border-0">
            <div className="position-relative">
                <img src={images[0]} className="card-img-top" alt="book image" />
            
                <div className="card-img-overlay d-flex z-index-0 p-3">
                
                    <div className="w-100 mb-auto d-flex justify-content-end">
                        
                        <div className="icon-md bg-dark rounded-circle fs-5">
                            <a href="#" className="text-white"><i className="bi bi-book"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mb-2">
			    <a href="#" class="badge bg-primary bg-opacity-10 text-info ml-4 mt-4">Product</a>
			    <a href="#" class="text-dark mr-4 mt-4"><i class="far fa-heart"></i></a>
		        </div>

            <div className="card-body px-3">
                
                <h5 className="card-title mb-0 fs-5 fw-bold">
                    <Link to={`/read/${id}`} className="stretched-link text-decoration-none">{title}</Link>
                </h5>
            </div>

            <div className="card-footer pt-0 px-3 border-0">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <h5 className="text-success mb-0 fs-5 ml-2 mb-2">$ {price}</h5>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProductCard