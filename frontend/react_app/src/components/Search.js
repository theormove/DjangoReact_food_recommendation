import React, {useState, useEffect}  from "react";
import {useNavigate} from 'react-router-dom';
import {getAllDishes} from '../dish.service.js'
export default function Search(props) {

	const [chosen_dishes,setChosenDishes] = useState([]);
	const [value,setValue] = useState('');
	const [dishes,setDishes] = useState([]);
	const navigate = useNavigate();


	const onChange = (event) => {	
		setValue(event.target.value);
	}

	const onSearch= (searchTerm) =>{
		setValue("");
		// new array is created to make react re-render the page
		var updated_chosen_dishes = [];
		chosen_dishes.map((item) => {updated_chosen_dishes.push(item)});
		
		var selected_dish = dishes.filter(item => item.name == searchTerm)[0];

		if(selected_dish){
			updated_chosen_dishes.push(selected_dish);
			setChosenDishes(updated_chosen_dishes);
			//delete dish from pool
			var shortened_dishes = dishes.filter(item => item.name != searchTerm);
			setDishes(shortened_dishes);	
		}
		console.log(selected_dish);
		
	}
	const onDelete= (deletedDish) =>{
		var updated_chosen_dishes = [];
		chosen_dishes.map((item) => {updated_chosen_dishes.push(item)});
		updated_chosen_dishes = updated_chosen_dishes.filter(item => item != deletedDish);
		setChosenDishes(updated_chosen_dishes);
		//add dish to pool
		dishes.push(deletedDish);
	}

	const onSubmit= () =>{
		
		props.setSearchRequest(chosen_dishes);
		navigate("/result");
		}

	useEffect(() => {
		async function setDishesStates(){
			const data = await getAllDishes();
			setDishes(data);
			props.setAllDishes(data);
		}
		setDishesStates()
		},[]);

	return (
	<div className="search-area-container position-relative">
			        <h1 id="title" className="py-5">What you do not want to eat?</h1>
					<div className="form-group row align-items-center">  
						<div className="col-1">
						</div>
						<div className="col-9">
							<input type="text" value={value} onChange={onChange} className="form-control align-items-center" placeholder="Something you do not want"></input>
							<div className="dropdown position-absolute col-9"> 
									{dishes.filter(item =>{
										const searchTerm = value.toLowerCase();
										const dishName = item.name.toLowerCase();

										return searchTerm && dishName.includes(searchTerm)
									}).slice(0,10)
										.map((item)=> (
										<div onClick={()=>onSearch(item.name)} className="dropdown-item" key={item.name}>{item.name}</div>
									))}
							</div>
						</div>
						<div className="col-1">
							<button onClick={() => onSearch(value)} className="btn btn-primary py-2 px-5">Add</button>
						</div>				
					</div>
				<table className="table align-middle">
					<tbody>
						{chosen_dishes.map((item) => (
						<tr key={item.name}>
						  <td className="col-3">{item.name}</td>
						  <td className="col-7" align="center"><img src={item.picture} className="chosen-img"/></td>
						  <td className="col-2"><button onClick={() => onDelete(item)} className="btn btn-danger">Delete</button></td>
						</tr>))}

					</tbody>
				</table>	
					<div>
							<div align="center">
								<button onClick={() => onSubmit()} 
								className="btn btn-success my-3 py-3 px-3" >What To Eat?</button>
							</div>
					</div>				
	</div>	
	);
};