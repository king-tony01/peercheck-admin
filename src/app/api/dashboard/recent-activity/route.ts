import proxyToApi from "@/lib/proxyToApi";
import { BACKEND_ROUTES } from "@/routes/apiRoutes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const res = await proxyToApi(
    request,
    BACKEND_ROUTES.DASHBOARD_RECENT_ACTIVITY(params),
  );
  return res;
}
