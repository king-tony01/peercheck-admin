import proxyToApi from "@/lib/proxyToApi";
import { BACKEND_ROUTES } from "@/routes/apiRoutes";

export async function POST(req: Request) {
  // forwards request to upstream `logout` endpoint
  const res = await proxyToApi(req, BACKEND_ROUTES.LOGOUT_ADMIN);
  return res;
}
