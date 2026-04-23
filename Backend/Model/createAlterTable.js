export const removeCategoryColumn = `
ALTER TABLE budget 
DROP COLUMN category

`;

export const addCategoryColumn = `
ALTER TABLE budget
ADD COLUMN category_id INT REFERENCES categories(id) ON DELETE CASCADE
`;
