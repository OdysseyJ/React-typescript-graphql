import React from "react";
import styled, { css } from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체"
  },
  {
    name: "grass",
    text: "풀"
  },
  {
    name: "poison",
    text: "독"
  },
  {
    name: "fire",
    text: "불"
  },
  {
    name: "flying",
    text: "비행"
  },
  {
    name: "water",
    text: "물"
  },
  {
    name: "bug",
    text: "곤충"
  },
  {
    name: "normal",
    text: "일반"
  },
  {
    name: "ground",
    text: "땅"
  },
  {
    name: "electric",
    text: "전기"
  },
  {
    name: "fairy",
    text: "요정"
  },
  {
    name: "fighting",
    text: "격투"
  },
  {
    name: "psyschic",
    text: "유령"
  },
  {
    name: "rock",
    text: "돌"
  },
  {
    name: "ice",
    text: "얼음"
  },
  {
    name: "dragon",
    text: "용"
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding:1rem;
  width: 768px;
  margin:0 auto;
  background: ;
  @media screen and (max-width:768px){
      width: 100%
      overflow-x:auto
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }

  ${(props: CategoryProps) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `};
`;

type CategoriesProps = {
  category: string;
  onSelect: (category: any) => void;
};

type CategoryProps = {
  key: string;
  active: boolean;
  onClick: () => void;
};

const Categories = ({ category, onSelect }: CategoriesProps) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
