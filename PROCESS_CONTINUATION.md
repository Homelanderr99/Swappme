# PROCESO (Continuación)

Este documento complementa el proceso de inicialización y control de calidad aplicado al repositorio `Swappme`.

## Acciones realizadas

- Autenticación con GitHub CLI (`gh auth login`) usando navegador.
- Verificación de estado: `gh auth status` con scopes `repo`, `workflow`, `read:org`, `gist`.
- Creación de PR: `feature/nueva-funcionalidad` → `main`.
  - URL del PR: https://github.com/Homelanderr99/Swappme/pull/1
- Protección básica de la rama `main` aplicada (sin checks ni revisiones obligatorias por ahora).
- Adición de esqueletos:
  - `frontend/README.md`
  - `backend/README.md`
- Objetivo: hacer pasar el workflow de CI que valida estructura mínima.

## Verificaciones

- `git pull` / `git push` funcionan correctamente vía HTTPS.
- CI (GitHub Actions) ejecutándose en el PR.
- Estructura mínima exigida por CI presente: `README.md`, `frontend/`, `backend/`.

## Pendientes sugeridos (no bloqueantes)

- Definir framework del frontend (React/Vite, Next.js, etc.) y scaffolding.
- Definir stack del backend (Node/Express, NestJS, etc.) y scaffolding.
- Añadir jobs reales de lint/test al CI y habilitar required status checks.
- (Opcional) Configurar SSH y firmado de commits.

## Notas

- La protección de rama aplicada no obliga aún checks ni revisiones para no bloquear la integración inicial. Se recomienda activarlos cuando existan tests confiables.