export const createBudgetTable = `
CREATE TABLE IF NOT EXISTS budget(
id SERIAL PRIMARY KEY,
categories_id INT REFERENCES categories(id) ON DELETE CASCADE,
monthly_limit INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
