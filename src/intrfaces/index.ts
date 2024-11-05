export interface Iprodect {
    id? : string | undefined
    title : string
    descreption : string
    imagUrl : string
    price : string 
    color : string[]
    catigury : {
        imag : string
        name :string
    }
}

export interface InputForm {
    id : string
    name : "title" | "descreption" | "imagUrl" | "price"
    label : string
     type : string

}