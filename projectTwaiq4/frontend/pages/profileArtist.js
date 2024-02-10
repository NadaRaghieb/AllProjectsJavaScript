// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from 'next/image'
// import photo from "../public/img/nm.png"
// // import Style from '../styles/profile.modules.css'
// const profile = () => {
//   const [artist, setArtist] = useState([]);
//   useEffect(async () => {
//     const resArtist = await fetch(
//       `http://localhost:5000/auth/show/61e5504aa165474d20c82868`
//     );
//     const artist = await resArtist.json();
//     setArtist(artist);
//   }, []);
//   return (
//     <div class="container rounded bg-white mt-5 mb-5">
//     <div class="row">
//         <div class="col-md-3 border-right">
//             <div class="d-flex flex-column align-items-center text-center p-3 py-5">
//             <Image className="rounded-circle"
//               src={photo}
//               alt="Maxwell Admin"
//             />
//                <span class="font-weight-bold">basic information</span><span class="text-black-50">...</span><span> </span></div>
//         </div>
//         <div class="col-md-5 border-right">
//             <div class="p-3 py-5">
//                 <div class="d-flex justify-content-between align-items-center mb-3">
//                     <h4 class="text-right">Profile Settings</h4>
//                 </div>
//                 <div class="row mt-2">
//                     <div class="col-md-6"><label class="labels">Name</label></div>
//                     <h6 className="card-title"> {artist.fName} </h6>
//                 </div>
//                 <div class="row mt-3">
//                     <div  class="col-md-12"><label class="labels">Email address:</label></div>
//                     <h6 className="card-title"> {artist.email} </h6>
                    
                    
                   
//                     <div class="col-md-12"><label class="labels">phoneNumber:</label></div>
//                     <h6 className="card-title"> {artist.phoneNumber} </h6>
//                     <Link href={``}>
//                 <a className="btn btn-dark">Save</a>
//               </Link>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//   );
// };
// export default profile;