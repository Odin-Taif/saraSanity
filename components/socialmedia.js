import {
  BsWalletFill,
  BsLinkedin,
  BsInstagram,
  BsBehance,
  BsGlobe2
} from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

//-=-=-= The rel attribute defines the relationship between a linked resource and the current document.
const linkRelation = "noreferrer";
//-=-=-=-=-= new blank page will be opened-=-=-=-=-=-=
const linkTarget = "_blank";
export const socialMediaData = [
  {
    id: "2",
    name: "Behance",
    href: "https://www.behance.net/sarakhayat",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsBehance size={20} className="mx-auto" />
  },
  {
    id: "3",
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sara-khayat-844233175/",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsLinkedin size={20} className="mx-auto" />
  },
  {
    id: "4",
    name: "Portfilio",
    href: "https://saraportfilio.com/",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsGlobe2 size={20} className="mx-auto" />
  },
  {
    id: "5",
    name: "Email",
    href: "mailto:sarakhayat249@gmail.com",
    target: linkTarget,
    rel: linkRelation,
    icon: <MdOutlineMailOutline size={20} className="mx-auto" />
  },
  {
    id: "6",
    name: "Instagram",
    href: "https://www.instagram.com/sarakhayatart",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsInstagram size={20} className="mx-auto" />
  }
];

export function SociaMediaLinkHorizntal() {
  return (
    <>
      {socialMediaData &&
        socialMediaData.map(item => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="bg-white  p-2 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-sky-700"
            alt={item.name}>
            {item.icon}
          </a>
        ))}
    </>
  );
}

export function SociaMediaLinkVertical() {
  return (
    <>
      {socialMediaData &&
        socialMediaData.map(item => (
          <div className="flex flex-row my-7 " key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="bg-white  p-1 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-sky-700"
              alt={item.name}>
              <div className="flex flex-row">
                <span className="justify-center ">{item.icon}</span>
                <span className="ml-10"> {item.name}</span>
              </div>
            </a>
          </div>
        ))}
    </>
  );
}

export default { SociaMediaLinkHorizntal, SociaMediaLinkVertical };
