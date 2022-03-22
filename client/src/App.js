import logo from "./logo.svg";
import "./App.css";
import TitleBar from "./titleBar";
import AddTodoBar from "./addTodoBar";
import Todo from "./todo";

function App() {
  const todoTextArray = [
    "백준 문제 풀기",
    "프로그래머스 1번 문제풀고 스터디원 문제 풀이까지 확인할 것",
    "그리기 알고리즘, DP 알고리즘 문제 하나씩 풀기",
  ];

  const todoArray = todoTextArray.map((todoText) => <Todo text={todoText} />);
  return (
    <>
      <TitleBar />
      <AddTodoBar />
      {todoArray}
    </>
  );
}

export default App;
