//console.clear();
fetch("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json")
.then((data)=>{
	console.log(data);

	return data.json();
}).then((completedata)=>{

	let data1 = "";
	completedata.map((values)=>{
		data1+= `<tr>
				 <td>${values.asset_description}</td>
				 <td>${values.amount}</td>
				 <td>${values.owner}</td>
				 <td>${values.ticker}</td>
				 <td>${values.representative}</td>
				 <td>${values.type}</td>
				 <td>${values.transaction_date}</td>
				 <td>${values.disclosure_date}</td>
				 <td>${values.district}</td>
				 <td>${values.disclosure_year}</td>
				 </tr>`

	});
	document.getElementById("root").innerHTML=data1;

}).catch((err) => {
	console.log(err);
})