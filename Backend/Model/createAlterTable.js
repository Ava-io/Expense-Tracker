// export const removeCategoryColumn = `
// ALTER TABLE budget
// DROP COLUMN category

// `;

// export const addCategoryColumn = `
// ALTER TABLE budget
// ADD COLUMN category_id INT REFERENCES categories(id) ON DELETE CASCADE
// `;

// export const removeTransactionCategoryColumn = `
// ALTER TABLE transactions
// DROP COLUMN category
// `;

// export const addTransactionCategoryColumn = `
// ALTER TABLE transactions
// ADD COLUMN IF NOT EXISTS category_id INT REFERENCES categories(id) ON DELETE CASCADE
// `;

// export const removeSubCategoryColumn = `
// ALTER TABLE sub_category
// DROP COLUMN catgeory_id
// `;

export const addSubCategoryColumn = `
ALTER TABLE sub_category
ADD COLUMN IF NOT EXISTS category_id INT REFERENCES categories(id) ON DELETE CASCADE
`;

export const addSubCategory = `
ALTER TABLE transactions
ADD COLUMN IF NOT EXISTS sub_category_id INT REFERENCES sub_category(id) ON DELETE CASCADE
`;
