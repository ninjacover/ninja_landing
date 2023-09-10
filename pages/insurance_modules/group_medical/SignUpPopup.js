// import React, { useState } from 'react';
// import PageBanner from '../../../components/Common/PageBanner';
// import Footer from '../../../components/_App/Footer';
// import Link from 'next/link';
// import Navbar from '../../../components/_App/Navbar';

// // Import the SignUpPopup component
// import SignUpPopup from './SignUpPopup';

// const SignUp = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div>
//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-content">
//             {/* Your form content goes here */}
//             <h2>Popup Form</h2>
//             <form>
//               {/* Form fields */}
//             </form>
//             <button onClick={togglePopup}>Close</button>
//           </div>
//         </div>
//       )}

//       {/* Conditionally render the pop-up form */}
//       {isPopupOpen && <SignUpPopup onClose={closePopup} />}
//     </div>
//   );
// }

// export default SignUp;

