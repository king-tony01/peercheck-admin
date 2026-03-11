import proxyToApi from "@/lib/proxyToApi";
import { BACKEND_ROUTES } from "@/routes/apiRoutes";

export async function GET(request: Request) {
  const res = await proxyToApi(
    request,
    BACKEND_ROUTES.ANALYTICS_COMPANY_PROFILE_TRAFFIC,
  );
  return res;
}
