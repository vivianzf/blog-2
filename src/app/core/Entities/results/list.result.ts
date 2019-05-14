import {Links} from './links';
import {Meta} from './meta';

export interface ListResult<T> {
  msg ?: string; // 这个东西我应该是不会写的吧
  data: Array<T>;
  links ?: Links;
  meta ?: Meta;
}
