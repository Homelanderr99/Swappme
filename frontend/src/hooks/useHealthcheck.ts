"use client";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/lib/http";

type HealthResponse = { ok: boolean; time: string; env?: string };

export function useHealthcheck() {
  return useQuery<HealthResponse, Error>({
    queryKey: ["health"],
    queryFn: async () => {
      const { data } = await http.get<HealthResponse>("/api/health");
      return data;
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
}