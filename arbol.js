class Nodo{
    constructor(num){
        this.num=num;//PUEDE TRATARSE DE UN NUMERO O DE UN OPERADOR
        this.hijoIzquierda=null;
        this.hijoDerecha=null;
        this.izquierda=null;
        this.derecha=null;
    }
}


class Arbol{
    constructor(){
        this.raiz=null;
        this.primero=null;
        this.ultimo=null;
    }

    //1.- Tomar la expresión y generar el árbol binario, imprimiendo la notación preorder y postorder
    preOrder(){ 
        if (!this.raiz) {
            return ".";
        }
        else {
            return _preOrderRecursivo(this.raiz, new Array());
        }
    
    }

    _preOrderRecursivo(nodo, vector){
        if (nodo===null){
            return; 
        }
        vector.push(nodo.num);
    
        if (nodo.hijoIzquierda){ 
            _preOrderRecursivo(nodo.hijoIzquierda, vector);
        }
        if (nodo.hijoDerecha){ 
            _preOrderRecursivo(nodo.hijoDerecha, vector);
        }
    
        return vector;
    }



    //1.- Tomar la expresión y generar el árbol binario, imprimiendo la notación preorder y postorder
    postOrder(){
        if (!this.raiz) {
            return ".";
        }
        else {
            return postOrderRecursivo(this.raiz, new Array());
        }
    }

    _postOrderRecursivo(nodo,vector){
        if (nodo == null){
            return;
        }

        if (nodo.hijoIzquierda){
            postOrderRec(nodo.hijoIzquierda, vector);
        }

        if (nodo.hijoDerecha){
            postOrderRec(nodo.hijoDerecha, vector);
        }
        array.push(nodo.num);
        return vector;
    }

    //Separación de la expresión para poder usarla como vector utilizando el metodo split
    splitExpression(expression) {
        let splExpArray=expression.split(''); 
        for (let i = 0; i < splExpArray.length; i++) {

            //Con la función recursiva
            this._addNewNodoRecursivo(new Nodo(splExpArray[i]));

        }
    }

    
    _addNewNodoRecursivo(num) {
        if (!this.primero) {//Para el inicio, nos queda claro que el primero en agregarse será el primero y al mismo tiempo el ultimo
            this.primero=num;
            this.ultimo=num;
        }
        else { 
            this.ultimo.derecha=num; //El derechauiente del que era el ultimo será el nuevo nodo
            num.izquierda=this.ultimo;
            this.ultimo=num;
        }
    }

    print(){
        let list="";
        //Creamos la función print  
        let temp=this.primero;
            while (temp) {
                list+=`${temp.num} `;
                temp=temp.derecha;
            }
        return list;
    }

    createArbol(){
        let temp=this.primero;

        while (temp) {
            if (temp.num=="*" || temp.num== "/") { //POR JERARQUÍA DE OPERACIONES, LOS PRIMEROS OPERADORES QUE DEBEMOS TOMAS SON * Y /
                temp.hijoIzquierda = temp.izquierda;//CREAMOS EL ARBOL CON AYUDA DE LAS LISTAS DOBLES
                temp.hijoDerecha = temp.derecha;

                if (temp.hijoIzquierda.num === this.primero.num || temp.hijoDerecha.num === this.primero.num) {
                    this.primero = temp;
                }

                if (temp.derecha.derecha !== null) {
                    temp.derecha.derecha.izquierda = temp;
                    temp.derecha = temp.derecha.derecha;
                }
                else {
                    temp.derecha = null;
                }

                if (temp.izquierda.izquierda !== null) {
                    temp.izquierda.izquierda.derecha = temp;
                    temp.izquierda = temp.izquierda.izquierda;
                }
                else {
                    temp.izquierda = null;
                }
                //console.log(`Expresión pendiente:  ${arbolito1.print()}`);
            }
            temp = temp.derecha;
        }
        temp=this.primero;

        while (temp) {
            if (temp.num === "+" || temp.num === "-") {
                temp.hijoIzquierda = temp.izquierda;
                temp.hijoDerecha = temp.derecha;
                if (temp.hijoIzquierda.num === this.primero.num || temp.hijoDerecha.num === this.primero.num) {
                    this.primero = temp;
                }

                if (temp.derecha.derecha != null) {
                    temp.derecha.derecha.izquierda = temp;
                    temp.derecha = temp.derecha.derecha;
                }
                else {
                    temp.derecha = null;
                }

                if (temp.izquierda.izquierda != null) {
                    temp.izquierda.izquierda.derecha = temp;
                    temp.izquierda = temp.izquierda.izquierda;
                }
                else {
                    temp.izquierda = null;
                }
                //console.log(`Expresión pendiente:  ${arbolito1.print()}`);
            }
            temp = temp.derecha;
        }
        this.raiz = this.primero;
    }

    solveWithPreorder(exp){
        let tam=exp.length-1;
        let vec=arbolito1.splitExpression(exp);

        for (let i=tam; i > -1; i--) {
            switch (vec[i]) {
                case "+":
                    console.log((parseInt(vec[vec.length-1]) + parseInt(vec[vec.length-2])));
                    vec[vec.length - 2] = parseInt(vec[vec.length - 1]) + parseInt(vec[vec.length-2]);
                    vec.pop();
                    break;


                case "-":
                    console.log(+(parseInt(vec[vec.length-1]) - parseInt(vec[vec.length - 2])));
                    vec[vec.length-2]=parseInt(vec[vec.length-1]) - parseInt(vec[vec.length-2]);
                    vec.pop();
                    break;


                case "*":
                    console.log(+ (parseInt(vec[vec.length - 1]) * parseInt(vec[vec.length-2])));
                    vec[vec.length - 2] = parseInt(vec[vec.length-1]) * parseInt(vec[vec.length-2]);
                    vec.pop();
                    break;



                case "/":
                    console.log(+ (parseInt(vec[vec.length-1]) / parseInt(vec[vec.length-2])));
                    vec[vec.length-2] = parseInt(vec[vec.length - 1]) / parseInt(vec[vec.length - 2]);
                    vec.pop();
                    break;


                default:
                    vec.push(vec[i]);
                    break;
            }
        }
        return vec[0];
    }
    
}


let arbolito1=new Arbol();
arbolito1.splitExpression("2*3+4-5+6");
console.log(arbolito1.print());
//console.log(arbolito1.createArbol());
console.log(arbolito1.preOrder());
console.log(arbolito1.solveWithPreorder("+-+*23456"));








