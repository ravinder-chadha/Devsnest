interface User{
    name: string,
    age: number,      // types object
}

var user:User={
    name:"Deepak Chaturvedi",
    age:24
}



const Card : React.FC = () => {

    function foo():string {
        return("Kartik");
    }

    type Door="close"|"open";   //custom types

    var door:Door = "close";  

    var brrr:string = "deepak"   // variable type

    return(
        <div>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h3>{foo()}</h3>
            <h4>{brrr}</h4>
            <h2>{door}</h2>
        </div>
        
    )
}

export default Card;