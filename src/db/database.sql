CREATE DATABASE IF NOT EXISTS teachersdb;

USE teachersdb;

-- Creación de la tabla "maestros"
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

-- Insertar datos de prueba
INSERT INTO teacher (Id, cedula, fullName, phoneNumber, address) VALUES
(1, '1234567890', 'John Doe', '555-1234', '123 Main Street'),
(2, '9876543210', 'Jane Smith', '555-5678', '456 Elm Street'),
(3, '1357924680', 'Mike Johnson', '555-9876', '789 Oak Avenue');