const  searchPerson = document.getElementById("searchPerson");
const profileContainer =document.getElementById('profileContainer');

async function func(){
  const search= searchPerson.value;

 
    const Response = await fetch(`https://api.github.com/search/users?q=${search}`)

    const data = await Response.json();
    profileContainer.innerHTML ="";
    data.items.map((ele)=>{
  
      const userName =ele.login;
      const avatar=ele.avatar_url;
      const profile=ele.html_url;
      console.log(userName,avatar, profile, profileContainer);

      profileContainer.innerHTML +=`
         <div class="inner" >
              <img src="${avatar}" alt="avatarimage">
              <div class="user">
              <h3>${userName}</h3>
              <a href="${profile}">View Profile</a>
              </div>
         </div>
      `
    })
}

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click',()=>{
  profileContainer.innerHTML="";
})

