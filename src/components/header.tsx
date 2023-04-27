import React from "react";
const header = () => {
   

  return (
    <section>
  <nav className=" navbar-bg dark:bg-gray-900 fixed w-full z-20 top-0 left-0 -b  dark:-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  0 rounded-lg text-white  md:flex-row md:space-x-8 md:mt-0 md:-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:font-bold md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-bold md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700">Projetos</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-bold md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700">Experiencias profissionais</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-bold md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700">Contato</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  </section>
);
  }
export default header;