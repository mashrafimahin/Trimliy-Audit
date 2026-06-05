// dependencies
// icons
import { Link2, Copy, Edit2, Trash2 } from "lucide-react";

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
      {/* table data */}
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
                    //! Need to Change
                    href={`http://localhost:8380/${link.shortURL}`}
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
                  "bg-green-500/70 text-sm p-0.5 px-2 text-white rounded-full text-center"
                }
              >
                Active
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors cursor-pointer">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors cursor-pointer">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-md transition-colors cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
