--using metadata from multer lib
CREATE TABLE imagemetadata (
    id SERIAL PRIMARY KEY,
    fieldname VARCHAR(64),
    originalname VARCHAR(64),
    encoding VARCHAR(64),
    mimetype VARCHAR(32),
    size INTEGER
)