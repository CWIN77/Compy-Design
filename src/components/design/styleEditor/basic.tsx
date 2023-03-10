import { useState } from 'react'
import styled from "styled-components"
import { IColor } from "../../../types/design"
import ColorPicker from '../../common/colorPicker'
import SVG_eye from "../../../svg/eye.svg"
import SVG_eye_crossed from "../../../svg/eye_crossed.svg"

export default function Basic() {
  const [bgColor, setBgColor] = useState<IColor>({ r: 0, g: 0, b: 0, a: 1 })
  const [borderColor, setBorderColor] = useState<IColor>({ r: 0, g: 0, b: 0, a: 1 })
  const [shadowColor, setShadowColor] = useState<IColor>({ r: 0, g: 0, b: 0, a: 1 })
  const [bgColorDisable, setBgColorDisable] = useState(false)
  const [borderSize, setBorderSize] = useState("0px")
  const eyeBtnProps = { onClick: () => setBgColorDisable(!bgColorDisable), fill: "#363636", width: 20, height: 20, style: { padding: 4, cursor: "pointer" } }
  const [radius, setRadius] = useState("0px")
  const [shadow, setShadow] = useState({ x: "0", y: "0", blur: "0" })
  const [borderStyle, setBorderStyle] = useState("solid")
  
  const shadowInputProps = (value: "x" | "y" | "blur") => ({
    onChange: (({ target }: { target: HTMLInputElement }) => setShadow({ ...shadow, [value]: target.value })),
    value: shadow[value],
    type: "text"
  })

  return (
    <Container>
      <Topic>Basic</Topic>
      <SizeGroup1 disable={String(bgColorDisable)}>
        <h4 title="background-color">Bg Color</h4>
        <span>
          <ColorPicker color={bgColor} setColor={setBgColor} disable={bgColorDisable} />
          {
            bgColorDisable ?
              <SVG_eye_crossed {...eyeBtnProps} />
              : <SVG_eye {...eyeBtnProps} />
          }
        </span>
      </SizeGroup1>
      <SizeGroup2>
        <BorderWrapper>
          <h4 title="border">Border</h4>
          <input value={borderSize} onChange={e => setBorderSize(e.target.value)} type={"text"} />
          <select onChange={e => setBorderStyle(e.target.value)} value={borderStyle}>
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
          <ColorPicker color={borderColor} setColor={setBorderColor} disable={false} />
        </span>
      </SizeGroup2>
      <SizeGroup3>
        <h4>Radius</h4>
        <input value={radius} onChange={e => setRadius(e.target.value)} type="text" />
      </SizeGroup3>
      <SizeGroup4>
        <ShadowWrapper>
          <h4 title="box-shadow">Shadow</h4>
          <div>
            <h4 title="x">X</h4>
            <input {...shadowInputProps("x")} />
          </div>
          <div>
            <h4 title="y">Y</h4>
            <input {...shadowInputProps("y")} />
          </div>
          <div>
            <h4 title="blur">B</h4>
            <input {...shadowInputProps("blur")} />
          </div>
        </ShadowWrapper>
        <span>
          <ColorPicker color={shadowColor} setColor={setShadowColor} disable={false} />
        </span>
      </SizeGroup4>
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
  height:24px;
  margin: 12px -8px;
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
  span{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:calc(100% - 72px);
  }
`
const SizeGroup2 = styled.div`
  display:flex;
  flex-direction: column;
  margin: 12px -8px;
  padding: 6px 8px;
  &:hover{
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.05);
  }
  span{
    display:flex;
    align-items: center;
    margin-left: 74px;
  }
`
const BorderWrapper = styled.div`
  margin-bottom: 12px;
  display:flex;
  h4{
    width:60px;
    opacity: 0.7;
    margin-right: 4px;
    padding: 4px;
  }
  input{
    width:calc((100% - 96px) / 2);
    margin-right: 10px;
  }
  select{
    width:calc((100% - 96px) / 2);
    padding: 4px 0px;
    margin: -4px 0px;
    margin-right: 10px;
  }
`
const SizeGroup3 = styled.div`
  display:flex;
  align-items: center;
  margin: 12px -8px;
  padding: 6px 8px;
  height:24px;
  &:hover{
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.05);
  }
  h4{
    width:60px;
    opacity: 0.7;
    margin-right: 4px;
    padding: 4px;
  }
  input{
    width:calc(100% - 96px);
  }
`
const SizeGroup4 = styled.div`
  display:flex;
  flex-direction: column;
  margin: 12px -8px;
  padding: 6px 8px;
  &:hover{
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.05);
  }
  span{
    display:flex;
    align-items: center;
    margin-left: 74px;
  }
`
const ShadowWrapper = styled.div`
  margin-bottom: 12px;
  display:flex;
  align-items: flex-start;
  h4{
    width:60px;
    opacity: 0.7;
    margin-right: 4px;
    padding: 4px;
  }
  div{
    display:flex;
    width:calc((100% - 72px) / 3);
    h4{
      width:auto;
      margin-right: 6px;
    }
  }
`