export const createBudgetTable = `
CREATE TABLE IF NOT EXISTS budget(
id SERIAL PRIMARY KEY,
category VARCHAR(225) NOT NULL,
monthly_limit INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
