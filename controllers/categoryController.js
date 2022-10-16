
const categoryService = new CategoryService();

export const getAllCategories = async (req, res, next) => {
    const categoriesList = await categoryService.getCategories();
    res.json(categoriesList);

}

export const getCategoryById = async (req, res, next) => {
    const { id } = req.params;
    const category = await categoryService.getOneCategoryById(id);
    res.json(category)
}
