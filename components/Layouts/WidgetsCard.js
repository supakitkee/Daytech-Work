export default function WidgetsCard({ title, children }) {
    return (
        
            <div className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                {children}
                <h3 className="mt-1 font-semibold text-sm ">{title}</h3>
            </div>
        
    );
}
