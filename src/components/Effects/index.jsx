import React, {useState, useEffect} from 'react';


const Effects = () => {

	const [month, setMonth] = useState('01');
	const [day, setDay] = useState('01');
	const [name, setName] = useState();

	useEffect(
		()=>{
			fetch(`https://nameday.abalin.net/api/V1/getdate?day=${day}&month=${month}&country=cz`)
      .then((response) => response.json())
      .then((data) => {
				setName(data.nameday.cz);
			});
		},
		[month, day]
	);

	return (
		<>
			<h2>Efekty</h2>

			<label>
				Měsíc
				<select value={month} onChange={ (e)=>{ setMonth(e.target.value) } }>
					<option value="01">Leden</option>
					<option value="02">Únor</option>
					<option value="03">Březen</option>
				</select>
			</label>

			<label>
				Den
				<select value={day} onChange={ (e)=>{ setDay(e.target.value) } }>
					<option value="01">1</option>
					<option value="02">2</option>
					<option value="03">3</option>
					<option value="04">4</option>
					<option value="05">5</option>
				</select>
			</label>
			<p>Dnes má svátek <strong>{ name }</strong></p>
		</>
	);
}

export default Effects;
