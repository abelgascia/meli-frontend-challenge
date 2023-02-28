# Challenge frontend para Mercado Libre

## Cómo correr el proyecto:
Una vez clonado el repositorio es necesario, primeramente, configurar los archivos `.env` localizados respectivamente en las carpetas `client` y `server`. Luego de ello ejecutar los siguientes comandos en consola:
### Frontend:
```bash
cd ./client # Dirigirse a la carpeta client

npm install # Instalar las dependencias del proyecto

npm start # Ejecutar el servidor del frontend
```


### Backend:
```bash
cd ./server # Dirigirse a la carpeta client

npm install # Instalar las dependencias del proyecto

npm run dev # Ejecutar el servidor con nodemon
```
---

## 🍟 Comentarios generales
El proyecto fue inicializado con la herramienta `create-react-app` con la template de `typescript` para ahorrar tiempo. Para los estilos se utilizó `SASS` como preprocesador de CSS.

Para la parte de backend se creó una API sencilla en `node.js` utilizando `express.js` para el servidor http. El lenguaje utilizado fue javascript para agilizar el proceso, ya que el enfoque está en el frontend.

---

## 👀 Comentarios Frontend
La estructura del proyecto se basa en `atomic design` para poder ser escalable y a la vez organizado. En caso de crecer se puede optar por otro tipo de estructura, pero para la complejidad de este proyecto encajó bastante bien.

Hay algunos datos en el pdf de instrucciones que no vienen en la respuesta de la API como la ciudad donde reside el vendedor (Capital Federal).

Me tomé la libertad de hacer un loader para mostrar mientras carga al redigir a `/items?search=` o `/items/MLA928585452` para mejorar la experiencia de usuario.

Utilicé la herramienta `react-helmet` para agregar meta tags y mejorar así el SEO de la web.

`🕷️ IMPORTANTE:` Por cuestión de tiempo y problemas con jest corriendo en typescript no pude agregar tests al proyecto.

---

## 💻 Comentarios backend
Como mencioné anteriormente, utilicé javascript para optimizar el tiempo. También al ser una API sencilla no vi la necesidad de extender mucho la funcionalidad.

Respecto a la estructura, al igual que el frontend opté por la mejor opcion para priorizar la limpieza y escalabilidad del código y los modulos.
