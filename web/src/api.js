import axios from 'axios';

const url = 'http://localhost:8080'



export async function addReviews(name, text){
  // console.log(login_email)
    const data = await axios.post(url+"/reviews/addReviews",{
      name, text}
 )
      .then(function (response) {
        return response
      })
      .catch(function (error) {
       // console.log(error);
      });
    console.log(data)
    return data
}

export const getAllReviews = async()=>{
  let data = await axios.post(url+"/reviews/getReviews",null)
    .then(function (response) {
      return response.data.values
    })
    .catch(function (error) {
     // console.log(error);
    });
    return data
}
export const getAllPr = async()=>{
  let data = await axios.post(url+"/price",null)
    .then(function (response) {
      return response.data.values
    })
    .catch(function (error) {
     // console.log(error);
    });
    return data
}
export const getAllStaff = async()=>{
  let data = await axios.post(url+"/inform",null)
    .then(function (response) {
      return response.data.values
    })
    .catch(function (error) {
     // console.log(error);
    });
    return data
    
}