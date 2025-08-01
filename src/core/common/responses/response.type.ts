export interface ApiResponse<T = any> {
  code: number;
  success: boolean;
  message?: string;
  data?: T;
  errors?: { field?: string; title: string }[];
  meta?: { timestamp: string; requestId?: string };
}
