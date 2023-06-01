import dynamic from "next/dynamic";

const App = dynamic(() => import("./admin/App"), { ssr: false });

const page = () => {
  return <App />;
}

export default page

