import axios from "axios"
import { FoodApiParams } from "@/types/types"

export default class FoodApi {
    _baseUrl: string;
    pageSize: number;
    _maxPageSize: number | null = null;
    _currentPageNum: number = 0;

    constructor() {
        this._baseUrl = `http://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_API_KEY}/COOKRCP01/json`;
        this.pageSize = 10;
    }

    async process(params: FoodApiParams, callback: (data: JSON) => void) {
        let pageCount = this.pageSize;
        let base = this._currentPageNum * pageCount;

        if (this._maxPageSize !== null && this._maxPageSize < this._currentPageNum) {
            return;
        }


        // create url
        let url = this._baseUrl + `/${base}/${base + pageCount}/`;

        if (params.name !== undefined) {
            url += `RCP_NM=${params.name}&`;
        }
        if (params.ingredients !== undefined) {
            url += `RCP_PARTS_DTLS=${params.ingredients}&`;
        }
        if (params.category !== undefined) {
            url += `RCP_PAT2=${params.category}&`;
        }



        axios(url).then((res) => {
            let root = res.data.COOKRCP01;
            let result = root.RESULT.MSG;
            let foodList = root.row;
            let totalCount = root.total_count;

            if (this._maxPageSize === null) {
                this._maxPageSize = totalCount / this.pageSize;
            }

            this._currentPageNum

            callback(foodList);
        }).catch((err) => { console.error(err); });
    }
}
