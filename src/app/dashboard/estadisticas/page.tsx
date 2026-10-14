import { getEstadisticas, getUltimasTareas } from "@/src/lib/tasks-store" 

//export const dynamic = "force-dynamic";
export const instant = false;

export default async function EstadisticasPage() {
    const stats = await getEstadisticas();
    const lastTasks = await getUltimasTareas();
        return (
            <main>
            <span>
                <h1>Estadísticas</h1>
                <p>Total: {stats.total} · Completadas: {stats.completadas}</p>
            </span>
            
            <span>
                <h2>Última tarea</h2>
                {lastTasks.map((t) => (
                <p>{t.titulo}</p>
                ))}
            </span>
            </main>
        );
}