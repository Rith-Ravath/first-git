import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CreateProduct from "../Components/CreateProduct"
import { createProduct, fetchCategories } from "../Constants/productsAction"

const InsertProduct =() => {
    const navigation = useNavigate()
    const[msg,setMsg] = useState("")
    const[categories, setCategories] = useState ([])
    const[product, setProduct] = useState ({
        "title": "",
        "price": 0,
        "description": "",
        "categoryId":0,
        "images": ["https://api.lorem.space/image/fashion?w=640&h=480&r=4779"]
    })

    useEffect(() => {
        fetchCategories()
        .then(res => res.json())
        .then(res => setCategories(res))
    }, [])

    const onChangeHandler = (e) => {
        const{name, value} = e.target

        setProduct(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
        console.log(product)
    }
    const submitProduct = () => {
        createProduct(product)
        .then(res => {
            setMsg("Insert Success")
            alert("Insert Success")
        })
        .then(response => navigation("/"))
    }

    return(
        <div style={{width: '50%', margin: 'auto'}}>
        <div className="mb-3 mt-4">
        <label for="title" className="form-label">Title</label>
        <input 
        type="text" 
        className="form-control" 
        name="title" 
        placeholder="Product Title"
        onChange={onChangeHandler}/>
        </div>
        <div className="mb-3">
        <label for="price" className="form-label">Price</label>
        <input 
        type="text" 
        className="form-control" 
        name="price" 
        placeholder="$700"
        onChange={onChangeHandler}/>
        </div>
        <div className="mb-3">
        <label for="price" className="form-label">Category</label>
        <select 
        className="form-select" 
        name="categoryId"
        aria-label="Default select example"
        onChange={onChangeHandler}>
        <option selected>Choose Category</option>
            {
                categories && categories.map((category) => (
                    <option value={category.id}>{category.name}</option>
                ))
            }
         </select>
        </div>
        <div className="mb-3">
         <label for="description" className="form-label">Product Description</label>
         <textarea 
            className="form-control" 
            name="description" 
            rows="3" 
            onChange={onChangeHandler}></textarea>
        </div>
        <div className="d-grid gap-2 col-12">
        <button className="btn btn-info" type="button" onClick={submitProduct}>Create Product</button>
        </div>
        </div>
    )
}
export default InsertProduct