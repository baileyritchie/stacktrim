import { Newsletter } from '../components/Newsletter';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
type Props = {
  children: React.ReactNode,
  pageTitle?: string
}
const ArticlePage: React.FC<Props> = ({children,pageTitle}:Props) => {
  return (
    <div className="bg-white w-100 h-auto bg-gray-800">
    <Navbar/>
    <Meta pageTitle={pageTitle}/>
    <div className="flex flex-col items-center justify-center sm:mx-2 md:mx-12 my-4">
      {children}
    </div>
   
    </div>
  )
}

export default ArticlePage;