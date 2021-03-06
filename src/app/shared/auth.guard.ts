import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : Observable<boolean> | boolean  {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.authService.logout();
            this.router.navigate(['/admin', 'login']);
        }
    }
}
