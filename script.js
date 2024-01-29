let bodyEl = document.body;

// adding h1 to display full name
let fullName = document.createElement('h1');
fullName.textContent = 'Deepak Poly';
fullName.style.textAlign = 'center';
fullName.style.color = '#A9A9A9'
bodyEl.appendChild(fullName);

// adding conatiner, two input elements and button 
let cont = document.createElement('div');
let resultCont = document.createElement('div');
let inp1 = document.createElement('input');
let inp2 = document.createElement('input');
let btn = document.createElement('button');
cont.appendChild(inp1);
cont.appendChild(inp2);
cont.appendChild(btn);
bodyEl.appendChild(cont);

// adding some style to elements
cont.style.display = 'flex'
cont.style.justifyContent = 'center'
resultCont.style.display = 'flex'
resultCont.style.justifyContent = 'center'
resultCont.style.fontWeight = '600'
btn.textContent = 'submit';
btn.style.fontWeight = '600';
btn.style.marginLeft = '1em';
btn.style.padding = '6px';
btn.style.width = '10%';
btn.style.cursor = 'pointer'
inp1.style.marginRight = '1em';
inp1.style.padding = '6px';
inp2.style.padding = '6px';
inp1.placeholder = 'type number..';
inp2.placeholder = 'type number..';

// adding function to sum two inputs
let result = document.createElement('p');
let add = ()=>{
  try{
    let value1 = parseFloat(inp1.value);
    let value2 = parseFloat(inp2.value);
    // logic
    if(isNaN(value1)){
      inp1.style.border = '2px solid red';
      result.textContent = 'Please enter numeric number!';
    }else if(isNaN(value2)){
      inp2.style.border = '2px solid red';
      result.textContent = 'Please enter numeric number!';
    }else{
      let sum = value1 + value2;
      result.textContent = `SUM = ${sum}`;
      resultCont.appendChild(result);
      bodyEl.appendChild(resultCont);
      inp1.style.border = '';
      inp2.style.border = '';
    }
  }catch(err){
    console.log('error', Error.message);
  }
}

// button event listener
btn.addEventListener('click', add);
