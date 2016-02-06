# skeleton

Esta brujería es un esqueleto de aplicación web construida en MongoDB, Express, Angular, y Node.


## Secciones

#### index.js
Punto de entrada. Para correr la app, usa:
```
node index
```

#### /api
Contiene código relacionado con la API del servidor

#### /public
Carpeta de contenido estático. Contiene todo lo que necesita el front end para funcionar.


## Variables de entorno

#### MONGOLAB_URI
URI de acceso a MongoDB.
No es necesario que el proveedor de base de datos sea MongoLab.

#### SECRET
String nonsense para encriptar tokens. Por seguridad, conviene que sea de más de quince caracteres y suficientemente aleatoria.
