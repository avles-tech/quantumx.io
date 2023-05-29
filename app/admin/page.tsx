import type { NextPage } from "next";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./App"), { ssr: false });

const page = () => {
  return <App />;
}

export default page