// // import Head from "next/head";
// // import Link from "next/link";
// // import axios from "axios";
// // import { useState } from "react";

// // function Register() {
// //   const [fName, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [passwordHash, setPasswordHash] = useState("");
// //   const [passwordVerify, setPasswordVerify] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [role, setRole] = useState("Artist");

// //   function handleSelectChange(e) {
// //     setRole(e.target.value);
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     console.log(role);

// //     const data = {
// //       fName: fName,
// //       email: email,
// //       passwordHash: passwordHash,
// //       passwordVerify: passwordVerify,
// //       phone: phone,
// //       role:role,
// //     };

// //     axios
// //       .post("http://localhost:5000/auth/register", data)
// //       .then((response) => {
// //         console.log(response);
// //       })
// //       .catch(function (error) {
// //         console.log(error);
// //       });

      
// //   }

// //   return (
// //     <div>
// //       <form
// //         className="mx-auto my-4"
// //         onSubmit={(e) => {
// //           handleSubmit(e);
// //         }}
// //       >
// //         <div className="form-group">
// //           <label htmlFor="name">FullName</label>
// //           <input
// //             className="form-control"
// //             type="fullName"
// //             name="fullName"
// //             value={fName}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="exampleInputEmail1">Email address</label>
// //           <input
// //             className="form-control"
// //             type="email"
// //             name="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <small id="emailHelp" className="form-text text-muted">
// //             We'll never share your email with anyone else.
// //           </small>
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="password">Password</label>
// //           <input
// //             className="form-control"
// //             type="password"
// //             name="password"
// //             value={passwordHash}
// //             onChange={(e) => setPasswordHash(e.target.value)}
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="password1">cf_Password</label>
// //           <input
// //             className="form-control"
// //             type="password"
// //             name="password"
// //             value={passwordVerify}
// //             onChange={(e) => setPasswordVerify(e.target.value)}
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="password">phoneNumber</label>
// //           <input
// //             className="form-control"
// //             type="phoneNumber"
// //             name="phoneNumber"
// //             value={phone}
// //             onChange={(e) => setPhone(e.target.value)}
// //           />
// //         </div>

// //         <select
// //           className="form-select"
// //           aria-label="Default select example"
// //           value={role}
// //           onChange={handleSelectChange}
// //         >
// //           <option defaultValue="">Open this select menu</option>
// //           <option value="Artist">Artist</option>
// //           <option value="Customer"> Customer</option>
// //         </select>

// //         <button type="submit" className="btn btn-dark w-100">
// //           Register
// //         </button>

// //         <p className="my-2">
// //           Already have an account?
// //           <Link href="/login">
// //             <a style={{ color: "crimson" }}>Login Now</a>
// //           </Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }
// // export default Register;
// import { Link as RouterLink } from 'react-router-dom';
// // material
// import { styled } from '@mui/material/styles';
// import { Box, Card, Link, Container, Typography } from '@mui/material';
// // layouts
// import AuthLayout from '../layouts/AuthLayout';
// // components
// import Page from '../components/Page';
// import { MHidden } from '../components/@material-extend';
// import { RegisterForm } from '../components/authentication/register';
// import AuthSocial from '../components/authentication/AuthSocial';

// // ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     display: 'flex'
//   }
// }));

// const SectionStyle = styled(Card)(({ theme }) => ({
//   width: '100%',
//   maxWidth: 464,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   margin: theme.spacing(2, 0, 2, 2)
// }));

// const ContentStyle = styled('div')(({ theme }) => ({
//   maxWidth: 480,
//   margin: 'auto',
//   display: 'flex',
//   minHeight: '100vh',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   padding: theme.spacing(12, 0)
// }));

// // ----------------------------------------------------------------------

// export default function Register() {
//   return (
//     <RootStyle title="Register | Minimal-UI">
//       <AuthLayout>
//         Already have an account? &nbsp;
//         <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
//           Login
//         </Link>
//       </AuthLayout>

//       <MHidden width="mdDown">
//         <SectionStyle>
//           <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
//             Manage the job more effectively with Minimal
//           </Typography>
//           <img alt="register" src="/static/illustrations/illustration_register.png" />
//         </SectionStyle>
//       </MHidden>

//       <Container>
//         <ContentStyle>
//           <Box sx={{ mb: 5 }}>
//             <Typography variant="h4" gutterBottom>
//               Get started absolutely free.
//             </Typography>
//             <Typography sx={{ color: 'text.secondary' }}>
//               Free forever. No credit card needed.
//             </Typography>
//           </Box>

//           <AuthSocial />

//           <RegisterForm />

//           <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
//             By registering, I agree to Minimal&nbsp;
//             <Link underline="always" sx={{ color: 'text.primary' }}>
//               Terms of Service
//             </Link>
//             &nbsp;and&nbsp;
//             <Link underline="always" sx={{ color: 'text.primary' }}>
//               Privacy Policy
//             </Link>
//             .
//           </Typography>

//           <MHidden width="smUp">
//             <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
//               Already have an account?&nbsp;
//               <Link to="/login" component={RouterLink}>
//                 Login
//               </Link>
//             </Typography>
//           </MHidden>
//         </ContentStyle>
//       </Container>
//     </RootStyle>
//   );
// }
