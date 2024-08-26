import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchProduct, fetchProducts } from "../Constants/productsAction"

const Read=()=>{
    const {id} = useParams()
    const [product, setProduct] = useState({
        "title":"",
        "category":{
            "name":"",
        },
        "images": ["https://api.lorem.space/image/shoes?w=640&h=480&r=7430"]
    })
    useEffect(() => {
        fetchProduct(id)
        .then(res => res.json())
        .then(res => setProduct(res))
    })
    const navigation = useNavigate()
    const goBackHome = () => {
        navigation("/")
    }
return(
    <>{
        product &&<div class="card shadow p-2">
        <div class="row g-0">
            <div class="col-md-4 mt-8">
                <img src={product && product.images[0]} class="img-fluid rounded-3" alt="..."/>
                <button type="button" class="btn btn-outline-info ml-10 mt-3 mb-7">Add to Cart</button>
                <button type="button" class="btn btn-outline-secondary ml-3 mt-5 mb-7">Add to WishList</button>
            </div>
    
            <div class="col-md-8">
                <div class="card-body">
                    <div class="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                        <div>
                            <h5 class="card-title mb-0 fs-1 fw-bold"><a href="#">{product.title}</a></h5>
                        </div>
                    </div>
                    <ul class="list-inline mb-0 mt-3 mb-3">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item ms-2 text-dark">4.0/5.0</li>
                    </ul>
                    <p class="text-truncate-2 mb-3 fs-5">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
                    <div class="d-sm-flex justify-content-sm-between align-items-center">
                        <h6 class="text-orange mb-0">Product Social</h6>
                        <ul class="list-inline mb-0 social-media-btn mt-3 mt-sm-0">
                            <li class="list-inline-item"> 
                                <a class="mb-0 me-1 text-facebook" href="#"><i class="fab fa-fw fa-facebook-f"></i></a> 
                            </li>
                            <li class="list-inline-item"> 
                                <a class="mb-0 me-1 text-instagram-gradient" href="#"><i class="fab fa-fw fa-instagram"></i></a> 
                            </li>
                            <li class="list-inline-item"> 
                                <a class="mb-0 me-1 text-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a> 
                            </li>
                            <li class="list-inline-item"> 
                                <a class="mb-0 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
     </>
    )
}
export default Read