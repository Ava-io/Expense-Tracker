export const createGoalTable = `
CREATE TABLE IF NOT EXISTS goals(
id SERIAL PRIMARY KEY,
goal_name VARCHAR(225) NOT NULL,
target_amount INT NOT NULL,
saved_sofar INT NOT NULL,
deadline TIMESTAMP NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
