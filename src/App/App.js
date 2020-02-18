import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import DataSummary from "../DataSummary/DataSummary";
import DataEntryForm from "../DataEntryForm/DataEntryForm";
import LandingPage from "../LandingPage/LandingPage";
import ProdtrackContext from "../ProdtrackContext";
import config from "../config";
import "./App.css";
import ProdTrackErrorBoundary from "../ProdTrackErrorBoundary";
import EditDataEntry from "../EditDataEntry/EditDataEntry.js";

export default class Apps extends Component {
  state = {
    data: []
  };

  addData = dataentry => {
    this.setState({
      data: [...this.state.data, dataentry]
    });
  };

  deleteData = dataId => {
    const newData = this.state.data.filter(d => d.id !== dataId);
    this.setState({
      data: newData
    });
  };
  setData = data => {
    this.setState({
      data: data
    });
  };

  updateData = updatedData => {
    this.setState({
      data: this.state.data.map(d =>
        d.id !== updatedData.id ? d : updatedData
      )
    });
  };

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(this.setData)
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  }

  render() {
    const contextValue = {
      data: this.state.data,
      addData: this.addData,
      deleteData: this.deleteData,
      setData: this.setData,
      updateData: this.updateData
    };

    return (
      <div className="App">
        <Nav />

        <ProdtrackContext.Provider value={contextValue}>
          <main className="App__main">
            <ProdTrackErrorBoundary>
              <Route exact path="/" component={LandingPage} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dataentry" component={DataEntryForm} />
              <Route path="/datasummary" component={DataSummary} />
              <Route path="/editdataentry/:id" component={EditDataEntry} />
            </ProdTrackErrorBoundary>
          </main>
        </ProdtrackContext.Provider>
        <footer className="credit-icons">
          <p className="credit-creator">Project created by Luis Rodriguez</p>
          <p className="credit-icons-content">
            Icons made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flaticon.com/authors/ddara"
              title="dDara"
            >
              dDara
            </a>{" "}
            from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
          <p className="credit-icons-content">
            Icons made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
          <p className="credit-icons-content">
            Icons made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flaticon.com/authors/kiranshastry"
              title="Kiranshastry"
            >
              Kiranshastry
            </a>
            from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
