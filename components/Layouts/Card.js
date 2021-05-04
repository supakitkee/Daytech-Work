import React from "react";
import { IoClose } from "react-icons/io5";
import { MdEdit } from 'react-icons/md';

export const Card = ({ title, children, onDelete }) => {
  const handleClick = function (e) {
    onDelete(e);
  };

  return (
    <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
      <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
      <div className="absolute top-5 right-5">
        <button
          onClick={handleClick}
          className="text-lg text-gray-600 focus:outline-none undefined"
        >
          <IoClose />
        </button>
      </div>
      {children}
    </div>
  );
};

export const CardEdit = ({ title, children, onDelete, onEdit }) => {  
  const handleClick = function (e) {
    onDelete(e);
  };
  
  const handleEdit = function (e) {
    onEdit(e);
  };
  return (
    <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
      <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
      <div className="absolute top-5 right-5">
       <button className="text-lg text-gray-600 focus:outline-none mr-2" onClick={handleEdit}>
            <MdEdit />
          </button > 
        <button
          onClick={handleClick}
          className="text-lg text-gray-600 focus:outline-none undefined"
        >
          <IoClose />
        </button>
      </div>
      {children}
    </div>
  );
};

export const Cards = ({ title, children, onDelete, onEdit }) => {  
  const handleClick = function (e) {
    onDelete(e);
  };
  
  const handleEdit = function (e) {
    onEdit(e);
  };
  return (
    <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
      <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
      <div className="absolute top-5 right-5">
       
        
      </div>
      {children}
    </div>
  );
};

// import React from "react";
// import { IoClose } from "react-icons/io5";

// export default function Card({
//   title,
//   children,
//   onDelete,
//   editBtn,
//   onEdit,
// }) {
//   const handleClick = function (e) {
//     onDelete(e);
//   };
//   const handleEdit = function (e) {
//     onEdit(e);
//   };

//   return (
//     <div className="md:inner md:w-1/2 pb-4 md:pr-4">
//       <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
//         <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
//         <div className="absolute top-5 right-5">
//           {/* <button
//             onClick={handleEdit}
//             className="text-lg text-gray-600 focus:outline-none mr-2"
//           >
//             {editBtn}
//           </button> */}
//           <button
//             onClick={handleClick}
//             className="text-lg text-gray-600 focus:outline-none undefined"
//           >
//             <IoClose />
//           </button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }
