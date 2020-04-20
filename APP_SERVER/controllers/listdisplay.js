//Miki Patel-8622608

let movieArray = [{title:"Movie Name", director:"Director Name"},
                {title:"The Dark Knight", director:"Christopher Nolan"},
                {title:"The Matrix", director:"Lilly Wachowski"},
                {title:"Joker", director:"Todd Phillips"}];



const listdisplay = function(req,res){
    res.render('listdisplay',{movies:movieArray}); 
};
module.exports = {
    listdisplay
}

    