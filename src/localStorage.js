/*
 * @Author: Macrolam
 * @Date:   2017-03-18 21:43:34
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-03-19 00:10:07
 */

'use strict';
const storageMesKey = 'ToDoList-local-key';
export default{
  fetch () {
    return JSON.parse(window.localStorage.getItem(storageMesKey) || '[]');
  },
  save (items) {
    window.localStorage.setItem(storageMesKey, JSON.stringify(items));
  },
  remove () {
    window.localStorage.removeItem(storageMesKey);
  }
};
