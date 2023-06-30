# Proyecto de Aplicación de Maestros

Este proyecto es una aplicación de maestros que permite almacenar y mostrar información sobre maestros en una base de datos. La aplicación utiliza Node.js, Express, Swagger y MySQL.

## Configuración de la Base de Datos

1. Asegúrate de tener instalado MySQL en tu sistema.

2. Crea una base de datos llamada `teachersdb` utilizando el siguiente comando:

```sql
CREATE DATABASE IF NOT EXISTS teachersdb;
```

3. Usa la base de datos recién creada con el comando:

```sql
USE teachersdb;
```

4. Crea la tabla `teacher` con los campos requeridos utilizando el siguiente comando:

```sql
CREATE TABLE teacher (
  Id INT PRIMARY KEY AUTO_INCREMENT,
  cedula VARCHAR(10),
  fullName VARCHAR(255),
  phoneNumber VARCHAR(15),
  address VARCHAR(255),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

5. Inserta algunos datos de prueba en la tabla `teacher` con el siguiente comando:

```sql
INSERT INTO teacher (Id, cedula, fullName, phoneNumber, address) VALUES
(1, '1234567890', 'John Doe', '555-1234', '123 Main Street'),
(2, '9876543210', 'Jane Smith', '555-5678', '456 Elm Street'),
(3, '1357924680', 'Mike Johnson', '555-9876', '789 Oak Avenue');
```

## Configuración de las Variables de Entorno

Antes de ejecutar la aplicación, asegúrate de configurar las variables de entorno necesarias. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:

```
## MySQL Database
DB_HOST=localhost
DB_USER=root
DB_PASS=Password123
DB_PORT=3306
DB_DATABASE=teachersdb
```

Asegúrate de ajustar los valores según tu configuración de base de datos.

## Ejecución de la Aplicación

Sigue estos pasos para ejecutar la aplicación:

1. Instala las dependencias del proyecto ejecutando `npm install`.

2. Inicia la aplicación ejecutando `npm start`.

3. La aplicación estará disponible en `http://localhost:3000`.

¡Listo! Ahora puedes utilizar la aplicación para visualizar y gestionar la información de los maestros.

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme. ¡Disfruta del proyecto!