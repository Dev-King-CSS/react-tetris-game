import styled, { StyledComponent } from "styled-components"

export const StyledTetrisWrapper: StyledComponent<
  "div",
  any,
  {},
  never
> = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
`

export const StyledTetris: StyledComponent<
  "div",
  any,
  {},
  never
> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
`
