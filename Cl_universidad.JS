export default class Cl_universidad{
    constructor(){
        this.contEstFemAp=0;
        this.mayor=0;
        this.auxCed="";
        this.contEst=0;
        this.acumNot=0.0;
    }
    //metodos
    procesarEstudiante(e){
        if(e.calcNotFi()>this.mayor){
            this.auxCed=e.ced;
            this.mayor=e.calcNotFi();
        }
        if(e.sex=="F" && e.calcNotFi()>48){
            this.contEstFemAp++;
        }
        this.contEst++
        this.acumNot+=e.calcNotFi();
    }
    calcProm(){
        return this.acumNot/this.contEst;
    }
}