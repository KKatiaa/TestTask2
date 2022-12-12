class TestTask {
    constructor(){
        this.list = [];//created global variables
        this.strRes = "";
    }

    addToListNewValue() {
        let valueToAdd = document.querySelector('.nameInput').value;//get value from input by class
        let Exp = /^[=a-zA-Z0-9]+$/i;
        if (valueToAdd.includes("=") && valueToAdd[0] !== '=' && valueToAdd[valueToAdd.length-1] !== '=' && valueToAdd.match(Exp)){
            this.list.push(valueToAdd);//checked whether value was entered in correct way if yes add value to list
        }
        for(let i of this.list){
            this.strRes += i + "\n";
        }
        document.getElementById('nameValue').value=null;
        document.getElementById('listOfValues').innerHTML = this.strRes;
        this.strRes="";
        return false;//form submission will refresh the page by default, to prevent this you need to return false
    }

    sortByName() {
        this.list.sort();//standart sort function  for array
        for(let i of this.list){
            this.strRes += i + "\n";
        }
        document.getElementById('listOfValues').innerHTML = this.strRes;//dislay list
        this.strRes="";
    }

    sortByValue() {
        this.list.sort(function (obj1, obj2) {
            let s1 = obj1.split('=')[1],
                s2 = obj2.split('=')[1];//getting out values from array by choosing second element while spliting list's element by '='
            return (s1 || obj1).localeCompare(s2 || obj2)//compare our values by built in function localecompare
        });
        for(let i of this.list){
            this.strRes += i + "\n";
        }
        document.getElementById('listOfValues').innerHTML = this.strRes;//dislay list
        this.strRes="";
    }

    deleteFromList () {
        let selection = window.getSelection();//get selected part
        let str = String(selection);//transform to str type
        let listToStr = this.list.join(',');//transform array to string
        let strToList = listToStr.replace(str,"");//cut selected part from string
        let tempList = strToList.split(',');//transform string to array
        this.list = tempList;//assign new array to global array
        for(let i of this.list){
            if(!i){
                const index = this.list.indexOf(i);
                if (index > -1) { // only splice array when item is found
                    this.list.splice(index, 1); // 2nd parameter means remove one item only
                }
            }
        }
        for(let i of this.list){
            this.strRes += i + "\n";
        }
        document.getElementById('listOfValues').innerHTML = this.strRes;//dislay list
        this.strRes="";
        console.log(this.list.length, this.list)
    }
}

let globalList = new TestTask();

