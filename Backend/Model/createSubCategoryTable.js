export const createSubCategoryTable = `
CREATE TABLE IF NOT EXISTS sub_category(
id SERIAL PRIMARY KEY,
name VARCHAR(225) NOT NULL,
catgeory_id INT REFERENCES categories(id) ON DELETE CASCADE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
