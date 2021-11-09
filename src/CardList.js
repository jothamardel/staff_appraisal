import { useState, useEffect } from "react";
import Card from "./Card";
import { httpGetAllTeachers } from "./hooks/request";
import Nav from "./Nav";



function CardList(props) {
	const [teachers, setTeachers] = useState([]);
	const getTeachers = async () => {
		setTeachers(await httpGetAllTeachers());

	}
	useEffect(() => {
		getTeachers();
	}, []);
	return (
		<div>
			<Nav />
			<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
				{
					teachers.length > 0 && teachers.map(item => (
						<Card key={item.fullName} {...item}/>
					))
				}
				{
					!teachers.length && <h4>No result found</h4>
				}
				
			</div>
			{
				// new Array(10).map(item => (
				// 	<Card />
				// ))
			}
		</div>
	)
}

export default CardList;