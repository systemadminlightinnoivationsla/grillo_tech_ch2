
# Aplicación de Búsqueda de Personajes de Rick y Morty

## Resumen

Esta aplicación web permite la búsqueda y visualización de personajes de la API de [Rick and Morty](https://rickandmortyapi.com/documentation). Implementa características de paginación, filtrado de personajes por nombre y muestra el estado de los personajes (Vivo, Muerto o Desconocido) mediante etiquetas visuales. La aplicación está construida con **React**, **TypeScript** y **React Bootstrap** para asegurar una interfaz moderna, responsiva y tipada.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- **Node.js** (versión 14.x o superior)
- **npm** (versión 6.x o superior)

Para verificar las versiones instaladas, ejecuta:

```bash
node -v
npm -v
```

## Configuración del Proyecto

Sigue estos pasos para clonar el repositorio, instalar las dependencias y ejecutar la aplicación en un entorno de desarrollo local.

1. **Clonar el repositorio**:

   Clona el repositorio a tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/systemadminlightinnoivationsla/grillo_tech_ch2.git
   ```

2. **Navegar al directorio del proyecto**:

   Muévete al directorio raíz del proyecto:

   ```bash
   cd Challenge\ 2\ React
   ```

3. **Instalar dependencias**:

   Instala los paquetes necesarios especificados en `package.json`:

   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo**:

   Utiliza el siguiente comando para iniciar la aplicación en modo desarrollo, con recarga automática en caliente (hot-reloading):

   ```bash
   npm start
   ```

5. **Acceder a la aplicación**:

   Una vez que el servidor esté en ejecución, abre tu navegador y navega a:

   ```
   http://localhost:3000
   ```

   La aplicación se recargará automáticamente si realizas cambios en el código fuente.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- **`npm start`**: Inicia la aplicación en modo desarrollo en `localhost:3000` con recarga automática.
- **`npm test`**: Ejecuta la suite de pruebas utilizando **Jest**.
- **`npm run build`**: Genera una versión optimizada de la aplicación para producción en el directorio `build`.
- **`npm run eject`**: Expulsa la aplicación del entorno de `create-react-app` (usarlo con precaución, ya que esta acción es irreversible).

## Estructura del Proyecto

El proyecto sigue una estructura clara y modular:

```
├── public/                 # Archivos públicos como index.html y favicons
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Componentes reutilizables
│   │   ├── Character.tsx   # Componente para mostrar la información de cada personaje
│   │   ├── Filter.tsx      # Componente de barra de búsqueda para filtrar personajes
│   ├── App.tsx             # Componente principal que gestiona la paginación y el filtrado
│   ├── index.tsx           # Punto de entrada de la aplicación React
├── package.json            # Definiciones de dependencias y scripts
├── README.md               # Documentación del proyecto
```


## Pruebas

La aplicación incluye pruebas unitarias para los componentes principales. Para ejecutar las pruebas, usa:

```bash
npm test
```

Las pruebas son ejecutadas utilizando **Jest**, y están diseñadas para validar el correcto funcionamiento de componentes críticos como `Character` y `App`.

Puedes ejecutar las pruebas en modo continuo (ideal para desarrollo), o de una sola vez:

- Para ejecutar todas las pruebas en modo continuo (ideal para TDD):
  ```bash
  npm test
  ```
  
- Para ejecutar una sola vez, útil en CI/CD:
  ```bash
  npm test -- --watchAll=false
  ```



## Despliegue productivo

### Despliegue en Netlify o Vercel

La aplicación puede ser desplegada fácilmente en plataformas como **Netlify** o **Vercel**:

- **Netlify**:
  1. Regístrate en [Netlify](https://www.netlify.com/).
  2. Conecta tu repositorio Git y selecciona el proyecto.
  3. Configura el comando de compilación como `npm run build` y el directorio de publicación como `build/`.
  4. Despliega la aplicación con un solo clic.

- **Vercel**:
  1. Regístrate en [Vercel](https://vercel.com/).
  2. Importa tu repositorio y despliega el proyecto.
  3. Vercel optimizará automáticamente la aplicación y la desplegará en producción.

## Uso de Tecnologías

La aplicación está construida utilizando las siguientes tecnologías clave:

- **React**: Biblioteca de JavaScript para la creación de interfaces de usuario.
- **TypeScript**: Superset de JavaScript con tipado estático para mejorar la mantenibilidad del código.
- **React Bootstrap**: Biblioteca de componentes Bootstrap integrados con React para facilitar el desarrollo de interfaces responsivas.
- **styled-components**: Para escribir CSS directamente dentro de los componentes React.
- **Jest**: Framework de pruebas para JavaScript y TypeScript.

## API

Esta aplicación consume datos de la [API de Rick and Morty](https://rickandmortyapi.com/documentation). La paginación y el filtrado se manejan mediante las características de la API, con los siguientes campos utilizados para cada personaje:

- **Nombre** (`name`)
- **Estado** (`status`) — Ej. "Alive", "Dead", "unknown"
- **Especie** (`species`)
- **Género** (`gender`)
- **Imagen** (`image`)

La API base es `https://rickandmortyapi.com/api/character`.

## Conclusión

Este README proporciona instrucciones técnicas detalladas para configurar, ejecutar, probar y desplegar la aplicación **Rick and Morty Characters Search App**. La aplicación está diseñada con tecnologías modernas para garantizar una interfaz fluida, responsiva y completamente tipada con TypeScript.

Para futuras mejoras, considera agregar opciones de filtrado adicionales (especie, género) y pruebas de extremo a extremo utilizando herramientas como **Cypress**.
