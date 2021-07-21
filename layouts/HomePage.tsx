import { Newsletter } from '../components/Newsletter';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
type Props = {
  children: React.ReactNode,
  pageTitle?: string
}
const HomePage: React.FC<Props> = ({children,pageTitle}:Props) => {
  return (
    <div className="bg-gray-800 w-100 h-auto text-white">
    <Navbar/>
    <Meta pageTitle={pageTitle}/>
    <div className="flex flex-col items-start justify-center sm:mx-2 md:mx-12">
      <div className="w-full flex flex-col md:flex-row justify-center items-center py-12">
        {/* intro section of home page */}
        <p>This section will have the main or most recent article icon!</p>
        <Newsletter/>
      </div>
      {/* article column view of home page */}
      {children}
    </div>
   
    </div>
  )
}

export default HomePage;