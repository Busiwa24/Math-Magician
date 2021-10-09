/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => (
  <Route path="/">
    <div className="container">
      <h1>Welcome to our page!</h1>
      <p>
    Did you know that nature loves Fibonacci sequences? The spiral shapes of sunflowers and other patterns in nature follow a Fibonacci sequence, 
    where adding the two preceding numbers in the sequence gives you the next (1, 1, 2, 3, 5, 8, etc.)
    And If you multiply 111,111,111 × 111,111,111 you get 12,345,678,987,654,321 - a palindrome number that reads the same forwards or backwards.
    And that works all the way back down to 11 x 11 (121) or just 1 x 1 (1).
    In a crowded room probably two people share a birthday.It only takes 23 people to enter a room to give you an evens chance that two of them have the same birthday.
   With 75 people in the room the chances rise to 99 per cent!
      </p>
    </div>
  </Route>
);
export default Home;
