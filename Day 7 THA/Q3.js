let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  
  function legth(obb){
    var size= 0
    for (var k in obb) {
      if (Object.hasOwnProperty.call(obb, k)) {
        size++      
      }
    }
    return size
  }
  
  var ans = legth(student)
  console.log(ans);
