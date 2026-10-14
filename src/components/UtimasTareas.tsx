import { getUltimasTareas } from "../lib/dashboard";

const colorPrioridad = {
  alta: "bg-red-100 text-red-700",
  media: "bg-amber-100 text-amber-700",
  baja: "bg-slate-100 text-slate-600",
};

export default async function UltimasTareas() {
  const tareas = await getUltimasTareas();

  return (
    <ul className="space-y-2 my-4">
      {tareas.map((t) => (
        <li
          key={t.id}
          className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3"
        >
          <span className="text-sm text-slate-700">{t.titulo}</span>
          <span className={`text-xs rounded-full px-2 py-0.5 ${colorPrioridad[t.prioridad]}`}>
            {t.prioridad}
          </span>
        </li>
      ))}
    </ul>
  );
}