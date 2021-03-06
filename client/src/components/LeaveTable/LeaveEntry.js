import React from "react";
import getStringDate from '../../handlers/StringData'

function LeaveEntry(props) {
  return (
    <tbody>
      <tr >
        <td>{props.entry.leaveType[0].toUpperCase() +  
            props.entry.leaveType.slice(1)}</td>
        <td>{getStringDate(props.entry.startDate)}</td>
        <td>{getStringDate(props.entry.endDate)}</td>
        <td>{props.entry.nodays}</td>
        <td>{props.entry.status}</td>
        <td>
          {props.entry.status==='approved'||props.entry.status==='rejected'?'':<img src={require("../../icons/pen.png")} id="pen_img" alt="User"></img>}
        </td>
      </tr>
    </tbody>
    
  );
}

export default LeaveEntry;
