import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const addTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const { isLoading, error, sendRequest: createTask } = useHttp();

  const enterTaskHandler = async (taskText) => {
    createTask(
      {
        url: "https://learn-react-38602-default-rtdb.firebaseio.com/movies.json",
        method: "POST",
        body: JSON.stringify({ title: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      addTask.bind(null, taskText) //bind append taskText as the first argument
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
