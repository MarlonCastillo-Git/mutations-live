import { Suspense } from "react";
import EstadisticasLentas from "@/src/components/EstadisticasLentas";
import UltimasTareas from "@/src/components/UtimasTareas";
import { SkeletonEstadisticas, SkeletonLista } from "@/src/components/Skeleton";

export const instant = false;

export default function DashboardPage() {
    return (
        <main>
            <h1>Dashboard</h1>
            <Suspense fallback={<SkeletonEstadisticas/>}>
                <EstadisticasLentas/>
            </Suspense>
            <Suspense fallback={<SkeletonLista/>}>
                <UltimasTareas/>
            </Suspense>
        </main>
    )
}