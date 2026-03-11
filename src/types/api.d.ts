type ApiResponseStatus = "success" | "error";

interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

interface PaginationMetaLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links: PaginationMetaLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

interface BaseApiResponse<T = unknown> {
  message: string;
  status: string;
  code: number;
  data?: T;
  links?: PaginationLinks;
  meta?: PaginationMeta;
}

interface ApiSuccessResponse<T = unknown> extends BaseApiResponse<T> {
  status: "success";
  data: T;
}

interface ApiErrorResponse extends BaseApiResponse<never> {
  status: "error";
  data?: never;
}

interface PaginatedApiSuccessResponse<
  T = unknown,
> extends ApiSuccessResponse<T> {
  links: PaginationLinks;
  meta: PaginationMeta;
}

interface LoginAdmin {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  isSuperAdmin: boolean;
  createdAt: string;
}

interface LoginResponse extends ApiSuccessResponse<LoginAdmin> {
  accessToken: string;
}
