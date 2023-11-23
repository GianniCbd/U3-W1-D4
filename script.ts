const fetchData = () => {
  fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then((response) => {
      //   console.log(response);
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Bad Request");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        if (response.status === 403) {
          throw new Error("Forbidden");
        }

        throw new Error("Generic Fetching error");
      }

      return response.json();
    })
    .then((data) => {
      //   console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
    });
};

fetchData();

class prodotto {
  prezzoIvaInclusa: number;
  prezzoIvaEsclusa: number;
  saldo: number;
  constructor(_prezzoIvaInclusa: number, _prezzoIvaEsclusa: number, _saldo: number) {
    this.prezzoIvaInclusa = _prezzoIvaInclusa;
    this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
    this.saldo = _saldo;
  }

  getSaldoCapo(): number {
    return (this.prezzoIvaInclusa * this.saldo) / 100;
  }

  getAcquistoCapo(): number {
    return this.prezzoIvaInclusa - this.getSaldoCapo();
  }
}

// let oggetto1 = new prodotto(22.57, 18.5, 45);
// console.log(`totale capo1 ${oggetto1.getAcquistoCapo()}`);

// let oggetto2 = new prodotto(6.71, 5.5, 30);
// console.log(`totale capo2 ${oggetto2.getAcquistoCapo()}`);

// let oggetto3 = new prodotto(21.35, 17.5, 50);
// console.log(`totale capo3 ${oggetto3.getAcquistoCapo()}`);

// let oggetto4 = new prodotto(24.4, 20, 50);
// console.log(`totale capo4 ${oggetto4.getAcquistoCapo()}`);

// let oggetto5 = new prodotto(13.42, 11, 60);
// console.log(`totale capo4 ${oggetto5.getAcquistoCapo()}`);

function stampaProdotti(prodotti: any[]) {
  prodotti.forEach((element) => {
    console.log("Prezzo Iva Inclusa:", element.prezzoIvaInclusa);
    console.log("Prezzo Iva Esclusa:", element.prezzoIvaEsclusa);
    console.log("Saldo:", element.saldo);
    console.log("Saldo Capo:", element.getSaldoCapo());
    console.log("Acquisto Capo:", element.getAcquistoCapo());
    console.log("--------");
  });
}

let oggetto1 = new prodotto(22.57, 18.5, 45);
let oggetto2 = new prodotto(6.71, 5.5, 30);
let oggetto3 = new prodotto(21.35, 17.5, 50);
let oggetto4 = new prodotto(24.4, 20, 50);
let oggetto5 = new prodotto(13.42, 11, 60);

stampaProdotti([oggetto1, oggetto2, oggetto3, oggetto4, oggetto5]);

console.log(`totale capo1 ${oggetto1.getAcquistoCapo()}`);
console.log(`totale capo2 ${oggetto2.getAcquistoCapo()}`);
console.log(`totale capo3 ${oggetto3.getAcquistoCapo()}`);
console.log(`totale capo4 ${oggetto4.getAcquistoCapo()}`);
console.log(`totale capo5 ${oggetto5.getAcquistoCapo()}`);
