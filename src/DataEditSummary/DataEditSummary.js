import React from "react";
import ProdtrackContext from "../ProdtrackContext";

export default function DataEditSummary(props) {
  return (
    <ProdtrackContext.Consumer>
      {context => {
        const item = props.item;
        let i;
        let totalGoal = 0;
        let totalProduced = 0;
        let totalDowntime = 0;

        for (i = 1; i < 9; i++) {
          totalGoal += parseInt(item["goal_" + i]);
          totalProduced += parseInt(item["produced_" + i]);
          totalDowntime += parseInt(item["downtime_" + i]);
        }
        let eff = Math.floor((totalProduced / totalGoal) * 100);

        return (
          <div className="summar-data">
            <h4 className="summary-header">Summary of parts produced</h4>
            <label className="produced-sum">
              Total Produced {totalProduced} units
            </label>

            <label className="downtime-sum">
              Total Downtime {totalDowntime} minutes
            </label>
            <label className="goal-sum">Total Goal {totalGoal} minutes</label>

            <label className="eff-calc">Efficiency {eff} %</label>
          </div>
        );
      }}
    </ProdtrackContext.Consumer>
  );
}

DataEditSummary.defaultProps = {
  id: "",
  item: {}
};
