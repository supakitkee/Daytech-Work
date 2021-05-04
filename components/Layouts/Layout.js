import Nav from '../NavBar/Nav'

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen max-h-screen min-w-full bg-gray-200">
      <div className="w-100 max-w-4xl mx-auto p-5">
        <Nav />
        {children}
      </div>
    </div>
  );
}