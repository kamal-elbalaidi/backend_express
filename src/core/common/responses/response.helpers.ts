import { ApiResponse } from "./response.type";

export const error_response = (
  code: number = 400,
  message: string,
  errors?: { field?: string; title: string }[],
  meta: Record<string, any> = {}
): ApiResponse => ({
  code,
  success: false,
  message,
  errors,
  meta: { timestamp: new Date().toISOString(), ...meta },
});

export const success_response = <T>(
  code: number = 200,
  message: string,
  data?: T,
  meta: Record<string, any> = {}
): ApiResponse<T> => ({
  code,
  success: true,
  message,
  data,
  meta: { timestamp: new Date().toISOString(), ...meta },
});
