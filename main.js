const xhttp = new XMLHttpRequest();
xhttp.onload = function(data){
    if (data.target.status == 200){
        const valasz = data.target.response;
        const lista = JSON.parse(valasz);
        console.log(valasz);
        console.log(lista);

        let dog_table_html = "";

        lista.forEach(element => {
            console.log(element);

            const tablazatSor = `<tr style="font-style: normal;">
            <td>${element.id}</td>
            <td>${element.nev}</td>
            <th>${element.eletkor}</th>
            <th>${element.fajta}</th>
            <th>${element.gazda_neve}</th>
            </tr>`;
            dog_table_html += tablazatSor;
            console.log(tablazatSor);
            
        });
        document.getElementById('dog_table').innerHTML = dog_table_html;

    }
};
xhttp.open("GET", "data1.json");
xhttp.send();