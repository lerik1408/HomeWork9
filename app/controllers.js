exports.homePage = async (ctx) => {
    await ctx.render('index',{
        user: "John"
    })
}