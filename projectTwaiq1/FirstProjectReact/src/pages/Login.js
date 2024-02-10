function Login(){
    return(
       <div>
           <section >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3"Style="margin-top:40px; margin-bottom:40px;">
          <div className="container h-100">
              
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12  col-md-6">
                
                <div className="card" >
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">login account
                        <img src="img/logo.svg" alt="" width="70" height="60"/>
                    </h2>
                    <form>
                      
                      <div className="form-outline mb-4 "Style="text-align:left;">
                        <input type="email" id="emailA" class="form-control form-control-lg" />
                        <label className="form-label" for="form3Example3cg">Your Email</label>
                      </div>
                      <div className="form-outline mb-4"Style="text-align:left;">
                        <input type="password" id="passwordB" class="form-control form-control-lg" />
                        <label className="form-label text-center" for="form3Example4cg">Password</label>
                      </div>
             
                      
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg">Remember me
                      </input>
                       
                      </div>
                      <div className="d-flex justify-content-center">
                        <span type="button" class="btnB btn-primary btn-block btn-lg gradient-custom-4 text-body" >Login</span>
                        <div className="snUp">
                          <span>Result here</span>
                        </div>
                      </div>
                      
                      <p id="logup" className="text-center text-muted mt-5 mb-0">Create an account <a href="register.html"id="logup" class="fw-bold text-body"><u>Logup here</u></a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       </div>
        
     
    )
}
export default Login