import { useEffect, useState } from "react";

function useFetch(url) {
 const [data, setData] = useState(null);

 useEffect(() => {
  fetch(url)
   .then((res) => res.json())
   .then((value) => {
    setData(value);
   })
   .catch((err) => {
    window.alert("Ocorreu um erro no Banco de dados");
    console.error(err);
   })
 }, [url]);

 return [data];
}

export default useFetch;