let isLoggedIn = true;
let userRole = "Admin";

if (isLoggedIn){
    if(userRole = "Editor")
{
    console.log(" Welcome Editor You have edit access now");
}
else if(userRole = "Viewer")
{
    console.log("Welcome Viewer, You have Read only access");
}else if (userRole = "Admin")
{
    console.log("Welcome Admin You have all the access now");
}else {
    console.log("You are a guest user");
}
}