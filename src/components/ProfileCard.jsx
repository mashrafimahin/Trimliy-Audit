// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// main
function ProfileCard({ data }) {
  return (
    <div>
      <div className="text-center p-8 group hover:-translate-y-2 transition-transform duration-300 rounded-xl border border-gray-100/10">
        {/* icons */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-500 blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={data.img}
            alt={data.name}
            className="relative w-full h-full rounded-full object-cover border-2 border-navy-900"
            draggable={false}
          />
        </div>
        {/* text */}
        <h3 className="text-xl font-bold text-white mb-1">{data.name}</h3>
        <p className="text-blue-400 font-medium text-sm mb-4">{data.role}</p>
        <p className="text-slate-400 text-sm mb-6">{data.bio}</p>
        {/* social */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={data.socialLinks.fb}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={data.socialLinks.in}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href={data.socialLinks.github}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
