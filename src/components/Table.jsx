// dependencies
// icons
import { Link2 } from "lucide-react";
import ActionHandler from "./ActionsHandler";

// main
const Table = ({ data }) => {
  return (
    <table className="w-full text-left border-collapse">
      {/* header */}
      <thead>
        <tr className="border-b border-white/5 bg-white/2">
          <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
            Short Link
          </th>
          <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider hidden sm:table-cell">
            Original URL
          </th>
          <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
            Clicks
          </th>
          <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider hidden md:table-cell">
            Created
          </th>
          <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider text-right">
            Actions
          </th>
        </tr>
      </thead>
      {/* return with zero items */}
      {data.length === 0 ? (
        <tbody>
          <tr>
            <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
              No links yet. Create your first short link to get started.
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className="divide-y divide-white/5">
          {data.map((link, i) => (
            <tr key={i} className="hover:bg-white/2 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Link2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-medium text-white hover:underline cursor-pointer">
                    <a
                      href={`${import.meta.env.VITE_BASE_URL}/${link.shortURL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.shortURL}
                    </a>
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">
                <span className="text-sm text-slate-400 truncate max-w-50 inline-block">
                  {link.fullURL}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-300 font-medium">
                {link.clicks}
              </td>
              <td className="px-6 py-4 text-sm text-slate-500 hidden md:table-cell">
                {link.createdDate}
              </td>
              <td className="px-6 py-4">
                <div
                  className={
                    link.status === "active"
                      ? "bg-green-500/70 text-sm p-0.5 px-2 text-white rounded-full text-center"
                      : "bg-red-500/70 text-sm p-0.5 px-2 text-white rounded-full text-center"
                  }
                >
                  {link.status === "active" ? "Active" : "Inactive"}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <ActionHandler info={link} />
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
