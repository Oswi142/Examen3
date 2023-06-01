function restar(a, b) {
  return a - b;
}

function fraccionar(a) {
    let fraccionado=[];
    if (a == 0) {
        fraccionado.push(0);
        return fraccionado;
      }
      var i = 1;
      while (a > 0) 
      {
        if (a >= i) {
          fraccionado.push(i);
          a -= i;
          i++;
        } else 
        {
          fraccionado.push(a);
          a = 0;
        }
      }
    
      return fraccionado;
    }


export default (restar);
  










  