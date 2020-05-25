--using metadata from multer lib
CREATE TABLE imagemetadata (
    id SERIAL PRIMARY KEY,
    currentpath VARCHAR(64),
    nome VARCHAR(64),
    fieldname VARCHAR(64),
    originalname VARCHAR(64),
    encoding VARCHAR(64),
    mimetype VARCHAR(16),
    size INTEGER
);