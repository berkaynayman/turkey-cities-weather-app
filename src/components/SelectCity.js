import axios from 'axios';
import { useState, useEffect } from 'react';
import { CityContext, useContext} from '../context/SelectCity';


function SelectCity(){
    const {city,setCity} = useContext(CityContext)

    let turkishtoEnglish = function (item) {
        return item.replace('Ğ','g')
            .replace('Ü','u')
            .replace('Ş','s')
            .replace('I','i')
            .replace('İ','i')
            .replace('Ö','o')
            .replace('Ç','c')
            .replace('ğ','g')
            .replace('ü','u')
            .replace('ş','s')
            .replace('ı','i')
            .replace('ö','o')
            .replace('ç','c');
    };
    function citysAddToSelect(citys){
        const selectID = document.querySelector("#select")
        for(const key in citys) {
            if (Object.hasOwnProperty.call(citys, key)) {
                const element = document.createElement('option')
                element.value = turkishtoEnglish(citys[key].name.toLowerCase());
                element.innerHTML = citys[key].name;
                selectID.append(element)
            }
        }
    }

    useEffect(() => {
        console.log("calişti");
         axios("https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json")
        .then((data) => citysAddToSelect(data.data))
    },[])
    
    
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