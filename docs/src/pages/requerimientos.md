---
id: 5b998d833345424986904b4d67c723a0
title: requerimientos
description: Requerimientos para el concurso de TuApp
slug: /requerimientos
date: 2023-05-09 20:32:00
author:
 - name: Mauricio López Cházaro
   orcid: null
   affiliation: Estudiante, Universidad Tecnológica de Aguascalientes
   email: 210804@utags.edu.mx
---
# Requerimientos
---
## Features
---

### Aplicación de Exámenes
- **Obligatorio**: Preguntas
  - Opción múltiple
  - Abiertas
    - Conteo de caracteres visible
    - Revisión ortográfica opcional
  - Relación
    - Sorteo inicial aleatorio
  - Verdadero o Falso
  - Subir Archivos
  - Escalas (0 - 10 | 1 - 5)
  - Escritura de LATEX
- **Obligatorio**: Formas de evaluación
  - Perfiles de evaluación para reutilizar criterios
    - 1 punto por pregunta (Default)
    - Máximo del grupo
    - Crédito extra
- **Obligatorio**: Revisión automática
  - Por defecto desabilitada para preguntas abierta
- **Importante**: Revisión contra plagio
  - Opciones posibles para esto:
    - PlagPatrol
    - WCopyfind
- **Importante**: Banco de preguntas para crear exámenes aleatorios
- **Deseable**: Detección contra trampa
  - Requeriría de una aplicación adicional instalada y ejecutada durante el examen
  - Opciones
    - Detección de mouse / teclado
    - Lista de procesos durante el examen
- **Deseable**: Chat en tiempo real
  - Permite a los alumnos escribir preguntas al profesor sin interrumpir a sus compañeros

### Control de Grupos / Usuarios
- **Obligatorio**: Un usuario puede tener roles como administrador, profesor o estudiante
  - Administradores: Crean y administran grupos, cuentas de usuario y las configuraciones de los mismos.
  - Profesores: Administran material de clases, asignan tareas y asignan calificaciones.
  - Estudiantes: Tienen acceso a los grupos a los que pertenecen así como al material que les pertenece y a sus asignaciones.
- **Obligatorio**: Autenticación y autorización.
  - Control de acceso
  - Control de features
- **Importante**: Cierre de Grupos

### Asignación de Tareas
- **Obligatorio**: Asignación de tareas grupales
- **Importante**: Tareas directo en la aplicación.
  - Formatos de cuestionarios basados en formas de HTML que permitan contestar preguntas o resolver ejercicios directamente desde la aplicación.
- **Obligatorio**: Calificación de tareas en la aplicación.
- **Importante**: Calificaciones automáticas
- **Importante**: Rechazo automático de entregas fuera de forma.
- **Obligatorio**: Entrega tardía
- **Importante**: Regreso de tarea
- **Deseable**: Video conferencia
- **Obligatorio**: Aplicación de Jupyter Notebooks para la ejecución de Python
- **Obligatorio**: Implementación de LATEX para clases de matemáticas

### Organización de Material de Clases
- **Obligatorio**: Creación de carpetas compartidas con acceso a los miembros del grupo
- **Obligatorio**: Trabajo compartido en las carpetas compartidas
- **Obligatorio**: Respaldo a través de repositorios
- **Obligatorio**: Creación de plantillas
  - Las plantillas pueden unirse a tareas para contestarlo directo en la aplicación.

### Foros
- **Obligatorio**: Creación de foros por materia

### Pase de Lista
- **Obligatorio**: Módulo de pase de lista en teléfono

### Cloud
- **Deseable**: Procesamiento de datos en la nube
