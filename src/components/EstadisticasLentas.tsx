import { getEstadisticas } from "../lib/dashboard";

export default async function EstadisticasLentas() {
  const stats = await getEstadisticas();

  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
        <div className="text-2xl font-bold text-slate-800">{stats.totalTareas}</div>
        <div className="text-xs text-slate-500">Total</div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
        <div className="text-2xl font-bold text-emerald-600">{stats.completadas}</div>
        <div className="text-xs text-slate-500">Completadas</div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
        <div className="text-2xl font-bold text-amber-600">{stats.pendientes}</div>
        <div className="text-xs text-slate-500">Pendientes</div>
      </div>
    </div>
  );
}