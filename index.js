function getIsDeepEqual(obj1, obj2) {
    //  Derin yoxlama burda bas verir (DeepComparison)
    //
    // REKURSIV OLARAQ ISTIFADE EDECEYIMIZ BIR FUNCTION TEYIN EDIRIK
    // YENEDE BIRINCI VE IKINCI OBYEKTLERI QEBUL EDIR
    //
    const deepCompare = (obj1, obj2) => {

        

        // BURDA BELKE SELIQELI BIR SEY YAZMAQ OLARDI. MEQSED NEDIR? HER HANSI OBJECTLERIN BIRINDEN NULL VE YAXUD UNDEFINED GELME EHTIMALI VAR, ELE BIR CASE VARSA BU ZAMAN OBYEKTLERIN BIR BIRINE BERABER OLUB VE OLMADIGINI BIZE BOLEAN KIMI QAYTARIR


        if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === undefined || obj2 === undefined) {
            return obj1 === obj2;
        }; // BU SETRLERDE SUALIM VAR

        const objKeys1 = Object.keys(obj1);   // Birinci obyektin keywordlerini cixaririq

        const objKeys2 = Object.keys(obj2);   // Ikinci obyektlerin keywordlerini cixarir

        if (objKeys1.length !== objKeys2.length) {
            return false;
        }
        // KEYLERIMIZIN SAYINI YOXLAYIRIQ UYGUNDURSA DAVAM

        for (let key of objKeys1) {
            if (!objKeys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
                return false;
            }
        }

        // DEYISKENE MENIMSETDIYIMIZ BIRINCI OBYEKTIN KEYLERI UZERINDE ELEMENT ITERASIYASI EDIRIK, VE KEY İKİNCİ OBYEKTİN İCİNDE
        // TAPILMASA, FALSE QAYTARIR. IKINCI SERTDE ISE BIZ FUNKSIYANI CEGIRMISIQ VE FUNKSIYANIN ALDIGI
        // AKTUAL KEY DEYERI UZRE FERQLENDIRME APARIRIQ UYGUN OLMASSA BIZE FALSE QAYTARIR

        return true;

        // VE SON OLARAQ, BUTUN SERTLERIN HAMISI !FALSE OLDUQDA BIZE SONDA OTURDUYUMUZ DEYERLER BERABERDIRSE TRUE QAYTARIR
    };

    return deepCompare(obj1, obj2);
}


///                 CHECK  
//
console.log(getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(getIsDeepEqual( { a: 1, b: 2, obj: { test: "12" } }, { a: 1, b: 2, obj: { test: "12" } } ));  // true
console.log(getIsDeepEqual( { at: 1, bt: 2, test: [1,2,3], obj: { test: "12" } } , { at: 1, bt: 2, test: [1,2,3], obj: { test: "12", }, })); // true getIsDeepEqual( { at: 1, bt: 2, test: [1,2], obj: { test: "12" } } , { at: 1, bt: 2, test: [1,2,3], obj: { test: "12" } });  // false
console.log(getIsDeepEqual( { at: 1, bt: 2, test: [1, 2, 3, { hi: "hi"} ], obj: { test: "12" } } , { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello"} ], obj: { test: "12" } } )); // false
console.log(getIsDeepEqual( { at: 1, test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } } , { at: 1, test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } } )); // true
console.log(getIsDeepEqual( {  test: [1, 2, 3, { hi: "hello"}, undefined ], obj: { test: "12" } } , { test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } } )); // false


