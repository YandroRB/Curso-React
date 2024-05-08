# Proyecto: Gestor de Tareas con Mejoras de Rendimiento

## Descripción:

Desarrolla una aplicación de gestión de tareas en React que permita a los usuarios agregar, editar y eliminar tareas. Además, implementa mejoras de rendimiento utilizando useMemo, useRef y useCallback en las áreas apropiadas de la aplicación.

## Requisitos Funcionales:

1. Listado de Tareas:

    - ✅ Muestra un listado de tareas que incluya el nombre de la tarea y su estado (pendiente, en progreso, completada).

    - ✅ Permite agregar nuevas tareas al listado.

2. Edición de Tareas:

    - ✅ Permite editar el nombre de una tarea existente.

    - ✅ Cambia el estado de una tarea entre pendiente, en progreso y completada.

3. Eliminación de Tareas:

    - ✅ Permite eliminar una tarea del listado.

4. Mejoras de Rendimiento:

    - ✅ Utiliza useMemo para memoizar la lista de tareas y evitar recalculos innecesarios.

    - ✅ Emplea useRef para mantener una referencia al elemento de entrada de texto de la tarea para mejorar el rendimiento en las operaciones de edición.

    - ✅ Utiliza useCallback para envolver funciones que se pasan como propiedades a componentes hijos para evitar que se vuelvan a crear en cada renderización.