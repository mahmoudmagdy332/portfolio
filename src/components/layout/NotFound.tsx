import { useLanguageSelector } from '@/stores/Reducers/LanguageSlice';
import { FaHome, FaShoppingBag, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  const{translations}=useLanguageSelector((state)=>state.LanguageReducer)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <FaExclamationTriangle 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" 
            size={64} 
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            {translations.OopsPage}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.NotFoundMessage}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 gap-2"
          >
            <FaHome className="text-xl" />
            {translations.BackHome}
          </a>
          
          <a
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors duration-200 gap-2"
          >
            <FaShoppingBag className="text-xl" />
            {translations.ExploreProducts}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;