interface UserInsightsData {
  totalUsers: TotalUsers;
  newUsers: NewUsers;
  avgSessionDuration: AvgSessionDuration;
  topCity: TopCity;
  userGrowth: UserGrowth[];
  topCities: City[];
  topRoles: TopRole[];
  topIndustries: TopIndustry[];
}

interface TotalUsers {
  count: number;
  change: number;
}

interface NewUsers {
  count: number;
  change: number;
}

interface AvgSessionDuration {
  duration: number;
  unit: string;
}

interface TopCity {
  city: string;
  country: string;
}

interface UserGrowth {
  month: string;
  count: number;
}

interface City {
  city: string;
  count: number;
}

interface TopRole {
  name: string;
  count: number;
}

interface TopIndustry {
  name: any;
  count: number;
}

interface ReviewVolumeByIndustryData {
  industry: string;
  count: number;
}

interface CoverageDepthByIndustryData {
  industry: string;
  count: number;
}

interface CompanyInsightsStats {
  totalCompaniesIndexed: TotalCompaniesIndexed;
  averageCompanyRating: AverageCompanyRating;
  mostReviewedCompany: MostReviewedCompany;
}

interface TotalCompaniesIndexed {
  count: number;
  percentageChange: number;
}

interface AverageCompanyRating {
  rating: number;
}

interface MostReviewedCompany {
  name: string;
}

interface EmergencyConcernSignal {
  id: string;
  companyId: string;
  companyName: string;
  severity: string;
  summary: string;
  concernsCount: number;
  reviewsAnalyzed: number;
  metrics: ConserSignalMetrics;
  analyzedAt: string;
  trend: any;
}
interface ConserSignalMetrics {
  review_count: number;
  interview_review_count: number;
  total_reviews: number;
  current_avg_rating: any;
  previous_avg_rating: any;
  rating_change: any;
  recommend_percentage?: number;
  ceo_approval_percentage?: number;
  positive_interview_percentage?: number;
  time_window_days: number;
}
