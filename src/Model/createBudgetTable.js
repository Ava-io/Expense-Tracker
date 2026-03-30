export const createBudgetTable = `
CREATE TABLE IF NOT EXISTS(
id SERIAL PRIMARY KEY,
category VARCHAR(225) NOT NULL,
monthly_limit INT NOR NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
