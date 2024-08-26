const CreateProduct = () => {
    return(
        <>
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Product Title"/>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="text" class="form-control" id="Price" placeholder="$700"/>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Category</label>
            <select class="form-select" aria-label="Default select example">
            <option selected>Choose Category</option>
            <option value="1">Clothes</option>
            <option value="2">Furniture</option>
            <option value="3">Electronics</option>
             </select>
         </div>
         <div class="mb-3">
             <label for="description" class="form-label">Product Description</label>
             <textarea class="form-control" id="description" rows="3"></textarea>
      </div>
      <div class="d-grid gap-2 col-12">
        <button class="btn btn-info" type="button">Create Product</button>
    </div>
        </>
    )
}
export default CreateProduct