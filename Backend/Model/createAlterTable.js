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

export const addColumns = `
ALTER TABLE users
ADD COLUMN IF NOT EXISTS currency VARCHAR(50) DEFAULT 'naira' CHECK (currency IN ('naira', 'usd','gbp', 'jpy', 'cedi', 'ksh shilling')),
ADD COLUMN IF NOT EXISTS language VARCHAR(50) DEFAULT 'english' CHECK (language IN ('english', 'french', 'portugese')),
ADD COLUMN IF NOT EXISTS language VARCHAR(50) DEFAULT 'english' CHECK (language IN ('english', 'french', 'portugese')),
ADD COLUMN IF NOT EXISTS dark_mode VARCHAR(10) DEFAULT 'dark' CHECK (dark_mode IN ('dark', 'light')),
ADD COLUMN IF NOT EXISTS compact_view VARCHAR(10) DEFAULT 'true' CHECK (compact_view IN ('true', 'false')),
ADD COLUMN IF NOT EXISTS animations VARCHAR(10) DEFAULT 'true' CHECK (animations IN ('true', 'false')),
ADD COLUMN IF NOT EXISTS budget_alerts VARCHAR(10) DEFAULT 'true' CHECK (budget_alerts IN ('true', 'false')),
ADD COLUMN IF NOT EXISTS weekly_summary VARCHAR(10) DEFAULT 'true' CHECK (weekly_summary IN ('true', 'false')),
ADD COLUMN IF NOT EXISTS goal_milestone VARCHAR(10) DEFAULT 'true' CHECK (goal_milestone IN ('true', 'false')),
ADD COLUMN IF NOT EXISTS large_transactions VARCHAR(10) DEFAULT 'true' CHECK (large_transactions IN ('true', 'false'))
`;

// currency VARCHAR(50) DEFAULT 'naira' CHECK (currency IN ('naira', 'usd', 'gbp', 'jpy', 'inr', 'cedi', 'ksh shilling')),
