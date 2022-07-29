import React from 'react'
import Footer from '../../Footer'

function FAQIS() {
  return (
    
    <><section className="bg-white text-black" >
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
              <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
              <h2 className="mb-12 text-5xl font-bold leading-none text-center grid  place-items-center sm:text-5xl ">Fragen zum Instanzserver</h2>
              <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                  <div>
                      <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                      <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                  </div>
                  <div>
                      <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                      <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                  </div>
                  <div>
                      <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                      <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                  </div>
                  <div>
                      <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                      <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                  </div>
              </div>
          </div>
          
      </section>
      <div className=' pt-20 w-full sm:hidden  flex justify-between text-gray-font  bottom-0   '>
            <Footer />
           </div>
           <div className=' w-full  hidden md:inline   justify-between text-gray-font   absolute inset-x-0 bottom-0 h-0   '>
            <Footer />
           </div></>
  )
}

export default FAQIS