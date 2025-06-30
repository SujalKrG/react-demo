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
      <Footer />
    </div>
  );
};

export default App;
