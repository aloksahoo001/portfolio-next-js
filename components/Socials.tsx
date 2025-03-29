"client"
import { Mail } from "lucide-react";
import Link from "next/link";
import { GitHub, Linkedin, Twitter } from "react-feather";
interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  { icon: <GitHub/>, path:"https://github.com/aloksahoo001"},
  { icon: <Linkedin/>, path:"https://www.linkedin.com/in/alok-sahoo-64ba76133/"},
  { icon: <Mail/>, path:"mailto:aloksahoo001@gmail.com"},
]

const Socials: React.FC<SocialProps> = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) =>{
        return <Link key={index} href={item.path} className={iconStyles} passHref target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Socials