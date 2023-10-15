import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const token = localStorage.getItem('token');
  const router:Router = inject(Router);
  if (token) {
    return true;
  }
  router.navigate(['/admin/login']);
  return false;
};
