import { Card } from "react-bootstrap";
import React from "react";
import Layout from "../components/Layout";
//import NavBar from "../components/NavBar";
//import styles from "../styles/Home.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Photo1 from '../public/img/col1.jpg'
import Photo2 from '../public/img/col5.jpg'
import Photo3 from '../public/img/col8.jpg'
import Artist from '../public/img/van.jpg'
import Museum from '../public/img/mu.jpg'
import Type from '../public/img/type.jpg'
import ArtN from '../public/img/nm.png'
import ArtH from '../public/img/hm.png'
import ArtZ from '../public/img/zm.png'
import ArtM from '../public/img/mh.png'
import { Carousel,CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Link from "next/link";
import { useRouter } from "next/router";

// import Image from "next/image";
export default function Home() {
  const router = useRouter();
  <Layout/>
  return (
    <div className="container pt-4" >
      <div className="row">
        <hr />
 <Carousel className="homepage">
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={Photo1}
      width={1400}
      height={450}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dedicated experts</h3>
      <p>We have professional experts who are ready to help you.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={Photo2}
      width={1400}
      height={450}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Variety of subjects</h3>
      <p>We offer over 150 subjects and skills to choose from.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={Photo3}
      width={1400}
      height={450}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Good fit or refund</h3>
      <p>We guarantee that you will find the right teacher otherwise we’ll refund you..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<CardGroup >
  <Card style={{marginTop:"40px"}}>
    <Image variant="top" src={Artist} style={{width:"300px", height:"300px"}}/>
    <Card.Body>
      <Card.Title>
      <Link href="/vanArticle">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/vanArticle" ? "active" : ""}`
                  }
                >
             
              
				<h6 class="user-name" style={{color:"black"}}>Van</h6>
        </a>
              </Link>
      </Card.Title>
      <Card.Text>
      Private lessons with expert tutors give you the opportunity to improve your skills faster and get better results.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{marginTop:"40px"}}>
    <Image variant="top" src={Museum} style={{width:"300px", height:"300px"}}/>
    <Card.Body>
      <Card.Title>Technology helps</Card.Title>
      <Card.Text>
      Find experts of your choice online, meet anywhere in the country, online or in-person whenever it suits you.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{marginTop:"40px"}}>
    <Image variant="top" src={Type} style={{width:"300px", height:"300px"}} />
    <Card.Body>
      <Card.Title>The right fit</Card.Title>
      <Card.Text>
      More qualified tutors than anywhere else, ready to help.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</div>
<br/>
  
<br/>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
           
            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
              <h3 style={{fontFamily:"cursive"}}>All the Artist in <span>Najran</span></h3>
              <p style={{fontFamily:"cursive"}}>A group of creative painters located in the city of Najran.</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
         
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
             
              <div className="advisor_thumb"><Image src={ArtN} alt=""/>
               
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
             
              <div className="single_advisor_details_info">
              <Link href="/artistNada">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/artistNada" ? "active" : ""}`
                  }
                >
             
              
				<h6 class="user-name" style={{color:"black"}}>Nada Mana</h6>
        </a>
              </Link>
                <p className="designation">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
              
              <div className="advisor_thumb"><Image src={ArtH} alt=""/>
                
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              
              <div className="single_advisor_details_info">
                <h6>Nazrul Islam</h6>
                <p className="designation">UI Designer</p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
             
              <div className="advisor_thumb"><Image src={ArtM} alt=""/>
               
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              
              <div className="single_advisor_details_info">
                <h6>Riyadh Khan</h6>
                <p className="designation">Developer</p>
              </div>
            </div>
          </div>
         
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
              
              <div className="advisor_thumb"><Image src={ArtZ} alt=""/>
                
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              
              <div className="single_advisor_details_info">
                <h6>Niloy Islam</h6>
                <p className="designation">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>

  );
}