/* eslint-disable react/prop-types */
export default function GetStartedList(props) {
  return (
    <li className="mt-6">
      <span className="font-medium text-light text-white">
        {props.title}:
      </span>
      <br />
      <p className="font-light text-slate-200">{props.body}</p>
    </li>
  );
}
