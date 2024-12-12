import axios from "axios";

export function axiosSetCall(uri, callback) {
    axios
      .get(uri)
      .then((res) => {
        callback(res.data)
      })
      .catch((err) => {
        callback(err);
      });
}

export function changeHandler(event, callback){ //funzione che viene eseguita al cambiamento del valore di input
    let value = event.target.value; //andiamo a dare ad una variabile il valore dell'elemento che ha scatenato l'evento
    callback(value); // aggiorno il valore della variabile reattiva
}