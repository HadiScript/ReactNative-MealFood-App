class Meal {
    constructor(
        id,
        categoriesIds,
        title,
        affordability,
        complexity,
        imgUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegtarian,
        isLactoseFree
    ) {
        this.id = id;
        this.categoriesIds = categoriesIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imgUrl = imgUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegtarian = isVegtarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;