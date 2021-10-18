import { useState } from "react";
import "./App.css";
import ProfileFactory from "./components/ProfileFactory/ProfileFactory";
import RecordList from "./components/InformationRecord/RecordList/RecordList";

function App() {
  const [records, setRecords] = useState([]);

  let recordsRendering = <h2>There is no records</h2>;
  if (records.length > 0) {
    recordsRendering = <RecordList items={records} />;
  }

  const addRecordHandler = (record) => {
    setRecords(() => {
      return [record, ...records];
    });
  };

  return (
    <div>
      <ProfileFactory onAddRecord={addRecordHandler} />
      {recordsRendering}
      {/* <ErrorMessage message="Please enter bla blo!" /> */}
    </div>
  );
}

export default App;
