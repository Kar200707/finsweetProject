import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const loginGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router:Router = inject(Router);
  if (token == null) {
    return true;
  }
  router.navigate(['/admin']);
  return false;
};
