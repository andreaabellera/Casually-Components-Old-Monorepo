import { mergeProps } from "solid-js"

export default function Button(props) {
  const merged = mergeProps( { text: "Button" }, props )

  return <button>{merged.text}</button>
}