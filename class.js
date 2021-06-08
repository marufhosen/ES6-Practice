class phoneDetails{
    constructor(phModel, phPrice){
        this.model = phModel;
        this.price = phPrice;
    }
}

const phone1 = new phoneDetails('Realmi 5i', 13990);
const phone2 = new phoneDetails('Huawi Mate 20 Pro', 98990);
console.log(phone1, phone2);
