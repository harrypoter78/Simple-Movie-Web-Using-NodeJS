import React from "react";

function Footer() {
  return (
    <footer className="footer bg-gray-400 text-center text-white relative">
      <div className="container mx-auto px-28">
        <div className="container px-20 whitespace-pre-line">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 py-1 md:py-10 gap-2">
            <div className="text-2xl font-bold py-8 md:py-4 text-left whitespace-nowrap xl:whitespace-pre-line">
              FE-Assignment
            </div>

            <div className="text-left text-sm">
              <p className="font-bold">Contact</p>
              <ul className="list-none">
                <li>Contact Us</li>
                <li>Library Departements</li>
                <li>Staff Directory</li>
              </ul>

              <p className="font-bold pt-2 md:pt-6">Policies</p>
              <ul className="list-none">
                <li>Library Policies</li>
              </ul>
            </div>

            <div className="text-left text-sm">
              <p className="font-bold">Information for</p>
              <ul className="list-none">
                <li>Front End</li>
                <li>ReactJS Assingment</li>
                <li>Tailwind</li>
                <li>SASS - SCSS</li>
              </ul>
            </div>

            <div className="text-left text-sm">
              <p className="font-normal">
                Find out about upcoming program, event, and resources
              </p>
              <p className="font-bold">Subscribe to our email list &gt;</p>
              <p className="font-normal pt-2 md:pt-6 pb-6 md:pb-1">
                Find us on :
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="py-3 text-sm">
          &copy;{new Date().getFullYear()} - Muhamad Rizky Firmansah
        </div>
      </div>
    </footer>
  );
}

export default Footer;
