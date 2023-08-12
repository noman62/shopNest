
import DashboardHeader from "./DashboardHeader";



// eslint-disable-next-line react/prop-types
const DashboardInfo = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className="w-full h-full">
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}
      <div className="grid grid-cols-1 gap-8 p-10 pb-6 mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
      </div>
    </section>
  );
};

export default DashboardInfo;
