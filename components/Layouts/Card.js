import React from 'react';

export default function Card({
  title,
  children,
  onDelete,
  closeBtn,
  editBtn,
  onEdit,
  restart,
  refreshBtn,
}) {
  const handleClick = function (e) {
    onDelete(e);
  };
  const handleEdit = function (e) {
    onEdit(e);
  };
  const handleRefresh = function (e) {
    restart(e);
  };

  return (
    <div className='md:inner md:w-1/2 pb-4 md:pr-4'>
      <div className='p-5 border-1 bg-white rounded-2xl relative undefined'>
        <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{title}</h2>
        <div className='absolute top-5 right-5'>
          <button
            onClick={handleRefresh}
            className='text-lg text-gray-600 focus:outline-none mr-2'
          >
            {refreshBtn}
          </button>
          <button
            onClick={handleEdit}
            className='text-lg text-gray-600 focus:outline-none mr-2'
          >
            {editBtn}
          </button>
          <button
            onClick={handleClick}
            className='text-lg text-gray-600 focus:outline-none undefined'
          >
            {closeBtn}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
