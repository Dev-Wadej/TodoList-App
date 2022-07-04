import { datas } from './apiRelated/data'
export default class List {
    constructor() {
        this.list = []
    }
    loadItem() {
        /// 1.  Fetches Itm from the API
        datas.forEach(data => this.list.push(data))
    }
}