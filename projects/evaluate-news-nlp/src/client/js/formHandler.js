const { response } = require("express")

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

const formdata = new FormData();
formdata.append("key", "4481a87f8364d302f215de114b845dae");
formdata.append("txt", "dark");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...
formdata.append("tt", "a");                     // all topics

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const postData = async(url = '',data = {})=>{
  
  const reaponse = await fetch(url,{
      method:'POST',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try{
      const newData = await response.json();
      return newData
  } catch(error){
      console.log('error',error)
  }

};

function performAction(event){
    event.preventDefault()

    let formText = document.getElementById('name').value
    fetch('https://api.meaningcloud.com/topics-2.0',formdata)
    .then(res => ({
        status: response.status, 
        body: response.json()
    }))
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

}




export { handleSubmit }



