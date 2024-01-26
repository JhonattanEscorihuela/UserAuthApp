# UserAuthApp

Una aplicación web de autenticación de usuarios construida con React.js, Redux, y Material-UI. Utiliza tokens JWT para la autenticación, realiza solicitudes a la API mediante Axios, y se despliega fácilmente en Netlify. ¡Registra, autentica y gestiona usuarios de manera segura y eficiente!

## Tecnologías Utilizadas

- **Framework Frontend:** React.js
- **Gestión de Estado:** Redux (con React)
- **Estilo y Diseño:** CSS
- **Herramientas de Autenticación:** jsonwebtoken
- **Comunicación con la API:** Axios
- **Seguridad:** A implementar (ver sección de seguridad)
- **Despliegue:** Netlify

## Instalación y Configuración

1. Clona este repositorio: `git clone https://github.com/JhonattanEscorihuela/UserAuthApp.git`
2. Instala las dependencias: `npm install`
3. Configura el archivo de entorno con las variables necesarias.

## Uso

1. Ejecuta la aplicación localmente: `npm run dev`
2. Accede a la aplicación en [http://localhost:5173](http://localhost:5173)

## Seguridad

Asegúrate de implementar prácticas de seguridad en tu frontend:

- Protección contra ataques de inyección de código (Cross-Site Scripting - XSS).
- Configuración adecuada de encabezados HTTP para prevenir ataques CSRF (Cross-Site Request Forgery).

## Recursos Útiles

- [Documentación oficial de React](https://reactjs.org/)
- [Documentación oficial de Redux](https://redux.js.org/)
- [Material-UI Documentation](https://material-ui.com/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Netlify Documentation](https://docs.netlify.com/)

## Contribuir

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nueva-caracteristica`
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva característica'`
4. Haz push a la rama: `git push origin feature/nueva-caracteristica`
5. Abre un pull request en GitHub.


