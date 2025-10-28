"use client";
import { useHealthcheck } from "@/hooks/useHealthcheck";

export default function HealthWidget() {
  const { data, isLoading, isError, error, refetch, isFetching } = useHealthcheck();

  return (
    <div className="mt-6 rounded-xl border border-gray-200 dark:border-neutral-800 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Estado del sistema</h2>
        <button
          className="text-sm rounded-full border px-3 py-1 hover:bg-gray-50 dark:hover:bg-neutral-800"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? "Actualizando..." : "Refrescar"}
        </button>
      </div>
      <div className="mt-3 text-sm">
        {isLoading && <p className="text-gray-500">Cargando estado...</p>}
        {isError && <p className="text-red-600">Error: {error.message}</p>}
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="rounded bg-gray-100 dark:bg-neutral-800 p-2">
              <span className="text-gray-500">ok</span>
              <div className="font-mono">{String(data.ok)}</div>
            </div>
            <div className="rounded bg-gray-100 dark:bg-neutral-800 p-2">
              <span className="text-gray-500">time</span>
              <div className="font-mono">{data.time}</div>
            </div>
            <div className="rounded bg-gray-100 dark:bg-neutral-800 p-2">
              <span className="text-gray-500">env</span>
              <div className="font-mono">{data.env ?? "unknown"}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}