"client"
import Link from "next/link";
import { GitHub, Linkedin, Twitter } from "react-feather";
const socials = [
  { icon: <GitHub/>, path:""},
  { icon: <Linkedin/>, path:""},
  { icon: <Twitter/>, path:""},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) =>{
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Socials