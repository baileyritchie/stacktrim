import React from 'react'

export const Newsletter:React.FC = () => {
  return (
    <div className="mx-2 md:mx-24 max-w-md rounded overflow-hidden shadow-lg bg-white">
        <div className="px-1 md:px-2 py-4">
          <h1 className="w-full text-gray-600 text-xl font-bold ">Sign Up for Our Newsletter</h1>
          <p className="text-gray-700 text-base text-md mt-3">
            Join 3,000 other developers that receive exclusive, weekly emails about Serverless and JAMStack ecosystem.
          </p>
          <form className="flex flex-row my-4" onSubmit={()=> console.log('submitting form yyayyyy!')}>
            <input type="text"placeholder="Enter your email" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <button type="submit" className="bg-gray-600 text-white rounded mx-2 w-1/2 hover:bg-gray-400">Notify Me</button>
          </form>
        </div>
        
      </div>
  )
}
