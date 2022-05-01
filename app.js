const changeDeg = () =>{
    const fv = document.getElementById('fd').value;

    

    let newcv = (fv) * 9/5 + 32;

    console.log(newcv);

    document.getElementById('cd').value = newcv+" Farenheit";
  }
