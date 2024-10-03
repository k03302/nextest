import axios from "axios"

export default class FoodApi {
    _baseUrl: string;
    _category: string;
    _pageSize: number;
    _maxPageSize: number | null = null;

    constructor(category: string, pageSize: number) {
        this._baseUrl = `http://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_API_KEY}/COOKRCP01/json`;
        this._category = category;
        this._pageSize = pageSize;
    }

    async handleRecipe(pageNum: number, callback: (data: JSON) => {}) {
        let pageCount = this._pageSize;
        let base = pageNum * pageCount;

        if (this._maxPageSize !== null && this._maxPageSize < pageNum) {
            return;
        }

        axios(this._baseUrl + `/${base}/${base + pageCount}/RCP_PAT2=${this._category}`).then((res) => {
            let root = res.data.COOKRCP01;
            let result = root.RESULT.MSG;
            let foodList = root.row;
            let totalCount = root.total_count;

            if (this._maxPageSize === null) {
                this._maxPageSize = totalCount / this._pageSize;
            }

            callback(foodList);
        }).catch((err) => { console.error(err); });
    }

    async handleRange(startNum: number, endNum: number, callback: (data: JSON) => {}) {
        for (let idx = startNum; idx <= endNum; idx++) {
            this.handleRecipe(idx, callback);
        }
    }
}
