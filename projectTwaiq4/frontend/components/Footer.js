//import "./footer.css";
// import { Image } from "react-bootstrap";
//import  Link  from "next/link";

function Footer() {
    return (
       
        <div style={{ backgroundColor:"#7B5E74", padding:"50px"}}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
      
                  
      
                
     
      <footer className="footer bg-footer footer-bar" >
          <div className="container text-center" >
              <div className="row align-items-center" >
                  <div className="col-sm-6" >
                      <div className="text-sm-left" >
                          <p className="mb-0" style={{color:"white", fontFamily:"cursive"}}>&copy; 2022. Design with <i className="mdi mdi-heart text-danger"></i></p>
                      </div>
                  </div>
      
                  <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <ul className=" text-sm-right social-icon social mb-0">
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" style={{color:"white"}} title="Facebook"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" style={{color:"white"}} title="Instagram"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" style={{color:"white"}} title="Twitter"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" style={{color:"white"}} title="Google +"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" style={{color:"white"}} title="Linkedin"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
      </div>
    );
  }
  
  export default Footer;
  