import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Products from "./components/Products";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeeting from "./components/Greeeting";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
import CounterApp from "./components/CounterApp";
import TimeUpdate from "./components/TimeUpdate";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";
import { UserProvider } from "./components/userContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import UserReducerCounter from "./components/UserReducerCounter";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Person name={"Alexander"} age={200} />
      <Products name={"Biscuit"} price={50} />
      <Weather temp={10} />
      <UserStatus isAdmin={false} />
      <Greeeting timeOfDay={"morning"} />
      <StyledCard />
      <ProfileCard />
      <IconComponent />
      <CounterApp />
      <TimeUpdate />
      <TodoList />
      <Profile />
      <ShoppingList />
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <UserReducerCounter />
      <Footer />
    </div>
  );
};

export default App;
