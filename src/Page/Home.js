import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductCard from "../Components/Cards"
import HomeMenu from "../Components/Home"
import LoadingView from "../Components/skelation"
import { fetchProducts } from "../Constants/productsAction"


const Home =()=>{
    const navigation = useNavigate()

    const[products, setProducts]= useState([]);
    const[loading, setLoading] = useState(true);
    useEffect(()=>{
        fetchProducts()
        .then(res => res.json())
        .then(res =>{
            setLoading(false)
            setProducts(res)
        })
    },[])
    return(
       <>
       <div className="container mt-5">
        <div className="row">
            <div className="col-10"> 
                <h1 className="h1 mb-3 mt-2">Product Collection</h1>
            </div>
            <div className="col-2">
            <button type="button" class="btn btn-info" onClick={() => navigation("/create/product")}>Create New Product</button>
            </div>
        </div>
            <div className="row g-3">
            {
                loading ? <LoadingView /> :
                products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                )
                    
                )
            }
             </div>
        </div>
        </>
    )
}
export default Home