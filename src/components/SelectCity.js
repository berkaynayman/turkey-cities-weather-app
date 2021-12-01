import { useEffect } from 'react';
import { CityContext, useContext} from '../context/SelectCity';

function SelectCity(){
    const {setCity, cityList} = useContext(CityContext)

    //create <option> and add in #select
    function citysAddToSelect(citys){
        const selectID = document.querySelector("#select")
        for(const key in citys) {
            if (Object.hasOwnProperty.call(citys, key)) {
                const element = document.createElement('option')
                element.value = citys[key].name
                element.innerHTML = citys[key].name;
                selectID.append(element)
            }
        }
    }

    //turkey city get and add in #select
    useEffect(() => {
        citysAddToSelect(cityList)
    },[cityList])
    
    function handleChange(e) {
        setCity(e.target.value)
    }

    return(
        <div className="select-city">   
            <select id="select" onChange={handleChange}></select>
        </div>
    )
}

export default SelectCity