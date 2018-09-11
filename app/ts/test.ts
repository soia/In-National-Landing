const test : string = "hello";
const newString : string = "new param";
const obj = {sf: 1, kk: "saf", sfa: true};

function someFuction(obj : object) : void {
    console.log(Object.values(obj));
}

someFuction(obj);