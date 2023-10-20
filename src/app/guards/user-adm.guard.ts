import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const userAdmGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('userData') ?? 'null').user;
  const router:Router = inject(Router);
  if (user.superAdmin === "true") {
    return true;
  }
  router.navigate(['/admin']);
  return false;
};
