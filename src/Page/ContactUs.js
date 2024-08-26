const ContactUs=()=>{
    return(
       <>
       <div class="row g-4 g-lg-0 align-items-center">

			<div class="col-md-6 align-items-center text-center">
				<img src="https://eduport.webestica.com/assets/images/element/contact.svg" class="h-400px" alt=""/>
				<div class="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4 mb-4">
					<h5 class="mb-0">Follow us on:</h5> 
					<ul class="list-inline mb-0 ms-sm-2">
						<li class="list-inline-item"> <a class="fs-5 me-1 text-facebook" href="#"><i class="fab fa-fw fa-facebook-square"></i></a> </li>
						<li class="list-inline-item"> <a class="fs-5 me-1 text-instagram" href="#"><i class="fab fa-fw fa-instagram"></i></a> </li>
						<li class="list-inline-item"> <a class="fs-5 me-1 text-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a> </li>
						<li class="list-inline-item"> <a class="fs-5 me-1 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
						<li class="list-inline-item"> <a class="fs-5 me-1 text-dribbble" href="#"><i class="fas fa-fw fa-basketball-ball"></i></a> </li>
						<li class="list-inline-item"> <a class="fs-5 me-1 text-pinterest" href="#"><i class="fab fa-fw fa-pinterest"></i></a> </li>
					</ul>
				</div>
			</div>
			<div class="col-md-6">
				<h2 class="mt-4 mt-md-0 fs-1 fw-bold">Let's talk</h2>
				<p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly</p>
					
				<form>
					<div class="mb-4 bg-light-input">
						<label for="yourName" class="form-label">Your name *</label>
						<input type="text" class="form-control form-control-lg" id="yourName"/>
					</div>
					<div class="mb-4 bg-light-input">
						<label for="emailInput" class="form-label">Email address *</label>
						<input type="email" class="form-control form-control-lg" id="emailInput"/>
					</div>
					<div class="mb-4 bg-light-input">
						<label for="textareaBox" class="form-label">Message *</label>
						<textarea class="form-control" id="textareaBox" rows="4"></textarea>
					</div>
					<div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Button</button>
                    </div>
				</form>
			</div>
		</div>
       </>
    )
}
export default ContactUs