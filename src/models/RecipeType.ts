
type RecipeType = {
    id: number,
    title: string,
    description: string,
    instructions: string,
    userId:number,
    ingredients:string[],
    imgUrl?:string
}

export default RecipeType
