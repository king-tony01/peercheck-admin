import { redirect } from "next/navigation";
import { ROUTE_PATHS } from "../routePaths";

export default function Home() {
  redirect(ROUTE_PATHS.ADMIN_DASHBOARD);
}
