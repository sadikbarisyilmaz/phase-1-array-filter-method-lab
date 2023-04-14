// Code your solution here
const findMatching = (arr, str) =>{

   return arr.filter(x => {

        if (x.toUpperCase() === str.toUpperCase()){
            return x
        } else if(str !== str){
            return []
        }

    })
}

const fuzzyMatch = (arr, str) =>{
  
    return arr.filter(x => {

        if (x.toUpperCase()[0] === str.toUpperCase()[0]){
            return x
        } else if(str !== str){
            return []
        }

    })
}

const  matchName = (arr, str) => {


 return arr.filter(x => {
        if(x.name === str){return [x]}
    })

}
