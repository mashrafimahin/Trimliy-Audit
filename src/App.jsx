// icons
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// functions
import { DataFetcher } from "./handler/DataFetcher";

// main
const App = () => {
  // state
  const [state, setState] = useState([]);
  const [text, setText] = useState("");

  // control state
  const controlState = async () => {
    const data = await DataFetcher();
    setState(data);
  };

  // handle form
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // submit
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `fullURL=${encodeURIComponent(text)}`,
      });

      // checking
      if (response.ok) {
        setText("");
        controlState();
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // fetch
  useEffect(() => {
    controlState();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6 relative">
        <div className="container mx-auto max-w-6xl text-center z-10 relative">
          {/* info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Trimly 2.0 is now live
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Shorten, Track & <br className="hidden md:block" />
              <span className="gradient-text">Manage Links Smarter</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The premium URL shortener for modern teams. Build branded links,
              track real-time analytics, and optimize your conversion rates all
              in one powerful platform.
            </p>
          </div>

          {/* input fields */}
          <div className="max-w-3xl mx-auto relative group">
            {/* form */}
            <form
              onSubmit={handleForm}
              className="relative glass-card p-2 md:p-3 flex flex-col md:flex-row gap-3"
            >
              <div className="flex-1 relative bg-white">
                <input
                  type="url"
                  name="fullurl"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste your long URL here..."
                  className="w-full pl-12 h-14 bg-navy-900/50 text-lg border-transparent focus:bg-navy-900"
                />
              </div>
              <button
                type="submit"
                className="px-8 shrink-0 bg-blue-500 cursor-pointer"
              >
                <ArrowRight size={30} className="text-white" />
              </button>
            </form>
          </div>

          {/* table */}
          <div className="mt-10 w-full">
            <table className="w-full text-left text-sm text-gray-700 border border-gray-400">
              <thead className="bg-gray-100 text-xs font-semibold text-gray-600 border border-gray-400">
                <tr>
                  <th className="px-6 py-2 font-semibold">Full URL</th>
                  <th className="px-6 py-2 font-semibold">Short URL</th>
                  <th className="px-6 py-2 font-semibold">Clicks</th>
                </tr>
              </thead>
              <tbody className="divide-y text-xs divide-gray-400 bg-white">
                {state.length === 0 ? (
                  <tr>
                    <td></td>
                    <td className="text-center py-4">No data found.</td>
                    <td></td>
                  </tr>
                ) : (
                  state.map((item, i) => (
                    <tr key={i}>
                      <td className="py-2 px-4 hover:underline">
                        <a href={item.fullURL} target="_blank">
                          {item.fullURL}
                        </a>
                      </td>
                      <td className="py-2 px-4 hover:underline">
                        <a
                          href={`http://localhost:3000/${item.shortURL}`}
                          target="_blank"
                        >
                          {item.shortURL}
                        </a>
                      </td>
                      <td className="py-2 px-4">{item.clicks ?? 0}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
