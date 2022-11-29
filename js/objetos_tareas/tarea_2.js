
/*
Crear una clase Libro que contenga al menos las siguientes propiedades:

ISBN
Título
Autor
Número de páginas
Crear el método mostrarLibro() para mostrar la información relativa al libro 
con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class Libro {
    constructor(titulo,isbn,autor,paginas) {
        this.titulo = titulo
        this.isbn = isbn
        this.autor = autor
        this.paginas = paginas
    }

    mostrarLibro(){
    return `El libro ${this.titulo}, con ISBN: ${this.isbn} crado por el autor:${this.autor}, tiene ${this.paginas} paginas`
    }
    
    
}

let libro1 = new Libro("El Principito",1234567891028,"Antoine de Saint-Exupéry",96)
let libro2 = new Libro("padre rico padre pobre",2738001375204,"robert kiyosaki",264)
*/
