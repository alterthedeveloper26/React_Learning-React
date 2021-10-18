import Record from "../Record/Record";
// import styles from "./RecordList.module.css";

const RecordList = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((record) => (
          <Record name={record.name} age={record.age} />
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
