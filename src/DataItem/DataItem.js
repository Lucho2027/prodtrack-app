import React from "react";
import { Link } from "react-router-dom";
import ProdtrackContext from "../ProdtrackContext";
import config from "../config";
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./DataItem.css";

function deleteDataRequest(id, cb) {
  fetch(config.API_ENDPOINT + `/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error));
      }
    })
    .then(data => {
      cb(id);
    })
    .catch(error => {
      console.error(error);
    });
}

export default function DataItem(props) {
  return (
    <ProdtrackContext.Consumer>
      {context => {
        const item = props.item;
        let i;
        let totalGoal = 0;
        let totalProduced = 0;
        let totalDowntime = 0;

        for (i = 1; i < 9; i++) {
          totalGoal += item["goal_" + i];
          totalProduced += item["produced_" + i];
          totalDowntime += item["downtime_" + i];
        }
        let eff = Math.floor((totalProduced / totalGoal) * 100);

        return (
          <div className="daily-summary">
            <p className="date">
              Date:{moment(item.date).format("MM/DD/YYYY")}
            </p>
            <p className="department">Dept. {item.department}</p>
            <p className="goal">Goal {totalGoal} </p>
            <p className="produced"> Prod. {totalProduced}</p>
            <p className="downtime"> Downtm. {totalDowntime}</p>
            <p className="efficiency">Eff. {eff} %</p>
            <div className="summary-buttons">
              <Link to={`/editdataentry/${item.id}`}>
                <EditIcon className="edit-data-button" />
              </Link>

              <DeleteIcon
                className="delete-data-button"
                variant="contained"
                onClick={() => deleteDataRequest(props.id, context.deleteData)}
              />
            </div>
          </div>
        );
      }}
    </ProdtrackContext.Consumer>
  );
}

DataItem.defaultProps = {
  id: "",
  item: {}
};
