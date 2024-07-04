export default class Cl_estudiante{
    constructor(ced, sex, parcI, parcII, parcIII){
        this.ced=ced;
        this.sex=sex;
        this.parcI=parcI;
        this.parcII=parcII;
        this.parcIII=parcIII;
    }
    set ced(c){
        this._ced=c;
    }
    set sex (s){
        this._sex=s;
    }
    set parcI (pI){
        this._parcI=pI;
    }
    set parcII (pII){
        this._parcII=pII;
    }
    set parcIII (pIII){
        this._parcIII=pIII;
    }
    get ced(){
        return this._ced
    }
    get sex(){
        return this._sex
    }
    get parcI(){
        return this._parcI;
    }
    get parcII(){
        return this._parcII;
    }
    get parcIII(){
        return this._parcIII;
    }
    calcNotFi(){
        return this.parcI+this.parcII+this.parcIII
    }
}