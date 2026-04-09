export const createTransactionTable = `
CREATE TABLE IF NOT EXISTS transactions(
id SERIAL PRIMARY KEY,
transaction VARCHAR(225) NOT NULL,
category_id INT REFERENCES category(id) ON DELETE SET NULL ,
date DATE,
amount INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
