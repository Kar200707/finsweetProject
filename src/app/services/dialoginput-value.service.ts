import { Injectable } from '@angular/core';
import {Posts} from "../models/posts";

@Injectable({
  providedIn: 'root'
})
export class DialoginputValueService {
  dialogPostsValue!: Posts;
  isCalled!: string;

  constructor() { }
}
