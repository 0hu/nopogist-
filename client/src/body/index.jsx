/** @jsxImportSource @emotion/react */

import React from "react";
import AddTodoBar from "../addTodoBar";
import Todo from "../todo";
import { css, jsx } from "@emotion/react";
import { flexbox } from "@mui/system";

export default function Body() {
  const todoTextAndDoneStatusArray = [
    ["백준 문제 풀기", false],
    ["프로그래머스 1번 문제풀고 스터디원 문제 풀이까지 확인할 것", true],
    ["그리기 알고리즘, DP 알고리즘 문제 하나씩 풀기", false],
    [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt nunc in maximus sagittis. Vestibulum interdum non eros ac mattis. Nulla malesuada neque magna, non hendrerit augue sollicitudin a. Sed arcu metus, feugiat ut cursus eget, imperdiet a est. Suspendisse et porta purus. Sed eget metus ullamcorper, efficitur dolor non, sodales elit. Aliquam erat volutpat. Fusce auctor mattis nulla ac aliquam. In mollis enim eget urna commodo placerat. Nulla eget consequat neque, vitae scelerisque diam. Quisque mi ligula, tincidunt non massa et, vulputate venenatis ligula. Vestibulum fringilla nisi id erat consequat, ac vulputate tellus egestas.",
      true,
    ],
  ];

  const todoTextAndDoneStatusArray2 = [
    ["백준 문제 풀기", false],
    ["프로그래머스 1번 문제풀고 스터디원 문제 풀이까지 확인할 것", true],
    [
      "Sed eget metus ullamcorper, efficitur dolor non, sodales elit. Aliquam erat volutpat. Fusce auctor mattis nulla ac aliquam. In mollis enim eget urna commodo placerat. Nulla eget consequat neque, vitae scelerisque diam. Quisque mi ligula, tincidunt non massa et, vulputate venenatis ligula. Vestibulum fringilla nisi id erat consequat, ac vulputate tellus e",
      false,
    ],
    [
      "Sed eget metus ullamcorper, efficitur dolor non, sodales elit. Aliquam erat volutpat. Fusce auctor mattis nulla ac aliquam. In mollis enim eget urna commodo placerat. Nulla eget consequat neque, vitae scelerisque diam. Quisque mi ligula, tincidunt non massa et, vulputate venenatis ligula. Vestibulum fringilla nisi id erat consequat, ac vulputate tellus egestas.",
      true,
    ],
  ];

  const todoArray = todoTextAndDoneStatusArray.map(([todoText, doneStatus]) => (
    <Todo {...{ text: todoText, doneStatus }} />
  ));

  const todoArray2 = todoTextAndDoneStatusArray2.map(
    ([todoText, doneStatus]) => <Todo {...{ text: todoText, doneStatus }} />
  );

  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddTodoBar />
      </div>
      <div css={TodoListContainerStyle}>
        <div
          css={{
            ...TodoListByStatusStyle,
          }}
        >
          <h2 css={TodoStatusStyle}>In Progress</h2>
          {todoArray}
        </div>
        <div
          css={{
            ...TodoListByStatusStyle,
          }}
        >
          <h2 css={TodoStatusStyle}>Done</h2>
          {todoArray2}
        </div>
      </div>
    </div>
  );
}

const TodoListByStatusStyle = css`
  flex: 1 1 40rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoStatusStyle = css`
  display: grid;
  place-items: center;
`;

const TodoListContainerStyle = css`
  display: flex;
`;

const cardStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
