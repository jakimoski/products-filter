import FooterGroup from "./FooterGroupComponent";
import FooterSocial from "./FooterSocialComponent";

const eventLinks = [
  "Enter Now",
  "Event Info",
  "Course Map",
  "Race Pack",
  "Results",
  "FAQs",
  "Am I Registered",
];

const registrationLinks = [
  "Volunteers",
  "Gallery",
  "Press",
  "Results",
  "Privacy Policy",
  "Service Plus",
  "Contacts",
];
const scheduleLinks = [
  "Gallery",
  "About",
  "Videos",
  "Results",
  "FAQs",
  "Results",
  "Volunteers",
];

// Footer Component
export default function Footer() {
  return (
    <div className="footer">
      <FooterSocial />
      <FooterGroup title={"Event Info"} links={eventLinks} />
      <FooterGroup title={"Registration"} links={registrationLinks} />
      <FooterGroup title={"Schedule"} links={scheduleLinks} />
    </div>
  );
}
