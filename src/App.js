import React from "react";
import logo from "./logo.svg";
import romeo from "./romeo.png";
import "./App.css";
import { table, thead, tbody, tr, th, td } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Romeo and Juliet</h1>
        <img src={romeo} className="App-logo" alt="logo" />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Author</th>
              <td>William Shakespeare</td>
            </tr>
            <tr>
              <th scope="row">Biography</th>
              <td>He was an English poet, playwright, and actor.</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>
                <p>
                  Two young star-crossed lovers whose deaths ultimately
                  reconcile their feuding families.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">Genre</th>
              <td>Shakespearean tragedy</td>
            </tr>
            <tr>
              <th scope="row">Publisher</th>
              <td>Simon & Schuster</td>
            </tr>
            <tr>
              <th scope="row">Release date</th>
              <td>Between 1595 - 1597</td>
            </tr>
            <tr>
              <th scope="row">Book rating</th>
              <td>Five Starts</td>
            </tr>
            <tr>
              <th scope="row">Comments</th>
              <td>Excellent book. It is both scholarly and entertaining.</td>
            </tr>
            <tr>
              <th scope="row">Other books by Shakespeare</th>
              <td>
                <a
                  className="App-link"
                  href="http://shakespeare.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  List of books
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
