fetch("https://fakestoreapi.com/products").then((data) => { //api link
    //console.log(data);
    return data.json(); //convertd to object

}).then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.image}</td>
    </tr>`; //value.[title names in api]
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})