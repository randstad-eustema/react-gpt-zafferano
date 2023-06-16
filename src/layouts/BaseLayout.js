import { Outlet } from "react-router-dom";

import TheHeader from "../components/TheHeader";
import TheMain from "../components/TheMain";
import TheFooter from "../components/TheFooter";

export default function BaseLayout() {
  return (
    <>
      <TheHeader />
      <TheMain>
        {/* children */}
        <Outlet />
      </TheMain>
      <TheFooter />
    </>
  );
}
