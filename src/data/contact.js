/* eslint-disable import/prefer-default-export */
import emailIcon from "assets/icons/email.footer.svg"
import locationIcon from "assets/icons/location.footer.svg"
import phoneIcon from "assets/icons/phone.footer.svg"

export const contactList = [
  {
    name: "email",
    content: `<a href="mailto:kontakt@endlessenergy.pl">kontakt@endlessenergy.pl</a>`,
    icon: emailIcon,
  },
  {
    name: "location",
    content: `<span>ul M. Ossakowskiego 9/98, <br/> 03-542 Warszawa</span>`,
    icon: locationIcon,
  },
  {
    name: "phone",
    content: `<a href="tel:504-837-804">(+48) 504-837-804</a>`,
    icon: phoneIcon,
  },
]
