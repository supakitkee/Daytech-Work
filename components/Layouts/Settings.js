export const Settingss = ({ title, children }) => {
  return (
    <div className='table-row'>
      <div className='table-cell pr-4 font-semibold'>{title}: </div>
      <div className='table-cell'>{children}</div>
    </div>
  );
};

export const Header = ({ title, children }) => {
  return (
    <div className='p-5 border-1 bg-white rounded-2xl relative mb-4'>
      <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{title}</h2>
      {children}
    </div>
  );
};
