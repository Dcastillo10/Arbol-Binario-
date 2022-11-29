class Nodo{
    constructor(num){
        this.num=num;
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
    preOrder(){ //RID


    }

    postOrder(){

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
            this.ultimo.derecha=num; //El siguiente del que era el ultimo será el nuevo nodo
            num.izquierda=this.ultimo;
            this.ultimo=num;
        }
    }

    print(){
        let list="";
        let temp=this.primero;
            while (temp) {
                list += temp.num + "  ";
                temp = temp.derecha;
            }
        return list;
    }
}


let arbolito1=new Arbol();
arbolito1.splitExpression("2*3+4-5+6");
console.log(arbolito1.print());
