import React from "react"

// import "./style.css"
const Nav = () => {
  return (
    <nav className="w-full bg-cover background-repeat: no-repeat text-green-400 py-5">
      <ul className="flex flex-row justify-end">
        <li className="px-5">Me</li>
        <li className="px-5">Porfolio</li>
        <li className="px-5 md:mr-10">Expertise</li>
      </ul>
    </nav>
  )
}

export default Nav
