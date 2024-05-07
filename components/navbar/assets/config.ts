export type MenuItemType = {
     label : string 
     value : string 
     route : string
}


const MenuItems : MenuItemType[] = [{
     label : "Home" , 
     value : "home",
     route : "/"
}, 
{
     label : "About" , 
     value : "about",
     route : "/about"
},
{
     label : "Services" , 
     value : "services",
     route : "/services"
},
// {
//      label : "Projects" , 
//      value : "projects",
//      route : "/projects"
// },
{
     label : "Contact US" , 
     value : "contact",
     route : "/contact"
},
]

export {MenuItems}