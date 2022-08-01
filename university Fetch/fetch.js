//console.clear();
fetch("http://universities.hipolabs.com/search?country=United+States")
.then((data)=>{
	//console.log(data);

	return data.json();
}).then((completedata)=>{

	let data1 = "";
	completedata.map((values)=>{
		data1+= `<tr>
				 <td>${values.name}</td>
				 <td>${values.country}</td>
				 <td>${values.web_pages}</td>
				 </tr>`
	});
	document.getElementById("root").innerHTML=data1;

}).catch((err) => {
	console.log(err);
})