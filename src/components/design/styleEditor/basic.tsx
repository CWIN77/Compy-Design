import { useState, useEffect, SyntheticEvent } from 'react'
import styled from "styled-components"
import { IColor } from "../../../types/design"
import ColorPicker from '../../common/colorPicker'
import SVG_eye from "../../../svg/eye.svg"
import SVG_eye_crossed from "../../../svg/eye_crossed.svg"

export default function Basic() {
  const [bgColor, setBgColor] = useState<IColor>({ r: 0, g: 0, b: 0, a: 1 })
  const [borderColor, setBorderColor] = useState<IColor>({ r: 0, g: 0, b: 0, a: 1 })
  const [bgColorDisable, setBgColorDisable] = useState(false)
  const [borderColorDisable, setBorderColorDisable] = useState(false)
  const eyeBtnProps = { onClick: () => setBgColorDisable(!bgColorDisable), fill: "#363636", width: 20, height: 20, style: { padding: 4, cursor: "pointer" } }

  return (
    <Container>
      <Topic>Basic</Topic>
      <SizeGroup1 disable={String(bgColorDisable)}>
        <div style={{ display: "flex" }}>
          <h4 title="background-color">Bg Color</h4>
          <ColorPicker color={bgColor} setColor={setBgColor} disable={bgColorDisable} />
        </div>
        {
          bgColorDisable ?
            <SVG_eye_crossed {...eyeBtnProps} />
            : <SVG_eye {...eyeBtnProps} />
        }
      </SizeGroup1>
      <SizeGroup2>
        <BorderWrapper>
          <h4>Border</h4>
          <input type={"text"} />
          <select>
            <option value="solid">Solid</option>
            <option value="none">None</option>
            <option value="dotted">Dotted</option>
            <option value="inset">Inset</option>
            <option value="dashed">Dashed</option>
            <option value="double">Double</option>
            <option value="groove">Groove</option>
            <option value="outset">Outset</option>
          </select>
        </BorderWrapper>
        <span>
          <ColorPicker color={borderColor} setColor={setBorderColor} disable={borderColorDisable} />
        </span>
      </SizeGroup2>
    </Container>
  )
}

const Container = styled.section`
  width:calc(100% - 40px);
  display:flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(54,54,54,0.1);
  padding: 0px 20px;
  padding-bottom: 28px;
`
const Topic = styled.h2`
  margin-top: 28px;
  margin-bottom: 20px;
`
const SizeGroup1 = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:22px;
  margin: 6px -8px;
  padding: 6px 8px;
  &:hover{
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.05);
  }
  h4{
    width:60px;
    opacity: 0.7;
    margin-right: 4px;
    padding: 4px;
  }
  select{
    width:60px;
    padding: 4px 0px;
    margin: -4px 0px;
  }
`
const SizeGroup2 = styled.div`
  display:flex;
  flex-direction: column;
  margin: 6px -8px;
  padding: 6px 8px;
  &:hover{
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.05);
  }
  span{
    display:flex;
    align-items: center;
    margin-left: 72px;
  }
`
const BorderWrapper = styled.div`
  margin-bottom: 10px;
  display:flex;
  h4{
    width:60px;
    opacity: 0.7;
    margin-right: 4px;
    padding: 4px;
  }
  input{
    width:calc((100% - 68px) / 2);
    margin-right: 10px;
  }
  select{
    width:calc((100% - 68px) / 2);
    padding: 4px 0px;
    margin: -4px 0px;
    margin-right: 10px;
  }
`