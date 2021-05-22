import React, { useEffect } from "react"

import Burger from "./Menu/Burger"
import Menu from "./Menu/Menu"

const Nav = () => {
  const useClickOutside = (ref, handler) => {
    useEffect(() => {
      const listner = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener("mousedown", listner)
      return () => {
        document.removeEventListener("mousedown", listner)
      }
    }, [ref, handler])
  }
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()

  useClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

export default Nav
