# Contenido del archivo: /FRONTEND_ALMACEN_SEDH/FRONTEND_ALMACEN_SEDH/README.md

# FRONTEND_ALMACEN_SEDH

Este es un proyecto Angular 19 estructurado en módulos para la gestión de un almacén. El proyecto incluye los siguientes módulos:

- **Acceso**: Módulo para la gestión de acceso de usuarios.
- **Movimientos**: Módulo para el seguimiento de movimientos de inventario.
- **Productos**: Módulo para la gestión de productos en el almacén.
- **Requisiciones**: Módulo para la gestión de requisiciones de productos.
- **Usuarios**: Módulo para la gestión de usuarios del sistema.

## Estructura del Proyecto

```
FRONTEND_ALMACEN_SEDH
├── src
│   ├── app
│   │   ├── acceso
│   │   │   ├── acceso-routing.module.ts
│   │   │   ├── acceso.module.ts
│   │   │   └── components
│   │   ├── movimientos
│   │   │   ├── movimientos-routing.module.ts
│   │   │   ├── movimientos.module.ts
│   │   │   └── components
│   │   ├── productos
│   │   │   ├── productos-routing.module.ts
│   │   │   ├── productos.module.ts
│   │   │   └── components
│   │   ├── requisiciones
│   │   │   ├── requisiciones-routing.module.ts
│   │   │   ├── requisiciones.module.ts
│   │   │   └── components
│   │   ├── usuarios
│   │   │   ├── usuarios-routing.module.ts
│   │   │   ├── usuarios.module.ts
│   │   │   └── components
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   └── environments
│       ├── environment.prod.ts
│       └── environment.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```
npm install
```

## Ejecución

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200`.

## Comandos de Terminal

1. Navega a la carpeta del proyecto:
   ```
   cd FRONTEND_ALMACEN_SEDH
   ```

2. Genera los módulos y sus rutas:
   ```
   ng generate module src/app/acceso --routing
   ng generate module src/app/movimientos --routing
   ng generate module src/app/productos --routing
   ng generate module src/app/requisiciones --routing
   ng generate module src/app/usuarios --routing
   ```

3. Crea las carpetas para los componentes dentro de cada módulo:
   ```
   mkdir src/app/acceso/components
   mkdir src/app/movimientos/components
   mkdir src/app/productos/components
   mkdir src/app/requisiciones/components
   mkdir src/app/usuarios/components
   ```

4. Crea un componente de ejemplo en cada módulo (opcional):
   ```
   ng generate component src/app/acceso/components/AccesoComponent
   ng generate component src/app/movimientos/components/MovimientosComponent
   ng generate component src/app/productos/components/ProductosComponent
   ng generate component src/app/requisiciones/components/RequisicionesComponent
   ng generate component src/app/usuarios/components/UsuariosComponent
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.