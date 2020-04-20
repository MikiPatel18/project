const home = function(req,res){
    res.render('home',{title:'Welcome to my site'});
    
};
module.exports = {
    home
};