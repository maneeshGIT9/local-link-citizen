
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <NavigationMenu className="max-w-screen">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Updates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <Link to="/updates" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">General Updates</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Government announcements and news</p>
              </Link>
              <Link to="/polls" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Community Polls</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Vote on community issues</p>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Add other menu items here */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
