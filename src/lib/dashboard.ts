export type Estadisticas = {
  totalTareas: number;
  completadas: number;
  pendientes: number;
};

export type Tarea = {
  id: string;
  titulo: string;
  prioridad: "baja" | "media" | "alta";
};

export async function getEstadisticas(): Promise<Estadisticas> {
  // Simula una consulta pesada (agregaciones, reportes, etc.)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    totalTareas: 12,
    completadas: 7,
    pendientes: 5,
  };
}

export async function getUltimasTareas(): Promise<Tarea[]> {
  // Simula una consulta más rápida que la de estadísticas
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return [
    { id: "1", titulo: "Revisar PR de autenticación", prioridad: "alta" },
    { id: "2", titulo: "Actualizar documentación", prioridad: "media" },
    { id: "3", titulo: "Limpiar logs antiguos", prioridad: "baja" },
  ];
}