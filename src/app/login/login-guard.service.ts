import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardService implements CanActivate{
  constructor(private LoginService:LoginService,
    private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.LoginService.isAuthenticated()){
      return true
    }
    this.router.navigate(["login"]);
    return false;
  }
}
