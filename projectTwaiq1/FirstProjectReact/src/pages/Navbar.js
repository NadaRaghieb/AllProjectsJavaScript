
import{Nav,Button,Stack}from "react-bootstrap"
import { Link ,Outlet} from "react-router-dom";
function Navbar(){
    return(
       
    <div>
      <Stack direction="horizontal" gap={1}>
      <Nav style={{backgroundColor:"white" ,paddingBottom:"20px", paddingTop:"20px"}}
     
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
> 

     
  <Nav.Item>
  
    <img
        src="./img/logo.svg"
        width="80px"
        height="60px"
        className="d-inline-block align-top"
        alt="logo"
      /> </Nav.Item>
      <Nav.Item >
    <Nav.Link >
      <Link to="/" style={{color:"black"}}>   Home </Link>
      </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link> <Link to="/products" style={{color:"black"}}>   Products </Link>
</Nav.Link>

  </Nav.Item>
 
  <Nav.Item>
    <Nav.Link  style={{color:"black"}}>
    <Link to="/cart" style={{color:"black"}}>   Cart 
    </Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item  >
  <Button  href="#" style={{display:"flex", justifyContent:"end", backgroundColor:"#0a6040"}} >
    <Link to="/login" style={{color:"black"}}>   Login </Link></Button>
  </Nav.Item>
  
</Nav>
</Stack>
<Outlet></Outlet>
    </div>


    )
}
export default Navbar