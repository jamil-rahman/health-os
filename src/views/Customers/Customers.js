import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserCard from "../../components/UserCard/UserCard";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../../components/SearchBar/SearchBar";


export default function Customers() {
  const [users, setUsers] = useState([]);
  

  //fetching my users data and storing them in my users variable as an array of objects
  const getUsers = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }
 
  //A function that gives the initials of 
  //the user names taken from the web
  //https://betterprogramming.pub/
  const getInitials = (name) => {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials =
            nameSplit[0].substring(0, 1) +
            nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;

    
   console.log(initials.toUpperCase())
   return initials.toUpperCase()
};

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>
      <Navbar isSearchBar={true} placeholder="Search by Name"/>
      <SearchBar placeholder={'Search by Customer Names'} />
      <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={12} md={6} lg={4} key={Math.random()} style={{display: 'flex'}}>
              <UserCard
                initials={getInitials(user.name)}
                fullName={user.name}
                numberOfOrders={user.phone.substring(2,3)}
              />
            </Grid>
          ))}
        </Grid>
    </>
  );
}
