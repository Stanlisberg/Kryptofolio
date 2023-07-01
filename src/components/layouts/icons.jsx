import {ReactComponent as GithubIcon} from '../../socials/github.svg'
import {ReactComponent as InstagramIcon} from '../../socials/instagram.svg'
import {ReactComponent as LinkedinIcon} from '../../socials/linkedin.svg'
import {ReactComponent as TwitterIcon} from '../../socials/twitter.svg'
import {ReactComponent as CodepenIcon} from '../../socials/codepen.svg'


function Icons() {
  return ( 
    <div className=" mx-auto">
      <ul className="flex">
        <li className="p-2">
          <a href='#' title='Github'><GithubIcon className='hover:scale-90 ease-in-out duration-300 cursor-pointer'/></a>
        </li>
        <li className="p-2">
          <a href='#' title='Instagram'><InstagramIcon className="icon hover:scale-90 ease-in-out duration-300 cursor-pointer"/></a>
        </li>
        <li className="p-2">
          <a href='#' title='Linkedin'><LinkedinIcon className="icon hover:scale-90 ease-in-out duration-300 cursor-pointer" /></a>
        </li>
        <li className="p-2">
          <a href='#' title='Twitter'><TwitterIcon className="icon hover:scale-90 ease-in-out duration-300 cursor-pointer" /></a>
        </li>
        <li className="p-2">
          <a href='#' title='Codepen'><CodepenIcon className="icon hover:scale-90 ease-in-out duration-300 cursor-pointer" /></a>
        </li>
      </ul>
    </div>
  );
}
export default Icons;

// mx-auto md:mx-0


