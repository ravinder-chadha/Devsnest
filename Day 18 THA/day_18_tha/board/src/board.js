const Board = ()=>{
    let box=[];
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            box.push(
                <div className="square"
                style={{ backgroundColor: (i + j) % 2 === 0 ? "#000" : "#fff" }}
                ></div>
            );
        }
    }
    return box;
};

export default Board;