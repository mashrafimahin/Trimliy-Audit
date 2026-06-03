// dependencies
import { useSlices } from "../hooks/useSlices";
import { handlePopupView } from "../app/features/FlowControlSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { Globe2, Activity, Link2, MousePointerClick } from "lucide-react";
// components
import Chart from "../components/Chart";
import Button from "../components/Button";
import Table from "../components/Table";

const Overview = () => {
  // state
  const { data } = useSlices("overviewData");
  const { dispatch } = useSlices("flowControl");
  // expected icons
  const expectedIcons = [Link2, MousePointerClick, Activity, Globe2];
  // filter data
  const filteredData = data.overview.stats.map((item, i) => ({
    ...item,
    icon: expectedIcons[i],
  }));
  // merged data
  const info = {
    ...data.overview,
    stats: filteredData,
  };

  // handle popup control
  const handlePopup = () => {
    dispatch(handlePopupView());
  };

  return (
    <div className="space-y-8">
      {/* top instructions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Header variant={"h3"}>Dashboard</Header>
          <Paragraph variant={"small"} className={"-mt-2.5"}>
            Welcome back, here's what's happening with your links today.
          </Paragraph>
        </div>
        <Button onClick={handlePopup}>
          <Link2 className="w-4 h-4 mr-2" /> Create Link
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {info.stats.map((stat, i) => (
          <div key={i}>
            <div className="transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}
                >
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <Paragraph variant={"small"} className={"text-sm mb-1"}>
                {stat.label}
              </Paragraph>
              <Header variant={"h3"}>{stat.value}</Header>
            </div>
          </div>
        ))}
      </div>

      {/* analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 p-0 overflow-hidden flex flex-col">
          {/* chart header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            {/* chart header */}
            <div>
              <Header variant={"h3"} className={"text-2xl"}>
                Click Performance
              </Header>
              <Paragraph variant={"small"} className={"text-sm -mt-2.5"}>
                Total clicks over the last 7 days
              </Paragraph>
            </div>
            {/* selection */}
            <select className="bg-navy-900 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </div>
          {/* chart view */}
          <div className="h-75 p-6 pb-2 w-full">
            <Chart data={info.chartData} />
          </div>
        </div>

        {/* Top Devices */}
        <div className="flex flex-col p-0">
          {/* header */}
          <div className="p-6 border-b border-white/5">
            <Header variant={"h3"} className={"text-2xl"}>
              Top Devices
            </Header>
            <Paragraph variant={"small"} className={"text-sm -mt-2"}>
              Clicks by device type
            </Paragraph>
          </div>
          {/* graph */}
          <div className="flex-1 p-6">
            <div className="space-y-6">
              {info.devices.map((device, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">
                      {device.name}
                    </span>
                    <span className="text-white font-bold">
                      {device.percent}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-navy-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${device.color} rounded-full`}
                      style={{ width: `${device.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Links */}
      <div className="p-0 overflow-hidden">
        {/* header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <Header variant={"h3"} className={"text-2xl"}>
            Recent Links
          </Header>
          <Button>View All</Button>
        </div>
        {/* table of contents */}
        <div className="overflow-x-auto">
          <Table data={info.recentLinks} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
