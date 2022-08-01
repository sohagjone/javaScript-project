//console.clear();
fetch("https://api.wazirx.com/sapi/v1/tickers/24hr")
.then((data)=>{
	console.log(data);

	return data.json();
}).then((completedata)=>{

	let data1 = "";
	completedata.map((values)=>{
		data1+= `<tr>
				 <td>${values.symbol}</td>
				 <td>${values.baseAsset}</td>
				 <td>${values.openPrice}</td>
				 <td>${values.lowPrice}</td>
				 <td>${values.highPrice}</td>
				 <td>${values.lastPrice}</td>
				 <td>${values.bidPrice}</td>
				 <td>${values.askPrice}</td>
				 </tr>`
	});
	document.getElementById("root").innerHTML=data1;

}).catch((err) => {
	console.log(err);
})