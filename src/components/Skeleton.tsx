export function SkeletonEstadisticas() {
  return (
    <div className="grid grid-cols-3 gap-4 my-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-white p-4 h-20" />
      ))}
    </div>
  );
}

export function SkeletonLista() {
  return (
    <ul className="space-y-2 my-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <li key={i} className="rounded-lg border border-slate-200 bg-white h-12" />
      ))}
    </ul>
  );
}